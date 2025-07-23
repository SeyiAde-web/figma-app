"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Home,
  BookOpen,
  Users,
  CreditCard,
  FileText,
  Settings,
  LogOut,
  Search,
  Bell,
  Edit,
  Trash2,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Students() {
  const [activeTab, setActiveTab] = useState("Students")

  const menuItems = [
    { name: "Home", icon: Home, active: false },
    { name: "Course", icon: BookOpen, active: false },
    { name: "Students", icon: Users, active: true },
    { name: "Payment", icon: CreditCard, active: false },
    { name: "Report", icon: FileText, active: false },
    { name: "Settings", icon: Settings, active: false },
  ]

  const handleNavigation = (itemName) => {
    setActiveTab(itemName)
    if (itemName === "Home") {
      window.location.href = "/dashboard"
    }
    // Add other navigation logic here
  }

  const studentsData = [
    {
      id: 1,
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: "7305477760",
      enrollNumber: "123456730547760",
      dateOfAdmission: "08 Dec, 2021",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: "7305477760",
      enrollNumber: "123456730547760",
      dateOfAdmission: "08 Dec, 2021",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: "7305477760",
      enrollNumber: "123456730547760",
      dateOfAdmission: "08 Dec, 2021",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: "7305477760",
      enrollNumber: "123456730547760",
      dateOfAdmission: "08 Dec, 2021",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: "7305477760",
      enrollNumber: "123456730547760",
      dateOfAdmission: "08 Dec, 2021",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: "7305477760",
      enrollNumber: "123456730547760",
      dateOfAdmission: "08 Dec, 2021",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: "7305477760",
      enrollNumber: "123456730547760",
      dateOfAdmission: "08 Dec, 2021",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        {/* Header */}
        <div className="p-6 border-b">
          <h1 className="text-lg font-bold text-gray-900">CRUD OPERATIONS</h1>
        </div>

        {/* User Profile */}
        <div className="p-6 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
              <img
                src="/placeholder.svg?height=48&width=48"
                alt="Karthi Madesh"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Karthi Madesh</h3>
              <p className="text-sm text-orange-500">Admin</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon
              return (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavigation(item.name)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === item.name ? "bg-orange-500 text-white" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="absolute bottom-6 left-4 right-4">
          <Link
            href="/signin"
            className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-900">Students List</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Students Content */}
        <div className="p-6">
          {/* Header with Add Button */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Students List</h3>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              onClick={() => (window.location.href = "/add-student")}
            >
              <Plus className="w-4 h-4" />
              <span>ADD NEW STUDENT</span>
            </Button>
          </div>

          {/* Students Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Name</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Email</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Phone</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Enroll Number</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Date of admission</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {studentsData.map((student, index) => (
                  <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                          <img
                            src={student.avatar || "/placeholder.svg"}
                            alt={student.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium text-gray-900">{student.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{student.email}</td>
                    <td className="py-4 px-6 text-gray-600">{student.phone}</td>
                    <td className="py-4 px-6 text-gray-600">{student.enrollNumber}</td>
                    <td className="py-4 px-6 text-gray-600">{student.dateOfAdmission}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
