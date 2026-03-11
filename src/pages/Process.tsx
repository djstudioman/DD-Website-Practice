import { motion } from "motion/react";
import { PageTransition } from "../components/PageTransition";

const steps = [
  { num: "01", title: "Discovery & Vision", desc: "We begin with a deep dive into your lifestyle, architectural preferences, and the unique topography of your property." },
  { num: "02", title: "Architectural Design", desc: "Our designers create comprehensive 3D models and material palettes, ensuring every detail aligns with your vision." },
  { num: "03", title: "Engineering & Permits", desc: "We handle all structural engineering and municipal permitting, guaranteeing your deck exceeds local safety standards." },
  { num: "04", title: "Master Construction", desc: "Our specialized craftsmen execute the build with surgical precision, using only premium, hand-selected materials." },
  { num: "05", title: "The Reveal", desc: "A final walkthrough and polish. We hand over your new outdoor sanctuary, backed by our lifetime craftsmanship warranty." }
];

export function Process() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">The <span className="text-cta">Process</span></h1>
          <p className="text-text-muted text-lg font-light">Precision engineering meets artisanal craftsmanship. Discover how we bring extraordinary outdoor spaces to life.</p>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-dark before:to-transparent">
          {steps.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-border-dark bg-bg-dark text-cta font-serif font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#0A0A0A] z-10 transition-colors duration-300 group-hover:border-cta group-hover:bg-cta/10">
                {step.num}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-sm border border-border-dark bg-card-dark transition-all duration-300 group-hover:border-text-muted group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                <h3 className="font-serif font-bold text-2xl mb-3">{step.title}</h3>
                <p className="text-text-muted font-light leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
