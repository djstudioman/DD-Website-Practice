import { motion } from "motion/react";
import { PageTransition } from "../components/PageTransition";

export function About() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Master <br/><span className="text-cta">Builders</span></h1>
            <div className="space-y-6 text-text-muted font-light text-lg leading-relaxed">
              <p>
                Founded on the principle that outdoor spaces deserve the same architectural rigor as interior design, Dr. Decks has spent over two decades redefining the custom deck industry.
              </p>
              <p>
                We are not general contractors. We are specialized artisans. Our team consists of master carpenters, structural engineers, and visionary designers who share a singular obsession: building the perfect deck.
              </p>
              <p>
                Every project we undertake is a testament to uncompromising quality. From sourcing the rarest, most durable hardwoods to utilizing aerospace-grade fasteners, we build structures designed to outlast the homes they are attached to.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border-dark pt-8">
              <div>
                <div className="text-4xl font-serif font-bold text-text-light mb-2">20+</div>
                <div className="text-sm tracking-widest uppercase text-cta font-bold">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-text-light mb-2">500+</div>
                <div className="text-sm tracking-widest uppercase text-cta font-bold">Projects Completed</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[3/4] rounded-sm overflow-hidden border border-border-dark"
          >
            <img 
              src="https://picsum.photos/seed/builder/800/1200" 
              alt="Master Builder at work" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-80" />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
