"use client";
import { 
  ClipboardList, 
  Plus,
  Search,
  Calendar,
  BookOpen,
  ChevronDown
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const assessments = [
  {
    id: "as1",
    title: "First Term Exam",
    type: "Exam",
    subject: "Physics",
    class: "SS2 Science",
    date: "2023-10-15",
    status: "Completed"
  },
  {
    id: "as2",
    title: "Second CA Test",
    type: "CA",
    subject: "Mathematics",
    class: "JSS3A",
    date: "2023-11-02",
    status: "Pending"
  },
  {
    id: "as3",
    title: "Assignment 1",
    type: "Assignment",
    subject: "English",
    class: "SS1 Art",
    date: "2023-10-20",
    status: "Graded"
  }
];

export default function AssessmentsPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <ClipboardList className="h-6 w-6" />
          Assessments
        </h1>
        <Button asChild>
          <Link href="/teacher/assessments/create">
            <Plus className="mr-2 h-4 w-4" />
            Create Assessment
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search assessments..."
            className="pl-10"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="pl-3">
              <BookOpen className="mr-2 h-4 w-4" />
              All Subjects
              <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>All Subjects</DropdownMenuItem>
            <DropdownMenuItem>Mathematics</DropdownMenuItem>
            <DropdownMenuItem>Physics</DropdownMenuItem>
            <DropdownMenuItem>English</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="pl-3">
              <Calendar className="mr-2 h-4 w-4" />
              All Dates
              <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>All Dates</DropdownMenuItem>
            <DropdownMenuItem>This Week</DropdownMenuItem>
            <DropdownMenuItem>This Month</DropdownMenuItem>
            <DropdownMenuItem>Upcoming</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Assessments Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assessments.map((assessment) => (
              <TableRow key={assessment.id}>
                <TableCell className="font-medium">{assessment.title}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      assessment.type === "Exam" ? "destructive" :
                      assessment.type === "CA" ? "secondary" : "outline"
                    }
                  >
                    {assessment.type}
                  </Badge>
                </TableCell>
                <TableCell>{assessment.subject}</TableCell>
                <TableCell>{assessment.class}</TableCell>
                <TableCell>
                  {new Date(assessment.date).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      assessment.status === "Completed" ? "default" :
                      assessment.status === "Graded" ? "secondary" : "outline"
                    }
                  >
                    {assessment.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Upcoming Assessments */}
      <div className="border rounded-lg p-4">
        <h3 className="font-bold mb-4">Upcoming Assessments</h3>
        <div className="space-y-3">
          {assessments
            .filter(a => new Date(a.date) > new Date())
            .map(assessment => (
              <div key={assessment.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">{assessment.title}</h4>
                  <p className="text-sm text-gray-600">
                    {assessment.class} - {assessment.subject}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {new Date(assessment.date).toLocaleDateString()}
                  </span>
                  <Button variant="outline" size="sm">
                    Prepare
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}