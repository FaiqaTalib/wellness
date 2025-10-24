import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, HeartPulse } from "lucide-react";

const ProjectCard = ({ image1, image2, title, desc, accent }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // switch image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const accentColor =
    accent === "cyan"
      ? "from-cyan-400 to-teal-300"
      : accent === "teal"
      ? "from-teal-400 to-green-300"
      : "from-blue-500 to-cyan-400";

  return (
    <div className="relative rounded-xl h-[90vh]   overflow-hidden shadow-lg">
      <motion.img
        key={currentImage}
        src={images[currentImage]}
        alt={title}
        className="w-full h-[90vh] object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      />

      <div className={`absolute bottom-0 w-full p-6 bg-gradient-to-t bg-green from-opacity-90 to-opacity-30`}>
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-white/80 mt-2">{desc}</p>
        <button className="mt-3 inline-flex items-center px-4 py-1.5 bg-white text-gray-900 font-semibold rounded-full shadow hover:bg-gray-200 transition text-sm">
          View Details <ArrowRight className="ml-2 w-3 h-3" />
        </button>
      </div>

      {/* Optional decorative icon */}
      <div className="absolute top-4 right-4">
        {accent === "cyan" ? <Dumbbell className="w-8 h-50 text-white/80 animate-pulse" /> : <HeartPulse className="w-8 h-8 text-white/80 animate-pulse" />}
      </div>
    </div>
  );
};

export default ProjectCard;
