import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RugbyStat',
  description: 'A platform for rugby statistics.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
