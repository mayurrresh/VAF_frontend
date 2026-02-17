import { motion } from "framer-motion";
import { ArrowDown, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/20230423080147_IMG_6901-scaled.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Volunteers planting trees"
          className="w-full h-full object-cover object-[center_5%] scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

        {/* Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-md border border-white/20">
            ✨ Empowering Communities, Inspiring Change
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Vinit Abhedya <span className="text-emerald-400">Foundation</span>
          </h1>

          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10">
            Empowering communities through environmental action, women's
            empowerment, and the joy of shared knowledge. Together, we create
            lasting change.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Primary Button */}
            <a href="#initiatives">
              <Button
                size="lg"
                className="
                  bg-emerald-600 text-white 
                  rounded-full px-8 h-12 text-base font-semibold
                  shadow-lg
                  hover:bg-emerald-700
                  hover:shadow-2xl hover:shadow-emerald-500/40
                  hover:scale-105
                  transition-all duration-300 ease-out
                "
              >
                Explore Our Initiatives
              </Button>
            </a>

            {/* Secondary Button */}
            <a href="#donate">
              <Button
                size="lg"
                variant="outline"
                className="
                  rounded-full px-8 h-12 text-base font-semibold
                  border-white/40 text-white bg-transparent
                  hover:bg-white hover:text-emerald-700
                  hover:border-white
                  hover:scale-105
                  hover:shadow-xl
                  transition-all duration-300 ease-out
                "
              >
                <Heart className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                Support Us
              </Button>
            </a>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-12 flex justify-center"
          >
            <a href="#impact" aria-label="Scroll to About section">
              <ArrowDown className="w-6 h-6 text-white/70 animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
