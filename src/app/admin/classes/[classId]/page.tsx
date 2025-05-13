// app/admin/classes/[classId]/page.tsx
"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Users,
  BookOpen,
  UserCog,
  Plus,
  Search,
  GraduationCap,
  ArrowLeft,
  Edit,
  Trash2,
  Eye,
  LineChart,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useParams } from "next/navigation";

// Mock data - Replace with your actual data fetching
const getClassDetails = (classId: string) => {
  const classes = {
    "jss1": {
      id: "jss1",
      name: "JSS1",
      type: "Junior",
      classTeacher: {
        name: "Mrs. Johnson",
        email: "johnson@school.edu.ng",
        phone: "+234 801 234 5678",
        image: "/teachers/johnson.jpg"
      },
      subjects: [
        { name: "Mathematics", teacher: "Mr. Adebayo", code: "MATH101" },
        { name: "English", teacher: "Mrs. Johnson", code: "ENG101" },
        { name: "Basic Science", teacher: "Dr. Musa", code: "SCI101" }
      ],
      students: [
        { id: "JSS1-001", name: "Adeola Musa", department: null, image: "/students/adeola.jpg", gender: "Female" },
        { id: "JSS1-002", name: "Emeka Nwankwo", department: null, image: "/students/emeka.jpg", gender: "Male" }
      ],
      departments: null
    },
    "ss1-science": {
      id: "ss1-science",
      name: "SS1 Science",
      type: "Senior",
      classTeacher: {
        name: "Mr. Chinedu",
        email: "chinedu@school.edu.ng",
        phone: "+234 802 345 6789",
        image: "/teachers/chinedu.jpg"
      },
      subjects: [
        { name: "Physics", teacher: "Mr. Chinedu", code: "PHY101" },
        { name: "Chemistry", teacher: "Mrs. Adeleke", code: "CHEM101" },
        { name: "Biology", teacher: "Dr. Okafor", code: "BIO101" }
      ],
      students: [
        { id: "SS1-015", name: "Chinedu Obi", department: "Science", image: "/students/chinedu.jpg", gender: "Male" },
        { id: "SS1-016", name: "Fatima Ahmed", department: "Science", image: "/students/fatima.jpg", gender: "Female" }
      ],
      departments: ["Science"]
    },
    "ss1-art": {
      id: "ss1-art",
      name: "SS1 Art",
      type: "Senior",
      classTeacher: {
        name: "Mrs. Okonkwo",
        email: "okonkwo@school.edu.ng",
        phone: "+234 803 456 7890",
        image: "/teachers/okonkwo.jpg"
      },
      subjects: [
        { name: "Literature", teacher: "Mrs. Okonkwo", code: "LIT101" },
        { name: "Government", teacher: "Mr. Bello", code: "GOV101" },
        { name: "CRK", teacher: "Pastor James", code: "CRK101" }
      ],
      students: [
        { id: "SS1-023", name: "Yusuf Bello", department: "Art", image: "/students/yusuf.jpg", gender: "Male" },
        { id: "SS1-024", name: "Amina Mohammed", department: "Art", image: "/students/amina.jpg", gender: "Female" }
      ],
      departments: ["Art"]
    }
  };

  return classes[classId as keyof typeof classes] || null;
};

export default function ClassDetailPage() {
  const params = useParams()
  const classId = params.classId as string
  const classDetails = getClassDetails(classId);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("students");

  if (!classDetails) {
    return <div>Class not found</div>;
  }

  const filteredStudents = classDetails.students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <Link href="/admin/classes">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            {classDetails.name} Class
          </h1>
          <div className="flex gap-2 mt-1">
            <Badge variant={classDetails.type === "Junior" ? "secondary" : "default"}>
              {classDetails.type}
            </Badge>
            {classDetails.departments?.map(dept => (
              <Badge key={dept} variant="outline" className="border-green-200 bg-green-50 text-green-800">
                {dept} Department
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Class Teacher Card */}
      <Card className="border-blue-100">
        <CardHeader className="bg-blue-50 rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <UserCog className="h-5 w-5" />
            Class Teacher
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={classDetails.classTeacher.image} />
              <AvatarFallback>
                {classDetails.classTeacher.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{classDetails.classTeacher.name}</h3>
              <p className="text-sm text-gray-600">{classDetails.classTeacher.email}</p>
              <p className="text-sm text-gray-600">{classDetails.classTeacher.phone}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="students" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Students ({classDetails.students.length})
          </TabsTrigger>
          <TabsTrigger value="subjects" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Subjects ({classDetails.subjects.length})
          </TabsTrigger>
          <TabsTrigger value="performance" className="flex items-center gap-2">
            <LineChart className="h-4 w-4" />
            Performance
          </TabsTrigger>
        </TabsList>

        {/* Students Tab */}
        <TabsContent value="students">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search students..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button asChild>
                <Link href={`/admin/classes/${params.classId}/add-student`}>
                  <Plus className="mr-2 h-4 w-4" /> Add Student
                </Link>
              </Button>
            </div>

            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Photo</TableHead>
                    <TableHead>Student</TableHead>
                    <TableHead>ID</TableHead>
                    {classDetails.departments && <TableHead>Department</TableHead>}
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={student.image} />
                          <AvatarFallback>
                            {student.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                      </TableCell>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.id}</TableCell>
                      {classDetails.departments && (
                        <TableCell>
                          <Badge variant="outline" className="bg-blue-50 border-blue-200">
                            {student.department}
                          </Badge>
                        </TableCell>
                      )}
                      <TableCell className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </TabsContent>

        {/* Subjects Tab */}
        <TabsContent value="subjects">
          <div className="space-y-4">
            <div className="flex justify-end">
              <Button asChild>
                <Link href={`/admin/classes/${params.classId}/add-subject`}>
                  <Plus className="mr-2 h-4 w-4" /> Add Subject
                </Link>
              </Button>
            </div>

            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Teacher</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {classDetails.subjects.map((subject) => (
                    <TableRow key={subject.code}>
                      <TableCell className="font-medium">{subject.name}</TableCell>
                      <TableCell>{subject.code}</TableCell>
                      <TableCell>{subject.teacher}</TableCell>
                      <TableCell className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </TabsContent>

        {/* Performance Tab */}
        <TabsContent value="performance">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Class Average</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-center py-6">
                  78.5%
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Student</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 py-4">
                  <Avatar>
                    <AvatarImage src="/students/chinedu.jpg" />
                    <AvatarFallback>CO</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Chinedu Obi</h3>
                    <p className="text-sm text-gray-600">92.4% Average</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Subject Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 py-4">
                {classDetails.subjects.map(subject => (
                  <div key={subject.code} className="flex justify-between">
                    <span>{subject.name}</span>
                    <span className="font-medium">84.2%</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}