"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreateStaffPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API call to create staff
    router.push("/admin/staff");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Create New Staff</h1>
        <Button variant="ghost" onClick={() => router.back()}>
          Cancel
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>First Name</Label>
            <Input required />
          </div>
          <div>
            <Label>Last Name</Label>
            <Input required />
          </div>
        </div>

        <div>
          <Label>Email</Label>
          <Input type="email" required />
        </div>

        <div>
          <Label>Staff Type</Label>
          <select className="w-full p-2 border rounded" required>
            <option value="Academic">Academic</option>
            <option value="Non-Academic">Non-Academic</option>
          </select>
        </div>

        <div>
          <Label>Role</Label>
          <Input required />
        </div>

        <div>
          <Label>Profile Photo</Label>
          <Input type="file" accept="image/*" />
        </div>

        <Button type="submit" className="w-full">
          Create Staff
        </Button>
      </form>
    </div>
  );
}