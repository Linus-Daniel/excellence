"use client"
import { notFound, useParams } from "next/navigation";
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  BookOpen, 
  Mail, 
  Phone, 
  Calendar, 
  User, 
  Bookmark,
  Shield,
  Home,
  Clock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Mock data
async function getStudent(id: string) {
  const students = {
    "JSS1-001": {
      id: "JSS1-001",
      name: "Adeola Musa",
      class: "JSS1",
      department: null,
      image: "/students/adeola.jpg",
      email: "adeola@school.edu.ng",
      phone: "+234 801 234 5678",
      admissionDate: "2023-09-01",
      gender: "Female",
      address: "12 Palm Street, Lagos",
      guardian: {
        name: "Mr. Musa Bello",
        relationship: "Father",
        phone: "+234 803 987 6543"
      },
      performance: {
        average: 78.5,
        position: "4th",
        remarks: "Excellent performance in Arts subjects"
      }
    },
    "SS2-015": {
      id: "SS2-015",
      name: "Chinedu Obi",
      class: "SS2",
      department: "Science",
      image: "/students/chinedu.jpg",
      email: "chinedu@school.edu.ng",
      phone: "+234 802 345 6789",
      admissionDate: "2022-09-01",
      gender: "Male",
      address: "45 Oak Avenue, Abuja",
      guardian: {
        name: "Mrs. Obi Ngozi",
        relationship: "Mother",
        phone: "+234 805 123 4567"
      },
      performance: {
        average: 85.2,
        position: "1st",
        remarks: "Top in Science subjects"
      }
    }
  }[id];

  if (!students) notFound();
  return students;
}

export default async function StudentProfile() {
  const params = useParams()
  const id = params.id as string
  const student = await getStudent(id);
  const isSenior = student.class.startsWith("SS");

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
          <AvatarImage src={student.image} />
          <AvatarFallback className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-white">
            {student.name.split(" ").map(n => n[0]).join("")}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{student.name}</h1>
              <p className="text-xl text-blue-600">Student ID: {student.id}</p>
            </div>
            <Badge className="text-sm px-3 py-1 bg-green-100 text-green-800">
              Active
            </Badge>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge className="flex items-center gap-1 bg-blue-100 text-blue-800">
              <User className="h-4 w-4" />
              {student.gender}
            </Badge>
            <Badge className="flex items-center gap-1 bg-purple-100 text-purple-800">
              <BookOpen className="h-4 w-4" />
              {student.class}
            </Badge>
            {isSenior && student.department && (
              <Badge className="flex items-center gap-1 bg-green-100 text-green-800">
                {student.department} Department
              </Badge>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="h-5 w-5 text-blue-500" />
              <a href={`mailto:${student.email}`} className="hover:underline">{student.email}</a>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="h-5 w-5 text-green-500" />
              <a href={`tel:${student.phone}`} className="hover:underline">{student.phone}</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Academic Performance */}
          <Card className="border-blue-100">
            <CardHeader className="bg-blue-50 rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <BookOpen className="h-5 w-5" />
                Academic Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-sm text-gray-600">Average Score</p>
                <p className="text-4xl font-bold text-blue-600">
                  {student.performance.average}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Class Position</p>
                <p className="text-4xl font-bold text-purple-600">
                  {student.performance.position}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Remarks</p>
                <p className="font-medium">{student.performance.remarks}</p>
              </div>
            </CardContent>
          </Card>

          {/* Guardian Information */}
          <Card className="border-green-100">
            <CardHeader className="bg-green-50 rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Shield className="h-5 w-5" />
                Guardian Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <p className="font-medium">{student.guardian.name}</p>
                <p className="text-sm text-gray-600">{student.guardian.relationship}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-500" />
                <a href={`tel:${student.guardian.phone}`} className="hover:underline">
                  {student.guardian.phone}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Student Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-purple-500" />
                Student Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Admission Date</p>
                <p className="font-medium">
                  {new Date(student.admissionDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="font-medium">{student.address}</p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-2">
            <Link 
              href={`/admin/students/${student.id}/edit`}
              className="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg transition-colors"
            >
              Edit Profile
            </Link>
            <Link 
              href={`/admin/students/${student.id}/result`}
              className="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg transition-colors"
            >
              View Result
            </Link>
            <button className="w-full py-2 px-4 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              Generate Report Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}