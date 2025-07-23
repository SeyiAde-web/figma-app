import Link from "next/link"

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      excerpt: "Learn how to build modern web applications with Next.js, React, and more.",
      date: "June 15, 2023",
      slug: "getting-started-with-nextjs",
    },
    {
      id: 2,
      title: "The Power of Tailwind CSS",
      excerpt: "Discover how Tailwind CSS can streamline your development workflow and improve design consistency.",
      date: "July 22, 2023",
      slug: "power-of-tailwind-css",
    },
    {
      id: 3,
      title: "Optimizing Website Performance",
      excerpt: "Tips and tricks to improve your website's loading speed and overall performance.",
      date: "August 10, 2023",
      slug: "optimizing-website-performance",
    },
    {
      id: 4,
      title: "Responsive Design Best Practices",
      excerpt: "Learn how to create websites that look great on any device, from mobile phones to desktop computers.",
      date: "September 5, 2023",
      slug: "responsive-design-best-practices",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-lg mb-8">Stay updated with our latest articles, news, and insights.</p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <p className="mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-indigo-600 hover:text-indigo-800 font-medium">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
