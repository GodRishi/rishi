import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-[var(--color-text-primary)] transition-colors duration-500 selection:bg-[var(--color-accent)] selection:text-white relative md:cursor-none">
        <CustomCursor />
        <ScrollProgress />
        <AnimatedBackground />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
