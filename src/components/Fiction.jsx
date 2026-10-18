import { useState } from "react";
import { fictionProducts as products } from "../data/product.js";
import BookCard from "./BookCard";

export function Fiction() {
  const [quantities, setQuantities] = useState({});

  const fictionBooks = products.filter(
    (product) => product.category === "Fiction",
  );

  const handleQuantityChange = (bookId, newQuantity) => {
    setQuantities((prev) => ({
      ...prev,
      [bookId]: newQuantity,
    }));
  };

  return (
    <section
      id="fiction"
      aria-labelledby="fiction-title"
      className="mx-auto w-full max-w-width px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mb-7 flex flex-wrap items-baseline justify-between gap-3">
        <h2
          id="fiction-title"
          className="font-heading text-3xl font-bold text-ink sm:text-4xl"
        >
          Fiction Favorites
        </h2>

        <p className="text-sm text-ink-soft">Stories to get lost in</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fictionBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            quantity={quantities[book.id] ?? 0}
            onQuantityChange={(newQuantity) =>
              handleQuantityChange(book.id, newQuantity)
            }
          />
        ))}
      </div>
    </section>
  );
}
