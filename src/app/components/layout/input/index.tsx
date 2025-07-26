'use client'

import React from 'react'

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      onFocus={(e) => {
        props.onFocus?.(e)

        const target = e.currentTarget

        const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
        if (!isMobile) {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

      }}
    />
  )
}
