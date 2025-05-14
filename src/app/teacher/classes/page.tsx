"use client";
import { 
  BookOpen, 
  Users, 
  Search, 
  LineChart,
  ChevronRight,
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
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data
const classes = [
  {
    name: "SS2 Science",
    type: "Senior",
    students: 32,
    subjects: ["Physics", "Chemistry", "Biology"],
    classTeacher: "Mr. Adebayo",
    average: 78.4
  },
  {
    name: "JSS3A",
    type: "Junior",
    students: 45,
    subjects: ["Math", "English", "Basic Science"],
    classTeacher: "Mrs. Johnson",
    average: 82.1
  },
  {
    name: "SS1 Art",
    type: "Senior",
    students: 28,
    subjects: ["Literature", "Government", "CRK"],
    classTeacher: "Mrs. Okonkwo",
    average: 75.6
  }
];

export default function ClassesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClasses = classes.filter(cls =>
    cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cls.classTeacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-primary-dark font-bold flex items-center gap-2">
          <GraduationCap className="h-6 w-6" />
          My Classes
        </h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <LineChart className="mr-2 h-4 w-4" />
            View All Results
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search classes..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Classes Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead>Class</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Subjects</TableHead>
              <TableHead>Class Teacher</TableHead>
              <TableHead>Average</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClasses.map((cls) => (
              <TableRow key={cls.name} className="hover:bg-gray-50">
                <TableCell className="font-medium">{cls.name}</TableCell>
                <TableCell>
                  <Badge variant={cls.type === "Senior" ? "default" : "secondary"}>
                    {cls.type}
                  </Badge>
                </TableCell>
                <TableCell>{cls.students}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {cls.subjects.slice(0, 2).map((subject, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                    {cls.subjects.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{cls.subjects.length - 2}
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>{cls.classTeacher}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      cls.average >= 75 ? "default" :
                      cls.average >= 60 ? "secondary" : "outline"
                    }
                    className={
                      cls.average >= 75 ? "bg-green-100 text-green-800" :
                      cls.average >= 60 ? "bg-blue-100 text-blue-800" : ""
                    }
                  >
                    {cls.average}%
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/teacher/classes/${cls.name.replace(/\s+/g, '-').toLowerCase()}`}>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Class Cards (Alternative View) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredClasses.map((cls) => (
          <Card key={cls.name} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg  text-primary-dark font-bold">{cls.name}</h3>
                  <p className="text-sm text-gray-600">{cls.classTeacher}</p>
                </div>
                <Badge variant={cls.type === "Senior" ? "default" : "secondary"}>
                  {cls.type}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4" />
                  <span>{cls.students} Students</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="h-4 w-4" />
                  <span>{cls.subjects.length} Subjects</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Class Average:</span>
                <Badge 
                  variant={
                    cls.average >= 75 ? "default" :
                    cls.average >= 60 ? "secondary" : "outline"
                  }
                  className={
                    cls.average >= 75 ? "bg-green-100 text-green-800" :
                    cls.average >= 60 ? "bg-blue-100 text-blue-800" : ""
                  }
                >
                  {cls.average}%
                </Badge>
              </div>
            </CardContent>
            <CardFooter >
              <Button variant="ghost" size="sm" asChild>
                <Link className="text-primary-dark" href={`/teacher/classes/${cls.name.replace(/\s+/g, '-').toLowerCase()}`}>
                  View Class <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Add these components if not already defined
function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="p-4 pt-0">{children}</div>;
}