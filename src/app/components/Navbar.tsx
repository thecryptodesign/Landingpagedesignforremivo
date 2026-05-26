import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const NAV_LINKS = [
  { label: "Use Case", href: "#use-case" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,1)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(0,0,0,0.06)"
            : "1px solid rgba(0,0,0,0.06)",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <LogoIcon />
            <span
              className="text-gray-900 tracking-tight transition-colors group-hover:text-[#10a37f]"
              style={{ fontWeight: 700, fontSize: "1.125rem" }}
            >
              Remivo
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <CTAButton />
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <CTAButton compact />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-16 left-4 right-4 z-50 rounded-2xl overflow-hidden md:hidden"
              style={{
                background: "rgba(255,255,255,0.98)",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              <div className="p-4 space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.05 }}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-4 py-3 rounded-xl text-gray-700 hover:text-[#10a37f] hover:bg-[#f0fdf4] transition-colors"
                    style={{ fontWeight: 500 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="pt-3 border-t border-gray-100 mt-3">
                  <a
                    href="#"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white transition-all"
                    style={{
                      background: "linear-gradient(135deg, #10a37f 0%, #0d8968 100%)",
                      fontWeight: 600,
                      boxShadow: "0 4px 14px rgba(16,163,127,0.3)",
                    }}
                  >
                    Use Remivo Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="relative px-4 py-2 rounded-lg text-gray-600 hover:text-[#10a37f] transition-colors group"
      style={{ fontSize: "0.9375rem", fontWeight: 500 }}
    >
      {children}
      <span className="absolute bottom-1.5 left-4 right-4 h-px bg-[#10a37f] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
    </a>
  );
}

function CTAButton({ compact = false }: { compact?: boolean }) {
  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2 rounded-xl text-white transition-all"
      style={{
        background: "linear-gradient(135deg, #10a37f 0%, #0d8968 100%)",
        fontWeight: 600,
        fontSize: compact ? "0.8125rem" : "0.9375rem",
        padding: compact ? "0.4rem 0.875rem" : "0.5625rem 1.25rem",
        boxShadow: "0 2px 12px rgba(16,163,127,0.3), 0 1px 3px rgba(16,163,127,0.2)",
      }}
    >
      {compact ? "Get Started" : "Use Remivo Now"}
      {!compact && <ArrowRight className="w-4 h-4" />}
    </motion.a>
  );
}

function LogoIcon() {
  return (
    <div
      className="w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0"
      style={{
        background: "linear-gradient(135deg, #10a37f 0%, #0d8968 100%)",
        boxShadow: "0 2px 8px rgba(16,163,127,0.35)",
      }}
    >
      {/* Abstract "R" mark inside a rounded square */}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 3h5a3 3 0 0 1 0 6H4V3Z"
          fill="white"
          fillOpacity="0.95"
        />
        <path
          d="M4 9h3.5l3 4H7.5L4 9Z"
          fill="white"
          fillOpacity="0.95"
        />
      </svg>
    </div>
  );
}
