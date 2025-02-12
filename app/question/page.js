"use client";

import { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function QuestionPage() {
  const [yesSize, setYesSize] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen relative overflow-hidden bg-gradient-to-br from-pink-300 to-red-400">
      {showConfetti && <Confetti />}
      {showGif && (
        <div className="absolute top-10 flex justify-center w-full">
          <Image src="/happy.gif" alt="Happy Gif" width={300} height={200} />
        </div>
      )}
      <div className="text-center z-10">
        <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
          Will you be my Valentine? ❤️
        </h1>
        <div className="flex gap-6 justify-center">
          <motion.button
            className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-bold shadow-lg"
            style={{ transform: `scale(${yesSize})` }}
            onClick={() => {
              setShowConfetti(true);
              setShowGif(true);
              setTimeout(() => router.push("/yes"), 2000);
            }}
          >
            Yes
          </motion.button>
          <button
            className="px-6 py-3 bg-red-500 text-white rounded-lg text-lg font-bold shadow-lg"
            onClick={() => setYesSize(yesSize + 0.2)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}   