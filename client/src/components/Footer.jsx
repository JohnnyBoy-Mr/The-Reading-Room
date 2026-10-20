
const footerLinks = [
  { label: "Home", href: "#top" },
  { label: "Explore Books", href: "#books" },
  { label: "Upcoming Events", href: "#events" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto grid w-full max-w-width grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:px-8 lg:py-16">
        {/* Bookstore Information */}
        <div className="sm:col-span-2 lg:col-span-1">
          <a
            href="#top"
            className="font-heading text-2xl font-bold text-white"
          >
            The Reading Room
          </a>

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
            An independent bookstore bringing readers together
            through unforgettable stories, thoughtful recommendations,
            and a shared love of books.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer navigation">
          <h2 className="mb-4 font-heading text-lg font-semibold text-white">
            Quick Links
          </h2>

          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-clay focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Opening Hours */}
        <div>
          <h2 className="mb-4 font-heading text-lg font-semibold text-white">
            Opening Hours
          </h2>

          <ul className="space-y-3 text-sm text-white/75">
            <li>Monday – Friday: 09:00 – 18:00</li>
            <li>Saturday: 09:00 – 16:00</li>
            <li>Sunday: 10:00 – 14:00</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="mb-4 font-heading text-lg font-semibold text-white">
            Get in Touch
          </h2>

          <p className="text-sm leading-relaxed text-white/75">
            Have a question about a book or an upcoming event?
            We'd love to hear from you.
          </p>

          <a
            href="mailto:hello@thereadingroom.example"
            className="mt-4 inline-block text-sm text-clay underline-offset-4 hover:underline"
          >
            hello@thereadingroom.example
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20">
        <div className="mx-auto flex w-full max-w-width flex-col items-center justify-between gap-3 px-4 py-5 text-center text-sm text-white/65 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>
            © {currentYear} The Reading Room. All rights reserved.
          </p>

          <a
            href="#top"
            className="transition-colors hover:text-clay"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
