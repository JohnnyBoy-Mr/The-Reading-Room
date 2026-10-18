import { useState } from "react";
import { products } from "../data/product";
import BookCard from "./BookCard";

const categories = ["All Books", "Fiction", "Non-Fiction", "Staff Picks"];

const categoryHeadings = {
  "All Books": {
    title: "All Books",
    description: "Explore our complete collection",
  },
  Fiction: {
    title: "Fiction Favorites",
    description: "Stories to get lost in",
  },
  "Non-Fiction": {
    title: "Non-Fiction",
    description: "Ideas worth sharing",
  },
  "Staff Picks": {
    title: "Staff Picks",
    description: "Handpicked with love",
  },
};

export function BookGrid() {
  const [activeCategory, setActiveCategory] = useState("All Books");
  const [quantities, setQuantities] = useState({});

  const filteredBooks =
    activeCategory === "All Books"
      ? products
      : products.filter((book) => book.category === activeCategory);

  const handleQuantityChange = (bookId, quantity) => {
    setQuantities((prev) => ({
      ...prev,
      [bookId]: quantity,
    }));
  };

  const currentHeading = categoryHeadings[activeCategory];

  return (
    <section
      id="books"
      aria-labelledby="books-title"
      className="scroll-mt-24 mx-auto w-full max-w-width px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      {/* Main Heading */}
      <div className="mb-8">
        <h2
          id="books-title"
          className="font-heading text-3xl font-bold text-ink sm:text-4xl"
        >
          Explore Our Books
        </h2>

        <p className="mt-2 text-ink-soft">Discover your next favorite read.</p>
      </div>

      {/* Category Filter */}
      <div
        className="mb-10 flex flex-wrap gap-3"
        role="group"
        aria-label="Filter books by category"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={`rounded-bookstore border px-5 py-2 text-sm font-medium transition-colors ${
              activeCategory === category
                ? "border-ember bg-ember text-white"
                : "border-line bg-bg text-ink hover:bg-surface"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Dynamic Category Heading */}
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
            {currentHeading.title}
          </h3>

          <p className="mt-1 text-sm text-ink-soft">
            {currentHeading.description}
          </p>
        </div>

        <p className="text-sm text-ink-soft" aria-live="polite">
          Showing {filteredBooks.length} of {products.length} books
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            quantity={quantities[book.id] ?? 0}
            onQuantityChange={(quantity) =>
              handleQuantityChange(book.id, quantity)
            }
          />
        ))}
      </div>
    </section>
  );
}
