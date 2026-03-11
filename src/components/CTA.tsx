import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="py-32 bg-bg-dark relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cta/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 md:p-16 bg-card-dark border border-border-dark rounded-sm relative border-beam"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Build Your Dream Deck?
          </h2>
          <p className="text-text-muted text-lg font-light mb-10 max-w-2xl mx-auto">
            Schedule a consultation with our master builders and let's turn your vision into reality. We only take on a select number of projects per year to ensure uncompromising quality.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-cta text-bg-dark font-bold tracking-widest uppercase text-sm rounded-sm hover:bg-cta-hover transition-colors duration-300"
            >
              Start Your Project
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
