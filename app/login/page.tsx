"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, User } from "lucide-react";

// Sample user data
const users = [
  {
    username: "john_student",
    password: "Student@123",
    role: "student",
    id: "STU2024001",
  },
  {
    username: "sarah_teacher",
    password: "Teacher@123",
    role: "teacher",
    id: "FAC2024001",
  },
  {
    username: "admin_user",
    password: "Admin@123",
    role: "admin",
    id: "ADM2024001",
  },
];

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    role: "",
    general: "",
  });

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({
      username: "",
      password: "",
      role: "",
      general: "",
    });

    // Validate fields
    let hasErrors = false;
    
    if (!formData.username.trim()) {
      setErrors(prev => ({ ...prev, username: "Username is required" }));
      hasErrors = true;
    }

    if (!formData.password) {
      setErrors(prev => ({ ...prev, password: "Password is required" }));
      hasErrors = true;
    } else if (!validatePassword(formData.password)) {
      setErrors(prev => ({
        ...prev,
        password: "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character",
      }));
      hasErrors = true;
    }

    if (!formData.role) {
      setErrors(prev => ({ ...prev, role: "Role is required" }));
      hasErrors = true;
    }

    if (hasErrors) return;

    // Check credentials
    const user = users.find(
      (u) =>
        u.username === formData.username &&
        u.password === formData.password &&
        u.role === formData.role
    );

    if (user) {
      // Redirect based on role
      switch (user.role) {
        case "student":
          router.push("/dashboard/student");
          break;
        case "teacher":
          router.push("/dashboard/faculty");
          break;
        case "admin":
          router.push("/dashboard/admin");
          break;
      }
    } else {
      setErrors(prev => ({
        ...prev,
        general: "Invalid credentials. Please try again.",
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-gray-500">
              Please sign in to access your dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="username"
                    placeholder="Enter your username"
                    className="pl-10"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </div>
                {errors.username && (
                  <p className="text-sm text-red-500">{errors.username}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select
                  value={formData.role}
                  onValueChange={(value) =>
                    setFormData({ ...formData, role: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
                {errors.role && (
                  <p className="text-sm text-red-500">{errors.role}</p>
                )}
              </div>
            </div>

            {errors.general && (
              <p className="text-sm text-red-500 text-center">{errors.general}</p>
            )}

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}