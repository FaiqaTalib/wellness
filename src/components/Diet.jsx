import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Apple,
  Leaf,
  Utensils,
  Flame,
  X,
  Coffee,
  Sandwich,
  Droplets,
  IceCream,
} from "lucide-react";

const Diet = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      icon: <Apple className="w-10 h-10 text-green-500" />,
      title: (
        <h1 className="bg-gradient-to-r from-black via-[#205e1b] to-black text-transparent bg-clip-text animate-gradient-sheen">
          Breakfast Boost
        </h1>
      ),
      desc: "Oats, fruits, and almonds for a fresh start.",
      hoverDetails: "300 kcal • 20g protein • 15 mins prep",
      details: [
        "1 cup oatmeal with skim milk",
        "1 banana or apple",
        "5 almonds",
        "1 cup green tea or black coffee",
      ],
    },
    {
      icon: <Utensils className="w-10 h-10 text-green-500" />,
      title: (
        <h1 className="bg-gradient-to-r from-black via-[#205e1b] to-black text-transparent bg-clip-text animate-gradient-sheen">
          Balanced Lunch
        </h1>
      ),
      desc: "Grilled chicken, quinoa, and veggies for energy.",
      hoverDetails: "500 kcal • 35g protein • 25 mins prep",
      details: [
        "150g grilled chicken or tofu",
        "1 cup quinoa or brown rice",
        "Steamed veggies (broccoli, carrots, peas)",
        "1 glass lemon water",
      ],
    },
    {
      icon: <Flame className="w-10 h-10 text-green-500 " />,
      title: (
        <h1 className="bg-gradient-to-r from-black via-[#205e1b] to-black text-transparent bg-clip-text animate-gradient-sheen">
          Evening Snack
        </h1>
      ),
      desc: "Protein shake or fruit salad for recovery.",
      hoverDetails: "250 kcal • 18g protein • 10 mins prep",
      details: [
        "Protein shake (whey or soy)",
        "1 fruit bowl (papaya, berries, apple)",
        "5 walnuts or 10 peanuts",
      ],
    },
    {
      icon: <Leaf className="w-10 h-10 text-green-500" />,
      title: (
        <h1 className="bg-gradient-to-r from-black via-[#205e1b] to-black text-transparent bg-clip-text animate-gradient-sheen">
          Light Dinner
        </h1>
      ),
      desc: "Soup, steamed veggies, and fish for good sleep.",
      hoverDetails: "400 kcal • 30g protein • 20 mins prep",
      details: [
        "Veggie or lentil soup",
        "1 grilled fish fillet or paneer",
        "1 cup salad (cucumber, tomato, spinach)",
        "Herbal tea before bed",
      ],
    },
    {
      icon: <Droplets className="w-10 h-10 text-green-500" />,
      title: (
        <h1 className="bg-gradient-to-r from-black via-[#205e1b] to-black text-transparent bg-clip-text animate-gradient-sheen">
          Detox Juice
        </h1>
      ),
      desc: "Cleanse your body with a hydrating drink.",
      hoverDetails: "150 kcal • 5g protein • 5 mins prep",
      details: [
        "Cucumber + mint + lemon + ginger blend",
        "Drink chilled with ice cubes",
        "Great for hydration & digestion",
      ],
    },
    {
      icon: <Sandwich className="w-10 h-10 text-green-500" />,
      title: (
        <h1 className="bg-gradient-to-r from-black via-[#205e1b] to-black text-transparent bg-clip-text animate-gradient-sheen">
          High-Protein Snack
        </h1>
      ),
      desc: "Quick bites for muscle recovery.",
      hoverDetails: "280 kcal • 25g protein • 8 mins prep",
      details: [
        "2 boiled eggs or tofu cubes",
        "1 slice whole-grain bread",
        "Green smoothie or low-fat yogurt",
      ],
    },
    {
      icon: <Coffee className="w-10 h-10 text-green-500" />,
      title: (
        <h1 className="bg-gradient-to-r from-black via-[#205e1b] to-black text-transparent bg-clip-text animate-gradient-sheen">
          Pre-Workout Meal
        </h1>
      ),
      desc: "Fuel up before your training session.",
      hoverDetails: "350 kcal • 28g protein • 10 mins prep",
      details: [
        "1 banana smoothie with peanut butter",
        "Handful of oats",
        "1 boiled egg or protein bar",
      ],
    },
    {
      icon: <IceCream className="w-10 h-10 text-green-500" />,
      title: (
        <h1 className="bg-gradient-to-r from-black via-[#205e1b] to-black text-transparent bg-clip-text animate-gradient-sheen">
          Weekend Treat
        </h1>
      ),
      desc: "Indulge a little while staying balanced.",
      hoverDetails: "450 kcal • 12g protein • 15 mins prep",
      details: [
        "1 cup low-fat frozen yogurt with berries",
        "Dark chocolate (70%) square",
        "Green tea or lemon water",
      ],
    },
  ];

  return (
    <motion.section
      id="diet-plan"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative min-h-screen py-24 text-center"
      style={{
        background: "linear-gradient(135deg, #b2c5b2 0%, #5f9c7b 100%)",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-[#205e1b] to-black"
        >
          Personalized Diet Plans
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Hover to preview, click to explore your full diet plan.
        </motion.p>

        {/* Cards Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              onHoverStart={() => setHoveredPlan(index)}
              onHoverEnd={() => setHoveredPlan(null)}
              onClick={() => setSelectedPlan(plan)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative cursor-pointer p-8 bg-white rounded-2xl border border-gray-200 hover:border-green-400 transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden"
            >
              <div className="flex flex-col items-center space-y-4 text-gray-800">
                <div className="bg-green-50 p-4 rounded-full">{plan.icon}</div>
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <p className="text-gray-500 text-base">{plan.desc}</p>
              </div>

              {/* Hover Overlay */}
              <AnimatePresence>
                {hoveredPlan === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-green-600/80 backdrop-blur-sm flex items-center justify-center text-white text-sm rounded-2xl"
                  >
                    <div className="text-center">
                      <p className="text-lg font-semibold">
                        {plan.hoverDetails}
                      </p>
                      <p className="text-green-100 text-sm mt-2">
                        Click to view complete plan →
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Overlay */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-green-400/30 rounded-2xl p-8 max-w-lg w-full mx-4 text-left shadow-2xl relative text-gray-800"
            >
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 bg-green-50 hover:bg-green-100 p-2 rounded-full border border-green-200 transition"
              >
                <X className="w-5 h-5 text-green-600" />
              </button>

              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  {selectedPlan.icon}
                </div>
                <h3 className="text-3xl font-bold text-green-700">
                  {selectedPlan.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{selectedPlan.desc}</p>
              <ul className="space-y-2 text-gray-700">
                {selectedPlan.details.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Diet;
