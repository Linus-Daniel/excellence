"use client";
import { 
  User, 
  Mail, 
  Lock, 
  Bell,
  BookOpen,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function SettingsPage() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">
            <User className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="account">
            <Lock className="h-4 w-4 mr-2" />
            Account
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="subjects">
            <BookOpen className="h-4 w-4 mr-2" />
            Subjects
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="h-4 w-4 mr-2" />
            Security
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-c-2 gap-6">
              <div>
                <Label>First Name</Label>
                <Input value="Adebayo" />
              </div>
              <div>
                <Label>Last Name</Label>
                <Input value="Ogunlesi" />
              </div>
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" value="adebayo@school.edu.ng" />
            </div>
            <div>
              <Label>Phone Number</Label>
              <Input type="tel" value="+2348012345678" />
            </div>
            <div className="flex justify-end">
              <Button>Update Profile</Button>
            </div>
          </div>
        </TabsContent>

        {/* Account Tab */}
        <TabsContent value="account">
          <div className="space-y-6">
            <div>
              <Label>Department</Label>
              <Input value="Science" disabled />
            </div>
            <div>
              <Label>Subjects Assigned</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="bg-blue-50 border-blue-200">
                  Physics
                </Badge>
                <Badge variant="outline" className="bg-blue-50 border-blue-200">
                  Mathematics
                </Badge>
              </div>
            </div>
            <div>
              <Label>Classes Assigned</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="bg-green-50 border-green-200">
                  SS2 Science
                </Badge>
                <Badge variant="outline" className="bg-green-50 border-green-200">
                  JSS3A
                </Badge>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label>Email Notifications</Label>
                <p className="text-sm text-gray-600">Receive email notifications</p>
              </div>
              <Input type="checkbox" className="h-5 w-5" checked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Result Alerts</Label>
                <p className="text-sm text-gray-600">Get notified when results are submitted</p>
              </div>
              <Input type="checkbox" className="h-5 w-5" checked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Meeting Reminders</Label>
                <p className="text-sm text-gray-600">Remind me about upcoming meetings</p>
              </div>
              <Input type="checkbox" className="h-5 w-5" checked />
            </div>
            <div className="flex justify-end">
              <Button>Save Preferences</Button>
            </div>
          </div>
        </TabsContent>

        {/* Subjects Tab */}
        <TabsContent value="subjects">
          <div className="space-y-6">
            <div>
              <Label>Preferred Subjects</Label>
              <p className="text-sm text-gray-600 mb-4">
                Select subjects you're qualified to teach
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Input type="checkbox" id="math" className="h-5 w-5" checked />
                  <Label htmlFor="math">Mathematics</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Input type="checkbox" id="physics" className="h-5 w-5" checked />
                  <Label htmlFor="physics">Physics</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Input type="checkbox" id="further-math" className="h-5 w-5" />
                  <Label htmlFor="further-math">Further Mathematics</Label>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button>Update Subjects</Button>
            </div>
          </div>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <div className="space-y-6">
            <div>
              <Label>Current Password</Label>
              <Input type="password" />
            </div>
            <div>
              <Label>New Password</Label>
              <Input type="password" />
            </div>
            <div>
              <Label>Confirm New Password</Label>
              <Input type="password" />
            </div>
            <div className="flex justify-end">
              <Button>Change Password</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}