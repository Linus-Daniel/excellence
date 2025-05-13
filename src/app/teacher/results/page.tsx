"use client";
import { 
  LineChart, 
  Search, 
  Filter,
  Download,
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

const results = [
  {
    class: "SS2 Science",
    subject: "Physics",
    term: "First Term 2023/2024",
    students: 32,
    average: 78.5,
    status: "Completed"
  },
  {
    class: "JSS3A",
    subject: "Mathematics",
    term: "First Term 2023/2024",
    students: 45,
    average: 82.1,
    status: "Completed"
  },
  {
    class: "SS1 Art",
    subject: "Literature",
    term: "First Term 2023/2024",
    students: 28,
    average: 75.6,
    status: "Pending"
  }
];

export default function ResultsPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <LineChart className="h-6 w-6" />
          Results Management
        </h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export All
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search results..."
            className="pl-10"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="pl-3">
              <Filter className="mr-2 h-4 w-4" />
              Filter
              <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>All Terms</DropdownMenuItem>
            <DropdownMenuItem>First Term</DropdownMenuItem>
            <DropdownMenuItem>Second Term</DropdownMenuItem>
            <DropdownMenuItem>Third Term</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
      </div>

      {/* Results Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead>Class</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Term</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Average</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((result, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{result.class}</TableCell>
                <TableCell>{result.subject}</TableCell>
                <TableCell>{result.term}</TableCell>
                <TableCell>{result.students}</TableCell>
                <TableCell>
                  <div className="font-bold">{result.average}%</div>
                </TableCell>
                <TableCell>
                  <Badge variant={result.status === "Completed" ? "default" : "secondary"}>
                    {result.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-2">Term Averages</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>First Term:</span>
              <span className="font-bold">78.5%</span>
            </div>
            <div className="flex justify-between">
              <span>Second Term:</span>
              <span className="font-bold">-</span>
            </div>
            <div className="flex justify-between">
              <span>Third Term:</span>
              <span className="font-bold">-</span>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-2">Top Performing Class</h3>
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-full">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="font-bold">JSS3A - Mathematics</p>
              <p className="text-sm">Average: 82.1%</p>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-2">Pending Actions</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Pending Results:</span>
              <span className="font-bold">1</span>
            </div>
            <div className="flex justify-between">
              <span>Unapproved:</span>
              <span className="font-bold">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}