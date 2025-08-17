"use client";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarBackground() {
  return (
    <div className="fixed w-screen h-screen">
      <Canvas>
        <Stars 
          radius={100}  // how far stars spread
          depth={50}    // starfield depth
          count={5000}  // number of stars
          factor={4}    // star size
          saturation={0} 
          fade
          speed={1}     // twinkle speed
        />
      </Canvas>
    </div>
  );
}
