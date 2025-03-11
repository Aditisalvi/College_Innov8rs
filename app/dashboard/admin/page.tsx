"use client";

import { Card } from "@/components/ui/card";
import {
  Users,
  GraduationCap,
  BookOpen,
  LogOut,
  PlusCircle,
  Calendar,
  Bell,
  School,
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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const adminData = {
  name: "Admin User",
  id: "ADM2024001",
  totalStudents: "450",
  totalFaculty: "45",
  totalPrograms: "12",
  scheduledEvents: [
    {
      id: 1,
      name: "Annual Tech Symposium",
      date: "2024-05-15",
      description: "Annual technology showcase event",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Cultural Fest",
      date: "2024-05-20",
      description: "Annual cultural festival",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop",
    },
  ],
  recentNotices: [
    {
      id: 1,
      title: "End Semester Examination Schedule",
      date: "2024-04-19",
      description: "The end semester examinations will commence from May 15th, 2024",
    },
    {
      id: 2,
      title: "Holiday Notice",
      date: "2024-04-18",
      description: "College will remain closed on April 25th due to local elections",
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

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <AdminActionButton
            title="Add Student"
            icon={<Users className="h-5 w-5" />}
            description="Add a new student to the system"
          >
            <div className="space-y-4">
              <div>
                <Label htmlFor="studentName">Student Name</Label>
                <Input id="studentName" placeholder="Enter student name" />
              </div>
              <div>
                <Label htmlFor="studentEmail">Email</Label>
                <Input id="studentEmail" type="email" placeholder="Enter email" />
              </div>
              <div>
                <Label htmlFor="studentProgram">Program</Label>
                <Input id="studentProgram" placeholder="Select program" />
              </div>
              <Button className="w-full">Add Student</Button>
            </div>
          </AdminActionButton>

          <AdminActionButton
            title="Add Faculty"
            icon={<GraduationCap className="h-5 w-5" />}
            description="Add a new faculty member"
          >
            <div className="space-y-4">
              <div>
                <Label htmlFor="facultyName">Faculty Name</Label>
                <Input id="facultyName" placeholder="Enter faculty name" />
              </div>
              <div>
                <Label htmlFor="facultyEmail">Email</Label>
                <Input id="facultyEmail" type="email" placeholder="Enter email" />
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Input id="department" placeholder="Select department" />
              </div>
              <Button className="w-full">Add Faculty</Button>
            </div>
          </AdminActionButton>

          <AdminActionButton
            title="Add Program"
            icon={<School className="h-5 w-5" />}
            description="Add a new academic program"
          >
            <div className="space-y-4">
              <div>
                <Label htmlFor="programName">Program Name</Label>
                <Input id="programName" placeholder="e.g., B.Tech, B.Com" />
              </div>
              <div>
                <Label htmlFor="duration">Duration (years)</Label>
                <Input id="duration" type="number" placeholder="Enter duration" />
              </div>
              <div>
                <Label htmlFor="courses">Courses</Label>
                <Textarea id="courses" placeholder="Enter course names (one per line)" />
              </div>
              <Button className="w-full">Add Program</Button>
            </div>
          </AdminActionButton>

          <AdminActionButton
            title="Add Notice"
            icon={<Bell className="h-5 w-5" />}
            description="Post a new notice"
          >
            <div className="space-y-4">
              <div>
                <Label htmlFor="noticeTitle">Notice Title</Label>
                <Input id="noticeTitle" placeholder="Enter notice title" />
              </div>
              <div>
                <Label htmlFor="noticeDescription">Description</Label>
                <Textarea
                  id="noticeDescription"
                  placeholder="Enter notice description"
                  className="min-h-[100px]"
                />
              </div>
              <Button className="w-full">Post Notice</Button>
            </div>
          </AdminActionButton>

          <AdminActionButton
            title="Add Event"
            icon={<Calendar className="h-5 w-5" />}
            description="Create a new event"
          >
            <div className="space-y-4">
              <div>
                <Label htmlFor="eventName">Event Name</Label>
                <Input id="eventName" placeholder="Enter event name" />
              </div>
              <div>
                <Label htmlFor="eventDate">Event Date</Label>
                <Input id="eventDate" type="date" />
              </div>
              <div>
                <Label htmlFor="eventDescription">Description</Label>
                <Textarea
                  id="eventDescription"
                  placeholder="Enter event description"
                  className="min-h-[100px]"
                />
              </div>
              <div>
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input id="imageUrl" placeholder="Enter image URL" />
              </div>
              <Button className="w-full">Create Event</Button>
            </div>
          </AdminActionButton>
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
            title="Total Programs"
            value={adminData.totalPrograms}
            icon={<School className="h-6 w-6" />}
          />
          <StatCard
            title="Admin ID"
            value={adminData.id}
            icon={<BookOpen className="h-6 w-6" />}
          />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Events Section */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Scheduled Events</h2>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {adminData.scheduledEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{event.name}</h3>
                    <p className="text-sm text-gray-600">Date: {event.date}</p>
                    <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Notices Section */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recent Notices</h2>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {adminData.recentNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <h3 className="font-medium">{notice.title}</h3>
                  <p className="text-sm text-gray-600">Date: {notice.date}</p>
                  <p className="text-sm text-gray-600 mt-2">{notice.description}</p>
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

function AdminActionButton({
  title,
  icon,
  description,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="h-auto py-4 flex flex-col items-center gap-2 text-center"
        >
          <div className="p-2 bg-blue-100 rounded-full text-blue-600">
            {icon}
          </div>
          <span className="font-medium">{title}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}