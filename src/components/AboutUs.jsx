import React from "react";
import { motion } from "framer-motion";
import { Users, HeartHandshake, Lightbulb, Target, Globe2, ShieldCheck } from "lucide-react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="relative overflow-hidden py-24  " style={{
        background: "linear-gradient(135deg, #b2c5b2 0%, #5f9c7b 100%)",
      }}
    >
      {/* 🌫 Floating Gradient Waves Background */}
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
            About Us
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-[#2E2E2E] max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          At <span className="text-green-600 font-semibold">Wellnex Systems</span>, we believe technology should amplify human wellbeing — not complicate it.  
          Our mission is to merge innovation with empathy to create wellness experiences that feel intuitive, personal, and truly human.
        </motion.p>

        {/* 🌟 Floating Glass Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: Users,
              title: "Our People",
              desc: "A diverse team of creators, engineers, and dreamers dedicated to redefining digital wellness.",
            },
            {
              icon: HeartHandshake,
              title: "Our Vision",
              desc: "To create ecosystems that understand and evolve with your lifestyle — not the other way around.",
            },
            {
              icon: Lightbulb,
              title: "Our Innovation",
              desc: "Data meets design — crafting human-centered experiences that foster balance and mindfulness.",
            },
            {
              icon: Target,
              title: "Our Mission",
              desc: "Empowering millions to live healthier, more mindful, and connected lives through intelligent technology.",
            },
            {
              icon: Globe2,
              title: "Global Impact",
              desc: "Serving communities across 15+ countries with sustainable, privacy-driven digital wellness platforms.",
            },
            {
              icon: ShieldCheck,
              title: "Our Promise",
              desc: "Ethical innovation — every solution we create protects user trust, data, and digital wellbeing.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/70 backdrop-blur-2xl border border-green-500/10 rounded-2xl p-8 shadow-[0_0_40px_-10px_rgba(76,175,80,0.25)] hover:shadow-[0_0_60px_-10px_rgba(76,175,80,0.35)] transition-all duration-700 hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 * i }}
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

        {/* ✨ Divider Animation */}
        <motion.div
          className="mt-20 w-44 h-[3px] bg-gradient-to-r from-[#4CAF50] to-[#BBF7D0] mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* 🌍 Closing Line */}
        <motion.p
          className="mt-10 text-lg text-[#1B1B1B]/70 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          “At Wellnex Systems, we don’t just build technology — we nurture harmony between humans and the digital world.”
        </motion.p>
      </motion.div>

      {/* ✨ Floating Dots Animation */}
      {[...Array(14)].map((_, i) => (
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

      {/* 🎨 Gradient Animation CSS */}
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

export default AboutUs;
