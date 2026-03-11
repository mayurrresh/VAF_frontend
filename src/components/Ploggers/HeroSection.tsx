import { Button } from "@/components/ui/button";

const heroImage = "/images/Ploggers/hero-bg.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Community members plogging together"
          className="w-full h-full object-cover object-[center] scale-100"
        />

        {/* Stronger cinematic overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Subtle bottom depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide px-6 pt-40 pb-28 text-center">
        <div className="max-w-3xl mx-auto">

          {/* Eyebrow Text */}
          <p className="text-xs tracking-[0.45em] uppercase text-white/70 mb-6 font-medium">
            A Community Clean-Up Initiative
          </p>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Clean streets{" "}
            <span className="text-emerald-400">begin with us.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Plogging combines jogging with picking up litter — a simple act of 
            walking, cleaning, and caring for the places we call home.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

            {/* Primary */}
            <Button
              size="lg"
              className="
                rounded-full
                px-8
                h-14
                text-base
                font-semibold
                bg-emerald-500
                hover:bg-emerald-600
                text-white
                transition-all duration-300
                shadow-xl
                hover:-translate-y-1
                hover:shadow-emerald-500/40
              "
              asChild
            >
              <a href="#join">
                Join a Drive
              </a>
            </Button>

            {/* Secondary */}
            <Button
              variant="outline"
              size="lg"
              className="
                rounded-full
                px-8
                h-14
                text-base
                font-semibold
                border-white/40
                text-white
                bg-white/5
                backdrop-blur-md
                hover:bg-white/15
                hover:-translate-y-1
                transition-all duration-300
              "
              asChild
            >
              <a href="#what-is-plogging">
                Learn More
              </a>
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;