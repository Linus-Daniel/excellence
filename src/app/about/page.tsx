// app/about/page.tsx
import { History, Trophy, School, Users } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  const stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "98%", label: "WAEC Pass Rate" },
    { value: "1000+", label: "Graduates" },
    { value: "1:15", label: "Teacher-Student Ratio" }
  ]

  const milestones = [
    { year: "1995", event: "School founded with 50 students" },
    { year: "2002", event: "First set of WAEC graduates" },
    { year: "2010", event: "New campus construction completed" },
    { year: "2018", event: "STEM Center established" },
    { year: "2022", event: "Named among top 10 schools in Nigeria" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our School</h1>
          <p className="text-xl max-w-2xl mx-auto">
            A legacy of academic excellence and character development
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Story</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-muted-foreground mb-4">
                  Founded in 1995, our school has grown from humble beginnings to become one of the most 
                  respected secondary institutions in Nigeria. We combine academic rigor with character 
                  development to prepare students for success in university and beyond.
                </p>
                <p className="text-muted-foreground">
                  Our mission is to provide quality education that develops the whole child - intellectually, 
                  socially, and morally. We believe in nurturing each student's unique talents while 
                  instilling strong values and leadership skills.
                </p>
              </div>
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground mb-4">
                  To be the leading institution for secondary education in Nigeria, recognized for academic 
                  excellence and producing future leaders.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide a stimulating learning environment that empowers students to achieve their 
                  full potential and become responsible global citizens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">By The Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl text-primary">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our History</h2>
            
            <div className="relative">
              <div className="absolute left-4 h-full w-0.5 bg-primary/20 md:left-1/2 md:-ml-0.5" />
              
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative mb-8 flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="inline-block rounded-full bg-primary p-2 text-secondary">
                      <History className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mt-2">{milestone.year}</h3>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-4" />
                <CardTitle className="text-center">Dr. Adeola Johnson</CardTitle>
                <p className="text-sm text-muted-foreground text-center">Principal</p>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                25+ years in education leadership
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-4" />
                <CardTitle className="text-center">Mr. Femi Balogun</CardTitle>
                <p className="text-sm text-muted-foreground text-center">Vice Principal</p>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Curriculum development specialist
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-4" />
                <CardTitle className="text-center">Mrs. Chioma Okeke</CardTitle>
                <p className="text-sm text-muted-foreground text-center">Head of Academics</p>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                STEM education advocate
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}