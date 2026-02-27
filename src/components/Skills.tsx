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
          className="mb-20 md:mb-28 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Technical <span className="text-[var(--color-accent)]">Arsenal</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-2xl leading-relaxed">
            My expertise spans across the full stack, with a special focus on creating fluid, interactive frontend experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
          {SKILLS.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-text-secondary)]/10 shadow-sm hover:shadow-[0_10px_30px_-10px_var(--color-accent-glow)] hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-[var(--color-text-secondary)]">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-[var(--color-text-secondary)]/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.5, delay: 0.2 + (skillIndex * 0.1), ease: "easeOut" }}
                        className="h-full bg-[var(--color-accent)] rounded-full relative overflow-hidden"
                      >
                        <motion.div 
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            repeatDelay: 1,
                            ease: "linear" 
                          }}
                          className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" 
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
