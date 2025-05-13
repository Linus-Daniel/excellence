// app/admin/classes/[classId]/results/page.tsx
"use client";
import { Button } from "@/components/ui/button";
import { Download, Printer, FileText, ArrowLeft,} from "lucide-react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";
import { classes } from "@/constants";

// Mock data for results
const classResults = {
  "jss1": [
    {
      id: "JSS1-001",
      name: "Adeola Musa",
      subjects: {
        "English": { ca: 25, exam: 65, total: 90, grade: "A" },
        "Mathematics": { ca: 20, exam: 70, total: 90, grade: "A" },
        "Basic Science": { ca: 18, exam: 62, total: 80, grade: "B" }
      },
      average: 86.7,
      position: "1st"
    },
    {
      id: "JSS1-002",
      name: "Emeka Nwankwo",
      subjects: {
        "English": { ca: 15, exam: 50, total: 65, grade: "C" },
        "Mathematics": { ca: 12, exam: 45, total: 57, grade: "D" },
        "Basic Science": { ca: 20, exam: 55, total: 75, grade: "B" }
      },
      average: 65.7,
      position: "2nd"
    }
  ]
};

export default function ResultsPage() {
  const params = useParams();
  const classId  = params.classId
  const router = useRouter();
  const results = classResults[classId as keyof typeof classResults] || [];
  const classInfo = classes.find(c => c.id === classId);

  const handleDownload = (format: 'pdf' | 'csv') => {
    alert(`Downloading results as ${format.toUpperCase()}`);
    // Actual implementation would generate and download the file
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">
          {classInfo?.name} Examination Results
        </h1>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => handleDownload('pdf')}>
            <FileText className="mr-2 h-4 w-4" />
            PDF Report
          </Button>
          <Button variant="outline" onClick={() => handleDownload('csv')}>
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
        </div>
        <Button onClick={() => window.print()}>
          <Printer className="mr-2 h-4 w-4" />
          Print Results
        </Button>
      </div>

      <div className="border rounded-lg p-4 bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              {classInfo?.subjects.slice(0, 3).map(subject => (
                <TableHead key={subject}>{subject}</TableHead>
              ))}
              <TableHead>Average</TableHead>
              <TableHead>Position</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{student.name}</TableCell>
                {classInfo?.subjects.slice(0, 3).map(subject => (
                  <TableCell key={`${student.id}-${subject}`}>
                    {student.subjects[subject as keyof typeof student.subjects]?.total || '-'}
                    <span className="text-xs text-gray-500 ml-1">
                      ({student.subjects[subject as keyof typeof student.subjects]?.grade || '-'})
                    </span>
                  </TableCell>
                ))}
                <TableCell className="font-bold">{student.average}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-800">
                    {student.position}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Class Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-center py-4">
              76.2%
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Highest Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-center py-4">
              94.5%
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Lowest Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-center py-4">
              52.3%
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}