"use client";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";

const staffMembers = [
  {
    id: "STF-001",
    name: "Mr. Adebayo",
    role: "Mathematics Teacher",
    type: "Academic",
    image: "/avatars/adebayo.jpg",
    email: "adebayo@school.edu.ng"
  },
  {
    id: "STF-002",
    name: "Mrs. Chika",
    role: "Librarian",
    type: "Non-Academic",
    image: "/avatars/chika.jpg",
    email: "chika@school.edu.ng"
  },
];

export default function StaffPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Staff Management</h1>
        <Link href="/admin/staff/create">
          <Button>
            <Plus className="mr-2" /> Create Staff
          </Button>
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <Input placeholder="Search staff..." className="max-w-sm" />
        <select className="p-2 border rounded">
          <option>All Staff</option>
          <option>Academic</option>
          <option>Non-Academic</option>
        </select>
      </div>

      {/* Staff Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Photo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {staffMembers.map((staff) => (
            <TableRow key={staff.id}>
              <TableCell>
                <Avatar>
                  <AvatarImage src={staff.image} />
                  <AvatarFallback>{staff.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>
                <Link href={`/admin/staff/${staff.id}`} className="font-medium hover:underline">
                  {staff.name}
                </Link>
                <p className="text-sm text-muted-foreground">{staff.email}</p>
              </TableCell>
              <TableCell>{staff.role}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  staff.type === "Academic" 
                    ? "bg-blue-100 text-blue-800" 
                    : "bg-green-100 text-green-800"
                }`}>
                  {staff.type}
                </span>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/admin/staff/${staff.id}/edit`}>Edit</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}