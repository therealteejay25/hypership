import Image from 'next/image'
import React from 'react'

const Tags = () => {
  const TagData = [
    "Mobile app landing page",
    "Portfolio Website",
    "Product Showcase",
    "UI Component Library",
    "Interactive Calculator"
  ]

  return (
    <div className="flex flex-wrap max-w-xl md:gap-2 gap-4 justify-center items-center">
      {TagData.map((data, index) => (
        <span
          key={index}
          className="relative inline-block rounded-lg p-[2px] bg-gradient-to-r from-[#F2D0A5] via-[#DEE6A5] to-[#BBAFDC] animate-gradient-x"
        >
          <span className="rounded-lg flex gap-2 bg-black/60 px-3 py-1 md:text-sm text-[12px] text-white">
            {data}
            <Image src="/ArrowUp.png" alt='Arrow Icon' width={20} height={20} />
          </span>
        </span>
      ))}
    </div>
  )
}

export default Tags
