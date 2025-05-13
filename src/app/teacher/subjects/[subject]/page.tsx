"use client";
import { 
  BookOpen, 
  Users, 
  LineChart, 
  Calendar,
  ArrowLeft,
  ClipboardList,
  Download
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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Mock data
const getSubjectDetails = (subject: string) => {
  const subjects = {
    "physics": {
      name: "Physics",
      code: "PHY101",
      teacher: "Mr. Adebayo Ogunlesi",
      classes: ["SS1 Science", "SS2 Science", "SS3 Science"],
      curriculum: [
        { topic: "Mechanics", weeks: "Weeks 1-4", status: "Completed" },
        { topic: "Waves", weeks: "Weeks 5-8", status: "In Progress" },
        { topic: "Electricity", weeks: "Weeks 9-12", status: "Pending" }
      ],
      performance: {
        classAverage: 78.5,
        topStudent: "Chinedu Obi (SS2 Science) - 94%"
      }
    }
  };
  return subjects[subject as keyof typeof subjects] || null;
};

export default function SubjectDetailPage() {
  const router = useRouter();
  const params = useParams()
  const subjects = params.subject as string
  const subject = getSubjectDetails(subjects);

  if (!subject) {
    return <div>Subject not found</div>;
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">{subject.name}</h1>
          <p className="text-gray-600">Subject Code: {subject.code}</p>
        </div>
      </div>

      {/* Subject Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Classes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {subject.classes.map((cls, index) => (
                <div key={index} className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-gray-500" />
                  <span>{cls}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5" />
              Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>Class Average: <span className="font-bold">{subject.performance.classAverage}%</span></p>
              <p>Top Student: <span className="font-bold">{subject.performance.topStudent}</span></p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Teacher
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium">{subject.teacher}</p>
            <Button variant="link" size="sm" className="p-0 h-auto" asChild>
              <Link href={`mailto:${subject.teacher.replace(/\s+/g, '.').toLowerCase()}@school.edu.ng`}>
                Send Message
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Curriculum */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5" />
            Curriculum Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Topic</TableHead>
                <TableHead>Weeks</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subject.curriculum.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.topic}</TableCell>
                  <TableCell>{item.weeks}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        item.status === "Completed" ? "default" :
                        item.status === "In Progress" ? "secondary" : "outline"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Teaching Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-24 flex flex-col gap-2">
              <BookOpen className="h-6 w-6" />
              Lesson Plans
            </Button>
            <Button variant="outline" className="h-24 flex flex-col gap-2">
              <ClipboardList className="h-6 w-6" />
              Worksheets
            </Button>
            <Button variant="outline" className="h-24 flex flex-col gap-2">
              <LineChart className="h-6 w-6" />
              Past Questions
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}