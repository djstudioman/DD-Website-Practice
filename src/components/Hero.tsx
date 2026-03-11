import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/deck/1920/1080"
          alt="Luxury Custom Deck"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-bg-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-6 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-text-light leading-tight">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cta to-cta-hover">
              Outdoor Living
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted font-sans font-light max-w-2xl mx-auto">
            Master craftsmen of high-end, custom outdoor spaces. We blend innovative design with uncompromising quality to create your perfect sanctuary.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-cta text-bg-dark font-bold tracking-wide uppercase text-sm rounded-sm flex items-center gap-2 hover:bg-cta-hover transition-colors duration-300"
              >
                View Our Work
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border border-border-dark text-text-light font-bold tracking-wide uppercase text-sm rounded-sm hover:border-text-muted transition-colors duration-300"
              >
                Request Consultation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
