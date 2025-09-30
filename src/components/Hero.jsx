import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Achieve your target IELTS Band Score
          </h2>
          <p className="mt-4 text-gray-600">
            Get expert coaching, mock tests, and AI-powered insights to prepare smarter and faster.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="px-6 py-3 bg-accent text-white rounded-md">
              Get Started
            </a>
            <a href="#features" className="px-6 py-3 border rounded-md">
              See Features
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80"
            alt="Students learning"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
