
const footerLinks = [
  { name: "Fiction", href: "#fiction" },
  { name: "Nonfiction", href: "#nonfiction" },
  { name: "Staff Picks", href: "#staff-picks" },
  { name: "Events", href: "#events" },
];

const openingHours = [
  "Mon–Fri: 9:00 AM – 6:00 PM",
  "Saturday: 9:00 AM – 4:00 PM",
  "Sunday: Closed",
];

export function Footer() {
  return (
    <footer className="bg-primary-dark px-4 pt-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-width">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Bookstore Information */}
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold">
              The Reading Room
              <span className="text-clay">.</span>
            </h2>

            <p className="max-w-xs text-sm leading-relaxed text-white/75">
              A cozy corner for curious minds. Discover great stories,
              thoughtful recommendations, and a community of book lovers.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="mb-5 font-heading text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/75 transition-colors duration-200 hover:text-clay focus-visible:text-clay"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Details */}
          <div>
            <h3 className="mb-5 font-heading text-lg font-semibold">
              Visit & Contact
            </h3>

            <address className="space-y-3 text-sm not-italic text-white/75">
              <p>Cape Town, South Africa</p>

              <p>
                <a
                  href="mailto:hello@readingroom.example"
                  className="break-all transition-colors duration-200 hover:text-clay"
                >
                  hello@readingroom.example
                </a>
              </p>

              <p>
                <a
                  href="tel:+27210000000"
                  className="transition-colors duration-200 hover:text-clay"
                >
                  021 000 0000
                </a>
              </p>
            </address>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-5 font-heading text-lg font-semibold">
              Opening Hours
            </h3>

            <ul className="space-y-3 text-sm text-white/75">
              {openingHours.map((hours) => (
                <li key={hours}>{hours}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-white/60">
            &copy; 2026 The Reading Room. All rights reserved.
          </p>

          <a
            href="#top"
            className="text-sm font-medium text-white/75 transition-colors duration-200 hover:text-clay"
          >
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
