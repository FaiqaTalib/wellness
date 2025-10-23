import React from "react";
import { motion } from "framer-motion";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[100vh] text-center py-20 md:py-28 overflow-hidden font-[Inter]">
      
      {/* 🎥 Background Video */}
      <div className="absolute inset-0 z-0 opacity-90">
        <Video />
      </div>

      {/* 🌑 Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />

      {/* ✨ Main Content */}
      <motion.div
        className="relative z-20 max-w-6xl px-6 mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >

        {/* 🌿 Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        >
          <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-teal-300 text-transparent bg-clip-text animate-gradient">
            WELLNESS, REIMAGINED.
          </span>
        </motion.h1>

        {/* 🪷 Subtitle */}
        <motion.p
          className="mt-8 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-200 font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          A unified digital ecosystem empowering{" "}
          <strong className="text-emerald-300 font-semibold">individuals</strong>,{" "}
          <strong className="text-emerald-300 font-semibold">gyms</strong>, and{" "}
          <strong className="text-emerald-300 font-semibold">providers</strong>{" "}
          through intelligent HealthTech innovation and mindful connectivity.
        </motion.p>

        {/* 🌱 CTA Buttons */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        >
          {/* Primary CTA */}
          <motion.a
            href="#waitlist"
            className="group px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(52,211,153,0.6)] transition-all duration-500 hover:-translate-y-1"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Movement
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="#apps"
            className="px-10 py-4 text-lg font-semibold text-white border-2 border-emerald-300/50 rounded-full hover:bg-emerald-400/10 hover:border-emerald-300 transition-all duration-500 backdrop-blur-sm"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Apps
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeHeroText;
