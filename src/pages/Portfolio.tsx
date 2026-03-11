import { motion } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { Maximize2 } from "lucide-react";

const projects = [
  { id: 1, title: "The Cascade Retreat", category: "Multi-level", img: "https://picsum.photos/seed/port1/800/600" },
  { id: 2, title: "Modern Minimalist", category: "Composite", img: "https://picsum.photos/seed/port2/800/600" },
  { id: 3, title: "Lakeside Pavilion", category: "Hardwood", img: "https://picsum.photos/seed/port3/800/600" },
  { id: 4, title: "Urban Oasis", category: "Rooftop", img: "https://picsum.photos/seed/port4/800/600" },
  { id: 5, title: "The Entertainer", category: "Outdoor Kitchen", img: "https://picsum.photos/seed/port5/800/600" },
  { id: 6, title: "Zen Garden Deck", category: "Hardwood", img: "https://picsum.photos/seed/port6/800/600" },
];

export function Portfolio() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Our <span className="text-cta">Portfolio</span></h1>
          <p className="text-text-muted text-lg max-w-2xl font-light">A curated selection of our finest outdoor living spaces. Each project represents our commitment to uncompromising quality and visionary design.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-sm bg-card-dark cursor-pointer aspect-[4/3]"
            >
              <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-cta text-sm font-bold tracking-widest uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.category}</p>
                <h3 className="text-2xl font-serif font-bold text-text-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                <Maximize2 className="w-6 h-6 text-text-light" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
