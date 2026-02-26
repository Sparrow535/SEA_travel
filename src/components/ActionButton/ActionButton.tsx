import type { ButtonHTMLAttributes } from 'react'
import './ActionButton.css'

export type ActionButtonSize = 'sm' | 'md' | 'lg'
export type ActionButtonTheme = 'primary' | 'secondary'

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
  size?: ActionButtonSize
  theme?: ActionButtonTheme
}

function ActionButton({
  text,
  size = 'md',
  theme = 'primary',
  className = '',
  type = 'button',
  ...rest
}: ActionButtonProps) {
  const buttonClass = ['action-button', `action-button--${size}`, `action-button--${theme}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={buttonClass} {...rest}>
      {text}
    </button>
  )
}

export default ActionButton
