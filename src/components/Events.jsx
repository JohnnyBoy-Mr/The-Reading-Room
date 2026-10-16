import { events } from "../data/events";

export function Events() {
  return (
    <section
      id="events"
      aria-labelledby="events-title"
      className="bg-surface px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto w-full max-w-width">
        {/* Section Heading */}
        <h2
          id="events-title"
          className="mb-8 font-heading text-3xl font-bold text-ink sm:text-4xl"
        >
          Upcoming Events
        </h2>

        {/* Events List */}
        <div className="flex flex-col gap-4">
          {events.map((event) => (
            <article
              key={event.id}
              className="flex items-center gap-4 rounded-bookstore border border-line bg-bg p-4 sm:gap-6 sm:p-6"
            >
              {/* Event Date */}
              <div className="flex w-16 shrink-0 flex-col items-center justify-center rounded-bookstore bg-ember px-2 py-3 text-white sm:w-20">
                <strong className="font-heading text-2xl leading-none sm:text-3xl">
                  {event.day}
                </strong>

                <span className="mt-1 text-xs font-semibold tracking-widest">
                  {event.month}
                </span>
              </div>

              {/* Event Details */}
              <div className="min-w-0">
                <h3 className="font-heading text-lg font-semibold text-ink sm:text-xl">
                  {event.title}
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}