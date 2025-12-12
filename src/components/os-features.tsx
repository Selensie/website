"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Zap, Code, Lock, Eye } from "lucide-react";
import { Comparison } from "./comparison";

const osFeatures = [
  {
    icon: Brain,
    title: "Local AI Assistant",
    description: "Your personal AI runs entirely on your device. No cloud, no tracking, no data mining. Just intelligence that works for you.",
    features: ["Offline-first", "Private by design", "Open models", "Your data never leaves"],
  },
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "Hardware-backed encryption, secure boot, and verified updates. Built to protect against nation-state attacks.",
    features: ["TPM 2.0", "Secure enclave", "Verified boot", "Hardware kill switches"],
  },
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Optimized from silicon to UI. No bloatware, no telemetry overhead, just pure speed.",
    features: ["Native ARM", "Zero overhead", "Instant wake", "All-day battery"],
  },
];

export function OSFeatures() {
  return (
    <section className="py-40 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full glass text-sm font-medium border border-white/10">
              SelensieOS
            </span>
          </motion.div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            An OS That{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Respects You
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Built on open-source foundations. Enhanced with privacy-first innovations.
            <br />
            <span className="text-white font-semibold">Everything Apple should have been.</span>
          </p>
        </motion.div>

        <div className="space-y-32">
          {osFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="flex-1">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${
                  i === 0 ? 'from-blue-500 to-cyan-500' :
                  i === 1 ? 'from-purple-500 to-pink-500' :
                  'from-emerald-500 to-teal-500'
                } flex items-center justify-center mb-8 shadow-2xl`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  {feature.title}
                </h3>
                
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  {feature.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {feature.features.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-video glass rounded-3xl border border-white/10 flex items-center justify-center"
                >
                  <span className="text-gray-600 text-sm">[Product Screenshot]</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}