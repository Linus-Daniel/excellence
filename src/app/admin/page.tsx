"use client";
import { motion } from "framer-motion";
import { 
  ArrowUp, Users, BookOpen, GraduationCap, 
  BarChart4, Calendar, AlertCircle 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

// Mock data
const metrics = {
  totalStudents: 1240,
  totalTeachers: 45,
  classes: 12,
  pendingPromotions: 86,
  attendanceRate: 78, // %
  upcomingExams: 3,
};

const recentActivity = [
  { id: 1, action: "Promoted SS2 to SS3", user: "Admin", time: "2 mins ago" },
  { id: 2, action: "Added 15 new students", user: "Admin", time: "1 hour ago" },
];

type CardProps = {
  title:string;
  value:number;
  icon:any;
  trend:string
  variant:string
}

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <motion.h1 
          className="text-xl text-primary-default font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dashboard Overview
        </motion.h1>
        <Button variant={"default"}>Generate Monthly Report</Button>
      </div>

      {/* Metrics Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <MetricCard 
          title="Total Students" 
          value={metrics.totalStudents} 
          icon={<Users className="h-6 w-6" />}
          trend="12% increase"
          variant=""
        />
        <MetricCard 
          title="Teachers" 
          value={metrics.totalTeachers} 
          icon={<GraduationCap className="h-6 w-6" />}
          trend="2 new hires"
          variant=""
        />
        <MetricCard 
          title="Classes" 
          value={metrics.classes} 
          icon={<BookOpen className="h-6 w-6" />}
          trend="3 new sections"
          variant=""
        />
        <MetricCard 
          title="Pending Promotions" 
          value={metrics.pendingPromotions} 
          icon={<AlertCircle className="h-6 w-6 text-yellow-500" />}
          trend="Action required"
          variant="warning"
        />
      </motion.div>

      {/* Charts & Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Attendance Rate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart4 className="h-5 w-5" /> Attendance Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Progress value={metrics.attendanceRate} className="h-3" />
                <p className="text-sm text-muted-foreground">
                  {metrics.attendanceRate}% this month 
                  <span className="text-green-500 flex items-center">
                    <ArrowUp className="h-3 w-3 mr-1" /> 5% improvement
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Exams */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" /> Upcoming Exams
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Array.from({ length: metrics.upcomingExams }).map((_, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <p className="font-medium">Term {i + 1} Exams</p>
                    <span className="text-sm text-muted-foreground">
                      {i + 2} days left
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <Button variant="outline">Promote Students</Button>
              <Button variant="outline">Generate Report Cards</Button>
              <Button variant="outline">Send Notifications</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4">
                  <div className="rounded-full bg-secondary p-2">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

// Reusable Metric Card Component
function MetricCard({ title, value, icon, trend, variant = "default" }:CardProps) {
  const variants = {
    default: "bg-white",
    warning: "bg-yellow-50 border-yellow-200",
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card >
        <CardHeader className="flex flex-row items-center text-primary-default justify-between pb-2">
          <CardTitle className="text-sm font-medium  text-primary-dark">
            {title}
          </CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-primary-default font-bold">{value}</div>
          <p className="text-xs text-muted-foreground mt-1">
            {trend}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}