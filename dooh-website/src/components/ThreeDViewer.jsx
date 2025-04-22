"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

function Model({ url, scale }) {
  const { scene } = useGLTF(url);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scale.set(scale, scale, scale);
    }
  }, [scale]);

  return <primitive ref={ref} object={scene} position={[0, -1, 0]} rotation={[0, Math.PI / 4, 0]} />;
}

export default function ThreeDViewer({ modelUrl }) {
  const [scale, setScale] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative w-full aspect-[16/9] sm:h-[600px] bg-[#181a2a] rounded-xl overflow-hidden">
      <Canvas
        className="!absolute inset-0"
        camera={{ position: [2.5, 2, 4], fov: 45 }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Environment preset="sunset" />
        <Model url={modelUrl} scale={scale} />
        <OrbitControls
          enableZoom
          enableRotate
          enablePan
          minDistance={isMobile ? 1.5 : 2}
          maxDistance={isMobile ? 8 : 10}
          target={[0, -0.5, 0]}
        />
      </Canvas>

      <div className="absolute bottom-4 left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 sm:w-80 z-10">
        <div className="flex items-center gap-3 px-4 py-2 bg-black/30 backdrop-blur-md rounded-lg text-white">
          <span className="text-sm hidden sm:inline">Zoom</span>
          <input
            type="range"
            min="1"
            max="4"
            step="0.1"
            value={scale}
            onChange={(e) => setScale(parseFloat(e.target.value))}
            className="flex-1 accent-blue-400"
          />
          <span className="text-sm min-w-[40px] text-right">{scale.toFixed(1)}x</span>
        </div>
      </div>
    </div>
  );
}
