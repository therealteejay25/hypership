import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center w-full min-h-[40rem] overflow-hidden">
      {/* Orbits */}
      <div className="orbit orbit1">
        <Image
          src="/planet1.png"
          alt="Planet 1"
          width={40}
          height={40}
          className="planet"
        />
      </div>
      <div className="orbit orbit2">
        <Image
          src="/planet2.png"
          alt="Planet 2"
          width={50}
          height={50}
          className="planet"
        />
      </div>
      <div className="orbit orbit3">
        <Image
          src="/planet3.png"
          alt="Planet 3"
          width={35}
          height={35}
          className="planet"
        />
      </div>
      <div className="orbit orbit4">
        <Image
          src="/planet4.png"
          alt="Planet 4"
          width={45}
          height={45}
          className="planet"
        />
      </div>
      <div className="orbit orbit5">
        <Image
          src="/planet5.png"
          alt="Planet 5"
          width={55}
          height={55}
          className="planet"
        />
      </div>
      <div className="orbit orbit6">
        <Image
          src="/planet6.png"
          alt="Planet 6"
          width={30}
          height={30}
          className="planet"
        />
      </div>

      {/* Hero content on top */}
        {/* <img className="absolute w-screen h-screen" src='/Group 2.svg' alt="Frame" /> */}
        <div className="absolute pointer-events-none frame-border"></div>
      <div className="absolute text-center text-white z-10">
        <h1 className="text-6xl font-semibold bg-[radial-gradient(circle,_#FFFFFF,_#E3C4FF)] bg-clip-text text-transparent">
        You Dream It.  <br />
        <span className="btn-animate bg-gradient-to-r from-[#F2D0A5] via-[#DEE6A5] to-[#BBAFDC] text-transparent bg-clip-text">Hypership</span> Builds It.
        </h1>
        <p className="text-sm text-white/75 w-xl px-5 my-5 text-center">Bring your ideas to life effortlessly. Turn visions into real apps without code, stress, or limits, just pure creativity in action.</p>
        <div>
            <p>Create a new project</p>
            <div className="flex items-center gap-4 my-4 justify-center">
                <button className="btn-animated flex border-2 border-white cursor-pointer items-center gap-2 font-medium bg-white text-black py-2 px-4 rounded-lg">
                    <Image src='/nextjs.svg' alt='Next Icon' width={24} height={24} />
                    <p className="text-black">Next Project</p>
                </button>
                <button className="btn-animated flex cursor-pointer items-center gap-2 font-medium bg-white/5 backdrop-blur-md border-2 border-white/7 py-2 px-4 rounded-lg">
                    <Image src='/react.svg' alt='Next Icon' width={24} height={24} />
                    <p className="text-white">React Project</p>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
