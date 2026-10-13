
export function Hero() {
  return (
    <section
      className="bg-surface px-4 py-16 text-center sm:py-20 lg:py-28"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto w-full max-w-175">
        {/* Eyebrow */}
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-ember">
          Independent Bookstore
        </p>

        {/* Main Heading */}
        <h1
          id="hero-title"
          className="mb-6 font-heading text-4xl leading-[1.15] font-bold text-ink sm:text-5xl lg:text-7xl"
        >
          Good books.
          <br />
          <em className="font-normal text-ember">
            Great company.
          </em>
        </h1>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-130 text-base leading-relaxed text-ink-soft sm:text-lg">
          Discover unforgettable stories, thoughtful recommendations
          and a welcoming community of readers.
        </p>

        {/* Call to Action */}
        <a
          href="#fiction"
          className="inline-flex items-center justify-center rounded-bookstore bg-ember px-6 py-3 font-body text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
        >
          Explore Our Books
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
