import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="py-12 text-center px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-primary">About Us</h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        We are a fictional IELTS Institute helping students achieve their dreams. Our mission is to provide high-quality coaching, personalized guidance, and advanced tools to prepare students for every section of the IELTS test.
      </p>
    </motion.section>
  );
}
