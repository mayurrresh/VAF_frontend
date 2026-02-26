const FoundationSection = () => {
  return (
    <section className="py-10 bg-[#F6E2CC] border-t border-[#C2410C]/20">
      <div className="ss-container text-center">

        <p className="text-xs tracking-[0.35em] uppercase text-[#92400E] mb-3">
          An initiative by
        </p>

        <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#0F172A]">
          Vinit Abhedya Foundation
        </h3>

        <p className="mt-4 text-base text-[#1F2937] max-w-lg mx-auto leading-relaxed">
          Dedicated to fostering human connection, emotional growth,
          and community empowerment through culture and conversation.
        </p>

      </div>

      {/* Divider */}
      <div className="mt-10 flex justify-center">
        <div className="w-28 h-[2px] bg-[#C2410C]/70" />
      </div>
    </section>
  );
};

export default FoundationSection;