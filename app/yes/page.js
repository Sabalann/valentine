"use client";

import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function YesPage() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-300 to-red-400 text-white text-center">
      <Confetti width={windowSize.width} height={windowSize.height} />
      <h1 className="text-5xl font-bold mb-4">Yay! ❤️</h1>
      <p className="text-xl mb-6">You said yes! You’re the best! 🥰</p>
      <Image src="/happy.gif" alt="Happy Gif" width={300} height={200} />
    </div>
  );
}