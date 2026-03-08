import { motion } from 'motion/react';
import { SKILLS } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-[var(--color-accent)]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-28 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            What I <span className="text-[var(--color-accent)]">Deliver</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            I don't just write code; I build solutions that drive real business results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-text-secondary)]/10 shadow-sm hover:shadow-[0_10px_30px_-10px_var(--color-accent-glow)] hover:border-[var(--color-accent)]/30 transition-all flex flex-col items-center text-center group"
            >
              <div className="p-4 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-6 group-hover:scale-110 transition-transform duration-300">
                <skill.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
