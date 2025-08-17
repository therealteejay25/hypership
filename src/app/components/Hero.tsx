import Image from "next/image";
import React from "react";
import Tags from "./Tags";
import HeroForm from "./HeroForm";

const Hero = () => {
  return (
    <div className="p-[1px] h-screen mt-20 ml-4 mr-1">
      <div className="w-full p-8 bg-background h-full">
        <h1 className="text-6xl font-medium text-center bg-[radial-gradient(circle_at_center,#E3C4FF,#FFFFFF)] bg-clip-text text-transparent">
          You Dream It. <br />
          <span className="bg-gradient-to-r relative mx-3 font-semibold from-[#F2D0A5] via-[#DEE6A5] via-[#BBAFDC] to-[#D38CD2] bg-clip-text text-transparent">
            Hypership
            <img className="h-5 right-0 absolute" src="/Line 3.png" alt="" />
          </span> 
           Builds It.
        </h1>
        <p className="text-white/75 text-sm text-center w-xl mx-auto px-10 mt-10 mb-5">Bring your ideas to life effortlessly. Turn visions into real apps without code, stress, or limits, just pure creativity in action.</p>
        <div className="flex flex-col my-3 justify-center items-center">
          <p className="text-white/75">Create a new project</p>
          <div className="w-lg gap-3 my-6 flex justify-center items-center">
            <button className="py-2 border-2 border-white px-4 gap-2 rounded-lg bg-white font-medium text-black flex items-center justify-center">
              <Image src="/nextjs.svg" alt="Next Icon" width={24} height={24} />
              Next Project
            </button>
            <button className="py-2 btn-animated border-2 border-white/5 px-4 gap-2 rounded-lg bg-white/3 font-medium text-white flex items-center justify-center">
              <Image src="/react.svg" alt="Next Icon" width={24} height={24} />
              React Project
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Tags />
        </div>
        <div>
          <HeroForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
