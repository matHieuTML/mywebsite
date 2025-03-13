'use client'

import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div 
        className="container mx-auto px-4 py-20"
      >
        <h1>Créons ensemble Votre site web</h1>
      </div>
      <Footer />
    </main>
  )
}
