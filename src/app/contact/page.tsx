// app/contact/page.tsx
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Email Us</h3>
              <p className="text-muted-foreground">info@school.edu.ng</p>
              <p className="text-muted-foreground">admissions@school.edu.ng</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Call Us</h3>
              <p className="text-muted-foreground">+234 812 345 6789</p>
              <p className="text-muted-foreground">+234 907 654 3210</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Visit Us</h3>
              <p className="text-muted-foreground">15 Education Road</p>
              <p className="text-muted-foreground">Ikeja, Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Hours Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Our Location</h2>
              <div className="bg-secondary h-64 rounded-lg overflow-hidden">
                {/* Replace with actual map embed */}
                <div className="w-full h-full flex items-center justify-center text-primary">
                  <MapPin className="h-12 w-12" />
                  <span className="ml-2">Map would display here</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">School Hours</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Regular School Days</h3>
                    <p className="text-muted-foreground">7:30 AM - 2:30 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Office Hours</h3>
                    <p className="text-muted-foreground">7:00 AM - 4:00 PM (Mon-Fri)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Visitation Hours</h3>
                    <p className="text-muted-foreground">9:00 AM - 12:00 PM (By appointment)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Send Us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject of your message" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea id="message" rows={5} placeholder="Your message here..." />
              </div>

              <div className="text-center">
                <Button className="bg-primary hover:bg-primary-dark">
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Departments Contact Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Contact Departments</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Admissions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">admissions@school.edu.ng</p>
                <p className="text-muted-foreground">+234 812 345 6789</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Academics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">academics@school.edu.ng</p>
                <p className="text-muted-foreground">+234 812 345 6790</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Bursary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">accounts@school.edu.ng</p>
                <p className="text-muted-foreground">+234 812 345 6791</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}