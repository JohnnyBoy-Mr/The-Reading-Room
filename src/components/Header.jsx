
import { useState } from "react";

const navLinks = [
  { name: "Fiction", href: "#fiction" },
  { name: "Non-Fiction", href: "#nonfiction" },
  { name: "Staff Picks", href: "#staff-picks" },
  { name: "Events", href: "#events" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full border-b border-border bg-background">
      <div className="mx-auto flex w-full max-w-width items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#top"
          className="shrink-0 font-heading text-xl font-bold text-text sm:text-2xl"
          onClick={closeMenu}
        >
          The Reading Room
          <span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-text transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex shrink-0 items-center justify-center rounded-md p-2 text-primary hover:bg-surface md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-border bg-background px-4 pb-5 pt-3 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-width flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-md px-3 py-3 text-sm font-semibold text-text transition-colors hover:bg-surface hover:text-primary focus-visible:outline-2 focus-visible:outline-accent"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
