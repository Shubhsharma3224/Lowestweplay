import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/#products" },
    { name: "Partners", href: "/#partners" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-3 px-4 sm:px-6" : "py-5 px-4 sm:px-6 lg:px-8"
        )}
      >
        {/* Gradient line at very top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <motion.div
          initial={false}
          animate={isScrolled ? { scale: 0.99 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500",
            isScrolled
              ? "rounded-2xl px-5 py-3 bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(79,70,229,0.10),0_2px_8px_rgba(0,0,0,0.06)]"
              : "rounded-none px-2 py-1 bg-transparent"
          )}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img
              src="https://i.ibb.co/vCHmxWCc/Gemini-Generated-Image-qxp195qxp195qxp1-removebg-preview.png"
              alt="Lowest Weplay"
              className="w-[120px] md:w-[150px] object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-sm"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className="relative px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full bg-gradient-to-r from-primary to-accent group-hover:w-4/5 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Live badge */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Live
            </div>

            <a
              href="/#products"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white
                bg-gradient-to-r from-primary to-violet-600
                shadow-lg shadow-primary/30
                hover:shadow-xl hover:shadow-primary/40
                hover:-translate-y-0.5
                active:translate-y-0
                transition-all duration-200
                relative overflow-hidden
                before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
            >
              <Zap className="w-4 h-4" />
              Shop Now
            </a>

            <button
              className="md:hidden p-2.5 rounded-xl bg-white/80 backdrop-blur border border-border/60 shadow-sm hover:bg-white transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[59] bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-4 left-4 right-4 z-[60] bg-white/95 backdrop-blur-2xl rounded-2xl border border-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <img
                  src="https://i.ibb.co/vCHmxWCc/Gemini-Generated-Image-qxp195qxp195qxp1-removebg-preview.png"
                  alt="Logo"
                  className="w-[120px]"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>

              <div className="flex flex-col gap-1 mb-8">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-foreground font-medium hover:bg-primary/5 hover:text-primary transition-all"
                  >
                    {link.name}
                    <span className="text-muted-foreground text-xs">→</span>
                  </motion.a>
                ))}
              </div>

              <a
                href="/#products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-violet-600 shadow-lg shadow-primary/30"
              >
                <Zap className="w-4 h-4" />
                Shop Now
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
