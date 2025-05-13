// app/admin/students/[id]/results/page.tsx
"use client";
import { Button } from "@/components/ui/button";
import { Download, Printer, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge"; 
import { useParams } from "next/navigation";

// Mock data for student results
const getStudentResults = (id: string) => {
  const students = {
    "JSS1-001": {
      id: "JSS1-001",
      name: "Adeola Musa",
      class: "JSS1",
      image: "/students/adeola.jpg",
      term: "First Term 2023/2024",
      results: [
        {
          subject: "Mathematics",
          firstCA: 18,
          secondCA: 20,
          assignment: 10,
          exam: 52,
          total: 100,
          grade: "A",
          remark: "Excellent"
        },
        {
          subject: "English",
          firstCA: 15,
          secondCA: 18,
          assignment: 8,
          exam: 48,
          total: 89,
          grade: "B",
          remark: "Very Good"
        },
        {
          subject: "Basic Science",
          firstCA: 12,
          secondCA: 15,
          assignment: 7,
          exam: 45,
          total: 79,
          grade: "B",
          remark: "Good"
        }
      ],
      overall: {
        average: 89.3,
        position: "4th",
        classAverage: 76.5,
        totalStudents: 45
      }
    }
  };
  return students[id as keyof typeof students] || null;
};

export default function StudentResultsPage( ) {
  const router = useRouter();
  const params = useParams()
  const id = params.id as string

  const student = getStudentResults(id);

  if (!student) {
    return <div>Student not found</div>;
  }

  const handleDownload = () => {
    alert("Downloading result as PDF");
    // Actual implementation would generate and download the PDF
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Result Details</h1>
      </div>

      {/* Student Profile Card */}
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
                <p className="text-gray-600">{student.class} - {student.term}</p>
              </div>
            </div>
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download Result
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Results Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead className="text-center">1st CA (20)</TableHead>
              <TableHead className="text-center">2nd CA (20)</TableHead>
              <TableHead className="text-center">Assignment (10)</TableHead>
              <TableHead className="text-center">Exam (50)</TableHead>
              <TableHead className="text-center">Total (100)</TableHead>
              <TableHead className="text-center">Grade</TableHead>
              <TableHead>Remark</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {student.results.map((result) => (
              <TableRow key={result.subject}>
                <TableCell className="font-medium">{result.subject}</TableCell>
                <TableCell className="text-center">{result.firstCA}</TableCell>
                <TableCell className="text-center">{result.secondCA}</TableCell>
                <TableCell className="text-center">{result.assignment}</TableCell>
                <TableCell className="text-center">{result.exam}</TableCell>
                <TableCell className="text-center font-bold">{result.total}</TableCell>
                <TableCell className="text-center">
                  <Badge 
                    variant={
                      result.grade === "A" ? "default" : 
                      result.grade === "B" ? "secondary" : "outline"
                    }
                    className={
                      result.grade === "A" ? "bg-green-100 text-green-800" :
                      result.grade === "B" ? "bg-blue-100 text-blue-800" : ""
                    }
                  >
                    {result.grade}
                  </Badge>
                </TableCell>
                <TableCell>{result.remark}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Overall Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-center py-4">
              {student.overall.average}%
            </div>
            <Progress value={student.overall.average} className="h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Class Position</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-center py-4">
              {student.overall.position}
            </div>
            <p className="text-center text-sm text-gray-600">
              out of {student.overall.totalStudents} students
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Class Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-center py-4">
              {student.overall.classAverage}%
            </div>
            <div className={`text-center text-sm ${
              student.overall.average > student.overall.classAverage 
                ? "text-green-600" 
                : "text-red-600"
            }`}>
              {student.overall.average > student.overall.classAverage 
                ? "Above average" 
                : "Below average"}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <Button variant="outline" onClick={() => window.print()}>
          <Printer className="mr-2 h-4 w-4" />
          Print Result
        </Button>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export as PDF
        </Button>
      </div>
    </div>
  );
}