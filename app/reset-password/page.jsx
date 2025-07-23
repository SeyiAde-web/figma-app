"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ResetPassword() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle password reset logic here
    console.log("Password reset for:", email)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#FFA500" }}>
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-xl font-bold text-gray-900 mb-2">CRUD OPERATIONS</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">RESET PASSWORD</h2>
            <p className="text-gray-600 text-sm">
              {isSubmitted
                ? "Check your email for reset instructions"
                : "Enter your email to receive reset instructions"}
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full py-3 text-white font-medium rounded-lg transition-colors"
                style={{ backgroundColor: "#FFA500" }}
              >
                Send Reset Link
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800">Reset link sent successfully!</p>
              </div>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="w-full py-3 font-medium rounded-lg"
              >
                Send Another Link
              </Button>
            </div>
          )}

          {/* Back to Sign In Link */}
          <div className="text-center mt-6">
            <Link href="/signin" className="text-sm font-medium hover:underline" style={{ color: "#FFA500" }}>
              ← Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
