import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectList = [
    {
      title: "SmartFit Pro",
      desc: "AI-powered workout tracking and personalized training plans to maximize your performance.",
      image1: "https://i.pinimg.com/1200x/45/52/40/4552400ef84d3d18426716a54a134b15.jpg",
      image2: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1200&q=80",
      accent: "cyan",
    },
    {
      title: "MindSync",
      desc: "Guided mindfulness, stress relief, and sleep improvement all in one beautiful experience.",
      image1: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1200&q=80",
      image2: "https://i.pinimg.com/1200x/30/05/93/300593ddfebda3597cfb52632ce93e4e.jpg",
      accent: "teal",
    },
    {
      title: "NutriTrack",
      desc: "Your personal nutrition coach powered by real-time analytics and habit tracking.",
      image1: "https://i.pinimg.com/736x/cd/4b/03/cd4b03fa8f8158f26d9ec12780f2f6bc.jpg",
      image2: "https://i.pinimg.com/1200x/2d/4e/47/2d4e4717f85cc0552b2e46ec4522bddd.jpg",
      accent: "blue",
    },
    {
      title: "Wellness Tracker",
      desc: "Track your wellness journey effectively and stay motivated.",
      image1: "https://i.pinimg.com/736x/cd/4b/03/cd4b03fa8f8158f26d9ec12780f2f6bc.jpg",
      image2: "https://i.pinimg.com/1200x/2d/4e/47/2d4e4717f85cc0552b2e46ec4522bddd.jpg",
      accent: "green",
    },
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projectList.length]);

  // Swipe handling
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => (touchStartX.current = e.changedTouches[0].screenX);
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    if (touchStartX.current - touchEndX.current > 50) nextSlide();
    if (touchStartX.current - touchEndX.current < -50) prevSlide();
  };

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projectList.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projectList.length) % projectList.length);

  return (
    <section className="relative overflow-hidden pt-32 pb-40" style={{ background: "linear-gradient(135deg, #b2c5b2 0%, #5f9c7b 100%)" }}>
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold uppercase text-transparent bg-gradient-to-r from-[black] via-[#205e1b] to-[black] text-transparent bg-clip-text animate-gradient-sheen">
          Wellness Projects
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-[#2E2E2E]">
          Discover how Wellnex Systems is reimagining fitness and wellness through technology, design, and emotion.
        </p>
      </div>

      <div
        className="w-full flex justify-center items-center relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-[90vw] md:w-[60vw]"
          >
            <ProjectCard {...projectList[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/80">
          ◀
        </button>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/80">
          ▶
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 gap-3">
        {projectList.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${currentIndex === idx ? "bg-[#4CAF50]" : "bg-gray-400"}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
