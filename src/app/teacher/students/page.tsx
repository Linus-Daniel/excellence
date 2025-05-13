"use client";
import { 
  Users, 
  Search, 
  Mail, 
  LineChart,
  Plus,
  BookOpen,
  GraduationCap
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data
const students = [
  {
    id: "SS2-001",
    name: "Chinedu Obi",
    class: "SS2 Science",
    department: "Science",
    image: "/students/chinedu.jpg",
    average: 85,
    attendance: 92
  },
  {
    id: "JSS3-002",
    name: "Adeola Musa",
    class: "JSS3A",
    department: null,
    image: "/students/adeola.jpg",
    average: 88,
    attendance: 98
  },
  {
    id: "SS1-003",
    name: "Fatima Ahmed",
    class: "SS1 Science",
    department: "Science",
    image: "/students/fatima.jpg",
    average: 78,
    attendance: 88
  }
];

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Users className="h-6 w-6" />
          My Students
        </h1>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/teacher/students/add">
              <Plus className="mr-2 h-4 w-4" />
              Add Student
            </Link>
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search students by name, ID or class..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select className="p-2 border rounded-md text-sm">
          <option>All Classes</option>
          <option>JSS1</option>
          <option>SS1 Science</option>
        </select>
      </div>

      {/* Students Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Average</TableHead>
              <TableHead>Attendance</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.id} className="hover:bg-gray-50">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={student.image} />
                      <AvatarFallback>
                        {student.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-gray-600">{student.id}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{student.class}</TableCell>
                <TableCell>
                  {student.department ? (
                    <Badge variant="outline" className="bg-blue-50 border-blue-200">
                      {student.department}
                    </Badge>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      student.average >= 80 ? "default" :
                      student.average >= 60 ? "secondary" : "outline"
                    }
                    className={
                      student.average >= 80 ? "bg-green-100 text-green-800" :
                      student.average >= 60 ? "bg-blue-100 text-blue-800" : ""
                    }
                  >
                    {student.average}%
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={student.attendance >= 90 ? "default" : "outline"}
                    className={student.attendance >= 90 ? "bg-green-100 text-green-800" : ""}
                  >
                    {student.attendance}%
                  </Badge>
                </TableCell>
                <TableCell className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/teacher/students/${student.id}`}>
                      <LineChart className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`mailto:${student.id.toLowerCase()}@school.edu.ng`}>
                      <Mail className="h-4 w-4" />
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-blue-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent
          >
            <div className="text-2xl font-bold">{students.length}</div>
          </CardContent>
        </Card>
        <Card className="border-green-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Class Average</CardTitle>
            <LineChart className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(students.reduce((sum, student) => sum + student.average, 0) / students.length)}%
            </div>
          </CardContent>
        </Card>
        <Card className="border-purple-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
            <BookOpen className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(students.reduce((sum, student) => sum + student.attendance, 0) / students.length)}%
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}