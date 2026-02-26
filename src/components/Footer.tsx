export default function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--color-text-secondary)]/10 text-center text-[var(--color-text-secondary)] text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Rishi. All rights reserved.</p>
        <div className="flex gap-6">
          <a 
            href="https://instagram.com/itz_rishi_saha" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
