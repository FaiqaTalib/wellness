import React from "react";
import { motion } from "framer-motion";
import { Watch, Salad, Building2 } from "lucide-react";

const FutureSection = () => {
  return (
    <section
      id="future"
      className="relative overflow-hidden py-24"
      style={{
        background: "linear-gradient(135deg, #b2c5b2 0%, #5f9c7b 100%)",
      }}
    >
      {/* 🌫 Animated Gradient Waves Background */}
      <div className="absolute inset-0 opacity-60">
        <motion.div
          className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-r from-[#4CAF50]/30 via-[#A7F3D0]/20 to-[#BBF7D0]/30 blur-[180px] rounded-full"
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-[#BBF7D0]/30 via-[#6EE7B7]/20 to-[#4CAF50]/30 blur-[200px] rounded-full"
          animate={{ x: [0, -50, 50, 0], y: [0, 40, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 🌿 Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-8 sm:px-10 lg:px-16 text-center"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1B1B1B] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-gradient-to-r from-black via-[#0f6a28] to-black text-transparent bg-clip-text animate-gradient-sheen">
            Built for the Future
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-[#2E2E2E] max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Cloud-native, mobile-first, and privacy-conscious
        </motion.p>

        {/* 🚀 Cards Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: Watch,
              title: "Wearable Integration",
              desc: "Sync your fitness devices for real-time wellness insights.",
            },
            {
              icon: Salad,
              title: "Nutrition & Meal Planning",
              desc: "Personalized nutrition tracking that adapts to your lifestyle.",
            },
            {
              icon: Building2,
              title: "Corporate Wellness Dashboards",
              desc: "Empower teams with analytics-driven workplace wellness tools.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/70 backdrop-blur-2xl border border-green-500/10 rounded-2xl p-8 shadow-[0_0_40px_-10px_rgba(76,175,80,0.25)] hover:shadow-[0_0_60px_-10px_rgba(76,175,80,0.35)] transition-all duration-700 hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 * i }}
              whileHover={{
                scale: 1.06,
                rotate: [-0.3, 0.3, -0.3, 0],
                transition: { duration: 0.6 },
              }}
            >
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-5 bg-green-100/30 rounded-full shadow-inner">
                  <item.icon className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1B1B1B]">{item.title}</h3>
                <p className="text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✨ Divider */}
        <motion.div
          className="mt-20 w-44 h-[3px] bg-gradient-to-r from-[#4CAF50] to-[#BBF7D0] mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* 🌍 Coming Soon Section */}
        <motion.div
          className="mt-16 space-y-6 text-[#1B1B1B]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold">What’s Coming Next</h3>
          <p className="text-lg max-w-2xl mx-auto">
            We’re building a unified <span className="font-semibold text-green-700">Wellnex Platform</span> that
            brings together fitness, nutrition, mental health, and diagnostics into a single intelligent dashboard.
          </p>
          <p className="italic text-[#1B1B1B]/70">
            Whether you're a user, trainer, or clinic — Wellnex will be your digital wellness command center.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-10 py-4 text-lg font-semibold bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition-all"
          >
            Get Early Access
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ✨ Floating Dots Animation */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[6px] h-[6px] bg-green-400/30 rounded-full blur-[2px]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 5 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* 🌈 Gradient Animation CSS */}
      <style>
        {`
          @keyframes gradient-sheen {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-sheen {
            background-size: 200% 200%;
            animation: gradient-sheen 6s ease infinite;
          }
        `}
      </style>
    </section>
  );
};

export default FutureSection;
