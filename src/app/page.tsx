import Image from "next/image";
import StarBackground from "./components/StarBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-white">
      <StarBackground />
      <Navbar />
      <Hero />
    </div>
  );
}
