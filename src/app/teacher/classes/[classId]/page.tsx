// app/teacher/classes/[classId]/page.tsx
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
  LineChart,
  ArrowLeft,
  Mail,
  Download,
  Printer,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

interface ClassTypes {
  id: string;
  name: string;
  students: {
    id: string;
    name: string;
    avgScore: number;
    attendance: number;
    department: string;
  }[];
  subjects: {
    id: string;
    teacher: string;
    schedule: [string];
  }[];
  performance: {
    classAverage: number;
    topStudent: string;
    subjects: {
      name: string;
      average: number;
    };
  };
}

// Mock data - Replace with API calls
const getClassDetails = (classId: string) => {
  const classes = {
    "ss2-science": {
      id: "ss2-science",
      name: "SS2 Science",
      classTeacher: "Mr. Adebayo Ogunlesi",
      students: [
        {
          id: "SS2-001",
          name: "Chinedu Obi",
          avgScore: 85,
          attendance: 92,
          department: "Science",
        },
        {
          id: "SS2-002",
          name: "Fatima Ahmed",
          avgScore: 78,
          attendance: 88,
          department: "Science",
        },
        {
          id: "SS2-003",
          name: "Emeka Nwankwo",
          avgScore: 72,
          attendance: 95,
          department: "Science",
        },
      ],
      subjects: [
        {
          name: "Physics",
          teacher: "Mr. Adebayo",
          schedule: "Mon/Wed 8:00-9:00",
        },
        {
          name: "Chemistry",
          teacher: "Mrs. Adeleke",
          schedule: "Tue/Thu 10:00-11:00",
        },
        { name: "Biology", teacher: "Dr. Okafor", schedule: "Fri 9:00-11:00" },
      ],
      performance: {
        classAverage: 78.4,
        topStudent: "Chinedu Obi (92.4%)",
        subjects: [
          { name: "Physics", average: 81.2 },
          { name: "Chemistry", average: 76.5 },
          { name: "Biology", average: 77.5 },
        ],
      },
    },
    "jss3-a": {
      id: "jss3-a",
      name: "JSS3A",
      classTeacher: "Mrs. Johnson",
      students: [
        {
          id: "JSS3-001",
          name: "Adeola Musa",
          avgScore: 88,
          department: "",
          attendance: 98,
        },
        {
          id: "JSS3-002",
          name: "Yusuf Bello",
          avgScore: 76,
          department: "",
          attendance: 85,
        },
      ],
      subjects: [
        {
          name: "Mathematics",
          teacher: "Mr. Adebayo",
          schedule: "Daily 8:00-9:00",
        },
        {
          name: "English",
          teacher: "Mrs. Johnson",
          schedule: "Mon/Wed/Fri 10:00-11:00",
        },
      ],
      performance: {
        classAverage: 82.1,
        topStudent: "Adeola Musa (88%)",
        subjects: [
          { name: "Mathematics", average: 85.4 },
          { name: "English", average: 78.8 },
        ],
      },
    },
  };
  return classes[classId as keyof typeof classes] || null;
};

export default function ClassDetailPage() {
  const router = useRouter();
  const params = useParams();
  const classId = params.classId as string;
  const classDetails = getClassDetails(classId);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("students");

  if (!classDetails) {
    return <div>Class not found</div>;
  }

  const filteredStudents = classDetails.students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isSeniorClass = classDetails.name.startsWith("SS");

  return (
    <div className="space-y-6 p-6">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">{classDetails.name}</h1>
          <p className="text-gray-600">
            Class Teacher: {classDetails.classTeacher}
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="students" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Students
          </TabsTrigger>
          <TabsTrigger value="subjects" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Subjects
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
              <div className="flex gap-2">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button variant="outline" onClick={() => window.print()}>
                  <Printer className="mr-2 h-4 w-4" />
                  Print
                </Button>
              </div>
            </div>

            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    {isSeniorClass && <TableHead>Department</TableHead>}
                    <TableHead>Average Score</TableHead>
                    <TableHead>Attendance</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{student.name}</p>
                            <p className="text-sm text-gray-600">
                              {student.id}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      {isSeniorClass && (
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-blue-50 border-blue-200"
                          >
                            {student?.department}
                          </Badge>
                        </TableCell>
                      )}
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress
                            value={student.avgScore}
                            className="h-2 w-20"
                          />
                          <span>{student.avgScore}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress
                            value={student.attendance}
                            className="h-2 w-20"
                          />
                          <span>{student.attendance}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/teacher/students/${student.id}`}>
                            <LineChart className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <Link
                            href={`mailto:${student.id.toLowerCase()}@school.edu.ng`}
                          >
                            <Mail className="h-4 w-4" />
                          </Link>
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
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Teacher</TableHead>
                    <TableHead>Schedule</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {classDetails.subjects.map((subject) => (
                    <TableRow key={subject.name}>
                      <TableCell className="font-medium">
                        {subject.name}
                      </TableCell>
                      <TableCell>{subject.teacher}</TableCell>
                      <TableCell>{subject.schedule}</TableCell>
                      <TableCell className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link
                            href={`/teacher/subjects/${subject.name.toLowerCase()}`}
                          >
                            View
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link
                            href={`/teacher/classes/${
                              params.classId
                            }/${subject.name.toLowerCase()}/results`}
                          >
                            Enter Results
                          </Link>
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
                  {classDetails.performance.classAverage}%
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Student</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <div className="text-2xl font-bold mb-2">
                    {classDetails.performance.topStudent.split(" (")[0]}
                  </div>
                  <Badge variant="secondary">
                    {
                      classDetails.performance.topStudent.match(
                        /\(([^)]+)\)/
                      )?.[1]
                    }
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Subject Averages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 py-4">
                {classDetails.performance.subjects.map((subject) => (
                  <div
                    key={subject.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm">{subject.name}</span>
                    <div className="flex items-center gap-2">
                      <Progress value={subject.average} className="h-2 w-20" />
                      <span className="text-sm font-medium">
                        {subject.average}%
                      </span>
                    </div>
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
