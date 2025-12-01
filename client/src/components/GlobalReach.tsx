import { motion } from "framer-motion";
import mapBg from "@assets/generated_images/global_logistics_network_abstract.png";
import { Button } from "@/components/ui/button";

export default function GlobalReach() {
  return (
    <section id="global" className="relative py-32 bg-secondary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img src={mapBg} alt="Global Map" className="w-full h-full object-cover" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.h4 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Global Presence
          </motion.h4>
          
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl font-medium text-white mb-8 leading-tight"
          >
            Exporting Excellence <br /> Across Borders
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg font-light leading-relaxed mb-10"
          >
            Marvion Exim has established a robust logistics network ensuring timely delivery of our premium products to over 50 countries. From the Americas to Europe, the Middle East to Asia-Pacific, our quality knows no boundaries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button className="bg-primary text-white hover:bg-primary/90 rounded-none px-8 py-6 uppercase tracking-widest">
              View Export Map
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
