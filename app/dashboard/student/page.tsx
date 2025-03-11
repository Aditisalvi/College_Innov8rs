"use client";

import { Card } from "@/components/ui/card";
import {
  BookOpen,
  Calendar,
  GraduationCap,
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

const studentData = {
  name: "John Doe",
  id: "STU2024001",
  course: "Computer Science",
  semester: "6th Semester",
  attendance: "85%",
  assignments: [
    { id: 1, subject: "Data Structures", status: "Submitted", grade: "A" },
    { id: 2, subject: "Web Development", status: "Pending", grade: "-" },
  ],
  notices: [
    {
      id: 1,
      title: "Mid-Semester Examination Schedule",
      date: "2024-04-15",
    },
    {
      id: 2,
      title: "Annual Sports Meet Registration",
      date: "2024-04-20",
    },
  ],
};

export default function StudentDashboard() {
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
            <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
            <p className="text-gray-600">Welcome back, {studentData.name}</p>
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
            title="Attendance"
            value={studentData.attendance}
            icon={<Clock className="h-6 w-6" />}
          />
          <StatCard
            title="Semester"
            value={studentData.semester}
            icon={<Calendar className="h-6 w-6" />}
          />
          <StatCard
            title="Course"
            value={studentData.course}
            icon={<BookOpen className="h-6 w-6" />}
          />
          <StatCard
            title="Student ID"
            value={studentData.id}
            icon={<GraduationCap className="h-6 w-6" />}
          />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Assignments */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recent Assignments</h2>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {studentData.assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{assignment.subject}</h3>
                    <p className="text-sm text-gray-600">
                      Status: {assignment.status}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">Grade: {assignment.grade}</div>
                    <Button variant="ghost" size="sm" className="mt-2">
                      <FileText className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Notice Board */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Notice Board</h2>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {studentData.notices.map((notice) => (
                <div
                  key={notice.id}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <h3 className="font-medium">{notice.title}</h3>
                  <p className="text-sm text-gray-600">Date: {notice.date}</p>
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