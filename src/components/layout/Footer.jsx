// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

//     const socialLinks = [
//     { label: 'GitHub',   href: 'https://github.com/athishdnm'  },
//     { label: 'LinkedIn', href: 'https://www.linkedin.com/in/athish-krishna/' },
//     { label: 'Email',    href: 'mailto:athish.krishna90@outlook.com'            },
//   ]

  return (
    <footer className="bg-gray-900 text-white">

      {/* Main Footer Content */}

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-sm">
            © {currentYear} Athish Krishna. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Built with React + Tailwind CSS
          </p>
          {/* <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-black text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div> */}
        </div>
      </div>

    </footer>
  )
}

export default Footer