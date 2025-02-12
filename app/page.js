"use client"
import { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-300 to-red-400 text-white">
      <h1 className="text-4xl font-bold mb-6">Hey love, I have something to ask you... ❤️</h1>
      <button 
        className="px-6 py-3 bg-white text-pink-500 rounded-lg text-lg font-bold shadow-lg" 
        onClick={() => router.push("/question")}
      >
        Next
      </button>
    </div>
  );
}