'use client';

import { useRef, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import emailjs from '@emailjs/browser'
import styles from './page.module.css'

const serviceTypes = [
  { value: 'site-vitrine', label: 'Site Vitrine' },
  { value: 'site-ecommerce', label: 'Site E-commerce' },
  { value: 'site-sur-mesure', label: 'Site Sur Mesure' },
  { value: 'autre', label: 'Autre' }
]

export default function Contact() {
  return (
    <Suspense fallback={<div className={styles.loading}>Chargement...</div>}>
      <ContactForm />
    </Suspense>
  )
}

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)
  const searchParams = useSearchParams()
  const selectedService = searchParams.get('service')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    setIsSubmitting(true)
    setStatus(null)

    try {
      // Pas de message d'envoi en cours pour garder l'interface simple

      const formData = new FormData(formRef.current)
      const params = {
        name: formData.get('name'),
        email: formData.get('email'),
        service: formData.get('service'),
        message: formData.get('message')
      }

      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
          !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
          !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS configuration missing')
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        params,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      setStatus({
        type: 'success',
        message: 'Message envoyé ! Je vous recontacte rapidement.'
      })
      formRef.current.reset()
    } catch (error) {
      console.error('Erreur EmailJS:', error)
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contactez-moi</h1>
      <p className={styles.subtitle}>
        Discutons de votre projet et voyons comment je peux vous aider à le réaliser.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={styles.input}
            placeholder="Votre nom"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={styles.input}
            placeholder="votre@email.com"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="service" className={styles.label}>Type de demande</label>
          <select
            id="service"
            name="service"
            required
            className={styles.select}
            defaultValue={selectedService || ''}
          >
            <option value="" disabled>Sélectionnez un type de projet</option>
            {serviceTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            required
            className={styles.textarea}
            placeholder="Décrivez votre projet..."
          />
        </div>

        <button
          type="submit"
          className={styles.button}
          disabled={isSubmitting}
        >
          Envoyer
        </button>

        {status && (
          <p className={status.type === 'success' ? styles.success : styles.error}>
            {status.message}
          </p>
        )}
      </form>
    </div>
  )
}
