import { ReactNode } from 'react'

export default function Card({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <div
            className={`${className ? className : ''} w-full bg-background rounded-xl sm:p-6 p-2 shadow-md overflow-x-auto`}
        >
            {children}
        </div>
    )
}
