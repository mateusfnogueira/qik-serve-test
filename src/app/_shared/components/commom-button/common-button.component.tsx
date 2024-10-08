import React from 'react'

import style from './style.module.css'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({ children, onClick, disabled, type }: ButtonProps) => {
  return (
    <button className={style.common_button} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  )
}
