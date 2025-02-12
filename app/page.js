"use client"
import { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [yesSize, setYesSize] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-300 to-red-400 text-white">
      <h1 className="text-4xl font-bold">Hi schatje patatje... ❤️</h1>
      <h1 className="text-4xl font-bold mb-28">Weet je welke dag het vandaag is?</h1>

      <div className="flex gap-6 justify-center">
          <motion.button
            className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-bold shadow-lg"
            style={{ transform: `scale(${yesSize})` }}
            onClick={() => {
              setTimeout(() => router.push("/question"), 0);
            }}
          >
            Ja!!
          </motion.button>
          <button
            className="px-6 py-3 bg-red-500 text-white rounded-lg text-lg font-bold shadow-lg"
            onClick={() => setYesSize(yesSize + 0.2)}
          >
            Nee??
          </button>
        </div>
      
    </div>
  );
}