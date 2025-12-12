"use client";

import { motion } from "framer-motion";
import { Laptop, Smartphone, Tablet, Watch, Home, Headphones, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Laptop,
    name: "Selensie Book",
    tagline: "Sovereign laptop",
    description: "ARM-based powerhouse running SelensieOS. Local AI, infinite battery, zero tracking.",
    image: "/products/book.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    name: "Selensie Phone",
    tagline: "Private by default",
    description: "Secure mobile computing. Hardware kill switches, encrypted everything, your data stays yours.",
    image: "/products/phone.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Tablet,
    name: "Selensie Pad",
    tagline: "Create freely",
    description: "Digital canvas without surveillance. Perfect for creators who value privacy.",
    image: "/products/pad.png",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Watch,
    name: "Selensie Watch",
    tagline: "Health is private",
    description: "Track your health, not your location. All data encrypted, stored locally.",
    image: "/products/watch.png",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Home,
    name: "Selensie Hub",
    tagline: "Your personal cloud",
    description: "Self-hosted everything. Photos, files, AI models. In your home, under your control.",
    image: "/products/hub.png",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Headphones,
    name: "Selensie Pods",
    tagline: "Listen privately",
    description: "Audio without analytics. No tracking what you listen to, ever.",
    image: "/products/pods.png",
    color: "from-yellow-500 to-orange-500",
  },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-40 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]" />
      
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
              Complete Ecosystem
            </span>
          </motion.div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            One Ecosystem.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Zero Compromise.
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every device designed from the ground up for privacy, security, and sovereignty.
            <br />
            <span className="text-white font-semibold">Works together seamlessly.</span> Without selling your soul.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="group h-full">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.tagline}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}