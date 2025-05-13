"use client";
import { 
  ArrowLeft,
  Check,
  X,
  Save,
  Download
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Mock data
const getClassAttendance = (classId: string) => {
  return {
    class: "SS2 Science",
    date: new Date().toLocaleDateString(),
    students: [
      { id: "SS2-001", name: "Chinedu Obi", present: true },
      { id: "SS2-002", name: "Fatima Ahmed", present: true },
      { id: "SS2-003", name: "Emeka Nwankwo", present: false }
    ]
  };
};

export default function AttendancePage() {
  const router = useRouter();
  const params = useParams();
  const classId = params.classId as string
  const { class: className, date, students: initialStudents } = getClassAttendance(classId);
  const [students, setStudents] = useState(initialStudents);
  const [attendanceDate, setAttendanceDate] = useState(date);

  const toggleAttendance = (studentId: string) => {
    setStudents(prev => prev.map(student => 
      student.id === studentId 
        ? { ...student, present: !student.present } 
        : student
    ));
  };

  const handleSubmit = () => {
    alert("Attendance recorded successfully!");
    router.push(`/teacher/classes/${params.classId}`);
  };

  const presentCount = students.filter(s => s.present).length;
  const absentCount = students.length - presentCount;

  return (
    <div className="space-y-6 p-6">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Attendance</h1>
          <p className="text-gray-600">{className}</p>
        </div>
      </div>

      {/* Attendance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Date</CardTitle>
          </CardHeader>
          <CardContent>
            <Input 
              type="date" 
              value={attendanceDate} 
              onChange={(e) => setAttendanceDate(e.target.value)}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Present</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-green-600 text-center py-4">
              {presentCount}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Absent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-red-600 text-center py-4">
              {absentCount}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>
                  <div className="font-medium">{student.name}</div>
                  <div className="text-sm text-gray-600">{student.id}</div>
                </TableCell>
                <TableCell>
                  <Badge variant={student.present ? "default" : "destructive"}>
                    {student.present ? "Present" : "Absent"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant={student.present ? "destructive" : "outline"} 
                    size="sm"
                    onClick={() => toggleAttendance(student.id)}
                  >
                    {student.present ? (
                      <X className="mr-2 h-4 w-4" />
                    ) : (
                      <Check className="mr-2 h-4 w-4" />
                    )}
                    {student.present ? "Mark Absent" : "Mark Present"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
        <Button onClick={handleSubmit}>
          <Save className="mr-2 h-4 w-4" />
          Save Attendance
        </Button>
      </div>
    </div>
  );
}