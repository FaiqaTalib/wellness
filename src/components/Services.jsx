import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Services.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const services = [
    {
      id: 1,
      title: "Yoga & Meditation",
      description: "Find inner peace and physical strength through our comprehensive yoga programs. From beginner to advanced levels, we guide you through mindful movement and meditation practices.",
      icon: "🧘‍♀️",
      features: ["Hatha Yoga", "Vinyasa Flow", "Meditation", "Breathing Techniques"],
      color: "linear-gradient(135deg, #fef3c7, #fde68a)"
    },
    {
      id: 2,
      title: "Nutrition Coaching",
      description: "Transform your relationship with food through personalized nutrition guidance. Learn to nourish your body with wholesome, balanced meals that support your wellness goals.",
      icon: "🥗",
      features: ["Meal Planning", "Nutrition Education", "Healthy Recipes", "Lifestyle Changes"],
      color: "linear-gradient(135deg, #dcfce7, #bbf7d0)"
    },
    {
      id: 3,
      title: "Personal Training",
      description: "Achieve your fitness goals with one-on-one training sessions tailored to your needs. Our certified trainers create personalized workout plans that challenge and inspire you.",
      icon: "💪",
      features: ["Strength Training", "Cardio Workouts", "Flexibility", "Goal Setting"],
      color: "linear-gradient(135deg, #dbeafe, #bfdbfe)"
    },
    {
      id: 4,
      title: "Mindfulness & Wellness",
      description: "Cultivate mental clarity and emotional balance through mindfulness practices. Learn stress management techniques and develop a deeper connection with yourself.",
      icon: "🌱",
      features: ["Stress Management", "Mindfulness", "Emotional Wellness", "Life Coaching"],
      color: "linear-gradient(135deg, #f3e8ff, #e9d5ff)"
    }
  ];

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="services" ref={ref}>
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="services-title bg-gradient-to-r from-[black] via-[#205e1b] to-[black] text-transparent bg-clip-text animate-gradient-sheen">Our Services</h2>
          <p className="services-subtitle">
            Comprehensive wellness programs designed to transform your mind, body, and spirit
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="service-card-inner">
                <div 
                  className="service-icon"
                  style={{ background: service.color }}
                >
                  <span className="icon-emoji">{service.icon}</span>
                </div>
                
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <motion.span
                        key={featureIndex}
                        className="feature-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.5 + (index * 0.2) + (featureIndex * 0.1)
                        }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.button
                    className="service-button"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className='bg-gradient-to-r from-[black] via-[#205e1b] to-[black] text-transparent bg-clip-text animate-gradient-sheen'>Ready to Start Your Wellness Journey?</h3>
          <p>Choose the service that resonates with you, or combine multiple programs for a comprehensive approach to wellness.</p>
          <motion.button
            className="cta-button"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(34, 197, 94, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
