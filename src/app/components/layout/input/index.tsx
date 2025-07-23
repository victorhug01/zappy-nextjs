'use client'

import React from 'react'

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      onFocus={(e) => {
        props.onFocus?.(e)
        e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }}
    />
  )
}
