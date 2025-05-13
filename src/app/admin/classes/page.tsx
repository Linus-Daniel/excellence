"use client";
import Link from "next/link";
import { 
  Users, 
  BookOpen, 
  UserCog, 
  ChevronRight,
  Plus,
  GraduationCap
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { classData } from "@/constants";


export default function ClassesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Class Management</h1>
        <Button asChild>
          <Link href="/admin/classes/create">
            <Plus className="mr-2 h-4 w-4" /> Create Class
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classData.map((cls) => (
          <Link key={cls.name} href={`/admin/classes/${cls.name.replace(/\s+/g, '-').toLowerCase()}`}>
            <Card className="hover:shadow-lg transition-shadow hover:border-blue-300 h-full">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                    {cls.name}
                  </CardTitle>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
                <div className="flex gap-2">
                  <Badge variant={cls.type === "Junior" ? "secondary" : "default"}>
                    {cls.type}
                  </Badge>
                  {cls.departments && cls.departments.map(dept => (
                    <Badge key={dept} variant="outline" className="border-green-200 bg-green-50 text-green-800">
                      {dept}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span>{cls.studentCount} Students</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <UserCog className="h-4 w-4 text-purple-500" />
                    <span>{cls.classTeacher}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-green-500" />
                    Subjects
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cls.subjects.slice(0, 3).map((subject) => (
                      <Badge 
                        key={subject.name} 
                        variant="outline" 
                        className="text-xs px-2 py-1 bg-blue-50 border-blue-200"
                      >
                        {subject.name}
                      </Badge>
                    ))}
                    {cls.subjects.length > 3 && (
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        +{cls.subjects.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}


// Mock data for demonstration
const Button = ({ children, asChild, ...props }: any) => {
  const Comp = asChild ? Link : "button";
  return (
    <Comp
      className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      {...props}
      href={"/"}
    >
      {children}
    </Comp>
  );
};