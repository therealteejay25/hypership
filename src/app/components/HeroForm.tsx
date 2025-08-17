"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function HeroForm() {
  const [value, setValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [index, setIndex] = useState(0)

  // Example prompts to rotate through
  const prompts = [
    "Build a landing page",
    "Design me a portfolio",
    "Generate an AI study plan",
    "Create a product showcase",
  ]

  // cycle through prompts every 3s if not focused and empty
  useEffect(() => {
    if (!isFocused && !value) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % prompts.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isFocused, value, prompts.length])

  return (
    <form className="flex mx-auto my-10 items-center gap-2 w-full max-w-xl">
      {/* Input wrapper with gradient border */}
      <div className="relative flex-1 p-[1px] rounded-2xl bg-gradient-to-r from-[#F2D0A5] via-[#DEE6A5] via-[#BBAFDC] to-[#D38CD2]">
        <div className="relative bg-black flex flex-col justify-between rounded-2xl px-3 h-24">
          {/* Animated label */}
          <AnimatePresence mode="wait">
            {(isFocused || value) ? (
              ""
            ) : (
              <motion.span
                key={prompts[index]}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute left-3 top-2 text-gray-400 pointer-events-none"
              >
                {prompts[index]}
              </motion.span>
            )}
          </AnimatePresence>

          <button
            type="submit"
            className="absolute right-2 bottom-2 p-2 rounded-full bg-gradient-to-r from-[#F2D0A5] to-[#D38CD2] flex items-center justify-center shadow-md"
          >
            <ArrowUp size={18} className="text-black" />
          </button>
          {/* Text input */}
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-transparent p-2 outline-none text-white"
          />

          {/* Send button inside input box */}
        </div>
      </div>
    </form>
  )
}
