import { motion } from "framer-motion";
import tileImg from "@assets/generated_images/ceramic_tile_product_shot.png";
import sanitaryImg from "@assets/generated_images/sanitary_ware_product_shot.png";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Vitrified Tiles",
    category: "Premium Flooring",
    image: tileImg,
    description: "High-strength, low-porosity tiles designed for endurance and elegance."
  },
  {
    id: 2,
    title: "Roofing Tiles",
    category: "Exterior Protection",
    image: tileImg, // Placeholder
    description: "Durable and aesthetic roofing solutions for modern architecture."
  },
  {
    id: 3,
    title: "Sanitaryware",
    category: "Bath & Wellness",
    image: sanitaryImg,
    description: "Ergonomic designs meeting everyday luxury and hygiene."
  },
  {
    id: 4,
    title: "Bathroom Accessories",
    category: "Finishing Touches",
    image: sanitaryImg, // Placeholder
    description: "Premium fittings to complete your sanctuary."
  },
  {
    id: 5,
    title: "Tiles Chemical",
    category: "Installation Solutions",
    image: tileImg, // Placeholder
    description: "Advanced adhesives and grouts for lasting bonds."
  },
  {
    id: 6,
    title: "FRP Manhole Cover",
    category: "Infrastructure",
    image: tileImg, // Placeholder
    description: "Heavy-duty, corrosion-resistant utility covers."
  },
  {
    id: 7,
    title: "Crockery",
    category: "Dining Elegance",
    image: sanitaryImg, // Placeholder
    description: "Fine bone china and ceramic tableware for exquisite dining."
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Our Collections
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-medium text-secondary mb-6"
          >
            Curated for Perfection
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-light"
          >
            Explore our diverse range of premium surfaces designed to transform ordinary spaces into extraordinary experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden cursor-pointer ${
                // Make the first item span 2 columns on large screens if we have an odd number of items to create a nice layout
                index === 0 && products.length % 3 !== 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden h-full">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary text-xs uppercase tracking-widest font-medium mb-2 block">
                    {product.category}
                  </span>
                  <div className="flex justify-between items-end">
                    <h3 className="text-white font-serif text-2xl md:text-3xl font-medium">{product.title}</h3>
                    <div className="bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-gray-300 mt-2 font-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
