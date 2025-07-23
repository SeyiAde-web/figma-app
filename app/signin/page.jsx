"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle sign in logic here
    console.log("Sign in attempt:", formData)
    // Navigate to dashboard after successful sign in
    window.location.href = "/dashboard"
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#FFA500" }}>
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-xl font-bold text-gray-900 mb-2">CRUD OPERATIONS</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">SIGN IN</h2>
            <p className="text-gray-600 text-sm">Enter your credentials to access your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full py-3 text-white font-medium rounded-lg transition-colors"
              style={{ backgroundColor: "#FFA500" }}
            >
              Sign In
            </Button>
          </form>

          {/* Forgot Password Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Forgot your password?{" "}
              <Link href="/reset-password" className="font-medium hover:underline" style={{ color: "#FFA500" }}>
                Reset Password
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
