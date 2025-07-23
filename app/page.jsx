import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">CRUD Operations App</h1>
        <div className="space-x-4">
          <Link
            href="/signin"
            className="inline-block px-6 py-3 text-white font-medium rounded-lg transition-colors"
            style={{ backgroundColor: "#FFA500" }}
          >
            Go to Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}
