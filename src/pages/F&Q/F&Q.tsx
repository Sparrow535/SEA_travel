import { useState } from 'react'
import './F&Q.css'
import Vect from '../../assets/F&Q/Vector 13.svg'

const faqItems = [
  {
    q: 'WHY SHOULD I CHOOSE SPIRITUAL ESCAPE ADVENTURE ?',
    a: 'We offer meaningful, small-group journeys focused on peace, nature, and authentic local connection.',
  },
  {
    q: 'CAN I BOOK A DAY OR TWO WITH YOU?',
    a: 'Yes. We offer short 1-2 day experiences based on your schedule and preferred location.',
  },
  {
    q: 'WHAT SERVICE DO YOU OFFER?',
    a: 'We provide guided spiritual tours, cultural stays, retreat planning, transport, and local support.',
  },
  {
    q: 'I NEED A LAST MINUTE TRIP. CAN YOU DO IT?',
    a: 'Yes, depending on availability. Contact us and we will suggest the best quick options.',
  },
  {
    q: 'DO YOU HAVE A MINIMUM SPEND?',
    a: 'No fixed minimum. Cost depends on group size, trip length, and selected services.',
  },
]


export default function FQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq-page">
          <img className="faq-page__vector" src={Vect} alt="" aria-hidden="true" />
      <h1 className="faq-page__title">FAQ</h1>

      <div className="faq-list">
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <article key={item.q} className={`faq-card ${isOpen ? 'is-open' : ''}`}>
              <button
                className="faq-card__head"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span className="faq-card__icon" aria-hidden="true">
                  {isOpen ? '↓' : '→'}
                </span>
              </button>

              {isOpen && item.a && (
                <div className="faq-card__body">
                  <p>{item.a}</p>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
