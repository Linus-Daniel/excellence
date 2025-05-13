"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard,
  Users,
  BookOpen,
  LineChart,
  ClipboardList,
  Calendar,
  Mail,
  Settings,
  GraduationCap,
  School,
  Bookmark,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function TeacherSidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      href: "/teacher",
    },
    {
      name: "My Classes",
      icon: School,
      href: "/teacher/classes",
    },
    {
      name: "Students",
      icon: Users,
      href: "/teacher/students",
    },
    {
      name: "Subjects",
      icon: BookOpen,
      href: "/teacher/subjects",
    },
    {
      name: "Results",
      icon: LineChart,
      href: "/teacher/results",
    },
    {
      name: "Assessments",
      icon: ClipboardList,
      href: "/teacher/assessments",
    },
    {
      name: "Timetable",
      icon: Calendar,
      href: "/teacher/timetable",
    },
    {
      name: "Messages",
      icon: Mail,
      href: "/teacher/messages",
    },
    {
      name: "Settings",
      icon: Settings,
      href: "/teacher/settings",
    },
  ];

  return (
    <div className="hidden md:flex flex-col w-64 border-r bg-white">
      {/* Logo/School Name */}
      <div className="flex items-center justify-center h-16 border-b">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-lg">SchoolName</span>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-3 rounded-lg transition-colors",
                pathname === item.href
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Profile/Status */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="font-medium">AO</span>
            </div>
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
          </div>
          <div>
            <p className="font-medium">Mr. Adebayo</p>
            <p className="text-xs text-gray-500">Mathematics Teacher</p>
          </div>
        </div>
      </div>
    </div>
  );
}