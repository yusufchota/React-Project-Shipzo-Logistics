import React, { useState } from "react";
import { motion } from "framer-motion";
import image from "../Image/Y-Logo (1).png";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* <Header /> */}

      <div className="w-full fixed top-0 left-0 bg-white shadow-md p-4 z-50">
        {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img src={image} alt="LOGO"/>
            </div>
            <span className="hidden sm:inline">Shipzo Logistics</span>
          </Link>
      </div>


      <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6 pt-28">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl grid md:grid-cols-2 gap-12 p-10"
        >
          {/* LEFT SIDE */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold mb-4 text-blue-700"
            >
              Get in Touch
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-gray-600 mb-8"
            >
              Have questions? Fill the form and our team will reach out to you shortly.
            </motion.p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Input */}
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all focus:shadow-lg"
                  placeholder="Enter your name"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-gray-700 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all focus:shadow-lg"
                  placeholder="Enter your email"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all focus:shadow-lg"
                  placeholder="Write your message..."
                ></textarea>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-800">Contact Information</h3>

            <div className="text-gray-700 space-y-3 text-lg">
              <p><strong>Address:</strong> 123 Logistics Street, Chennai, India</p>
              <p><strong>Email:</strong> support@ShipZologistics.com</p>
              <p><strong>Phone:</strong> +91 7338992687</p>
              <p><strong>Office Hours:</strong> Mon – Sat, 9 AM – 7 PM</p>
            </div>

            {/* MAP CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-64 rounded-xl overflow-hidden shadow-xl border"
            >
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31091.052525729314!2d80.1344913!3d13.0826809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d549d0d38f%3A0x8e74a2d7ea5d7471!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v0000000000"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
