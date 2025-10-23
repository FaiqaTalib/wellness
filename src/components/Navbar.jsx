import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Rocket,
  Zap,
  Info,
  Smartphone,
  Mail,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about", icon: Info },
  { name: "Apps", href: "#apps", icon: Smartphone },
  { name: "Contact Us", href: "#contact", icon: Mail },
  { name: "Testimonials", href: "#testimonials", icon: Star },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 font-[Inter] transition-all duration-500 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-xl border-b border-emerald-500/20 shadow-lg shadow-emerald-400/10"
          : "bg-transparent"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"
      >
        {/* --- Logo (Extreme Left) --- */}
        <motion.a
          href="/"
          className="flex items-center text-2xl   sm:text-3xl font-extrabold tracking-tight group"  style={{ position:"relative" , left:"-260px"}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Zap className="w-6 h-6 mr-2 text-emerald-400 group-hover:scale-110 transition duration-300" />
          </motion.div>
          <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-teal-300 text-transparent bg-clip-text">
            Wellnex
            <span className="ml-1 text-emerald-400/70">Systems</span>
          </span>
        </motion.a>

        {/* --- Desktop Menu (Right Side) --- */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8 text-gray-200 font-medium text-lg">
            {navLinks.map((item) => (
              <li key={item.name}>
                <motion.a
                  href={item.href}
                  className="relative flex items-center space-x-2 hover:text-emerald-300 focus:text-emerald-300 transition duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-gradient-to-r before:from-emerald-400 before:to-teal-300 hover:before:w-full before:transition-all before:duration-300"
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 8px rgba(52,211,153,0.8)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </motion.a>
              </li>
            ))}
          </ul>

          {/* --- CTA Button --- */}
          <motion.a
            href="#waitlist"
            className="ml-6 px-6 py-2.5 text-base font-bold text-gray-900 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-[0_0_25px_rgba(52,211,153,0.4)] hover:from-emerald-300 hover:to-teal-300 transition duration-300 ease-in-out transform hover:-translate-y-0.5 flex items-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -2, 0] }}
            transition={{
              y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Rocket className="w-4 h-4 mr-2" />
            Join the Movement
          </motion.a>
        </div>

        {/* --- Mobile Menu Button (Right Side) --- */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-emerald-400 p-2 rounded-lg hover:bg-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* --- Mobile Drawer --- */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: menuOpen ? 1 : 0,
          height: menuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`md:hidden bg-gradient-to-b from-gray-950/95 via-emerald-950/80 to-black/90 backdrop-blur-2xl border-t border-emerald-500/20 transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 space-y-3 text-gray-300 font-medium text-lg">
          {navLinks.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: menuOpen ? 1 : 0,
                x: menuOpen ? 0 : -20,
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <motion.a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center space-x-3 w-full py-3 rounded-lg hover:bg-emerald-900/30 hover:text-emerald-300 focus:bg-emerald-900/40 focus:text-emerald-300 transition"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </motion.a>
            </motion.li>
          ))}

          {/* --- Mobile CTA --- */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: menuOpen ? 1 : 0,
              y: menuOpen ? 0 : 20,
            }}
            transition={{
              duration: 0.3,
              delay: navLinks.length * 0.1,
            }}
          >
            <a
              href="#waitlist"
              onClick={() => setMenuOpen(false)}
              className="mt-5 block w-full text-center px-5 py-3 text-gray-900 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] transition duration-300 font-bold focus:outline-none focus:ring-4 focus:ring-emerald-400/40 flex items-center justify-center"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Join the Movement
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
