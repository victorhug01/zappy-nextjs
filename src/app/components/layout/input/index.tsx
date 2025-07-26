'use client'

import React from 'react'
import scrollIntoView from 'scroll-into-view-if-needed'

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      onFocus={(e) => {
        props.onFocus?.(e)

        const target = e.currentTarget

        scrollIntoView(target, {
          behavior: 'auto',
          block: 'center',
          scrollMode: 'always',
        })

      }}
    />
  )
}
