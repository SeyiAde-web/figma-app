export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-lg mb-8">We offer a range of services designed to help your business grow and succeed.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Web Development</h2>
            <p>
              We create responsive, user-friendly websites that help you achieve your business goals. Our development
              process focuses on performance, accessibility, and search engine optimization.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Mobile Applications</h2>
            <p>
              Our team develops native and cross-platform mobile applications that provide seamless user experiences. We
              ensure your app works flawlessly across all devices and operating systems.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">UI/UX Design</h2>
            <p>
              We design intuitive and engaging user interfaces that enhance user experience and drive conversions. Our
              design process is collaborative, iterative, and focused on meeting user needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Digital Marketing</h2>
            <p>
              We help you reach your target audience through strategic digital marketing campaigns. Our services include
              SEO, content marketing, social media management, and paid advertising.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
