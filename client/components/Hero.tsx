import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import image from "../Image/Ship-img.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(23, 23, 60, 0.4) 0%, rgba(31, 115, 183, 0.3) 100%), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%25" style="stop-color:rgb(200,220,240);stop-opacity:1" /><stop offset="100%25" style="stop-color:rgb(230,240,250);stop-opacity:1" /></linearGradient></defs><rect width="1200" height="600" fill="url(%23grad)"/><circle cx="100" cy="100" r="80" fill="rgb(31,115,183)" opacity="0.1"/><circle cx="1000" cy="500" r="120" fill="rgb(11,152,224)" opacity="0.08"/></svg>')`,
      }}
    >
      {/* Soft Glow Parallax */}
      <motion.div
        animate={{ x: [0, 20, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 opacity-60 flex items-center pointer-events-none "
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-l from-blue-50 to-transparent blur-3xl"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">

          {/* 🔥 Animated Text Area */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, staggerChildren: 0.2 },
              },
            }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Unlock the full potential of your supply chain
              </h1>
            </motion.div>

            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="text-lg sm:text-xl text-gray-100 leading-relaxed max-w-lg"
            >
              This is logistics the simple way: Convenient and connected across ocean, land, and air – and with all your needs covered from end to end.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Learn More
              </motion.a>
            </motion.div>

            {/* Trust Section */}
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="pt-8 border-t border-white/20"
            >
              <p className="text-sm text-gray-100 mb-4 font-semibold">Trusted by industry leaders</p>

              <div className="flex flex-wrap gap-6">
                {["Global", "Secure", "24/7", "Reliable"].map((tag) => (
                  <motion.div
                    key={tag}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-white"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">{tag}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 🔥 Animated Hero Image */}
          <div className="hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
              className="relative w-full max-w-md h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden"
            >
              <motion.img
                src={image}
                alt="Hero-img"
                style={{ height: "100%" }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Side Panel */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 hidden xl:flex items-center z-10"
      >
        <Link
          to="/contact"
          className="bg-accent text-white px-6 py-4 rounded-l-xl shadow-2xl block cursor-pointer hover:bg-accent/90 transition"
        >
          <p className="text-sm font-semibold">Need Help?</p>
          <p className="text-xs mt-1">Contact our support</p>
        </Link>
      </motion.div>
    </motion.section>
  );
}
