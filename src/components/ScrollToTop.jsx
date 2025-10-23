import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 100, scale: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 15,
              duration: 0.6,
            },
          }}
          exit={{
            opacity: 0,
            y: 100,
            scale: 0.9,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
          whileHover={{
            scale: 1.15,
            rotate: [0, -5, 5, 0], // playful hover wobble
            transition: { type: "spring", stiffness: 300, damping: 10 },
          }}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg  text-white hover:shadow-cyan-500/50 transition-all backdrop-blur-md border border-white/10" style={{
        background: "linear-gradient(135deg, #b2c5b2 0%, #5f9c7b 100%)",
      }}
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowUp size={22} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
