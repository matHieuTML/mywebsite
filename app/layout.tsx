import type { Metadata } from "next";
import { Space_Grotesk, Montserrat } from 'next/font/google'
import "./globals.css";
import { defaultMetadata } from './config/metadata';
import Header from './components/Header'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './components/PageTransition'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${montserrat.variable}`}>
      <body>
        <div className="layout-container">
          <Header />
          <main className="main-content">
            <AnimatePresence mode="wait">
              <PageTransition key={new Date().getTime()}>
                {children}
              </PageTransition>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
