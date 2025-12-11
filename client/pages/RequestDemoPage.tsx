import { motion } from "framer-motion";
import Header from "../components/Header";

export default function RequestDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 text-center max-w-3xl mx-auto px-6">
        <motion.h1
          className="text-5xl font-bold mb-4 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Request a Personalized Demo
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Experience how Shipzo Logistics can transform your supply chain with real-time tracking,
          automation, and enterprise-grade security.
        </motion.p>
      </section>

      {/* Demo Request Form */}
      <motion.div
        className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-gray-200 mb-20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Fill out the demo request form</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Company Name</label>
            <input
              type="text"
              placeholder="Your company name"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-medium mb-1">How can we help you?</label>
            <textarea
              placeholder="Tell us about your logistics challenges..."
              rows={4}
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="md:col-span-2 bg-primary text-white p-3 rounded-lg font-semibold shadow-lg hover:bg-primary/90 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Request
          </motion.button>
        </form>
      </motion.div>

      {/* Contact Info Section */}
      <motion.div
        className="text-center pb-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Need immediate support?</h3>
        <p className="text-gray-600 mb-2">Our team is available 24/7 for assistance</p>

        <div className="font-semibold text-primary text-lg">
          📞 +91 7338992687<br />
          📧 support@ShipZologistics.com
        </div>
      </motion.div>
    </div>
  );
}
