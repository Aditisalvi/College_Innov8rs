"use client";

import { Card } from "@/components/ui/card";
import {
  Users,
  Calendar,
  BookOpen,
  LogOut,
  Clock,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

const facultyData = {
  name: "Dr. Sarah Wilson",
  id: "FAC2024001",
  department: "Computer Science",
  classes: "4 Active Classes",
  students: [
    { id: 1, name: "John Doe", attendance: "85%", performance: "Good" },
    { id: 2, name: "Jane Smith", attendance: "92%", performance: "Excellent" },
  ],
  announcements: [
    {
      id: 1,
      title: "Assignment Submission Deadline Extended",
      date: "2024-04-18",
    },
    {
      id: 2,
      title: "Faculty Meeting Schedule",
      date: "2024-04-22",
    },
  ],
};

export default function FacultyDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Faculty Dashboard</h1>
            <p className="text-gray-600">Welcome, {facultyData.name}</p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="gap-2">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
                <AlertDialogDescription>
                  You will be redirected to the login page.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Active Classes"
            value={facultyData.classes}
            icon={<Clock className="h-6 w-6" />}
          />
          <StatCard
            title="Department"
            value={facultyData.department}
            icon={<Calendar className="h-6 w-6" />}
          />
          <StatCard
            title="Total Students"
            value="120"
            icon={<Users className="h-6 w-6" />}
          />
          <StatCard
            title="Faculty ID"
            value={facultyData.id}
            icon={<BookOpen className="h-6 w-6" />}
          />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Student Performance */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Student Performance</h2>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {facultyData.students.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{student.name}</h3>
                    <p className="text-sm text-gray-600">
                      Attendance: {student.attendance}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">
                      Performance: {student.performance}
                    </div>
                    <Button variant="ghost" size="sm" className="mt-2">
                      <FileText className="h-4 w-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Announcements */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Announcements</h2>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {facultyData.announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <h3 className="font-medium">{announcement.title}</h3>
                  <p className="text-sm text-gray-600">
                    Date: {announcement.date}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-blue-100 rounded-lg text-blue-600">{icon}</div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-xl font-semibold">{value}</p>
        </div>
      </div>
    </Card>
  );
}