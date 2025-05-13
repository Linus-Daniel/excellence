"use client";
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
type Period = `Period ${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`;

interface ClassInfo {
  subject: string;
  class: string;
  room: string;
}

interface TimetableData {
  [day: string]: {
    [period: string]: ClassInfo;
  };
}

const days: Day[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const periods: Period[] = Array.from({ length: 8 }, (_, i) => `Period ${i + 1}` as Period);

const timetableData: TimetableData = {
  "Monday": {
    "Period 1": { subject: "Physics", class: "SS2 Science", room: "B12" },
    "Period 3": { subject: "Mathematics", class: "JSS3A", room: "A05" }
  },
  "Tuesday": {
    "Period 2": { subject: "Physics", class: "SS2 Science", room: "Lab 1" },
    "Period 4": { subject: "Physics", class: "SS1 Science", room: "B12" }
  },
  "Wednesday": {
    "Period 1": { subject: "Mathematics", class: "JSS3A", room: "A05" },
    "Period 5": { subject: "Physics", class: "SS2 Science", room: "B12" }
  },
  "Thursday": {
    "Period 3": { subject: "Physics", class: "SS1 Science", room: "Lab 1" }
  },
  "Friday": {
    "Period 2": { subject: "Mathematics", class: "JSS3A", room: "A05" },
    "Period 6": { subject: "Physics", class: "SS2 Science", room: "B12" }
  }
};

export default function TimetablePage() {
  const [currentWeek, setCurrentWeek] = useState<number>(0);

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Calendar className="h-6 w-6" />
          My Timetable
        </h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setCurrentWeek(currentWeek - 1)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" onClick={() => setCurrentWeek(0)}>
            Current Week
          </Button>
          <Button variant="outline" onClick={() => setCurrentWeek(currentWeek + 1)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button asChild>
            <Link href="/teacher/timetable/edit">
              <Plus className="mr-2 h-4 w-4" />
              Edit
            </Link>
          </Button>
        </div>
      </div>

      {/* Timetable Grid */}
      <div className="border rounded-lg overflow-hidden">
        <div className="grid grid-cols-6 border-b">
          <div className="p-3 font-medium bg-gray-50"></div>
          {days.map(day => (
            <div key={day} className="p-3 font-medium bg-gray-50 text-center">
              {day}
            </div>
          ))}
        </div>
        
        {periods.map(period => (
          <div key={period} className="grid grid-cols-6 border-b">
            <div className="p-3 font-medium bg-gray-50 border-r">
              {period}
            </div>
            {days.map(day => (
              <div key={`${day}-${period}`} className="p-3 border-r min-h-16">
                {timetableData[day]?.[period] && (
                  <div className="bg-blue-50 p-2 rounded border border-blue-100">
                    <p className="font-medium">
                      {timetableData[day][period]!.subject}
                    </p>
                    <p className="text-sm">
                      {timetableData[day][period]!.class}
                    </p>
                    <p className="text-xs text-gray-600">
                      {timetableData[day][period]!.room}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-blue-100 border border-blue-200 rounded"></div>
          <span className="text-sm">Your Classes</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-green-100 border border-green-200 rounded"></div>
          <span className="text-sm">Free Periods</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-red-100 border border-red-200 rounded"></div>
          <span className="text-sm">Staff Meetings</span>
        </div>
      </div>
    </div>
  );
}