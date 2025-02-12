"use client";

import { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function QuestionPage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen relative overflow-hidden bg-gradient-to-br from-pink-300 to-red-400">
      <div className="text-center z-10">
        <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
          Weet je het zeker 🥺🥺
        </h1>
        <div className="flex gap-6 justify-center">
          <motion.button
            className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-bold shadow-lg"
            onClick={() => router.push("/yes")}
          >
            Nee sorry ik heb een foutje gemaakt!!
          </motion.button>
          <button
            className="px-6 py-3 bg-red-500 text-white rounded-lg text-lg font-bold shadow-lg"
          >
            ja
          </button>
        </div>
      </div>
    </div>
  );
}   