"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  LineChart,
  School,
  ClipboardList,
  ChevronLeft,
  Menu,
  X
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  { 
    name: "Dashboard", 
    icon: <LayoutDashboard className="h-5 w-5" />, 
    path: "/admin" 
  },
  { 
    name: "Students", 
    icon: <Users className="h-5 w-5" />, 
    path: "/admin/students" 
  },
  { 
    name: "Staff", 
    icon: <School className="h-5 w-5" />, 
    path: "/admin/staff" 
  },
  { 
    name: "Classes", 
    icon: <BookOpen className="h-5 w-5" />, 
    path: "/admin/classes" 
  },
  { 
    name: "Results", 
    icon: <LineChart className="h-5 w-5" />, 
    path: "/admin/results" 
  },
  { 
    name: "Reports", 
    icon: <ClipboardList className="h-5 w-5" />, 
    path: "/admin/reports" 
  },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <>
      {/* Mobile Hamburger Button (only shows on small screens) */}
      <button 
        onClick={toggleMobile}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Desktop Sidebar */}
      <motion.nav
        initial={{ width: 256 }}
        animate={{ 
          width: isCollapsed ? 80 : 256,
          opacity: 1 
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className={cn(
          "hidden md:flex flex-col h-screen bg-primary-default",
          isCollapsed ? "items-center" : ""
        )}
      >
        <div className="p-4 flex items-center justify-between">
          {!isCollapsed && (
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold text-secondary"
            >
              Excellence Academy
            </motion.h1>
          )}
          <button 
            onClick={toggleSidebar}
            className="p-1 rounded-full hover:bg-gray-200"
          >
            <ChevronLeft className={cn(
              "h-5 w-5 text-gray-500 transition-transform",
              isCollapsed ? "rotate-180" : ""
            )} />
          </button>
        </div>

        <ul className="space-y-1 px-2 mt-4">
          {routes.map((route) => (
            <motion.li
              key={route.path}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={route.path}
                className={cn(
                  "flex items-center p-3 rounded-lg text-secondary transition-colors",
                  pathname === route.path 
                    ? "bg-accent text-primary-default font-medium" 
                    : "hover:bg-secondary hover:text-primary-dark"
                )}
              >
                <span className={cn(isCollapsed ? "" : "mr-3")}>
                  {route.icon}
                </span>
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {route.name}
                  </motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobile}
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
            />
            <motion.nav
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-4"
            >
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-xl font-bold text-blue-800">SchoolAdmin</h1>
                <button onClick={toggleMobile}>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <ul className="space-y-2">
                {routes.map((route) => (
                  <motion.li
                    key={route.path}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={route.path}
                      onClick={toggleMobile}
                      className={cn(
                        "flex items-center p-3 rounded-lg",
                        pathname === route.path 
                          ? "bg-blue-100 text-blue-700" 
                          : "hover:bg-gray-100"
                      )}
                    >
                      <span className="mr-3">{route.icon}</span>
                      {route.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}