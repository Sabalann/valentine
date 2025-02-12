'use client'
import { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ValentinePage() {
  const [yesSize, setYesSize] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showGif, setShowGif] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen relative overflow-hidden bg-gradient-to-br from-pink-300 to-red-400">
      {showConfetti && <Confetti />}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.6, 0.9, 0.6], backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        style={{ background: "linear-gradient(270deg, rgba(255,0,150,0.5), rgba(255,50,50,0.5))", backgroundSize: "200% 200%" }}
      />
      <div className="text-center z-10">
        {showGif && (
          <div className="flex justify-center mb-6">
            <Image src="/happy.gif" alt="Happy Gif" width={300} height={200} />
          </div>
        )}
        <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">❤️ Wil je mijn valentijn zijn? ❤️</h1>
        <div className="flex gap-6 justify-center">
          <motion.button
            className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-bold shadow-lg"
            style={{ transform: `scale(${yesSize})` }}
            onClick={() => {
              setShowConfetti(true);
              setShowGif(true);
            }}
          >
            Ja!!
          </motion.button>
          <button
            className="px-6 py-3 bg-red-500 text-white rounded-lg text-lg font-bold shadow-lg"
            onClick={() => setYesSize(yesSize + 0.2)}
          >
            Nee :c
          </button>
        </div>
      </div>
    </div>
  );
}
