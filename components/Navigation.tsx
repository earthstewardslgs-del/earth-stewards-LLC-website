'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-earth-50/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex flex-col items-center">
              <img
                src="/images/logo.png"
                alt="Earth Stewards LLC Logo"
                className="w-16 h-16 transition-transform group-hover:scale-110"
              />
              <div className="text-center mt-1">
                <div className="font-display font-semibold text-sm text-earth-900 leading-tight">
                  Earth Stewards
                </div>
                <div className="text-xs text-moss-700 -mt-0.5">LLC</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-earth-800 hover:text-moss-700 font-medium transition-colors rounded-lg hover:bg-moss-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.facebook.com/earthstewardsllc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-2 text-earth-800 hover:text-moss-700 transition-colors rounded-lg hover:bg-moss-50"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#schedule"
              className="ml-4 px-6 py-3 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all hover:shadow-lg"
            >
              Discuss Your Project
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-earth-900 hover:bg-moss-50 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-earth-50 border-t border-earth-200 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-earth-800 hover:text-moss-700 hover:bg-moss-50 rounded-lg font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#schedule"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-6 py-3 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all text-center"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
