const baseUrl = 'https://www.mathieu-gaucher.fr'

export const defaultMetadata = {
  title: {
    default: "Mathieu Gaucher - Développeur Web Freelance",
    template: "%s | Mathieu Gaucher"
  },
  description: "Développeur web freelance spécialisé dans la création de sites web modernes et performants. Expert Next.js, React et WordPress.",
  keywords: ["développeur web", "freelance", "Next.js", "React", "WordPress", "création site web"],
  metadataBase: new URL(baseUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  verification: {
    google: 'A_REMPLACER_PAR_VOTRE_CODE_VERIFICATION',
  },
  alternates: {
    canonical: baseUrl
  }
}
