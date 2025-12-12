"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Sparkles, Cpu } from "lucide-react";
import { MagneticButton } from "./magnetic-button";
import Balancer from "react-wrap-balancer";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto text-center pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-gray-300">Privacy-First Computing</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
        >
          <Balancer>
            Your Digital Life,{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Your Rules
            </span>
          </Balancer>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          <Balancer>
            Build a privacy-first, sovereign-by-design technology ecosystem. 
            No tracking. No compromises. Just pure digital freedom.
          </Balancer>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <MagneticButton>
            <Button variant="default" size="lg" asChild>
              <a href="#waitlist" className="flex items-center gap-2">
                Join Waitlist
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </MagneticButton>
          
          <MagneticButton>
            <Button variant="outline" size="lg" asChild>
              <a href="#ecosystem" className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Explore Ecosystem
              </a>
            </Button>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center justify-center gap-8 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Local AI</span>
          </div>
          <div className="w-1 h-1 bg-gray-700 rounded-full" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Zero telemetry</span>
          </div>
          <div className="w-1 h-1 bg-gray-700 rounded-full" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Open hardware</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-8 h-12 border-2 border-gray-600 rounded-full flex justify-center pt-2 cursor-pointer hover:border-gray-400 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-gray-600 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}