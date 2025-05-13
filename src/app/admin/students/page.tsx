"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Plus, Search, Upload, Edit, Trash2, Eye 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

// Mock data with images
const studentData = [
  {
    id: "JSS1-001",
    name: "Adeola Musa",
    class: "JSS1",
    department: null,
    image: "/students/adeola.jpg",
    gender: "Female",
    admissionDate: "2023-09-01"
  },
  {
    id: "SS2-015",
    name: "Chinedu Obi",
    class: "SS2",
    department: "Science",
    image: "/students/chinedu.jpg",
    gender: "Male",
    admissionDate: "2022-09-01"
  },
  {
    id: "SS1-023",
    name: "Fatima Ahmed",
    class: "SS1",
    department: "Art",
    image: "/students/fatima.jpg",
    gender: "Female",
    admissionDate: "2023-09-01"
  },
];

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState(studentData);
  const [filteredStudents, setFilteredStudents] = useState(studentData);

  useEffect(() => {
    const results = students.filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.class.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudents(results);
  }, [searchTerm, students]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold text-gray-900"
        >
          Student Management
        </motion.h1>
        <div className="flex gap-2">
          <Link href="/admin/students/add">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" /> Add Student
            </Button>
          </Link>
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" /> Bulk Import
          </Button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-4 rounded-lg shadow-sm border"
      >
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search students by name, ID or class..."
              className="pl-10 pr-4 py-2 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select className="p-2 border rounded-md text-sm">
            <option>All Classes</option>
            <option>JSS1</option>
            <option>SS1</option>
          </select>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg border shadow-sm overflow-hidden"
      >
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[100px]">Photo</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Admission Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.id} className="hover:bg-gray-50">
                <TableCell>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={student.image} />
                    <AvatarFallback>
                      {student.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{student.name}</div>
                  <div className="text-sm text-gray-500">{student.id}</div>
                </TableCell>
                <TableCell>{student.class}</TableCell>
                <TableCell>
                  {student.department ? (
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {student.department}
                    </span>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </TableCell>
                <TableCell>
                  {new Date(student.admissionDate).toLocaleDateString()}
                </TableCell>
                <TableCell className="flex justify-end gap-2">
                  <Link href={`/admin/students/${student.id}`}>
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4 text-blue-600" />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4 text-gray-600" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
}