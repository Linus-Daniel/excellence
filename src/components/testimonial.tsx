'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { Button } from './ui/button'
import { useState } from 'react'

const testimonials = [
  {
    name: "Mr. Adebayo Ogunlesi",
    role: "Parent",
    content: "Excellence International Academy has transformed my child's approach to learning. The teachers are dedicated and the environment is nurturing.",
    avatar: "/avatars/parent1.jpg"
  },
  {
    name: "Chidinma Eze",
    role: "Alumni",
    content: "The education I received at Excellence International prepared me for university better than I could have imagined. I was ahead of my peers in both knowledge and critical thinking skills.",
    avatar: "/avatars/student1.jpg"
  },
  {
    name: "Dr. Fatima Bello",
    role: "Parent & Educator",
    content: "As an educator myself, I'm consistently impressed with the school's innovative curriculum and teaching methods. My children are not just learning - they're thriving.",
    avatar: "/avatars/parent2.jpg"
  },
  {
    name: "Oluwaseun Adeleke",
    role: "Current Student",
    content: "What I love most about Excellence International is how the teachers make every subject interesting. I actually look forward to going to school each day!",
    avatar: "/avatars/student2.jpg"
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0) // 0 for none, 1 for next, -1 for prev

  const nextTestimonial = () => {
    setDirection(1)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#f9f5f0] to-[#f5efe6]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#5a1a65] to-[#8d3b9b]">
            Voices of Excellence
          </h2>
          <p className="text-lg text-[#5a1a65]/80 max-w-2xl mx-auto">
            Hear from our community about the transformative Excellence International experience.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative"
          >
            <div className="bg-white p-10 rounded-2xl shadow-lg relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#e8dfca]/20 blur-xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#712779]/10 blur-xl" />
              
              <Quote className="absolute top-6 left-6 text-[#e8dfca] w-10 h-10" />
              <p className="text-xl leading-relaxed text-gray-800 mb-8 pl-12 pr-4">
                "{testimonials[current].content}"
              </p>
              <div className="flex items-center gap-6 pl-12">
                <Avatar className="w-14 h-14 border-2 border-[#e8dfca]">
                  <AvatarImage src={testimonials[current].avatar} className="object-cover" />
                  <AvatarFallback className="bg-[#e8dfca] text-[#712779] font-medium">
                    {testimonials[current].name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-lg text-[#5a1a65]">{testimonials[current].name}</h4>
                  <p className="text-sm text-[#8d3b9b] font-medium">{testimonials[current].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center gap-6 mt-12">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-[#8d3b9b] text-[#8d3b9b] hover:bg-[#8d3b9b] hover:text-white transition-colors duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1)
                    setCurrent(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index ? 'bg-[#8d3b9b] w-6' : 'bg-[#8d3b9b]/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-[#8d3b9b] text-[#8d3b9b] hover:bg-[#8d3b9b] hover:text-white transition-colors duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}