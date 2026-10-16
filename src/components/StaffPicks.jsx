import { staffPicksProducts as products } from "../data/product";

export function StaffPicks() {
  const staffBooks = products.filter(
    (product) => product.category === "Staff Picks"
  );

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <section
      id="staff-picks"
      aria-labelledby="staff-title"
      className="mx-auto w-full max-w-width px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      {/* Section Heading */}
      <div className="mb-7 flex flex-wrap items-baseline justify-between gap-3">
        <h2
          id="staff-title"
          className="font-heading text-3xl font-bold text-ink sm:text-4xl"
        >
          Staff Picks
        </h2>

        <p className="text-sm text-ink-soft">
          Handpicked with love
        </p>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {staffBooks.map((book) => (
          <article key={book.id} className="min-w-0">
            {/* Book Cover */}
            <div className="aspect-3/4 overflow-hidden rounded-bookstore bg-surface">
              <img
                src={book.image}
                alt={`Cover of ${book.name} by ${book.author}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Book Information */}
            <div className="pt-4">
              <h3 className="font-heading text-lg font-semibold text-ink">
                {book.name}
              </h3>

              <p className="mt-1 text-sm text-ink-soft">
                {book.author}
              </p>

              <p className="mt-2 font-semibold text-ink">
                {formatPrice(book.price)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
