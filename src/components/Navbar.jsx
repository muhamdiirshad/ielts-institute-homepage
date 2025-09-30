import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const [open, setOpen] = useState(false)


  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">IELTS Institute</Link>


        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:text-accent">Features</a>
          <a href="#testimonials" className="hover:text-accent">Testimonials</a>
          <Link to="/about" className="hover:text-accent">About</Link>
          <Link to="/contact" className="px-4 py-2 bg-accent text-white rounded-md text-sm">Enroll</Link>
        </nav>


        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2">☰</button>
        </div>
      </div>


      {open && (
        <div className="md:hidden border-t px-4 py-3 space-y-2">
          <a href="#features" className="block">Features</a>
          <a href="#testimonials" className="block">Testimonials</a>
          <Link to="/about" className="block">About</Link>
          <Link to="/contact" className="block">Enroll</Link>
        </div>
      )}
    </header>
  )
}