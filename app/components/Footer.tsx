'use client'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="text-sm">
          {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
        </p>
        
        <div className="flex gap-4">
          {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
            <a
              key={social}
              href="#"
              className="cursor-pointer"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
