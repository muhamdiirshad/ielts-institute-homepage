import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      className="bg-primary text-white py-8 mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div>
          <h4 className="font-semibold text-lg">IELTS Institute</h4>
          <p className="text-sm text-gray-300 mt-2">Helping you reach your dream score.</p>
        </div>

        <div>
          <h5 className="font-medium">Quick Links</h5>
          <ul className="mt-2 text-sm text-gray-300 space-y-1">
            <li><a href="#features" className="hover:text-accent transition">Features</a></li>
            <li><a href="#testimonials" className="hover:text-accent transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium">Contact</h5>
          <p className="text-sm text-gray-300 mt-2">Email: info@ielts-institute.com</p>
          <p className="text-sm text-gray-300">Phone: +91 9876543210</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 border-t border-white/20 pt-4 text-xs text-gray-400 px-4 text-center">
        © {new Date().getFullYear()} IELTS Institute. All rights reserved.
      </div>
    </motion.footer>
  );
}
