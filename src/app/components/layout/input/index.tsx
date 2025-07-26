'use client'

import React from 'react'

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      onFocus={(e) => {
        props.onFocus?.(e)

        const target = e.currentTarget

        const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

        const delay = isMobile ? 150 : 50

        setTimeout(() => {
          if (document.body.contains(target)) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        }, delay)
      }}
    />
  )
}
