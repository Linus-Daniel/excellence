'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Play, ArrowRight, BookOpen } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#5a1a65] to-[#8d3b9b] text-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('/pattern.svg')] bg-[length:300px] bg-repeat opacity-10"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#712779]/40 to-[#5a1a65]/90 z-10" />
      
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0,
            y: Math.random() * 100 - 50,
            x: Math.random() * 100 - 50
          }}
          animate={{ 
            opacity: [0, 0.4, 0],
            y: [0, Math.random() * 200 - 100],
            x: [0, Math.random() * 200 - 100]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          className={`absolute rounded-full ${i % 3 === 0 ? 'bg-[#e8dfca]' : 'bg-white'} ${
            i % 2 === 0 ? 'w-2 h-2' : 'w-1 h-1'
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 md:px-6 z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight"
          >
            Shaping <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative inline-block"
            >
              <span className="relative mb-10 z-10">Future Leaders</span>
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 left-0 w-full h-1 bg-[#e8dfca]/60 z-0"
                style={{ originX: 0 }}
              />
            </motion.span> Through{' '}
            <span className="text-[#e8dfca] bg-clip-text bg-gradient-to-r from-[#e8dfca] to-[#f5f0e1]">
              Quality Education
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Greenfield Academy provides a world-class secondary education that nurtures academic excellence, character development, and leadership skills.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="bg-[#e8dfca] hover:bg-[#d4c9b1] text-[#712779] font-semibold px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span>Apply Now</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-2 border-white/80 hover:border-white bg-transparent hover:bg-white/10 font-semibold px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" /> 
              <span>Watch Video</span>
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-white/90 hover:text-white hover:bg-white/5 font-medium px-6 py-6 rounded-lg transition-all duration-300 group"
            >
              <BookOpen className="mr-2 h-4 w-4" /> 
              <span>Learn More</span>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Animated floating elements */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-10 w-20 h-20 rounded-full bg-[#e8dfca]/10 blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -8, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/3 right-20 w-28 h-28 rounded-full bg-[#e8dfca]/15 blur-xl"
      />
      
      {/* Decorative academic icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-10 right-10 text-6xl opacity-30"
      >
        🎓
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute top-20 left-20 text-5xl opacity-30"
      >
        📚
      </motion.div>
    </section>
  )
}