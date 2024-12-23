"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Background } from "@/components/Background";
import Image from "next/image";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const floatingAssets = [
    {
      src: "/assets/coins3d/btc.png",
      top: "10%",
      left: "4%",
      size: "h-20 w-20 md:h-32 md:w-32 lg:h-40 lg:w-40",
    },
    {
      src: "/assets/coins3d/eth.png",
      top: "40%",
      left: "86%",
      size: "h-20 w-20 md:h-32 md:w-32 lg:h-40 lg:w-40",
    },
    {
      src: "/assets/coins3d/litecoin.png",
      top: "57%",
      left: "35%",
      size: "h-20 w-20 md:h-32 md:w-32 lg:h-40 lg:w-40",
    },
    {
      src: "/assets/coins3d/SOL - Solana.png",
      top: "25%",
      left: "55%",
      size: "h-10 w-10 md:h-16 md:w-16 lg:h-20 lg:w-20",
    },
    {
      src: "/assets/coins3d/JUP - Jupiter.png",
      top: "25%",
      left: "25%",
      size: "h-10 w-10 md:h-16 md:w-16 lg:h-20 lg:w-20 scale-x-[-1]",
    },
  ];

  return (
    <Background>
      <div className="relative min-h-screen w-full overflow-hidden bg-black">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-[300px] w-[300px] md:h-[450px] md:w-[450px] lg:h-[600px] lg:w-[600px] opacity-80">
            <Image
              src="/assets/topleft.png"
              alt="Noise texture overlays"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-[300px] w-[300px] md:h-[450px] md:w-[450px] lg:h-[600px] lg:w-[600px] opacity-60 z-20">
            <Image
              src="/assets/bottomright.png"
              alt="Noise texture overlays"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full">
          <Image
            src="/assets/Ellipselarge.png"
            alt="Large Eclipse"
            width={2000}
            height={2000}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 md:p-12 lg:p-20"
          />
          <Image
            src="/assets/Ellipse1.png"
            alt="Small Eclipse"
            width={1000}
            height={1000}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-90 lg:scale-100"
          />
          <Image
            src="/assets/Ellipse1.png"
            alt="Smallest Eclipse"
            width={500}
            height={500}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-90 lg:scale-100"
          />
        </div>

        {floatingAssets.map((asset, i) => (
          <motion.div
            key={asset.src}
            className={`absolute z-20 ${asset.size}`}
            style={{
              top: asset.top,
              left: asset.left,
            }}
          >
            <Image
              src={asset.src}
              alt={`Crypto Asset ${i + 1}`}
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        ))}

        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        {/* Purple gradient circle */}
        <div className="absolute right-0 top-0 h-[300px] w-[300px] md:h-[450px] md:w-[450px] lg:h-[600px] lg:w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-800/30 blur-3xl" />

        <div className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center z-20">
          <h1 className="mb-3 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white xl:text-7xl 2xl:text-8xl">
            Ready for your
            <br />
            Solana Rewind 2024?
          </h1>
          <p className="mb-8 max-w-2xl text-base md:text-lg text-gray-400 tracking-wide">
            Get a Solana Wrapped for all your trades made on memecoins!
          </p>
          <Link
            href="/"
            className="inline-flex bg-gradient-to-r from-[#18C8FF] to-[#933FFE] px-6 py-2 md:px-8 md:py-3 text-base md:text-lg font-bold text-white transition-transform hover:scale-105 hover:shadow-lg rounded-2xl"
          >
            Select Wallet
          </Link>
        </div>
      </div>
    </Background>
  );
}
