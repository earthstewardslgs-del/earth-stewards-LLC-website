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
            <img
              src="/images/logo.png"
              alt="Earth Stewards LLC Logo"
              className="w-16 h-16 transition-transform group-hover:scale-110"
            />
            <div className="hidden sm:block">
              <div className="font-display font-semibold text-xl text-earth-900">
                Earth Stewards
              </div>
              <div className="text-xs text-moss-700 -mt-1">LLC</div>
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
              href="#schedule"
              className="ml-4 px-6 py-3 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all hover:shadow-lg"
            >
              Schedule Consultation
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
              Schedule Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
