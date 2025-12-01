import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Exquisite Craftsmanship",
    subtitle: "Where Art Meets Precision",
    text: "Discover the pinnacle of design with our premium ceramic collections."
  },
  {
    title: "Global Excellence",
    subtitle: "Exporting to 50+ Countries",
    text: "Connecting the world with superior quality and reliable logistics."
  },
  {
    title: "Vitrified Perfection",
    subtitle: "Strength in Every Slab",
    text: "Engineered for durability without compromising on elegance."
  },
  {
    title: "Sanitary Luxury",
    subtitle: "Redefining Wellness Spaces",
    text: "Modern designs that transform bathrooms into personal sanctuaries."
  },
  {
    title: "Architectural Solutions",
    subtitle: "Building the Future",
    text: "Comprehensive range of roofing and construction materials."
  },
  {
    title: "Innovative Surfaces",
    subtitle: "Technology & Design",
    text: "State-of-the-art manufacturing for next-generation spaces."
  },
  {
    title: "Sustainable Manufacturing",
    subtitle: "Eco-Friendly Production",
    text: "Committed to a greener future through responsible practices."
  },
  {
    title: "Custom Creations",
    subtitle: "Tailored to Your Vision",
    text: "Bespoke designs to meet specific project requirements."
  },
  {
    title: "Timeless Elegance",
    subtitle: "Classic & Contemporary",
    text: "Styles that transcend trends and endure for generations."
  },
  {
    title: "Marvion Assurance",
    subtitle: "Quality You Can Trust",
    text: "Rigorous quality control for flawless finishes every time."
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 transform scale-105"
        >
          <source src="https://www.mudraglobal.com/wp-content/uploads/2020/12/16september40secsvideo-low-size.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50" /> {/* Dark Overlay */}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-block py-1 px-4 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-xs md:text-sm uppercase tracking-[0.3em] text-primary font-medium">
                {slides[currentSlide].subtitle}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium mb-6 leading-tight tracking-tight"
            >
              {slides[currentSlide].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              {slides[currentSlide].text}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105"
              >
                Explore Collections
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentSlide ? "w-12 bg-primary" : "w-6 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
