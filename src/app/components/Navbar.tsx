"use client"
import Image from "next/image"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = ["Products", "Features", "Pricing", "Creator Program", "Blog"]

  return (
    <header className="fixed top-0 left-0 w-full h-16 md:h-20 flex items-center z-50 backdrop-blur-md justify-between px-4 md:px-8 bg-white/5 border-b border-white/10">
      <Image src="/logo.svg" alt="Logo" width={120} height={120} />

      {/* Desktop nav */}
      <nav className="hidden md:flex text-sm gap-6 items-center">
        {navLinks.map((link, i) => (
          <a key={i} className="nav-link" href="#">
            {link}
          </a>
        ))}
      </nav>

      {/* Desktop buttons */}
      <div className="hidden md:flex gap-2">
        <button className="bg-gradient-to-b text-sm font-medium from-[#B05EFA] to-[#9333EA] py-2 px-4 rounded-lg">
          Sign Up
        </button>
        <button className="bg-gradient-to-b text-sm font-medium from-[#32343E] to-[#1F2129] py-2 px-4 rounded-lg">
          Sign In
        </button>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 text-center pb-14 left-0 w-full bg-black/90 backdrop-blur-md rounded-b-lg p-6 flex flex-col gap-6"
          >
            {navLinks.map((link, i) => (
              <a key={i} href="#" className="text-gray-200 text-lg">
                {link}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <button className="btn-animated bg-gradient-to-b from-[#B05EFA] to-[#9333EA] py-2 px-4 rounded-lg">
                Sign Up
              </button>
              <button className="btn-animated bg-gradient-to-b from-[#32343E] to-[#1F2129] py-2 px-4 rounded-lg">
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
