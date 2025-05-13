// app/academics/page.tsx
import { BookOpen, GraduationCap, Microscope, Paintbrush, Calculator, Globe } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function AcademicsPage() {
  const programs = [
    {
      icon: <BookOpen className="h-6 text-primary-default w-6" />,
      title: "Junior Secondary",
      description: "Grades 7-9 (JSS1-JSS3)",
      subjects: ["English", "Mathematics", "Basic Science", "Social Studies", "French", "ICT"]
    },
    {
      icon: <GraduationCap className="h-6 text-primary-default w-6" />,
      title: "Senior Secondary",
      description: "Grades 10-12 (SS1-SS3)",
      subjects: ["English", "Mathematics", "Biology", "Chemistry", "Physics", "Economics", "Geography"]
    }
  ]

  const departments = [
    {
      icon: <Microscope className="h-6 text-primary-default text-p w-6" />,
      name: "Sciences",
      description: "Biology, Chemistry, Physics, Mathematics"
    },
    {
      icon: <Globe className="h-6 text-primary-default w-6" />,
      name: "Humanities",
      description: "English, Literature, History, Geography"
    },
    {
      icon: <Calculator className="h-6 text-primary-default  w-6" />,
      name: "Commercial",
      description: "Economics, Accounting, Business Studies"
    },
    {
      icon: <Paintbrush className="h-6 text-primary-default w-6" />,
      name: "Arts",
      description: "Fine Arts, Music, Drama"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-dark text-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl  font-bold mb-6">Academic Programs</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Excellence in education through our comprehensive curriculum
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold  text-primary-default mb-12 text-center">Our Academic Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-full bg-secondary text-primary">
                    {program.icon}
                  </div>
                  <div>
                    <CardTitle className='text-primary-default'>{program.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{program.description}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">Core Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, i) => (
                      <span key={i} className="text-sm bg-secondary px-3 py-1 rounded-full">
                        {subject}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-white">
        <div className="container  mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-default mb-12 text-center">Academic Departments</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center mx-auto mb-4">
                    {dept.icon}
                  </div>
                  <CardTitle className='text-primary-default'>{dept.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-default mb-8 text-center">Our Curriculum</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary-default mb-3">National Curriculum</h3>
                <p className="text-muted-foreground">
                  Our school follows the Nigerian national curriculum while enhancing it with 
                  international best practices. We prepare students for both WAEC and NECO examinations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-default mb-3">Special Programs</h3>
                <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                  <li>STEM Education with modern laboratory facilities</li>
                  <li>Entrepreneurship training program</li>
                  <li>Leadership development workshops</li>
                  <li>ICT integration across all subjects</li>
                  <li>Debate and public speaking club</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}