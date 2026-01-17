"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-4 bg-white/70 backdrop-blur-lg border-b border-black/5 shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, "#hero")}
          className="text-lg font-bold tracking-tight text-black hover:opacity-60 transition-opacity"
        >
          {siteConfig.name}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-black/60 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
          <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-5 h-0.5 bg-current transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-black/5 overflow-hidden absolute top-full left-0 right-0"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-xl font-semibold text-black/80 hover:text-black"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
