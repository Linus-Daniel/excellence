'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [show,setShow] = useState<boolean>(true)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(()=>{
    if(pathname.startsWith("/teacher") || pathname.startsWith("/admin"))
      setShow(false)
  })

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full ${show?"":"hidden"} z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#712779] py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#efe8d5] rounded-full flex items-center justify-center">
              <span className="text-[#712779] font-bold text-xl">EIA</span>
            </div>
            <span className={`text-xl font-bold ${scrolled ? 'text-white' : 'text-[#efe8d5]'}`}>
              Excellence Int'l Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? 'text-white hover:text-[#e8dfca]' : 'text-[#efe8d5] hover:text-[#1a4d2e]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant={scrolled ? 'secondary' : 'default'}>Apply Now</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-white' : 'text-[#712779]'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-white' : 'text-[#712779]'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 space-y-4 pb-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block text-sm font-medium transition-colors ${
                  scrolled ? 'text-white hover:text-[#e8dfca]' : 'text-[#efe8d5] hover:text-[#712779]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant={scrolled ? 'secondary' : 'default'} className="w-full">
              Apply Now
            </Button>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}