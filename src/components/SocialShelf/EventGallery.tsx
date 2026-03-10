const events = [
  "/images/TSS/event6.jpeg",
  "/images/TSS/event1.jpeg",
  "/images/TSS/event10.jpeg",
  "/images/TSS/event8.jpeg",
  "/images/TSS/event4.jpeg",
  "/images/TSS/event2.jpeg",
];

const captions = [
  "Circle Discussion",
  "Solo Reading Moment",
  "Facilitated Dialogue",
  "Community Conversation",
  "Curated Book Display",
  "Shared Reading",
];

function EventGallery() {
  return (
    <section className="pt-7 pb-7 bg-[#F6E2CC]">
      <div className="ss-container">

        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#92400E] block mb-4">
            Moments from the Shelf
          </span>

          <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#0F172A] mb-4">
            Where community happens
          </h2>

          <p className="text-base text-[#1F2937] leading-relaxed">
            Real moments of connection, conversation, and shared discovery from our gatherings.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {events.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={img}
                alt={`Event ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <p className="text-white text-sm px-4 py-4 font-medium">
                  {captions[index]}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="mt-24 flex justify-center">
        <div className="w-28 h-[2px] bg-[#C2410C]/70" />
      </div>
    </section>
  );
}

export default EventGallery;