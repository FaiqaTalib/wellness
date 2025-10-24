import React from "react";
import { motion } from "framer-motion";

// Feature icon with glowing circle wrapper
const FeatureIcon = ({ children, colorClass }) => (
  <span
    className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${colorClass} text-white shadow-md shadow-${colorClass.split("-")[1]}-300/50 flex-shrink-0 mr-3 transition-transform duration-300 group-hover:scale-110`}
  >
    {children}
  </span>
);

const Apps = () => {
  return (
    <section
      id="apps"
      className="relative py-32 overflow-hidden text-gray-800"
      style={{
        background: "linear-gradient(135deg, #b2c5b2 0%, #5f9c7b 100%)",
      }}
    >
      {/* Background Animation Layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-16 w-96 h-96 bg-green-200/40 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-20 w-[28rem] h-[28rem] bg-emerald-300/30 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 via-transparent to-emerald-200/30" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[black] via-[#205e1b] to-[black] text-transparent bg-clip-text animate-gradient-sheen"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Discover the Wellnex Apps
          </motion.h2>
          <motion.div
            className="w-40 h-1 mx-auto mt-5 bg-emerald-400 rounded-full shadow-md shadow-emerald-400/50"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
          <motion.p
            className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Discover the heart of the Wellnex ecosystem two intelligent experiences built to
            empower your <strong>mind</strong> and <strong>body</strong>.
          </motion.p>
        </motion.div>

        {/* App Cards */}
        <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
          {/* --- SoulWhispers --- */}
          <div className="group relative p-10 bg-white backdrop-blur-lg border border-emerald-200 rounded-3xl shadow-[0_0_50px_-10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_70px_-10px_rgba(34,197,94,0.4)] transition-all duration-700 hover:-translate-y-2">
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-green-200/40 rounded-full blur-2xl animate-pulse-slow" />

            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-bold text-gray-900">SoulWhispers</h3>
              <p className="text-sm font-semibold text-emerald-600 uppercase">Mental Health</p>
            </div>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Your intelligent wellness companion designed for{" "}
              <span className="text-emerald-500 font-medium">mental clarity</span> and{" "}
              <span className="text-emerald-500 font-medium">emotional balance</span>.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start group">
                <FeatureIcon colorClass="bg-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </FeatureIcon>
                <div>
                  <p className="font-semibold text-gray-800">AI Powered Mood Tracking</p>
                  <p className="text-gray-500 text-sm">
                    Understand your emotions with intelligent pattern insights.
                  </p>
                </div>
              </li>

              <li className="flex items-start group">
                <FeatureIcon colorClass="bg-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </FeatureIcon>
                <div>
                  <p className="font-semibold text-gray-800">Guided Meditations & Journaling</p>
                  <p className="text-gray-500 text-sm">
                    Elevate focus, reflection, and peace with curated content.
                  </p>
                </div>
              </li>

              <li className="flex items-start group">
                <FeatureIcon colorClass="bg-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h.01M7 14h.01M17 14h.01M12 14h.01M7 18h.01M17 18h.01M12 18h.01M3 20h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </FeatureIcon>
                <div>
                  <p className="font-semibold text-gray-800">Seamless Telehealth Booking</p>
                  <p className="text-gray-500 text-sm">
                    Connect instantly with trusted mental wellness providers.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10 text-center">
              <a
                href="#download-soulwhispers"
                className="inline-block px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-green-500 rounded-full shadow-lg hover:shadow-emerald-400/40 transition-all duration-500 hover:-translate-y-1"
              >
                Download SoulWhispers
              </a>
            </div>
          </div>

          {/* --- GymKey --- */}
          <div className="group relative p-10 bg-white backdrop-blur-lg border border-green-200 rounded-3xl shadow-[0_0_50px_-10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_70px_-10px_rgba(34,197,94,0.4)] transition-all duration-700 hover:-translate-y-2">
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-green-200/40 rounded-full blur-2xl animate-pulse-slow" />

            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-bold text-gray-900">GymKey</h3>
              <p className="text-sm font-semibold text-emerald-600 uppercase">Fitness & Access</p>
            </div>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Your all access digital pass to{" "}
              <span className="text-emerald-500 font-medium">fitness freedom</span>. 
              Connect, track, and perform all in one ecosystem.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start group">
                <FeatureIcon colorClass="bg-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m8 4a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10z" />
                  </svg>
                </FeatureIcon>
                <div>
                  <p className="font-semibold text-gray-800">Smart Check-ins at Gyms</p>
                  <p className="text-gray-500 text-sm">
                    Instant and secure access to all Wellnex partner facilities.
                  </p>
                </div>
              </li>

              <li className="flex items-start group">
                <FeatureIcon colorClass="bg-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6h13v13H9z" />
                  </svg>
                </FeatureIcon>
                <div>
                  <p className="font-semibold text-gray-800">Workout Analytics Dashboard</p>
                  <p className="text-gray-500 text-sm">
                    Visualize your progress and gain performance insights.
                  </p>
                </div>
              </li>

              <li className="flex items-start group">
                <FeatureIcon colorClass="bg-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M3 11h18M5 19h14" />
                  </svg>
                </FeatureIcon>
                <div>
                  <p className="font-semibold text-gray-800">Real-time Class Scheduling</p>
                  <p className="text-gray-500 text-sm">
                    Manage sessions and access live fitness updates easily.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10 text-center">
              <a
                href="#explore-gymkey"
                className="inline-block px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-400 rounded-full shadow-lg hover:shadow-green-400/40 transition-all duration-500 hover:-translate-y-1"
              >
                Explore GymKey
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }

          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 6s ease infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Apps;
