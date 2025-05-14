"use client";
import { 
  Bell, 
  Mail, 
  Search, 
  Menu,
  User
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import MobileSidebar from "./mobileSideBar";

export default function TeacherNavbar() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);


  return (
    <>
      <MobileSidebar 
        isOpen={mobileSidebarOpen} 
        onClose={() => setMobileSidebarOpen(false)} 
      />
      
      <header className={`bg-white border-primary-dark border-b `}>
        <div className="flex items-center justify-between px-6 py-4">
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          {/* Search Bar */}
          <div className="relative mx-4 flex-1 md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-dark" />
            <Input
              placeholder="Search..."
              className="pl-10 placeholder:text-primary-default"
            />
          </div>
          
          {/* Right Side Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className=" text-primary-default h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className=" text-primary-default h-5 w-5" />
            </Button>
            
            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5 text-primary-default" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
}