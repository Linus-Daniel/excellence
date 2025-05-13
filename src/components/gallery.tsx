'use client'

import { motion } from 'framer-motion'
import { ImagePlus, MapPin, Users, BookOpen, Award, Smile } from 'lucide-react'
import { Button } from './ui/button'
import { useState } from 'react'

interface Image {
  src:string;
  alt:string;
  category:string;
  description:string
}

const galleryImages:Image[] = [
  { 
    src: "/images/class.avif", 
    alt: "Modern classroom", 
    category: "Learning Spaces",
    description: "Our technology-enhanced classrooms designed for collaborative learning"
  },
  { 
    src: "/images/lab.jpg", 
    alt: "Science laboratory", 
    category: "Facilities",
    description: "State-of-the-art science labs for hands-on experimentation"
  },
  { 
    src: "/images/sports.jpg", 
    alt: "Students playing sports", 
    category: "Athletics",
    description: "Championship-winning sports programs and fitness education"
  },
  { 
    src: "/images/library.webp", 
    alt: "School library", 
    category: "Resources",
    description: "Award-winning library with over 50,000 physical and digital resources"
  },
  { 
    src: "/images/art.jpg", 
    alt: "Art class", 
    category: "Arts",
    description: "Creative arts programs nurturing the next generation of artists"
  },
  { 
    src: "/images/graduation.jpg", 
    alt: "Graduation ceremony", 
    category: "Achievements",
    description: "100% university acceptance rate for our graduating classes"
  },

]

const stats = [
  { value: "25+", label: "Advanced Courses", icon: BookOpen },
  { value: "98%", label: "University Acceptance", icon: Award },
  { value: "40+", label: "Student Clubs", icon: Users },
  { value: "15:1", label: "Student-Teacher Ratio", icon: Smile },
  { value: "10", label: "Acres Campus", icon: MapPin }
]


export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)

  const categories = ["All", ...new Set(galleryImages.map(img => img.category))]
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <section className="py-24 bg-gradient-to-b from-[#f9f5f0] to-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#5a1a65] to-[#8d3b9b]">
            Experience Excellence Academy
          </h2>
          <p className="text-xl text-[#5a1a65]/80 max-w-3xl mx-auto">
            Discover our world-class facilities, vibrant community, and transformative learning environment
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center border border-[#e8dfca]"
            >
              <div className="flex justify-center mb-3">
                <stat.icon className="h-8 w-8 text-[#8d3b9b]" />
              </div>
              <h3 className="text-3xl font-bold text-[#5a1a65] mb-1">{stat.value}</h3>
              <p className="text-sm text-[#5a1a65]/80">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 ${
                selectedCategory === category 
                  ? 'bg-[#8d3b9b] text-white' 
                  : 'text-[#5a1a65] border-[#8d3b9b] hover:bg-[#8d3b9b]/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg bg-white"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-white bg-[#8d3b9b] rounded-full">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{image.alt}</h3>
                  <p className="text-white/90 text-sm">{image.description}</p>
                  <div className="flex justify-center mt-4">
                    <ImagePlus className="h-6 w-6 text-white bg-[#8d3b9b] p-1 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#5a1a65] mb-6">
            Ready to see our campus in person?
          </h3>
          <Button className="bg-[#8d3b9b] hover:bg-[#712779] text-white px-8 py-6 text-lg rounded-full shadow-lg">
            Schedule a Campus Tour
          </Button>
        </motion.div>

        {/* Image Modal (would need implementation) */}
        {/* {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#e8dfca]"
              >
                Close
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-white text-center">
                <h3 className="text-xl font-bold">{selectedImage.alt}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </section>
  )
}