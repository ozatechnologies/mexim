import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if we are on a page that needs a dark nav by default (like products page white background)
  // Ideally, we'd check the route, but for simplicity, let's assume all non-home pages might need style adjustments
  // Actually, for consistency, let's keep the transparent-to-white logic but maybe force white background on inner pages if needed.
  // For now, standard behavior is fine as most hero sections are dark/images.

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled || location !== "/"
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <a className="cursor-pointer group">
            <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden">
              <img 
                src="https://i.ibb.co/cKWxJgmH/m-removebg-preview.png" 
                alt="Marvion Exim Logo" 
                className="w-full h-full object-contain scale-150"
              />
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-primary ${
                  isScrolled || location !== "/" ? "text-gray-800" : "text-white/90"
                } ${location === link.href ? "text-primary" : ""}`}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <Button 
              variant="outline" 
              className={`rounded-none uppercase tracking-widest text-xs px-6 border-primary hover:bg-primary hover:text-white transition-all ${
                isScrolled || location !== "/" ? "text-primary" : "text-white border-white/50 hover:border-white"
              }`}
            >
              Enquire Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled || location !== "/" ? "text-gray-800" : "text-white"} />
          ) : (
            <Menu className={isScrolled || location !== "/" ? "text-gray-800" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a
                    className="text-gray-800 text-sm uppercase tracking-widest font-medium py-2 border-b border-gray-100 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
