"use client"
import {motion } from "framer-motion"
import Sidebar from "@/components/admin/sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <motion.div        initial={{ x: -100 }} 
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Sidebar />
      </motion.div>
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}