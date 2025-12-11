import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users, Clock, ShieldCheck, Zap } from "lucide-react";

export default function Advanced() {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights into your shipping patterns and cost optimization opportunities.",
    },
    {
      icon: TrendingUp,
      title: "Growth Solutions",
      description: "Scalable logistics infrastructure designed to grow with your business.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 expert support team tailored to your enterprise needs.",
    },
    {
      icon: Clock,
      title: "Real-time Operations",
      description: "Live tracking and instant notifications for all your shipments.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with international standards.",
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Seamless integration with your existing systems and workflows.",
    },
  ];

  const stats = [
    { value: "150+", label: "Countries Served", icon: "🌍" },
    { value: "10M+", label: "Shipments/Year", icon: "📦" },
    { value: "99.9%", label: "Uptime", icon: "⚡" },
    { value: "24/7", label: "Support", icon: "🎯" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Advanced Logistics Solutions
            </h1>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Experience the next generation of logistics management with our
              cutting-edge technology and enterprise-grade solutions.
            </motion.p>

            <Link to="../RequestDemoPage">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
            >
              Request Demo
            </motion.button></Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-xl transition-all cursor-pointer"
              >
                <p className="text-4xl mb-3">{stat.icon}</p>
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Grid */}
          <div className="mb-20">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-12 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Enterprise Features
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Logistics?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses worldwide that trust us with their supply chain operations.
            </p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Sales
              </motion.button>
            </motion.div>
          </motion.div>

        {/* Testimonial Section */}
          <div className="mt-32">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Trusted by Industry Leaders
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {[
                {
                  name: "John Smith",
                  company: "Global Trade Inc.",
                  quote: "This platform revolutionized how we manage our supply chain.",
                  avatar: "👨‍💼",
                },
                {
                  name: "Sarah Johnson",
                  company: "Premium Logistics",
                  quote: "The best investment we made for our logistics operations.",
                  avatar: "👩‍💼",
                },
                {
                  name: "Michael Chen",
                  company: "Asia Pacific Shipping",
                  quote: "Exceptional support and innovative features throughout.",
                  avatar: "👨‍💼",
                },
                {
                  name: "David Williams",
                  company: "North Star Logistics",
                  quote: "Unmatched accuracy and efficiency — a true game changer for our fleet operations.",
                  avatar: "🧔",
                },
                {
                  name: "Emily Carter",
                  company: "Swift Cargo Solutions",
                  quote: "The automation tools reduced our manual workload by over 60%. Exceptional platform!",
                  avatar: "👩‍💻",
                },
                {
                  name: "Hiroshi Tanaka",
                  company: "Tokyo Freight Corp",
                  quote: "Reliable, fast, and secure. The best logistics management system in the industry.",
                  avatar: "👨‍🏭",
                },
                {
                  name: "Maria Gonzalez",
                  company: "TransGlobal Express",
                  quote: "Customer support is outstanding. They respond within minutes and resolve issues quickly.",
                  avatar: "👩‍💼",
                },
                {
                  name: "Ahmed Khan",
                  company: "DesertLine Shipping",
                  quote: "Integration with our ERP was seamless. Improved visibility across the entire supply chain.",
                  avatar: "👨‍💼",
                },
                {
                  name: "Laura Miller",
                  company: "PrimeWave Distribution",
                  quote: "The real-time tracking dashboard is incredibly intuitive and highly accurate.",
                  avatar: "👩‍🔧",
                },
                {
                  name: "Robert Thompson",
                  company: "West Coast Transport",
                  quote: "We cut delivery delays by 40% after switching. Highly recommended for any enterprise.",
                  avatar: "👨‍💼",
                },
                {
                  name: "Ahmed Khan",
                  company: "DesertLine Shipping",
                  quote: "Integration with our ERP was seamless. Improved visibility across the entire supply chain.",
                  avatar: "👨‍💼",
                },
                {
                  name: "Laura Miller",
                  company: "PrimeWave Distribution",
                  quote: "The real-time tracking dashboard is incredibly intuitive and highly accurate.",
                  avatar: "👩‍🔧",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all"
                >
                  {/* Avatar + Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <p className="text-4xl">{testimonial.avatar}</p>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-gray-600 italic mb-4">
                    "{testimonial.quote}"
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <span key={i} className="text-xl">⭐</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
