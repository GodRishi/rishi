import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';
import TiltCard from './TiltCard';

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Featured <span className="text-[var(--color-accent)]">Projects</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-2xl leading-relaxed">
            A selection of my recent work, showcasing my ability to build interactive and performant web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <TiltCard className="group h-full bg-[var(--color-bg-primary)] border border-[var(--color-text-secondary)]/10 rounded-2xl overflow-hidden hover:border-[var(--color-accent)]/50 transition-colors duration-300 shadow-sm hover:shadow-[0_10px_30px_-10px_var(--color-accent-glow)]">
                <div className="aspect-video overflow-hidden relative">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <motion.a
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveLink}
                      className="p-3 bg-white text-black rounded-full"
                      title="View Live"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    {project.githubLink && (
                      <motion.a
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubLink}
                        className="p-3 bg-black text-white border border-white/20 rounded-full"
                        title="View Code"
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-4 line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-text-secondary)]/10 text-[var(--color-text-secondary)] group-hover:bg-[var(--color-accent)]/10 group-hover:text-[var(--color-accent)] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.liveLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-3 rounded-lg bg-[var(--color-accent)] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-accent)]/20 hover:shadow-[var(--color-accent)]/40 transition-shadow"
                    >
                      Visit Website <ExternalLink size={16} />
                    </motion.a>
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--color-text-secondary), 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-3 rounded-lg border border-[var(--color-text-secondary)]/20 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] transition-colors flex items-center justify-center"
                        title="View Source Code"
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
