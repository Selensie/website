"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Data Collection", us: false, them: true },
  { feature: "Third-party Tracking", us: false, them: true },
  { feature: "Sell Your Data", us: false, them: true },
  { feature: "End-to-End Encryption", us: true, them: false },
  { feature: "Open Source", us: true, them: false },
  { feature: "Self-Hosted Option", us: true, them: false },
];

export function Privacy() {
  return (
    <section id="privacy" className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            We're <span className="text-blue-400">Different</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See how we compare to traditional tech companies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-gray-800">
            <div className="text-gray-400">Feature</div>
            <div className="text-center font-semibold">Selensie</div>
            <div className="text-center text-gray-400">Others</div>
          </div>

          {comparisons.map((item, i) => (
            <motion.div
              key={item.feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-3 gap-4 p-6 border-b border-gray-800 last:border-0 hover:bg-white/5 transition-colors"
            >
              <div className="text-gray-300">{item.feature}</div>
              <div className="flex justify-center">
                {item.us ? (
                  <Check className="w-5 h-5 text-green-400" />
                ) : (
                  <X className="w-5 h-5 text-red-400" />
                )}
              </div>
              <div className="flex justify-center">
                {item.them ? (
                  <Check className="w-5 h-5 text-green-400" />
                ) : (
                  <X className="w-5 h-5 text-red-400" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}