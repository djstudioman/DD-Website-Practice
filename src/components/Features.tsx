import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

const features = [
  {
    title: "Precision Engineering",
    description: "Every joint, every screw, every board is placed with mathematical precision for a deck that lasts generations.",
    icon: "📐",
  },
  {
    title: "Premium Materials",
    description: "We source only the highest grade composites and exotic hardwoods, ensuring your investment stands the test of time.",
    icon: "🪵",
  },
  {
    title: "Custom Design",
    description: "Your home is unique. Your outdoor space should be too. We design from scratch to match your lifestyle and architecture.",
    icon: "✨",
  },
];

export function Features() {
  return (
    <section className="py-32 bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            The Dr. Decks Difference
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text-muted max-w-2xl mx-auto font-light text-lg"
          >
            We don't just build decks; we engineer outdoor experiences. Our commitment to craftsmanship is evident in every detail.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={cn(
                "group relative p-8 bg-card-dark border border-border-dark rounded-sm",
                "hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-300",
                "overflow-hidden"
              )}
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-cta transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-text-muted font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
