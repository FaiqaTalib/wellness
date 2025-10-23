import React from "react";
import { Mail, Globe, Heart, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative text-gray-300 py-20 overflow-hidden " style={{
        background: "linear-gradient(135deg, #b2c5b2 0%, #5f9c7b 100%)",
      }}>
      {/* Decorative Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-cyan-500/20 pb-12 mb-12">
          {/* --- Brand --- */}
          <div className="md:col-span-2">
            <a href="/" className="text-3xl font-extrabold tracking-tight group">
              <span className="bg-gradient-to-r from-green-600 via-[#205e1b] to-[light-green] font-semibold text-transparent bg-clip-text animate-gradient-sheen text-xl  mb-4 relative bg-clip-text flex items-center">
                <Zap className="w-6 h-6 mr-2  text-green-900 transition-transform duration-300 group-hover:rotate-12" />
                Wellnex Systems
              </span>
            </a>
            <p className="mt-3 text-[black] text-lg max-w-md leading-relaxed">
              Empowering wellness through intelligent digital ecosystems
              connecting emotional balance and physical vitality.
            </p>
          </div>

          {/* --- Quick Links --- */}
          <div>
            <h3 className="bg-gradient-to-r from-green-600 via-[#205e1b] to-[light-green] font-semibold text-transparent bg-clip-text animate-gradient-sheen text-xl  mb-4 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-[2px] bg-gradient-to-r from-green-900 to-green-900 rounded-full"></span>
            </h3>
            <ul className="space-y-3 mt-3 text-[black]">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Apps", href: "#apps" },
                { label: "Contact Us", href: "#contact" },
                { label: "Testimonials", href: "#testimonials" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-green-900 transition-colors duration-300 flex items-center space-x-1 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-all"></span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Contact --- */}
          <div>
            <h3 className="bg-gradient-to-r from-green-600 via-[#205e1b] to-[light-green] font-semibold text-transparent bg-clip-text animate-gradient-sheen text-xl  mb-4 relative">
              Contact
              <span className="absolute bottom-0 left-0 w-10 h-[2px] bg-gradient-to-r from-green-900 to-green-900 rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-gray-400 mt-3">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-green-900" />
                <a
                  href="mailto:info@wellnexsystems.com"
                  className="hover:text-green-900 text-[black] transition"
                >
                  info@wellnexsystems.com
                </a>
              </li>
              <li className="flex items-center">
                <Globe className="w-5 h-5 mr-3 text-green-900" />
                <a
                  href="https://www.wellnexsystems.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-900 text-[black] transition"
                >
                  wellnexsystems.com
                </a>
              </li>
            </ul>

            <a
              href="mailto:info@wellnexsystems.com"
              className="inline-flex items-center mt-6 px-5 py-2.5 text-sm font-semibold text-gray-900  rounded-full shadow-md hover:shadow-green-500/40 hover:scale-105 transition duration-300 focus:outline-none focus:ring-4 focus:ring-green-300/40"  style={{
        background: "linear-gradient(135deg, #b2c5b2 0%, #5f9c7b 100%)",
      }}
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0 flex items-center bg-gradient-to-r from-green-600 via-[#205e1b] to-[green] font-semibold text-transparent bg-clip-text  text-xl  mb-4 relative">
            © {new Date().getFullYear()} Wellnex Systems. Built with
            <Heart className="w-4 h-4 mx-1 text-green-900 animate-pulse" /> in
            Pakistan.
          </p>

          <div className="space-x-6">
            <a href="#" className="hover:text-green-900 text-[black]  transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-900 text-[black] transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
