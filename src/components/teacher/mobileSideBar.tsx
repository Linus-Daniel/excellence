"use client";
import { 
  LayoutDashboard,
  Users,
  BookOpen,
  LineChart,
  ClipboardList,
  Calendar,
  Mail,
  Settings,
  X,
  GraduationCap
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MobileSidebar({ isOpen, onClose }: { 
  isOpen: boolean; 
  onClose: () => void 
}) {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      href: "/teacher",
    },
    {
      name: "My Classes",
      icon: Users,
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
    <div className={cn(
      "fixed inset-0 z-50 md:hidden",
      isOpen ? "block" : "hidden"
    )}>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-primary-dark">
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-full bg-accent">

            <GraduationCap className="h-6 w-6 text-primary-default" />
            </div>
            <span className="font-bold text-md text-accent">Excellence Academy</span>
          </div>
          <button onClick={onClose}>
            <X className="h-5 text-accent w-5" />
          </button>
        </div>
        
        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-3 rounded-lg transition-colors",
                pathname === item.href
                  ? "bg-primary-default text-accent font-medium"
                  : "text-accent hover:text-primary-dark hover:bg-gray-100"
              )}
              onClick={onClose}
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}