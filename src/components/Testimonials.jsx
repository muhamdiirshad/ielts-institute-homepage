import React from "react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Aisha K.", text: "I went from 6.0 to 7.5 in 3 months. Trainers were excellent!" },
  { name: "Rohit S.", text: "Mock tests and speaking practice gave me so much confidence." },
  { name: "Lin M.", text: "Personal coaching fit my schedule perfectly." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="p-4 border rounded-lg bg-white shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <p className="text-sm text-gray-700">“{r.text}”</p>
              <p className="mt-4 text-xs text-gray-500">— {r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
