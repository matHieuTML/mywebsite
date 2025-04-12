import type { Metadata } from "next";
import { Space_Grotesk, Montserrat } from 'next/font/google'
import Script from 'next/script';
import "./globals.css";
import { defaultMetadata } from './config/metadata';
import Header from './components/Header'
import Footer from './components/Footer'


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
      <head>
        <Script strategy="afterInteractive" id="matomo-analytics">{`
          var _paq = window._paq = window._paq || [];
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="https://mathieugaucher.matomo.cloud/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src='https://cdn.matomo.cloud/mathieugaucher.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        `}</Script>
      </head>
      <body>
        <div className="layout-container">
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
