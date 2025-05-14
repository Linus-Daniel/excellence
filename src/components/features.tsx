'use client'

import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, Users, Award, Globe, Activity } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'

const features = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Comprehensive Curriculum",
    description: "Our curriculum meets national standards while incorporating international best practices."
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Qualified Teachers",
    description: "All our teachers are certified professionals with years of experience."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Small Class Sizes",
    description: "Maximum of 20 students per class for personalized attention."
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Academic Excellence",
    description: "Consistent top performances in WAEC and NECO examinations."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Perspective",
    description: "Programs that prepare students for global citizenship."
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: "Extracurricular Activities",
    description: "Sports, arts, and clubs to develop well-rounded individuals."
  }
]

export default function Features() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#712779]">Why Choose Excellence Academy?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide an environment where students can thrive academically, socially, and personally.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-[#712779] mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}