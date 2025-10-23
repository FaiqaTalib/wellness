import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Abdullah Bilal",
      role: "Gym Trainer",
      image: "https://i.pinimg.com/736x/d4/d1/99/d4d1995412476c02e1ff0dff84d30529.jpg",
      quote: "Wellnexx transformed my approach to wellness. The holistic programs helped me find balance between my physical health and mental well-being. I've never felt more centered and energized.",
      rating: 5,
      program: "Yoga & Meditation"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "The nutrition coaching at Wellnexx completely changed my relationship with food. I learned to nourish my body properly while still enjoying delicious meals. My energy levels have never been better.",
      rating: 5,
      program: "Nutrition Coaching"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The personal training sessions were exactly what I needed. My trainer understood my goals and created a program that worked with my busy schedule. I've achieved results I never thought possible.",
      rating: 5,
      program: "Personal Training"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "The mindfulness program helped me manage stress and improve my focus. I'm more productive at work and present with my family. Wellnexx gave me tools for life.",
      rating: 5,
      program: "Mindfulness & Wellness"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="testimonials" ref={ref}>
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="testimonials-title bg-gradient-to-r from-[black] via-[#205e1b] to-[black] text-transparent bg-clip-text animate-gradient-sheen">What Our Clients Say</h2>
          <p className="testimonials-subtitle">
            Real stories from real people who transformed their lives with Wellnexx
          </p>
        </motion.div>

        <motion.div
          className="testimonials-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="testimonial-main">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="testimonial-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-quote">
                  <div className="quote-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  <p className="quote-text">"{testimonials[currentTestimonial].quote}"</p>
                </div>
                
                <div className="testimonial-author">
                  <div className="author-image">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                    />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                    <p className="author-role">{testimonials[currentTestimonial].role}</p>
                    <p className="author-program">{testimonials[currentTestimonial].program}</p>
                    <div className="rating">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonial-navigation">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`nav-dot ${currentTestimonial === index ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="testimonials-stats"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="stats-grid">
            <div className="stat-item">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Success Stories</p>
            </div>
            <div className="stat-item">
              <h3>4.9/5</h3>
              <p>Average Rating</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Would Recommend</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="testimonials-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className='bg-gradient-to-r from-[black] via-[#205e1b] to-[black] text-transparent bg-clip-text animate-gradient-sheen'>Ready to Start Your Transformation?</h3>
          <p>Join hundreds of satisfied clients who have transformed their lives with Wellnexx.</p>
          <motion.button
            className="cta-button"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Begin Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
