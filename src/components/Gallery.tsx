import { motion } from "motion/react";
import { Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";

const galleryImages = [
  { id: 1, src: "https://picsum.photos/seed/deck1/800/600", alt: "Modern Composite Deck", span: "col-span-1 md:col-span-2 row-span-2" },
  { id: 2, src: "https://picsum.photos/seed/deck2/800/600", alt: "Curved Deck Design", span: "col-span-1 row-span-1" },
  { id: 3, src: "https://picsum.photos/seed/deck3/800/600", alt: "Outdoor Kitchen Integration", span: "col-span-1 row-span-1" },
  { id: 4, src: "https://picsum.photos/seed/deck4/800/600", alt: "Multi-level Deck", span: "col-span-1 row-span-1" },
  { id: 5, src: "https://picsum.photos/seed/deck5/800/600", alt: "Deck Lighting", span: "col-span-1 md:col-span-2 row-span-1" },
];

export function Gallery() {
  return (
    <section className="py-32 bg-primary relative border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold mb-4"
            >
              Masterworks
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-muted font-light"
            >
              Explore our portfolio of custom-designed outdoor living spaces.
            </motion.p>
          </div>
          <Link
            to="/portfolio"
            className="text-cta hover:text-cta-hover font-bold tracking-wide uppercase text-sm flex items-center gap-2 transition-colors"
          >
            View Full Portfolio
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-sm bg-card-dark cursor-pointer ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-bg-dark/80 p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-6 h-6 text-text-light" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-bg-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-text-light font-serif font-bold text-lg">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
