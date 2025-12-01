import { motion } from "framer-motion";
import marbleTex from "@assets/generated_images/abstract_marble_texture.png";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "50+", label: "Countries Exported" },
    { number: "1000+", label: "Designs Available" },
    { number: "ISO", label: "Certified Quality" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <img src={marbleTex} alt="Texture" className="w-full h-full object-cover mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                <img 
                  src={marbleTex} 
                  alt="About Marvion Exim" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 border-[1px] border-white/20 m-4 pointer-events-none" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 bg-primary text-white p-8 hidden md:flex flex-col justify-center items-center shadow-xl w-48 h-48 rounded-full z-20">
                <span className="font-serif text-4xl font-bold">100%</span>
                <span className="text-xs uppercase tracking-widest mt-2 text-center">Export Quality</span>
              </div>
            </motion.div>
            
            {/* Background shapes */}
            <div className="absolute top-10 -left-10 w-full h-full border border-gray-200 -z-10 hidden md:block" />
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">Who We Are</h4>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-secondary mb-8 leading-tight">
                Redefining Luxury Through <br /> 
                <span className="italic text-gray-400">Timeless Innovation</span>
              </h2>
              
              <p className="text-gray-500 leading-relaxed mb-6 font-light text-lg">
                At Marvion Exim, we don't just manufacture tiles; we create surfaces that define lifestyles. 
                With a legacy rooted in craftsmanship and a vision set on the future, we bring the finest 
                ceramic artistry to the global market.
              </p>
              
              <p className="text-gray-500 leading-relaxed mb-10 font-light">
                Our state-of-the-art manufacturing facilities utilize the latest Italian technology to ensure 
                every slab, every tile, and every surface meets the highest international standards of quality 
                and aesthetics.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {["Premium Raw Materials", "Eco-Friendly Production", "Innovative Designs", "Global Logistics"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-10">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <h3 className="font-serif text-3xl font-bold text-secondary mb-1">{stat.number}</h3>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
