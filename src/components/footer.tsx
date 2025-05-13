import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#333] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#e8dfca]">Excellence Int'l Academy</h3>
            <p className="text-sm text-white/80">
              Providing quality education since 1995. Shaping future leaders through academic excellence and character development.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-white/80 hover:text-[#e8dfca] transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="text-sm text-white/80 hover:text-[#e8dfca] transition-colors">Academics</Link></li>
              <li><Link href="/admissions" className="text-sm text-white/80 hover:text-[#e8dfca] transition-colors">Admissions</Link></li>
              <li><Link href="/contact" className="text-sm text-white/80 hover:text-[#e8dfca] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Academics</h4>
            <ul className="space-y-2">
              <li><Link href="/curriculum" className="text-sm text-white/80 hover:text-[#e8dfca] transition-colors">Curriculum</Link></li>
              <li><Link href="/facilities" className="text-sm text-white/80 hover:text-[#e8dfca] transition-colors">Facilities</Link></li>
              <li><Link href="/results" className="text-sm text-white/80 hover:text-[#e8dfca] transition-colors">Exam Results</Link></li>
              <li><Link href="/alumni" className="text-sm text-white/80 hover:text-[#e8dfca] transition-colors">Alumni</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <Link href="#" className="text-white/80 hover:text-[#e8dfca] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-[#e8dfca] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-[#e8dfca] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-[#e8dfca] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-sm text-white/80">
              Subscribe to our newsletter for updates
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Greenfield Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}