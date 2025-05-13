// app/admissions/page.tsx
import { Button } from '@/components/ui/button'
import { Calendar, BookOpen, Clock, FileText } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default function AdmissionsPage() {
  const admissionSteps = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Submit Application",
      description: "Complete our online application form with required documents"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Entrance Exam",
      description: "Sit for our entrance assessment (for new students)"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Interview",
      description: "Participate in an interview with our admissions team"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Acceptance",
      description: "Receive admission letter and complete registration"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions Process</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Begin your journey to academic excellence at our prestigious institution
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">How to Apply</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our straightforward 4-step admission process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Admission Requirements</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Junior Secondary (JSS1)</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Completed application form</li>
                  <li>Primary School Leaving Certificate</li>
                  <li>Birth certificate</li>
                  <li>4 recent passport photographs</li>
                  <li>Entrance examination</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Senior Secondary (SS1)</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Completed application form</li>
                  <li>Junior WAEC/BECE certificate</li>
                  <li>Birth certificate</li>
                  <li>4 recent passport photographs</li>
                  <li>Entrance examination</li>
                </ul>
              </div>

              <div className="text-center mt-10">
                <Button className="bg-primary hover:bg-primary-dark">
                  Download Application Form
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Tuition & Fees</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Junior Secondary</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b pb-2">
                    <span>Tuition</span>
                    <span className="font-medium">₦250,000/term</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span>Registration Fee</span>
                    <span className="font-medium">₦50,000 (once)</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span>Uniform</span>
                    <span className="font-medium">₦35,000</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Senior Secondary</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b pb-2">
                    <span>Tuition</span>
                    <span className="font-medium">₦300,000/term</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span>Registration Fee</span>
                    <span className="font-medium">₦50,000 (once)</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span>Uniform</span>
                    <span className="font-medium">₦40,000</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              * Fees are subject to change. Payment plans available.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-secondary">
              Contact Bursary
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}