"use client";

import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import { cn } from "lib/utils";
import React, { useState, useEffect, useRef } from "react";











export const HeroEvervaultBg = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = "";
    for (let i = 0; i < 10000; i++) {
      str += generateRandomString(1);
    }
    setRandomString(str);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomString(generateRandomString(10000));
    }, 150); // Updates the random characters 6 times a second
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute inset-0 z-0 flex h-full w-full items-center justify-center overflow-hidden bg-transparent',
        className
      )}
    >
      <div className="pointer-events-none relative flex h-full w-full items-center justify-center">
        <motion.div
          className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#b8f600]/20 to-blue-700/40 opacity-0 transition-opacity duration-500 group-hover/hero:opacity-100"
          style={{
            WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent
            )
          `,
            maskImage: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent
            )
          `,
          }}
        >
          <div className="pointer-events-none absolute inset-0 h-full w-full font-mono text-[10px] leading-none font-bold tracking-widest break-words whitespace-pre-wrap text-white/10 select-none">
            {randomString}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
