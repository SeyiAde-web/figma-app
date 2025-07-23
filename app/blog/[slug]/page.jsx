import Link from "next/link"

// This would normally come from a database or API
const getBlogPost = (slug) => {
  const posts = {
    "getting-started-with-nextjs": {
      title: "Getting Started with Next.js",
      date: "June 15, 2023",
      content: `
        <p>Next.js is a powerful React framework that makes building web applications simple and efficient. In this article, we'll explore the basics of Next.js and how to get started with your first project.</p>
        
        <h2>Why Next.js?</h2>
        <p>Next.js provides a great developer experience with features like:</p>
        <ul>
          <li>Server-side rendering</li>
          <li>Static site generation</li>
          <li>API routes</li>
          <li>File-based routing</li>
          <li>Built-in CSS and Sass support</li>
        </ul>
        
        <h2>Setting Up Your First Project</h2>
        <p>To create a new Next.js project, run the following command:</p>
        <pre><code>npx create-next-app my-next-app</code></pre>
        
        <p>This will set up a new Next.js project with all the necessary configurations. Once the installation is complete, navigate to the project directory and start the development server:</p>
        <pre><code>cd my-next-app
npm run dev</code></pre>
        
        <p>Your Next.js application will be running at http://localhost:3000.</p>
        
        <h2>Creating Pages</h2>
        <p>In Next.js, pages are React components exported from files in the pages directory. Each page is associated with a route based on its filename.</p>
        
        <p>For example, to create a page at /about, you would create a file at pages/about.js:</p>
        <pre><code>// pages/about.js
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page</p>
    </div>
  )
}</code></pre>
      `,
    },
    "power-of-tailwind-css": {
      title: "The Power of Tailwind CSS",
      date: "July 22, 2023",
      content: `
        <p>Tailwind CSS has revolutionized the way developers approach styling in web applications. In this article, we'll explore the benefits of using Tailwind CSS and how it can improve your development workflow.</p>
        
        <h2>What is Tailwind CSS?</h2>
        <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. Instead of pre-designed components, Tailwind provides low-level utility classes that let you build completely custom designs.</p>
        
        <h2>Benefits of Tailwind CSS</h2>
        <ul>
          <li>No more naming CSS classes</li>
          <li>Consistent design system</li>
          <li>Responsive design made easy</li>
          <li>Dark mode support</li>
          <li>Highly customizable</li>
        </ul>
        
        <h2>Getting Started with Tailwind CSS</h2>
        <p>To add Tailwind CSS to your project, install it via npm:</p>
        <pre><code>npm install tailwindcss</code></pre>
        
        <p>Then, create a configuration file:</p>
        <pre><code>npx tailwindcss init</code></pre>
        
        <p>Configure your template paths in tailwind.config.js:</p>
        <pre><code>module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
      `,
    },
    "optimizing-website-performance": {
      title: "Optimizing Website Performance",
      date: "August 10, 2023",
      content: `
        <p>Website performance is crucial for user experience and SEO. In this article, we'll explore various techniques to optimize your website's performance.</p>
        
        <h2>Why Performance Matters</h2>
        <p>A fast website leads to:</p>
        <ul>
          <li>Better user experience</li>
          <li>Higher conversion rates</li>
          <li>Improved SEO rankings</li>
          <li>Lower bounce rates</li>
        </ul>
        
        <h2>Key Performance Metrics</h2>
        <p>When optimizing your website, focus on these key metrics:</p>
        <ul>
          <li>First Contentful Paint (FCP)</li>
          <li>Largest Contentful Paint (LCP)</li>
          <li>First Input Delay (FID)</li>
          <li>Cumulative Layout Shift (CLS)</li>
        </ul>
        
        <h2>Optimization Techniques</h2>
        <h3>1. Optimize Images</h3>
        <p>Use modern image formats like WebP, compress images, and implement lazy loading.</p>
        
        <h3>2. Minimize JavaScript</h3>
        <p>Reduce JavaScript bundle size, defer non-critical scripts, and use code splitting.</p>
        
        <h3>3. Leverage Browser Caching</h3>
        <p>Set appropriate cache headers to allow browsers to cache resources.</p>
        
        <h3>4. Use a Content Delivery Network (CDN)</h3>
        <p>Distribute your content across multiple servers worldwide to reduce latency.</p>
      `,
    },
    "responsive-design-best-practices": {
      title: "Responsive Design Best Practices",
      date: "September 5, 2023",
      content: `
        <p>Responsive design ensures your website looks great on all devices. In this article, we'll cover best practices for creating responsive websites.</p>
        
        <h2>Mobile-First Approach</h2>
        <p>Start designing for mobile devices first, then progressively enhance the design for larger screens. This approach ensures a good experience on smaller devices and helps prioritize content.</p>
        
        <h2>Flexible Grids and Layouts</h2>
        <p>Use CSS Grid and Flexbox for creating flexible layouts that adapt to different screen sizes. Avoid fixed-width elements that might cause horizontal scrolling on mobile devices.</p>
        
        <h2>Responsive Images</h2>
        <p>Use the srcset attribute and picture element to serve different image sizes based on the device's screen size and resolution.</p>
        <pre><code>&lt;img 
  srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w" 
  sizes="(max-width: 600px) 500px, (max-width: 1200px) 1000px, 1500px" 
  src="fallback.jpg" 
  alt="Responsive image"
/&gt;</code></pre>
        
        <h2>Media Queries</h2>
        <p>Use media queries to apply different styles based on the device's characteristics, such as screen width, height, and orientation.</p>
        <pre><code>/* Mobile styles */
@media (max-width: 767px) {
  .container {
    padding: 10px;
  }
}

/* Tablet styles */
@media (min-width: 768px) and (max-width: 1023px) {
  .container {
    padding: 20px;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .container {
    padding: 30px;
  }
}</code></pre>
      `,
    },
  }

  return posts[slug] || null
}

export default function BlogPost({ params }) {
  const { slug } = params
  const post = getBlogPost(slug)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
          <p className="text-lg mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link href="/blog" className="text-indigo-600 hover:text-indigo-800 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-indigo-600 hover:text-indigo-800 font-medium mb-6 block">
          ← Back to Blog
        </Link>

        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-8">{post.date}</p>

          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </div>
  )
}
