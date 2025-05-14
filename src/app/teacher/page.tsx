// app/teacher/dashboard/page.tsx
"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  LineChart, 
  Calendar,
  ClipboardList,
  Bell,
  Mail,
  GraduationCap
} from "lucide-react";
import Link from "next/link";

export default function TeacherDashboard() {
  // Mock data
  const teacher = {
    name: "Mr. Adebayo Ogunlesi",
    subjects: ["Mathematics", "Further Mathematics"],
    classes: ["SS2A", "SS3B"],
    upcomingClasses: [
      { subject: "Mathematics", class: "SS2A", time: "8:00 AM" },
      { subject: "Further Mathematics", class: "SS3B", time: "10:30 AM" }
    ],
    pendingAssessments: 3,
    unreadMessages: 2
  };

  return (
    <div className="space-y-6 p-6">
      {/* Welcome Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-primary-default">Welcome, {teacher.name}</h1>
          <p className="text-gray-600">Mathematics Department</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Messages</span>
            {teacher.unreadMessages > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {teacher.unreadMessages}
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Subjects</CardTitle>
            <BookOpen className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teacher.subjects.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Classes</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teacher.classes.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Assessments</CardTitle>
            <ClipboardList className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teacher.pendingAssessments}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
            <Mail className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teacher.unreadMessages}</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Classes */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teacher.upcomingClasses.map((cls, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{cls.subject}</h3>
                      <p className="text-sm text-gray-600">{cls.class}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {cls.time}
                      </span>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/teacher/attendance?class=${cls.class}`}>
                          Take Attendance
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button className="h-24" asChild>
              <Link href="/teacher/classes" className="flex flex-col items-center justify-center gap-2">
                <Users className="h-6 w-6" />
                My Classes
              </Link>
            </Button>
            <Button className="h-24" variant="secondary" asChild>
              <Link href="/teacher/results" className="flex flex-col items-center justify-center gap-2">
                <LineChart className="h-6 w-6" />
                Enter Results
              </Link>
            </Button>
            <Button className="h-24" variant="secondary" asChild>
              <Link href="/teacher/assessments" className="flex flex-col items-center justify-center gap-2">
                <ClipboardList className="h-6 w-6" />
                Create Assessment
              </Link>
            </Button>
            <Button className="h-24" asChild>
              <Link href="/teacher/reports" className="flex flex-col items-center justify-center gap-2">
                <GraduationCap className="h-6 w-6" />
                Generate Reports
              </Link>
            </Button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-orange-600" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Staff meeting tomorrow</p>
                  <p className="text-sm text-gray-600">10:00 AM in the staff room</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <ClipboardList className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Term results deadline</p>
                  <p className="text-sm text-gray-600">Submit by Friday</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* My Subjects */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-purple-600" />
                My Subjects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {teacher.subjects.map((subject, index) => (
                <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <span>{subject}</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/teacher/subjects/${subject.toLowerCase().replace(/\s+/g, '-')}`}>
                      View
                    </Link>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}