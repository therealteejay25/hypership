"use client"
import Image from "next/image"
import React from "react"
import Tags from "./Tags"
import HeroForm from "./HeroForm"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="relative pt-28 flex flex-col justify-center items-center px-4 md:px-10 lg:px-20"
      style={{ minHeight: "calc(100vh - 80px)" }} // 80px = navbar height
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center bg-[radial-gradient(circle_at_center,#E3C4FF,#FFFFFF)] bg-clip-text text-transparent leading-tight"
      >
        You Dream It. <br />
        <span className="bg-gradient-to-r relative inline-block mx-2 from-[#F2D0A5] via-[#DEE6A5] via-[#BBAFDC] to-[#D38CD2] bg-clip-text text-transparent">
          Hypership
          <motion.img
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="h-5 right-0 absolute origin-left"
            src="/Line 3.png"
            alt=""
          />
        </span>
        Builds It.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-white/70 text-sm md:text-base text-center max-w-xl mt-6"
      >
        Bring your ideas to life effortlessly. Turn visions into real apps without code, stress, or limits — just pure creativity in action.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="flex flex-col md:flex-row items-center gap-4 mt-10"
      >
        <button className="py-2 border-2 border-white px-4 gap-2 rounded-lg bg-white text-black flex items-center justify-center w-44">
          <Image src="/nextjs.svg" alt="Next Icon" width={24} height={24} />
          Next Project
        </button>
        <button className="py-2 border-2 border-white/10 px-4 gap-2 rounded-lg bg-white/5 text-white flex items-center justify-center w-44">
          <Image src="/react.svg" alt="React Icon" width={24} height={24} />
          React Project
        </button>
      </motion.div>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-8"
      >
        <Tags />
      </motion.div>

      {/* Input form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="w-full max-w-xl mt-10"
      >
        <HeroForm />
      </motion.div>
    </section>
  )
}

export default Hero
