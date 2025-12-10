import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import image from "../Image/Y-Logo (1).png";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "Tracking", href: "#tracking" },
    { label: "Schedules", href: "#schedules" },
    { label: "Company", href: "#company" },
    { label: "Contact", href: "/contact" },
  ];

  const advancedLink = { label: "Advanced", path: "/advanced" };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full border-b border-gray-100 fixed top-0 z-50 bg-white shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER MAIN ROW */}
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img src={image} alt="LOGO" />
              </div>
              <span className="hidden sm:inline">Shipzo Logistics</span>
            </Link>
          </motion.div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
              >
                {link.href.startsWith("#") ? (
                  <a
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </motion.div>
            ))}

            {/* ADVANCED BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.4 }}
            >
              <Link
                to="/advanced"
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Advanced
              </Link>
            </motion.div>
          </nav>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/login"
                className="hidden sm:inline-flex px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Login
              </Link>
            </motion.div>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden pb-4 border-t border-gray-100"
          >
            <nav className="flex flex-col gap-4 pt-4">
              {navigationLinks.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              <Link
                to="/advanced"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Advanced
              </Link>

              {/* MOBILE LOGIN BUTTONS */}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <Link
                  to="/login"
                  className="text-sm font-medium text-primary text-center hover:text-primary/80 transition-colors"
                >
                  Login
                </Link>

                <Link
                  to="/login"
                  className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
                >
                  Register
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

