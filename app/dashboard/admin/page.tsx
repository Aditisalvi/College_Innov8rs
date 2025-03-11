"use client";

import { Card } from "@/components/ui/card";
import {
  Users,
  GraduationCap,
  BookOpen,
  LogOut,
  Building,
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

const adminData = {
  name: "Admin User",
  id: "ADM2024001",
  totalStudents: "450",
  totalFaculty: "45",
  totalDepartments: "8",
  recentActivities: [
    {
      id: 1,
      activity: "New Faculty Registration",
      department: "Computer Science",
      date: "2024-04-18",
    },
    {
      id: 2,
      activity: "Student Enrollment",
      department: "Electrical Engineering",
      date: "2024-04-17",
    },
    {
      id: 3,
      activity: "Course Schedule Update",
      department: "Mechanical Engineering",
      date: "2024-04-16",
    },
  ],
  pendingRequests: [
    {
      id: 1,
      type: "Leave Application",
      from: "Dr. Sarah Wilson",
      status: "Pending",
      date: "2024-04-19",
    },
    {
      id: 2,
      type: "Resource Request",
      from: "Prof. James Brown",
      status: "Pending",
      date: "2024-04-18",
    },
  ],
};

export default function AdminDashboard() {
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
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome, {adminData.name}</p>
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
            title="Total Students"
            value={adminData.totalStudents}
            icon={<Users className="h-6 w-6" />}
          />
          <StatCard
            title="Total Faculty"
            value={adminData.totalFaculty}
            icon={<GraduationCap className="h-6 w-6" />}
          />
          <StatCard
            title="Departments"
            value={adminData.totalDepartments}
            icon={<Building className="h-6 w-6" />}
          />
          <StatCard
            title="Admin ID"
            value={adminData.id}
            icon={<BookOpen className="h-6 w-6" />}
          />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recent Activities</h2>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {adminData.recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{activity.activity}</h3>
                    <p className="text-sm text-gray-600">
                      Department: {activity.department}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Date: {activity.date}</p>
                    <Button variant="ghost" size="sm" className="mt-2">
                      <FileText className="h-4 w-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Pending Requests */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Pending Requests</h2>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {adminData.pendingRequests.map((request) => (
                <div
                  key={request.id}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{request.type}</h3>
                      <p className="text-sm text-gray-600">From: {request.from}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full">
                        {request.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Date: {request.date}</p>
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