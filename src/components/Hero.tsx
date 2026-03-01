import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[100svh] flex items-center justify-center relative overflow-hidden pt-28 md:pt-20 pb-24"
    >
      {/* Spotlight Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(var(--color-accent-rgb),0.15),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs md:text-sm font-semibold mb-6 border border-[var(--color-accent)]/20 backdrop-blur-sm">
            Available for Freelance & Hire
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-6"
        >
          Crafting Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-purple-600">
            Masterpieces.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I transform simple ideas into visually powerful digital experiences.
          Leveraging the raw power of TypeScript and HTML to build bold,
          interactive, and performant websites.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnetic>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-[var(--color-accent)] text-white font-semibold text-base md:text-lg hover:bg-opacity-90 transition-colors shadow-[0_0_20px_var(--color-accent-glow)] flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 md:px-8 md:py-4 rounded-full border border-[var(--color-text-secondary)]/30 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors font-semibold text-base md:text-lg flex items-center gap-2 bg-[var(--color-bg-primary)]/50 backdrop-blur-sm"
            >
              Contact Me
            </motion.a>
          </Magnetic>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-secondary)]"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ height: [20, 40, 20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-gradient-to-b from-[var(--color-text-secondary)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
