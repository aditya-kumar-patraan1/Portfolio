import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './client-layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aditya - Portfolio',
  description: 'DSA Enthusiatic and Full Stack Developer Portfolio',
  keywords: ' portfolio, Socket.io, WebRTC, full stack developer, React, Next.js',
  authors: [{ name: 'Aditya' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
