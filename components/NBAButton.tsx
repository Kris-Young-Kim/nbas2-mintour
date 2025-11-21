'use client'

import { ReactNode } from 'react'

interface NBAButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  href?: string
  target?: string
}

export function NBAButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  href,
  target,
}: NBAButtonProps) {
  const baseClasses = 'nba-button font-bold rounded-lg relative overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-basketball-orange to-nba-red text-white shadow-lg hover:shadow-xl hover:shadow-basketball-orange/50',
    secondary: 'bg-gradient-to-r from-nba-blue to-nba-purple text-white shadow-lg hover:shadow-xl hover:shadow-nba-blue/50',
    outline: 'border-2 border-basketball-orange text-basketball-orange hover:bg-basketball-orange hover:text-white',
    ghost: 'text-basketball-orange hover:bg-basketball-orange/10',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}

