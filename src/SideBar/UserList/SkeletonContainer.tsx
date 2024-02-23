import React from 'react'

export function Box({ children }: React.PropsWithChildren<unknown>) {
  return (
    <div
      style={{
        display: 'block',
        lineHeight: 3,
      }}
    >
      {children}
    </div>
  )
}
