import React from "react";
import { motion } from "framer-motion";

const Apps = () => {
  return (
    <section
      className="relative py-20 overflow-hidden text-gray-800"
      style={{
        background: "linear-gradient(135deg, #b2c5b2 0%, #5f9c7b 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[black] via-[#205e1b] to-[black] text-transparent bg-clip-text animate-gradient-sheen"
        >
          Discover the Wellnex Apps
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Explore our flagship apps designed to transform your health and
          wellness journey through smart, connected, and intuitive experiences.
        </motion.p>

        {/* App Cards Container */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-center">
          {/* SoulWhispers App */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="relative flex flex-col items-center text-center space-y-6"
          >
            <div className="relative w-[30vw] sm:w-80 md:w-[20vw] aspect-[9/16] rounded-[2.5rem] border-2 border-green-200 bg-white shadow-lg overflow-hidden hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition-all duration-500">
              <img
                src="./mobileapp.jpeg"
                alt="SoulWhispers App"
                className="object-cover w-full h-full"
              />
            </div>

            <h4 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[black] via-[#205e1b] to-[black] text-transparent bg-clip-text animate-gradient-sheen">
              SoulWhispers
            </h4>
            <p className="text-gray-700 max-w-md">
              A mindfulness and wellness app that uses AI-guided reflections and
              emotional journaling to help you find balance, purpose, and peace
              in your daily life.
            </p>
            <button className="inline-block px-8 py-3 font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-400 rounded-full shadow-md hover:shadow-[0_0_20px_4px_rgba(34,197,94,0.3)] transition-all duration-300">
              Learn More
            </button>
          </motion.div>

          {/* GymEasy App */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="relative flex flex-col items-center text-center space-y-6"
          >
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[9/16] rounded-[2.5rem] border-2 border-green-200 bg-white shadow-lg overflow-hidden hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition-all duration-500">
              <img
                src="./gymeasys.jpeg"
                alt="GymEasy App"
                className="object-cover w-full h-full"
              />
            </div>

            <h4 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[black] via-[#205e1b] to-[black] text-transparent bg-clip-text animate-gradient-sheen">
              GymEasy
            </h4>
            <p className="text-gray-700 max-w-md">
              A next-gen fitness companion that integrates smart wearables and
              real-time analytics to track workouts, progress, and personalized
              nutrition goals.
            </p>
            <button className="inline-block px-8 py-3 font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-400 rounded-full shadow-md hover:shadow-[0_0_20px_4px_rgba(34,197,94,0.3)] transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

     {/* Smooth Section Fade Separator */}
<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#064e3b] pointer-events-none"></div>

    </section>
  );
};

export default Apps;
