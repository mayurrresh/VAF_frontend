import { useEffect, useState } from "react";

const WhyItMattersSection = () => {
  return (
    <section className="relative pt-7 pb-7 bg-[#F6E2CC] overflow-hidden">
      
      {/* Soft Decorative Blobs */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-16 left-16 animate-floatSlow">
          <div className="w-20 h-20 bg-[#C2410C] rounded-full opacity-50" />
        </div>

        <div className="absolute bottom-20 right-20 animate-floatMedium">
          <div className="w-14 h-14 bg-[#C2410C] rounded-full opacity-50" />
        </div>

        <div className="absolute top-1/3 right-16 animate-floatFast">
          <div className="w-10 h-10 bg-[#C2410C] rounded-full opacity-50" />
        </div>

      </div>

      <div className="ss-container relative z-10">

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-xs tracking-[0.35em] uppercase text-[#92400E] mb-4">
            Why It Matters
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-6 leading-tight text-[#0F172A]">
            Building bridges through
            <br />
            <span className="italic font-light text-[#C2410C]">
              shared understanding
            </span>
          </h2>

          <p className="text-base md:text-lg text-[#1F2937] leading-relaxed mb-14">
            In a time when division feels common, Social Shelf offers something 
            different. We create spaces where people from all walks of life can 
            come together, listen deeply, and discover the humanity in each other's stories.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <span className="block text-2xl font-display text-[#111827] mb-2">
                Empathy
              </span>
              <p className="text-sm text-[#374151]">
                Building emotional understanding
              </p>
            </div>

            <div>
              <span className="block text-2xl font-display text-[#111827] mb-2">
                Dialogue
              </span>
              <p className="text-sm text-[#374151]">
                Creating inclusive conversations
              </p>
            </div>

            <div>
              <span className="block text-2xl font-display text-[#111827] mb-2">
                Community
              </span>
              <p className="text-sm text-[#374151]">
                Strengthening human bonds
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Divider */}
      <div className="mt-24 flex justify-center">
        <div className="w-28 h-[2px] bg-[#C2410C]/70" />
      </div>

      {/* Floating Animations */}
      <style>
        {`
          @keyframes floatSlow {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }

          @keyframes floatMedium {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          @keyframes floatFast {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0px); }
          }

          .animate-floatSlow {
            animation: floatSlow 6s ease-in-out infinite;
          }

          .animate-floatMedium {
            animation: floatMedium 4.5s ease-in-out infinite;
          }

          .animate-floatFast {
            animation: floatFast 3.5s ease-in-out infinite;
          }
        `}
      </style>

    </section>
  );
};

export default WhyItMattersSection;