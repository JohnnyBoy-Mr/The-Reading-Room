
import { QuantityStepper } from "./QuantityStepper";

export default function BookCard({
  book,
  quantity,
  onQuantityChange,
}) {
  const formattedPrice = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(book.price);

  return (
    <article className="min-w-0 w-full">
      {/* Book Cover */}
      <div className="aspect-3/4 overflow-hidden rounded-bookstore bg-surface">
        <img
          src={book.image}
          alt={`Cover of ${book.name}`}
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
          {formattedPrice}
        </p>

        {/* Controlled Component */}
        <div className="mt-4">
          <QuantityStepper
            value={quantity}
            onChange={onQuantityChange}
            min={0}
            max={10}
          />
        </div>
      </div>
    </article>
  );
}
