import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BuildClubLogo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Join"];

  return (
    <>
      {/* Main Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-primary text-background flex justify-between items-center px-6 sm:px-10 py-4 shadow-md sticky top-0 z-50"
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-200"
        >
          <img
            src={BuildClubLogo}
            alt="Buildclub logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-xl sm:text-2xl font-heading font-bold tracking-tight">
            Buildclub
          </h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-secondary transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl focus:outline-none text-secondary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </motion.header>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-primary text-background flex flex-col items-center py-6 space-y-4 border-t border-secondary/20 sticky top-[64px] z-40 shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-lg font-medium hover:text-secondary transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
