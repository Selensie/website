"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search, FileText, Home, Shield, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-50"
          >
            <Command className="glass rounded-2xl overflow-hidden">
              <div className="flex items-center border-b border-gray-800 px-4">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <Command.Input
                  placeholder="Search anything..."
                  className="w-full bg-transparent py-4 outline-none text-white placeholder:text-gray-500"
                />
              </div>
              <Command.List className="p-2 max-h-96 overflow-y-auto">
                <Command.Empty className="py-6 text-center text-sm text-gray-400">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Pages" className="text-gray-500 text-xs px-2 py-2">
                  <Command.Item className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 cursor-pointer">
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </Command.Item>
                  <Command.Item className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 cursor-pointer">
                    <Shield className="w-4 h-4" />
                    <span>Features</span>
                  </Command.Item>
                  <Command.Item className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 cursor-pointer">
                    <DollarSign className="w-4 h-4" />
                    <span>Pricing</span>
                  </Command.Item>
                  <Command.Item className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 cursor-pointer">
                    <FileText className="w-4 h-4" />
                    <span>Documentation</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}