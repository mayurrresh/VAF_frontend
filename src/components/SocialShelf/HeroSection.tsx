import heroImage from "@/assets/hero-books.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F6E2CC]">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Stack of books"
          className="w-full h-full object-cover scale-105"
        />

        {/* Warm Premium Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-b
                     from-black/60
                     via-black/50
                     to-[#F6E2CC]/75"
        />

        {/* Subtle depth blur */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 ss-container text-center pt-28 px-6">
        <div className="max-w-4xl mx-auto">

          <p className="text-xs tracking-[0.45em] uppercase 
                        text-[#F6E2CC]/90 mb-6 font-medium">
            A Community Reading Initiative
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl
                         leading-[1.05] mb-8
                         text-[#FFF8EE] font-display font-medium drop-shadow-xl">
            Where stories bring
            <br />
            <span className="italic font-light text-[#F97316]">
              people together
            </span>
          </h1>

          <div className="w-24 h-[2px] bg-[#F97316] mx-auto mb-8 opacity-95" />

          <p className="text-lg md:text-xl
                        text-[#F6E2CC]/90
                        max-w-2xl mx-auto mb-14
                        leading-relaxed font-body">
            A book club and social learning space where we gather to read,
            reflect, and grow — together, with empathy and intention.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            {/* Primary Button */}
            <a
              href="#join"
              className="inline-flex items-center justify-center px-10 py-4
                         bg-[#F2C185] !text-white
                         text-sm tracking-wide font-semibold
                         rounded-full
                         shadow-2xl shadow-black/40
                         transition-all duration-300
                         hover:bg-[#EA580C]
                         hover:scale-[1.05]
                         active:scale-[0.98]"
            >
              Join a Reading Circle
            </a>

            {/* Secondary Button — Warm Glass */}
            <a
              href="#about"
              className="inline-flex items-center justify-center px-10 py-4
                         border border-[#F6E2CC]/70
                         text-[#F6E2CC]
                         text-sm tracking-wide font-semibold
                         rounded-full
                         bg-[#F6E2CC]/10
                         backdrop-blur-md
                         transition-all duration-300
                         hover:bg-[#F6E2CC]/20
                         hover:border-[#F6E2CC]
                         hover:scale-[1.03]
                         active:scale-[0.98]"
            >
              Learn More
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;