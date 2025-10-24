import React from "react";
import { Zap, HeartHandshake, DumbbellIcon } from "lucide-react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const EcosystemGraphic = () => (
    <motion.div
      className="mx-auto max-w-6xl w-full h-[28rem] mt-20 relative flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* 🌿 Soft Background Orbs (Matched with AboutUs) */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-gradient-to-r from-[#4CAF50]/20 via-[#A7F3D0]/30 to-[#BBF7D0]/20 rounded-full blur-[160px] -z-20"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-gradient-to-r from-[#BBF7D0]/40 via-[#6EE7B7]/30 to-[#4CAF50]/40 rounded-full blur-[140px] -z-20"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 💠 Central Node */}
      <motion.div
        className="w-56 h-56 rounded-full bg-white/70 backdrop-blur-xl border border-[#4CAF50]/30 shadow-[0_0_80px_-10px_rgba(76,175,80,0.4)] flex flex-col items-center justify-center relative z-20 hover:shadow-[0_0_120px_-10px_rgba(76,175,80,0.6)] transition-all duration-700"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.8, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <Zap className="w-10 h-10 text-[#4CAF50] drop-shadow-[0_0_6px_rgba(76,175,80,0.5)] animate-pulse" />
        <p className="mt-2 text-xl font-extrabold text-[#1B1B1B]">
          Wellnex Platform
        </p>
        <p className="text-sm text-[#2E2E2E] opacity-80">Core Ecosystem</p>
      </motion.div>

      {/* 🌐 Connecting Lines */}
      <div className="absolute inset-0 z-10">
        <svg viewBox="0 0 800 400" className="w-full h-full">
          <motion.path
            d="M400,200 C220,60 140,60 100,80"
            fill="none"
            stroke="#4CAF50"
            strokeWidth="2.5"
            strokeDasharray="12, 6"
            className="animate-dash"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.3 }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M400,200 C580,340 660,340 700,320"
            fill="none"
            stroke="#A7F3D0"
            strokeWidth="2.5"
            strokeDasharray="12, 6"
            className="animate-dash delay-500"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
            viewport={{ once: true }}
          />
        </svg>
      </div>

      {/* 🫶 SoulWhispers Node */}
      <motion.div
        className="absolute top-10 left-10 w-44 h-28 rounded-2xl border border-[#A7F3D0]/60 shadow-[0_0_25px_-5px_rgba(76,175,80,0.3)] p-4 flex flex-col justify-center items-start text-[#1B1B1B] z-20 hover:scale-110 hover:shadow-[0_0_50px_-10px_rgba(76,175,80,0.4)] transition-all"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.7), rgba(187,247,208,0.5))",
        }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
        viewport={{ once: true }}
      >
        <HeartHandshake className="w-6 h-6 mb-1 text-[#4CAF50] drop-shadow-[0_0_6px_rgba(76,175,80,0.4)]" />
        <p className="font-semibold text-[#1B1B1B]">SoulWhispers</p>
        <p className="text-xs text-[#2E2E2E]/70">Mental Wellness</p>
      </motion.div>

      {/* 🏋️ GymKey Node */}
      <motion.div
        className="absolute bottom-10 right-10 w-44 h-28 rounded-2xl border border-[#A7F3D0]/60 shadow-[0_0_25px_-5px_rgba(76,175,80,0.3)] p-4 flex flex-col justify-center items-start text-[#1B1B1B] z-20 hover:scale-110 hover:shadow-[0_0_50px_-10px_rgba(76,175,80,0.4)] transition-all"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.7), rgba(187,247,208,0.5))",
        }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true }}
      >
        <DumbbellIcon className="w-6 h-6 mb-1 text-[#4CAF50] drop-shadow-[0_0_6px_rgba(76,175,80,0.4)]" />
        <p className="font-semibold text-[#1B1B1B]">GymKey</p>
        <p className="text-xs text-[#2E2E2E]/70">Physical Fitness</p>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden font-[Inter]"
    >
      {/* 🌿 Matching Background (AboutUs Style) */}
      <div className="absolute inset-0 opacity-70">
        <motion.div
          className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-r from-[#4CAF50]/30 via-[#A7F3D0]/20 to-[#BBF7D0]/30 blur-[200px] rounded-full"
          animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-[#BBF7D0]/30 via-[#6EE7B7]/20 to-[#4CAF50]/30 blur-[220px] rounded-full"
          animate={{ x: [0, -40, 40, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 🌐 Ecosystem Graphic */}
      <EcosystemGraphic />

      {/* ✨ Floating Dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[6px] h-[6px] bg-[#4CAF50]/40 rounded-full blur-[2px]"
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

      {/* 🌀 Stroke Animation */}
      <style>
        {`
          @keyframes dash {
            to { stroke-dashoffset: -18; }
          }
          .animate-dash {
            animation: dash 1.2s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;