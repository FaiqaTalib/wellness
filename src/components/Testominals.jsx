import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const QuoteIcon = ({ colorClass }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-10 h-10 ${colorClass} opacity-40 mb-4`}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M9.983 3v7c0 1.957-1.352 2.96-4.036 2.96-.738 0-1.282-.097-1.65-.194v-4.721c1.272.288 2.378.89 2.378 2.21 0 .614-.236 1.054-.91 1.054-.984 0-1.898-.568-1.898-2.287v-7.989h4.098zm9.983 0v7c0 1.957-1.352 2.96-4.036 2.96-.738 0-1.282-.097-1.65-.194v-4.721c1.272.288 2.378.89 2.378 2.21 0 .614-.236 1.054-.91 1.054-.984 0-1.898-.568-1.898-2.287v-7.989h4.098z" />
  </svg>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ayesha R.",
      role: "SoulWhispers User, Karachi",
      quote:
        "SoulWhispers helped me find calm in chaos. It feels like having therapy in my pocket  the guided meditations are truly transformative.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      color: "from-[#6EE7B7]/20 to-[#A7F3D0]/30",
      accent: "text-green-600",
    },
    {
      name: "Imran M.",
      role: "GymKey Partner, Lahore",
      quote:
        "GymKey has completely redefined how I run my gym. My members love the smart check-ins  it’s fast, secure, and futuristic.",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      color: "from-[#BBF7D0]/25 to-[#4CAF50]/30",
      accent: "text-green-700",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24"
      style={{
        background: "linear-gradient(135deg, #b2c5b2 0%, #5f9c7b 100%)",
      }}
    >
      {/* 🌿 Animated Gradient Backgrounds */}
      <div className="absolute inset-0 opacity-60">
        <motion.div
          className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-r from-[#A7F3D0]/30 via-[#BBF7D0]/20 to-[#4CAF50]/30 blur-[200px] rounded-full"
          animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-[#4CAF50]/20 via-[#A7F3D0]/20 to-[#BBF7D0]/20 blur-[220px] rounded-full"
          animate={{ x: [0, -50, 50, 0], y: [0, 40, -40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 🌟 Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-8 sm:px-10 lg:px-16 text-center"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1B1B1B] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-gradient-to-r from-black via-[#0f6a28] to-black text-transparent bg-clip-text animate-gradient-sheen">
            Real Results, Real People
          </span>
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-[#2E2E2E] max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hear from those who’ve embraced{" "}
          <span className="text-green-700 font-semibold">Wellnex</span> 
          transforming how they care for their body and mind.
        </motion.p>

        {/* ✨ Testimonials Cards */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              className="relative p-10 bg-white/70 backdrop-blur-2xl border border-green-500/10 rounded-2xl shadow-[0_0_40px_-10px_rgba(76,175,80,0.25)] hover:shadow-[0_0_60px_-10px_rgba(76,175,80,0.35)] transition-all duration-700 hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 * i }}
              whileHover={{
                scale: 1.03,
                rotate: [-0.3, 0.3, -0.3, 0],
                transition: { duration: 0.6 },
              }}
            >
              {/* Gradient hover overlay */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${t.color} opacity-0 group-hover:opacity-100 transition duration-500`}
              ></div>

              <div className="relative flex flex-col items-center text-center z-10">
                <QuoteIcon colorClass={t.accent} />
                <p className="text-xl italic font-medium text-gray-800 leading-relaxed mb-6">
                  “{t.quote}”
                </p>
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-4 border-green-100 shadow-md mb-3"
                />
                <p className="text-lg font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-600">{t.role}</p>
              </div>
            </motion.blockquote>
          ))}
        </div>

        {/* 🌿 Divider */}
        <motion.div
          className="mt-20 w-44 h-[3px] bg-gradient-to-r from-[#4CAF50] to-[#BBF7D0] mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Closing Line */}
        <motion.p
          className="mt-10 text-lg text-[#1B1B1B]/70 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          “Every story reflects our mission  nurturing harmony between wellness and innovation.”
        </motion.p>
      </motion.div>

      {/* 🌱 Floating Dots */}
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

      {/* ✨ Gradient Animation CSS */}
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

export default Testimonials;
