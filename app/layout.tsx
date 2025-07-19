import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import ParticlesBackground from '../app/components/ParticlesBackground';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rajitha - Portfolio',
  description: 'Python Developer & ERP/Next Consultant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ position: 'relative', minHeight: '100vh', zIndex: 2 }}>
          {/* <ParticlesBackground /> */}
          <div style={{ position: 'relative' }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}