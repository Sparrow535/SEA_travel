import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react'
import './Contact.css'

type ContactFormState = {
  firstName: string
  secondName: string
  phone: string
  email: string
  message: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>

type ContactTouchedState = Record<keyof ContactFormState, boolean>

const initialFormState: ContactFormState = {
  firstName: '',
  secondName: '',
  phone: '',
  email: '',
  message: '',
}

const initialTouchedState: ContactTouchedState = {
  firstName: false,
  secondName: false,
  phone: false,
  email: false,
  message: false,
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateField(fieldName: keyof ContactFormState, formData: ContactFormState): string {
  const value = formData[fieldName].trim()

  switch (fieldName) {
    case 'firstName':
      if (!value) return 'First name is required.'
      if (value.length < 2) return 'First name must be at least 2 characters.'
      return ''
    case 'secondName':
      if (value && value.length < 2) return 'Second name must be at least 2 characters.'
      return ''
    case 'phone': {
      const digits = value.replace(/\D/g, '')
      if (!value) return 'Phone number is required.'
      if (digits.length < 7) return 'Enter a valid phone number.'
      return ''
    }
    case 'email':
      if (!value) return 'E-mail is required.'
      if (!emailPattern.test(value)) return 'Enter a valid e-mail address.'
      return ''
    case 'message':
      if (!value) return 'Message is required.'
      if (value.length < 20) return 'Message must be at least 20 characters.'
      return ''
    default:
      return ''
  }
}

function validateForm(formData: ContactFormState): ContactFormErrors {
  return {
    firstName: validateField('firstName', formData),
    secondName: validateField('secondName', formData),
    phone: validateField('phone', formData),
    email: validateField('email', formData),
    message: validateField('message', formData),
  }
}

function Contact() {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState)
  const [touched, setTouched] = useState<ContactTouchedState>(initialTouchedState)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    const fieldName = name as keyof ContactFormState

    setFormData((current) => {
      const nextFormData = { ...current, [fieldName]: value }

      if (touched[fieldName]) {
        setErrors((currentErrors) => ({
          ...currentErrors,
          [fieldName]: validateField(fieldName, nextFormData),
        }))
      }

      return nextFormData
    })
  }

  const handleBlur = (
    event: FocusEvent<HTMLInputElement> | FocusEvent<HTMLTextAreaElement>
  ) => {
    const fieldName = event.target.name as keyof ContactFormState

    setTouched((current) => ({ ...current, [fieldName]: true }))
    setErrors((currentErrors) => ({
      ...currentErrors,
      [fieldName]: validateField(fieldName, formData),
    }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateForm(formData)
    const hasErrors = Object.values(nextErrors).some(Boolean)

    setTouched({
      firstName: true,
      secondName: true,
      phone: true,
      email: true,
      message: true,
    })
    setErrors(nextErrors)

    if (hasErrors) {
      setSubmitStatus('error')
      setSubmitMessage('Please correct the highlighted fields and try again.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('Sending...')

    const fullName = [formData.firstName, formData.secondName].filter(Boolean).join(' ').trim()

    try {
      const response = await fetch('/send-mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: fullName || 'Website Visitor',
          firstName: formData.firstName,
          secondName: formData.secondName,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      })

      const result = (await response.json()) as { success?: boolean; message?: string }

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send your message right now.')
      }

      setSubmitStatus('success')
      setSubmitMessage('Your message has been sent successfully.')
      setFormData(initialFormState)
      setTouched(initialTouchedState)
      setErrors({})
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Something went wrong while sending the form.'
      setSubmitStatus('error')
      setSubmitMessage(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      <div className="contact__hero">
        <h1>Contact Us</h1>
      </div>

      <section className="contact__request" aria-labelledby="contact-request-title">
        <div className="contact__request-inner">
          <h2 id="contact-request-title">Send Request</h2>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <label
              className={`contact__field ${touched.firstName && errors.firstName ? 'contact__field--error' : ''}`}
            >
              <span>First Name</span>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={touched.firstName && Boolean(errors.firstName)}
                aria-describedby={errors.firstName ? 'contact-firstName-error' : undefined}
              />
              {touched.firstName && errors.firstName ? (
                <small id="contact-firstName-error" className="contact__error">
                  {errors.firstName}
                </small>
              ) : null}
            </label>

            <label
              className={`contact__field ${touched.secondName && errors.secondName ? 'contact__field--error' : ''}`}
            >
              <span>Second Name</span>
              <input
                type="text"
                name="secondName"
                placeholder="Second Name"
                value={formData.secondName}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={touched.secondName && Boolean(errors.secondName)}
                aria-describedby={errors.secondName ? 'contact-secondName-error' : undefined}
              />
              {touched.secondName && errors.secondName ? (
                <small id="contact-secondName-error" className="contact__error">
                  {errors.secondName}
                </small>
              ) : null}
            </label>

            <label
              className={`contact__field ${touched.phone && errors.phone ? 'contact__field--error' : ''}`}
            >
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                placeholder="Your Number"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={touched.phone && Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
              />
              {touched.phone && errors.phone ? (
                <small id="contact-phone-error" className="contact__error">
                  {errors.phone}
                </small>
              ) : null}
            </label>

            <label
              className={`contact__field ${touched.email && errors.email ? 'contact__field--error' : ''}`}
            >
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                placeholder="Your e-mail"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={touched.email && Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
              />
              {touched.email && errors.email ? (
                <small id="contact-email-error" className="contact__error">
                  {errors.email}
                </small>
              ) : null}
            </label>

            <label
              className={`contact__field contact__field--full ${
                touched.message && errors.message ? 'contact__field--error' : ''
              }`}
            >
              <span>Message</span>
              <textarea
                name="message"
                placeholder="Enter your message here"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={3}
                aria-invalid={touched.message && Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
              />
              {touched.message && errors.message ? (
                <small id="contact-message-error" className="contact__error">
                  {errors.message}
                </small>
              ) : null}
            </label>

            <div className="contact__actions">
              <button type="submit" className="contact__submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Get in touch'}
              </button>
            </div>

            {submitMessage ? (
              <p
                className={`contact__status ${
                  submitStatus === 'success'
                    ? 'contact__status--success'
                    : submitStatus === 'error'
                      ? 'contact__status--error'
                      : ''
                }`}
                role={submitStatus === 'error' ? 'alert' : 'status'}
              >
                {submitMessage}
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
