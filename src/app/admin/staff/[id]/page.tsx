"use client"
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
  GraduationCap, 
  Mail, 
  Phone, 
  Calendar, 
  Bookmark, 
  Clock,
  UserCog,
  ShieldCheck,
  BadgeCheck
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { notFound, useParams } from "next/navigation";

// Mock data fetch (replace with real API)
async function getStaff(id: string) {
  const staff = {
    "STF-001": {
      id: "STF-001",
      name: "Mr. Adebayo Ogunlesi",
      role: "Senior Mathematics Teacher",
      type: "Academic",
      image: "/avatars/adebayo.jpg",
      email: "adebayo@school.edu.ng",
      phone: "+234 801 234 5678",
      joinedDate: "2023-01-15",
      qualifications: [
        { degree: "M.Ed Mathematics", institution: "University of Lagos", year: 2020 },
        { degree: "B.Sc Education", institution: "Obafemi Awolowo University", year: 2016 }
      ],
      subjects: ["Mathematics", "Further Mathematics"],
      classes: ["SS2A", "SS3B"],
      yearsOfService: 8,
      status: "Active",
      nextOfKin: "Mrs. Folake Ogunlesi (+234 803 987 6543)"
    },
    "STF-002": {
      id: "STF-002",
      name: "Mrs. Chioma Eze",
      role: "Librarian",
      type: "Non-Academic",
      image: "/avatars/chika.jpg",
      email: "chioma@school.edu.ng",
      phone: "+234 802 345 6789",
      joinedDate: "2022-08-10",
      qualifications: [
        { degree: "MLS Library Science", institution: "University of Ibadan", year: 2019 }
      ],
      status: "Active",
      yearsOfService: 5,
      nextOfKin: "Mr. Emeka Eze (+234 805 123 4567)"
    }
  }[id];

  if (!staff) notFound();
  return staff;
}

export default async function StaffProfile() {
  const params = useParams()
  const id = params.id as string
  
  const staff = await getStaff(id);
  const isTeacher = staff.type === "Academic";

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
          <AvatarImage src={staff.image} />
          <AvatarFallback className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-white">
            {staff.name.split(" ").map(n => n[0]).join("")}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{staff.name}</h1>
              <p className="text-xl text-blue-600">{staff.role}</p>
            </div>
            <Badge 
              variant={staff.status === "Active" ? "default" : "destructive"}
              className="text-sm px-3 py-1"
            >
              {staff.status}
            </Badge>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge 
              variant={isTeacher ? "secondary" : "outline"} 
              className="flex items-center gap-1"
            >
              {isTeacher ? <BookOpen className="h-4 w-4" /> : <UserCog className="h-4 w-4" />}
              {staff.type}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {staff.yearsOfService} years service
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="h-5 w-5 text-blue-500" />
              <a href={`mailto:${staff.email}`} className="hover:underline">{staff.email}</a>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="h-5 w-5 text-green-500" />
              <a href={`tel:${staff.phone}`} className="hover:underline">{staff.phone}</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Qualifications Card */}
          <Card className="border-blue-100">
            <CardHeader className="bg-blue-50 rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <GraduationCap className="h-5 w-5" />
                Qualifications
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {staff.qualifications.map((qual, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <BadgeCheck className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">{qual.degree}</h3>
                      <p className="text-sm text-gray-600">{qual.institution}</p>
                      <p className="text-xs text-gray-500">{qual.year}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Teaching Assignments (only for teachers) */}
          {isTeacher && (
            <Card className="border-green-100">
              <CardHeader className="bg-green-50 rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <BookOpen className="h-5 w-5" />
                  Teaching Assignments
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Subjects</h3>
                  <div className="space-y-2">
                    {staff.subjects?.map((subject, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="px-3 py-1 text-sm bg-green-50 border-green-200"
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Classes</h3>
                  <div className="space-y-2">
                    {staff.classes?.map((cls, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="px-3 py-1 text-sm bg-blue-50 border-blue-200"
                      >
                        {cls}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Employment Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-purple-500" />
                Employment Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Staff ID</p>
                <p className="font-medium">{staff.id}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date Joined</p>
                <p className="font-medium">
                  {new Date(staff.joinedDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Years of Service</p>
                <p className="font-medium">{staff.yearsOfService} years</p>
              </div>
            </CardContent>
          </Card>

          {/* Next of Kin */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bookmark className="h-5 w-5 text-amber-500" />
                Next of Kin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">{staff.nextOfKin.split(" (")[0]}</p>
              <p className="text-sm text-muted-foreground">
                {staff.nextOfKin.match(/\(([^)]+)\)/)?.[1]}
              </p>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-2">
            <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Generate Employment Letter
            </button>
            <button className="w-full py-2 px-4 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}