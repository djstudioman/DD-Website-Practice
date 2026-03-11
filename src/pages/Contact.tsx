import { motion } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Start a <span className="text-cta">Conversation</span></h1>
          <p className="text-text-muted text-lg font-light">We take on a limited number of commissions each year to ensure our standards of excellence are never compromised. Reach out to discuss your vision.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="p-8 bg-card-dark border border-border-dark rounded-sm">
              <h3 className="text-xl font-serif font-bold mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-cta mt-1" />
                  <div>
                    <div className="text-sm font-bold tracking-widest uppercase text-text-muted mb-1">Phone</div>
                    <div className="text-text-light">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-cta mt-1" />
                  <div>
                    <div className="text-sm font-bold tracking-widest uppercase text-text-muted mb-1">Email</div>
                    <div className="text-text-light">info@drdecks.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-cta mt-1" />
                  <div>
                    <div className="text-sm font-bold tracking-widest uppercase text-text-muted mb-1">Studio</div>
                    <div className="text-text-light">123 Builder Way<br/>Seattle, WA 98101</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 p-8 md:p-12 bg-card-dark border border-border-dark rounded-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold tracking-widest uppercase text-text-muted">First Name</label>
                  <input type="text" className="w-full bg-bg-dark border border-border-dark rounded-sm px-4 py-3 text-text-light focus:outline-none focus:border-cta transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold tracking-widest uppercase text-text-muted">Last Name</label>
                  <input type="text" className="w-full bg-bg-dark border border-border-dark rounded-sm px-4 py-3 text-text-light focus:outline-none focus:border-cta transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold tracking-widest uppercase text-text-muted">Email Address</label>
                <input type="email" className="w-full bg-bg-dark border border-border-dark rounded-sm px-4 py-3 text-text-light focus:outline-none focus:border-cta transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold tracking-widest uppercase text-text-muted">Project Details</label>
                <textarea rows={5} className="w-full bg-bg-dark border border-border-dark rounded-sm px-4 py-3 text-text-light focus:outline-none focus:border-cta transition-colors resize-none" placeholder="Tell us about your vision..."></textarea>
              </div>
              <button className="w-full py-4 bg-cta text-bg-dark font-bold tracking-widest uppercase text-sm rounded-sm hover:bg-cta-hover transition-colors duration-300">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
