"use client";
import { 
  BookOpen, 
  Search, 
  Plus,
  ChevronRight,
  User,
  Clock,
  Library
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

const subjects = [
  {
    id: "math",
    name: "Mathematics",
    classes: ["JSS1", "JSS2", "JSS3", "SS1 Science", "SS2 Science"],
    teacher: "Mr. Adebayo",
    lessons: 24,
    status: "Active"
  },
  {
    id: "physics",
    name: "Physics",
    classes: ["SS1 Science", "SS2 Science", "SS3 Science"],
    teacher: "Mr. Adebayo",
    lessons: 18,
    status: "Active"
  },
  {
    id: "english",
    name: "English Language",
    classes: ["JSS1", "JSS2", "JSS3", "SS1 Art", "SS2 Art"],
    teacher: "Mrs. Johnson",
    lessons: 20,
    status: "Active"
  }
];

export default function SubjectsPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          My Subjects
        </h1>
        <Button asChild>
          <Link href="/teacher/subjects/add">
            <Plus className="mr-2 h-4 w-4" />
            Add Subject
          </Link>
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search subjects..."
            className="pl-10"
          />
        </div>
        <select className="p-2 border rounded-md text-sm">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Subjects Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead>Classes</TableHead>
              <TableHead>Teacher</TableHead>
              <TableHead>Lessons</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subjects.map((subject) => (
              <TableRow key={subject.id}>
                <TableCell className="font-medium">{subject.name}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {subject.classes.slice(0, 2).map((cls, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {cls}
                      </Badge>
                    ))}
                    {subject.classes.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{subject.classes.length - 2}
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>{subject.teacher}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{subject.lessons}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={subject.status === "Active" ? "default" : "destructive"}>
                    {subject.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/teacher/subjects/${subject.id}`}>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4 flex items-center gap-4">
          <div className="p-3 rounded-full bg-blue-100">
            <BookOpen className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Subjects</p>
            <p className="text-2xl font-bold">{subjects.length}</p>
          </div>
        </div>
        <div className="border rounded-lg p-4 flex items-center gap-4">
          <div className="p-3 rounded-full bg-green-100">
            <User className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Active Subjects</p>
            <p className="text-2xl font-bold">
              {subjects.filter(s => s.status === "Active").length}
            </p>
          </div>
        </div>
        <div className="border rounded-lg p-4 flex items-center gap-4">
          <div className="p-3 rounded-full bg-purple-100">
            <Library className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Lessons</p>
            <p className="text-2xl font-bold">
              {subjects.reduce((sum, subject) => sum + subject.lessons, 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}