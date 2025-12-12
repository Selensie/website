"use client";

import { motion } from "framer-motion";
import { Check, X, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";

const comparisons = [
  { feature: "Collects your data", apple: true, google: true, microsoft: true, us: false },
  { feature: "Sells to advertisers", apple: false, google: true, microsoft: true, us: false },
  { feature: "Cloud AI (your data leaves device)", apple: true, google: true, microsoft: true, us: false },
  { feature: "Telemetry & analytics", apple: true, google: true, microsoft: true, us: false },
  { feature: "Closed source OS", apple: true, google: false, microsoft: true, us: false },
  { feature: "Hardware backdoors", apple: "unknown", google: "unknown", microsoft: "unknown", us: false },
  { feature: "Local AI processing", apple: false, google: false, microsoft: false, us: true },
  { feature: "Hardware kill switches", apple: false, google: false, microsoft: false, us: true },
  { feature: "Fully auditable", apple: false, google: false, microsoft: false, us: true },
  { feature: "You own your data", apple: false, google: false, microsoft: false, us: true },
];

export function Comparison() {
  return (
    <section className="py-40 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,68,68,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            What They{" "}
            <span className="text-red-400">Won't</span>
            {" "}Tell You
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The truth about Big Tech's "privacy" promises.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Card>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-5 gap-4 p-6 border-b border-gray-800 bg-white/5">
                <div className="text-gray-400 text-sm font-medium"></div>
                <div className="text-center">
                  <div className="text-sm font-semibold mb-1">Apple</div>
                  <div className="text-xs text-gray-500">$3T company</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold mb-1">Google</div>
                  <div className="text-xs text-gray-500">Ad business</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold mb-1">Microsoft</div>
                  <div className="text-xs text-gray-500">Cloud first</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold mb-1 text-blue-400">Selensie</div>
                  <div className="text-xs text-blue-500">You first</div>
                </div>
              </div>

              {comparisons.map((item, i) => (
                <motion.div
                  key={item.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="grid grid-cols-5 gap-4 p-6 border-b border-gray-800 last:border-0 hover:bg-white/5 transition-colors"
                >
                  <div className="text-gray-300 text-sm">{item.feature}</div>
                  
                  <div className="flex justify-center">
                    {item.apple === true ? (
                        <Check className="w-5 h-5 text-green-400" />
                    ) : item.apple === false ? (
                        <X className="w-5 h-5 text-red-400" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    )}
                  </div>
                  
                  <div className="flex justify-center">
                    {item.google === true ? (
                        <Check className="w-5 h-5 text-green-400" />
                    ) : item.google === false ? (
                        <X className="w-5 h-5 text-red-400" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    )}
                  </div>
                  
                  <div className="flex justify-center">
                    {item.microsoft === true ? (
                        <Check className="w-5 h-5 text-green-400" />
                    ) : item.microsoft === false ? (
                        <X className="w-5 h-5 text-red-400" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    )}
                  </div>
                  
                  <div className="flex justify-center">
                    {item.us ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <X className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}