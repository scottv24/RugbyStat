import { ReactNode } from 'react'

export default function Card({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`${className} w-full bg-background rounded-xl p-6`}>
      {children}
    </div>
  )
}
