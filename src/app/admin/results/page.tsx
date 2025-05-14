"use client";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, Download, ArrowRight, LineChart } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { classes } from "@/constants";

export default function ClassesPage() {
  return (
    <div className="space-y-8 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary-default" />
          Class Management
        </h1>
        <div className="flex gap-4">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export All Results
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls) => (
          <Card 
            key={cls.id}
            className="hover:shadow-lg transition-all hover:border-primary-default border-2"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl flex text-primary-default items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary-default" />
                  {cls.name}
                </CardTitle>
                <Badge variant={cls.type === "Junior" ? "secondary" : "default"}>
                  {cls.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm bg-blue-50 px-3 py-1 rounded-full">
                  <Users className="h-4 w-4 text-primary-default" />
                  <span>{cls.studentCount} Students</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-green-50 px-3 py-1 rounded-full">
                  <BookOpen className="h-4 w-4 text-green-600" />
                  <span>{cls.subjects.length} Subjects</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Core Subjects</h3>
                <div className="flex flex-wrap gap-2">
                  {cls.subjects.slice(0, 3).map((subject) => (
                    <Badge 
                      key={subject} 
                      variant="outline" 
                      className="text-xs px-2 py-1 bg-gray-50"
                    >
                      {subject}
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
            <CardFooter className="flex justify-between">
              <Button 
                variant={cls.resultsAvailable ? "default" : "secondary"} 
                asChild
                disabled={!cls.resultsAvailable}
              >
                <Link className="bg-primary-default" href={`/admin/classes/${cls.id}/results`}>
                  {cls.resultsAvailable ? (
                    <>
                      <LineChart className="mr-2 h-4 w-4" />
                      View Results
                    </>
                  ) : (
                    "Results Pending"
                  )}
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href={`/admin/classes/${cls.id}`}>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}