"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, Code, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description: "Military-grade encryption for all your data. Zero-knowledge architecture.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lock,
    title: "Self-Sovereign Identity",
    description: "You own your identity. No third parties, no intermediaries.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Eye,
    title: "Zero Tracking",
    description: "We don't track, collect, or sell your data. Ever.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Server,
    title: "Self-Hosted",
    description: "Run everything on your infrastructure. Complete control.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Code,
    title: "Open Source",
    description: "Fully transparent codebase. Audit everything yourself.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for performance without compromising privacy.",
    color: "from-yellow-500 to-orange-500",
  },
];

export function Features() {
  return (
    <section id="features" className="py-40 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Privacy
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every feature designed with your sovereignty in mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="group h-full">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}