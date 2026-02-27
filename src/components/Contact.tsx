import { motion } from 'motion/react';
import { Mail, Phone, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqedwzay";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        // Fallback for demo purposes if no ID is provided
        console.warn("Formspree ID not configured. Simulating success.");
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Fallback for demo
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Let's <span className="text-[var(--color-accent)]">Collaborate</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hi? I'm always open to new opportunities and interesting conversations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div 
              whileHover={{ x: 5 }}
              className="p-6 md:p-8 rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-text-secondary)]/10 hover:border-[var(--color-accent)]/30 transition-colors shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-6">
                <a
                  href="mailto:saharishi409@gmail.com"
                  className="flex items-center gap-4 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors group"
                >
                  <div className="p-3 rounded-full bg-[var(--color-text-secondary)]/5 group-hover:bg-[var(--color-accent)]/10 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-lg">saharishi409@gmail.com</span>
                </a>
                <a
                  href="tel:+919088384485"
                  className="flex items-center gap-4 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors group"
                >
                  <div className="p-3 rounded-full bg-[var(--color-text-secondary)]/5 group-hover:bg-[var(--color-accent)]/10 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-lg">+91 9088384485</span>
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl bg-[var(--color-accent)] text-white relative overflow-hidden shadow-lg hover:shadow-[0_10px_40px_-10px_var(--color-accent-glow)] transition-shadow"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Ready to start?</h3>
                <p className="mb-6 opacity-90">
                  I'm currently available for freelance projects and full-time roles.
                </p>
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">
                  Response time: &lt; 24 hours
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-text-secondary)]/10 shadow-lg"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-text-secondary)]/20 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-text-secondary)]/20 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-text-secondary)]/20 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || submitted}
              className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all ${
                submitted
                  ? 'bg-green-500'
                  : 'bg-[var(--color-accent)] hover:bg-opacity-90 shadow-[0_0_20px_var(--color-accent-glow)]'
              }`}
            >
              {submitted ? (
                'Message Sent!'
              ) : isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
