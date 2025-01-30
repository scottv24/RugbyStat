import NextImage from 'next/image'

export default function Image({
    lightSrc,
    darkSrc,
    defaultSrc,
    alt,
    width,
    height,
    className,
}: {
    lightSrc?: string
    darkSrc?: string
    defaultSrc: string
    alt: string
    width: number
    height: number
    className?: string
}) {
    if (!lightSrc) lightSrc = defaultSrc
    if (!darkSrc) darkSrc = defaultSrc
    return (
        <>
            <NextImage
                src={lightSrc}
                alt={alt}
                width={width}
                height={height}
                className={`${className ? className : ''} dark:hidden`}
            />
            <NextImage
                src={darkSrc}
                alt={alt}
                width={width}
                height={height}
                className={`${className ? className : ''} dark:block hidden`}
            />
        </>
    )
}
