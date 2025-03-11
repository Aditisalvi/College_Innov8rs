import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          <GraduationCap className="h-20 w-20 text-blue-600" />
          <h1 className="text-5xl font-bold text-gray-900">
            College Management System
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            A comprehensive platform for managing academic activities, student records,
            and administrative tasks efficiently.
          </p>
          <div className="flex gap-4">
            <Link href="/login">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Login
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Attendance Tracking"
            description="Real-time attendance monitoring system for students and faculty."
          />
          <FeatureCard
            title="Assignment Management"
            description="Submit and grade assignments with ease through our digital platform."
          />
          <FeatureCard
            title="Notice Board"
            description="Stay updated with important announcements and events."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}