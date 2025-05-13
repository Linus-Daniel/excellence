"use client";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  BookOpen, 
  LineChart,
  ArrowLeft,
  Printer,
  Download,
  Home,
  User
} from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

// Mock data
const getStudentDetails = (studentId: string) => {
  const students = {
    "SS2-001": {
      id: "SS2-001",
      name: "Chinedu Obi",
      class: "SS2 Science",
      image: "/students/chinedu.jpg",
      department: "Science",
      guardian: {
        name: "Mr. Obi Nnamdi",
        relationship: "Father",
        phone: "+234 803 456 7890",
        email: "nnamdi.obi@example.com"
      },
      performance: {
        average: 85.4,
        position: "3rd",
        attendance: 92,
        subjects: [
          { name: "Physics", score: 88, teacher: "Mr. Adebayo" },
          { name: "Chemistry", score: 82, teacher: "Mrs. Adeleke" },
          { name: "Biology", score: 86, teacher: "Dr. Okafor" }
        ]
      },
      contact: {
        address: "12 Palm Street, Lagos",
        phone: "+234 801 234 5678"
      }
    }
  };
  return students[studentId as keyof typeof students] || null;
};

export default function StudentProfilePage() {
  const router = useRouter();
  const params = useParams()
  const studentId = params.studentId as string
  const student = getStudentDetails(studentId);

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Student Profile</h1>
      </div>

      {/* Student Info Card */}
      <Card className="border-blue-100">
        <CardHeader className="bg-blue-50 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={student.image} />
                <AvatarFallback>
                  {student.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-bold">{student.name}</h2>
                <p className="text-gray-600">{student.class}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => window.print()}>
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="font-medium flex items-center gap-2">
              <User className="h-4 w-4" />
              Student Details
            </h3>
            <p><span className="text-gray-600">ID:</span> {student.id}</p>
            <p><span className="text-gray-600">Class:</span> {student.class}</p>
            {student.department && (
              <p><span className="text-gray-600">Department:</span> {student.department}</p>
            )}
          </div>
          <div className="space-y-2">
            <h3 className="font-medium flex items-center gap-2">
              <Home className="h-4 w-4" />
              Contact
            </h3>
            <p><span className="text-gray-600">Address:</span> {student.contact.address}</p>
            <p><span className="text-gray-600">Phone:</span> {student.contact.phone}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium flex items-center gap-2">
              <User className="h-4 w-4" />
              Guardian
            </h3>
            <p>{student.guardian.name} ({student.guardian.relationship})</p>
            <p><span className="text-gray-600">Phone:</span> {student.guardian.phone}</p>
            <p><span className="text-gray-600">Email:</span> {student.guardian.email}</p>
          </div>
        </CardContent>
      </Card>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-center py-4">
              {student.performance.average}%
            </div>
            <Progress value={student.performance.average} className="h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Class Position</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-center py-4">
              {student.performance.position}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-center py-4">
              {student.performance.attendance}%
            </div>
            <Progress value={student.performance.attendance} className="h-2" />
          </CardContent>
        </Card>
      </div>

      {/* Subject Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Subject Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Teacher</TableHead>
                <TableHead>Score</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {student.performance.subjects.map((subject) => (
                <TableRow key={subject.name}>
                  <TableCell className="font-medium">{subject.name}</TableCell>
                  <TableCell>{subject.teacher}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={subject.score} className="h-2 w-20" />
                      <span>{subject.score}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/teacher/subjects/${subject.name.toLowerCase()}`}>
                        View
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}