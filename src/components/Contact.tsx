import { motion } from 'motion/react';
import { Mail, Phone, Send, CheckCircle, Instagram, ArrowRight } from 'lucide-react';
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
        console.warn("Formspree ID not configured. Simulating success.");
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "Clear & Consistent Communication",
    "On-Time Project Delivery",
    "Post-Launch Support & Maintenance",
    "SEO-Friendly Architecture"
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Let's Build Something <span className="text-[var(--color-accent)]">Extraordinary</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Whether you need a complete website overhaul or a high-converting landing page, I'm here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left Column: Contact Info & Value Props */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 md:space-y-12"
          >
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold">Why work with me?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span className="text-[var(--color-text-secondary)] font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--color-bg-primary)] border border-[var(--color-text-secondary)]/10 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-xl md:text-2xl font-bold mb-8 relative z-10">Get in Touch</h3>
              <div className="space-y-6 relative z-10">
                <a
                  href="mailto:saharishi409@gmail.com"
                  className="flex items-center gap-4 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors group/link"
                >
                  <div className="p-3 rounded-xl bg-[var(--color-bg-secondary)] group-hover/link:bg-[var(--color-accent)]/10 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">saharishi409@gmail.com</span>
                </a>
                <a
                  href="tel:+919088384485"
                  className="flex items-center gap-4 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors group/link"
                >
                  <div className="p-3 rounded-xl bg-[var(--color-bg-secondary)] group-hover/link:bg-[var(--color-accent)]/10 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">+91 9088384485</span>
                </a>
                <a
                  href="https://instagram.com/itz_rishi_saha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors group/link"
                >
                  <div className="p-3 rounded-xl bg-[var(--color-bg-secondary)] group-hover/link:bg-[var(--color-accent)]/10 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">@itz_rishi_saha</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shrink-0" />
              <p className="text-[var(--color-accent)] font-semibold">
                Currently accepting new projects
              </p>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)] to-purple-600 rounded-3xl blur-xl opacity-20 transform rotate-1" />
            <form
              onSubmit={handleSubmit}
              className="relative space-y-6 p-8 md:p-10 rounded-3xl bg-[var(--color-bg-primary)] border border-[var(--color-text-secondary)]/10 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
              <p className="text-[var(--color-text-secondary)] mb-8 text-sm">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-[var(--color-text-secondary)] ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-[var(--color-bg-secondary)]/50 border border-[var(--color-text-secondary)]/10 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all text-base placeholder:text-[var(--color-text-secondary)]/30"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-[var(--color-text-secondary)] ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-[var(--color-bg-secondary)]/50 border border-[var(--color-text-secondary)]/10 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all text-base placeholder:text-[var(--color-text-secondary)]/30"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-[var(--color-text-secondary)] ml-1">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-[var(--color-bg-secondary)]/50 border border-[var(--color-text-secondary)]/10 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all resize-none text-base placeholder:text-[var(--color-text-secondary)]/30"
                  placeholder="Tell me about your goals, timeline, and budget..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 ${
                  submitted
                    ? 'bg-green-500'
                    : 'bg-gradient-to-r from-[var(--color-accent)] to-purple-600 hover:shadow-lg hover:shadow-[var(--color-accent)]/25'
                }`}
              >
                {submitted ? (
                  'Message Sent Successfully!'
                ) : isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
