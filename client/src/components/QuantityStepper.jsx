export function QuantityStepper({
  value,
  onChange,
  min = 0,
  max = 10,
}) {
  return (
    <div className="inline-flex items-center overflow-hidden rounded-bookstore border border-line">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className="px-3 py-2 text-ink transition-colors hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40"
      >
        −
      </button>

      <output
        aria-live="polite"
        className="min-w-8 text-center text-sm font-semibold text-ink"
      >
        {value}
      </output>

      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label="Increase quantity"
        className="px-3 py-2 text-ink transition-colors hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40"
      >
        +
      </button>
    </div>
  );
}
