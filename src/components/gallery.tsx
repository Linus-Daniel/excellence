'use client'

import { motion } from 'framer-motion'
import { ImagePlus } from 'lucide-react'

const galleryImages = [
  { src: "/images/class.avif", alt: "Modern classroom" },
  { src: "/images/lab.jpg", alt: "Science laboratory" },
  { src: "/images/sports.jpg", alt: "Students playing sports" },
  { src: "/images/library.webp", alt: "School library" },
  { src: "/images/art.jpg", alt: "Art class" },
  { src: "/images/graduation.jpg", alt: "Graduation ceremony" },
]

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#712779]">Campus Life at Excellence Academy</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our vibrant campus and see what makes Excellence Academy special.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ImagePlus className="h-8 w-8 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}