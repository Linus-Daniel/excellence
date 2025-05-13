'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-[#712779] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Join the Excellence Academy Family?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Admissions are open for the 2023/2024 academic session. Schedule a visit or apply today.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Button size="lg" className="bg-[#e8dfca] hover:bg-[#d4c9b1] text-[#1a4d2e]">
              Apply Now
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              Schedule Visit
            </Button>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <Mail className="h-6 w-6 mt-1 text-[#e8dfca]" />
              <div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-sm text-white/80">admissions@greenfield.edu.ng</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <Phone className="h-6 w-6 mt-1 text-[#e8dfca]" />
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-sm text-white/80">+234 812 345 6789</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <MapPin className="h-6 w-6 mt-1 text-[#e8dfca]" />
              <div>
                <h3 className="font-semibold mb-1">Visit Us</h3>
                <p className="text-sm text-white/80">15 Education Road, Ikeja, Lagos</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}