"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGrid, FiX } from "react-icons/fi";
import employeeData from "@/../data/employee.json";

const { navLinks, personalInfo } = employeeData;

const navMap = {
  HOME: "#home",
  "ABOUT ME": "#about",
  PROJECTS: "#projects",
  SERVICES: "#services",
  CLIENTS: "#clients",
  FAQ: "#faq",
};

const leftLinks = navLinks.slice(0, 3);
const rightLinks = navLinks.slice(3);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile header bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 z-50 flex w-full items-center justify-between p-4 md:hidden"
      >
        <span className="rounded-lg bg-[#839dc2] px-3 py-1.5 text-xs font-black shadow-md text-black">
          {personalInfo.bgName}&reg;
        </span>
        <a
          href="#contact"
          className="rounded-xl bg-[#839dc2] px-4 py-2 text-xs font-bold shadow-md text-black"
        >
          Book a Call
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-xl border border-white/50 bg-white/40 p-2 shadow-md backdrop-blur-md text-black"
        >
          {isMenuOpen ? (
            <FiX className="text-base" />
          ) : (
            <FiGrid className="text-base" />
          )}
        </button>
      </motion.div>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-8 backdrop-blur-2xl md:hidden"
          >
            {/* Close button — top-right */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 rounded-xl border border-white/20 bg-white/10 p-2 text-white transition-colors hover:text-[#839dc2]"
            >
              <FiX className="text-xl" />
            </button>

            {/* Navigation links */}
            <nav className="flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={navMap[link] || "#"}
                  onClick={() => setIsMenuOpen(false)}
                  className="my-3 cursor-pointer text-2xl font-black uppercase tracking-wider text-white transition-colors hover:text-[#839dc2]"
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop left nav group */}
      <motion.nav
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        className="absolute left-8 top-[56%] z-20 hidden items-center space-x-3 text-xs font-black uppercase tracking-wider text-black md:left-16 md:flex"
      >
        {leftLinks.map((link, i) => (
          <span key={link} className="flex items-center">
            {i > 0 && <span className="mx-2 text-white/30">|</span>}
            <motion.a
              href={navMap[link] || "#"}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer"
            >
              {link}
            </motion.a>
          </span>
        ))}
      </motion.nav>

      {/* Desktop right nav group */}
      <motion.nav
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        className="absolute right-8 top-[56%] z-20 hidden items-center space-x-3 text-xs font-black uppercase tracking-wider text-black md:right-16 md:flex"
      >
        {rightLinks.map((link, i) => (
          <span key={link} className="flex items-center">
            {i > 0 && <span className="mx-2 text-white/30">|</span>}
            <motion.a
              href={navMap[link] || "#"}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer"
            >
              {link}
            </motion.a>
          </span>
        ))}
      </motion.nav>
    </>
  );
}
