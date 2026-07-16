import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import ClientLayout from './client-layout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata = {
  title: 'Aditya Kumar — Full Stack Developer & DSA Enthusiast',
  description: 'Portfolio of Aditya Kumar — BCA student, University Topper, LeetCode Knight (1900+ rating), Full Stack Developer specializing in React, Node.js, and real-time applications.',
  keywords: 'Aditya Kumar, portfolio, full stack developer, DSA, LeetCode Knight, React, Next.js, Node.js, MongoDB, Socket.IO, WebRTC, Delhi',
  authors: [{ name: 'Aditya Kumar', url: 'https://github.com/aditya-kumar-patraan1' }],
  creator: 'Aditya Kumar',
  openGraph: {
    type: 'website',
    title: 'Aditya Kumar — Full Stack Developer & DSA Enthusiast',
    description: 'Portfolio of Aditya Kumar — BCA student, University Topper, LeetCode Knight, Full Stack Developer.',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Kumar — Full Stack Developer',
    description: 'Full Stack Developer & DSA Enthusiast | LeetCode Knight | University Topper',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#050816' },
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${outfit.variable}`}
        suppressHydrationWarning
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
