"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Plus, 
  ArrowLeft,
  UploadCloud,
  User,
  BookOpen,
  Home,
  Phone,
  Mail,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddStudentPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API call to create student
    router.push("/admin/students");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-8">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => router.back()}
          className="rounded-full"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Plus className="h-6 w-6 text-blue-600" />
          Register New Student
        </h1>
      </div>

      <motion.form 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 bg-white p-6 rounded-lg shadow-sm border"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-blue-700">
              <User className="h-5 w-5" />
              Personal Information
            </h2>
            
            <div>
              <Label>Full Name</Label>
              <Input required />
            </div>
            
            <div>
              <Label>Gender</Label>
              <select className="w-full p-2 border rounded-md" required>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            
            <div>
              <Label>Date of Birth</Label>
              <Input type="date" required />
            </div>
            
            <div>
              <Label>Profile Photo</Label>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gray-100 border flex items-center justify-center">
                  <UploadCloud className="h-5 w-5 text-gray-400" />
                </div>
                <Input type="file" accept="image/*" className="flex-1" />
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-blue-700">
              <BookOpen className="h-5 w-5" />
              Academic Information
            </h2>
            
            <div>
              <Label>Class</Label>
              <select className="w-full p-2 border rounded-md" required>
                <option value="">Select Class</option>
                <option value="JSS1">JSS 1</option>
                <option value="SS1">SS 1</option>
              </select>
            </div>
            
            <div>
              <Label>Department (SS Only)</Label>
              <select className="w-full p-2 border rounded-md">
                <option value="">Not Applicable</option>
                <option value="Science">Science</option>
                <option value="Art">Art</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
            
            <div>
              <Label>Admission Date</Label>
              <Input type="date" required />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-blue-700">
            <Phone className="h-5 w-5" />
            Contact Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Email Address</Label>
              <Input type="email" />
            </div>
            <div>
              <Label>Phone Number</Label>
              <Input type="tel" required />
            </div>
            <div>
              <Label>Residential Address</Label>
              <Input required />
            </div>
          </div>
        </div>

        {/* Guardian Information */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-blue-700">
            <User className="h-5 w-5" />
            Guardian Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Guardian Name</Label>
              <Input required />
            </div>
            <div>
              <Label>Relationship</Label>
              <Input required />
            </div>
            <div>
              <Label>Guardian Phone</Label>
              <Input type="tel" required />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <Button 
            variant="outline" 
            type="button"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            Register Student
          </Button>
        </div>
      </motion.form>
    </div>
  );
}