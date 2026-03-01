import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import './ActionButton.css'

export type ActionButtonSize = 'sm' | 'md' | 'lg'
export type ActionButtonTheme = 'primary' | 'secondary'

type ActionButtonBaseProps = {
  text: string
  size?: ActionButtonSize
  theme?: ActionButtonTheme
  className?: string
}

type ActionButtonButtonProps = ActionButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never
    href?: never
  }

type ActionButtonLinkProps = ActionButtonBaseProps &
  Omit<LinkProps, 'to' | 'className' | 'children'> & {
    to: string
    href?: never
  }

type ActionButtonAnchorProps = ActionButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    to?: never
  }

type ActionButtonProps = ActionButtonButtonProps | ActionButtonLinkProps | ActionButtonAnchorProps

function ActionButton({
  text,
  size = 'md',
  theme = 'primary',
  className = '',
  ...rest
}: ActionButtonProps) {
  const buttonClass = ['action-button', `action-button--${size}`, `action-button--${theme}`, className]
    .filter(Boolean)
    .join(' ')

  if ('to' in rest && rest.to) {
    const { to, ...linkProps } = rest

    return (
      <Link to={to} className={buttonClass} {...linkProps}>
        {text}
      </Link>
    )
  }

  if ('href' in rest && rest.href) {
    const { href, ...anchorProps } = rest

    return (
      <a href={href} className={buttonClass} {...anchorProps}>
        {text}
      </a>
    )
  }

  const { type = 'button', ...buttonProps } = rest as ActionButtonButtonProps

  return (
    <button type={type} className={buttonClass} {...buttonProps}>
      {text}
    </button>
  )
}

export default ActionButton
