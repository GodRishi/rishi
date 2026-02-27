import { motion } from 'motion/react';
import { SERVICES } from '../constants';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-8 tracking-tight"
            >
              More Than Just <br />
              <span className="text-[var(--color-accent)]">Code</span>
            </motion.h2>
            <div className="space-y-8 text-[var(--color-text-secondary)] text-lg md:text-xl leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                I'm Rishi, a passionate web developer who believes that the best digital experiences are born at the intersection of logic and creativity.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Although I am early in my journey, I bring a relentless drive for perfection and a modern approach to development. I don't just write code; I craft experiences. My goal is to deliver projects that are not only technically sound but also visually captivating.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                I pride myself on speed without compromising quality. Whether it's a complex web application or a stunning portfolio, I treat every project as a masterpiece.
              </motion.p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-text-secondary)]/10 hover:border-[var(--color-accent)]/50 transition-colors group shadow-sm hover:shadow-[0_10px_30px_-10px_var(--color-accent-glow)]"
              >
                <div className="mb-4 text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300 origin-left">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
