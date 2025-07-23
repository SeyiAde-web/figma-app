"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, BookOpen, Users, CreditCard, FileText, Settings, LogOut, Search, Bell } from "lucide-react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Home")

  const menuItems = [
    { name: "Home", icon: Home, active: true },
    { name: "Course", icon: BookOpen, active: false },
    { name: "Students", icon: Users, active: false },
    { name: "Payment", icon: CreditCard, active: false },
    { name: "Report", icon: FileText, active: false },
    { name: "Settings", icon: Settings, active: false },
  ]

  const stats = [
    {
      title: "Students",
      value: "243",
      icon: "👥",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "Course",
      value: "13",
      icon: "📚",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-500",
    },
    {
      title: "Payment",
      value: "INR 556,000",
      icon: "💳",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500",
    },
    {
      title: "",
      value: "3",
      icon: "👤",
      bgColor: "bg-yellow-400",
      iconColor: "text-white",
      isHighlighted: true,
    },
  ]

  const handleNavigation = (itemName) => {
    setActiveTab(itemName)
    if (itemName === "Students") {
      window.location.href = "/students"
    }
    // Add other navigation logic here for other pages
  }

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
              <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>
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

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className={`p-6 rounded-xl shadow-sm ${stat.isHighlighted ? stat.bgColor : "bg-white"}`}>
                <div className="flex items-center justify-between">
                  <div>
                    {stat.title && (
                      <p className={`text-sm font-medium ${stat.isHighlighted ? "text-white" : "text-gray-600"}`}>
                        {stat.title}
                      </p>
                    )}
                    <p className={`text-2xl font-bold ${stat.isHighlighted ? "text-white" : "text-gray-900"}`}>
                      {stat.value}
                    </p>
                  </div>
                  <div className={`text-2xl ${stat.isHighlighted ? "" : `p-3 rounded-lg ${stat.bgColor}`}`}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Content Area */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">New student enrolled</p>
                    <p className="text-sm text-gray-500">2 minutes ago</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Payment received</p>
                    <p className="text-sm text-gray-500">1 hour ago</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">New course created</p>
                    <p className="text-sm text-gray-500">3 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
