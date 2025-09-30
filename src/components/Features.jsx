import React from "react";
import { FaMicrophone, FaRegEdit, FaChalkboardTeacher } from "react-icons/fa";
import { CpuChipIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    title: "Speaking Practice",
    desc: "Get personalized one-on-one speaking sessions with certified trainers. Build confidence to handle every part of the IELTS Speaking test.",
    icon: <FaMicrophone className="h-10 w-10 text-accent mx-auto" />,
  },
  {
    title: "Mock Tests",
    desc: "Experience real exam conditions with full-length mock tests. Get detailed performance analysis to track strengths and weaknesses.",
    icon: <FaRegEdit className="h-10 w-10 text-accent mx-auto" />,
  },
  {
    title: "AI Band Score",
    desc: "Leverage AI to get estimated band scores instantly. Receive actionable improvement tips to track your progress scientifically.",
    icon: <CpuChipIcon className="h-10 w-10 text-primary mx-auto" />,
  },
  {
    title: "Personal Coaching",
    desc: "Receive a tailored study plan for your goals and level. Coaches provide consistent reviews and motivational guidance.",
    icon: <FaChalkboardTeacher className="h-10 w-10 text-accent mx-auto" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Features() {
  return (
    <section id="features" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-white p-5 rounded-lg shadow-sm border text-center transition hover:shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              custom={i}
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
