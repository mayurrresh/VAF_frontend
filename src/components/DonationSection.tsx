import { motion } from "framer-motion";
import { Heart, Gift, Sparkles, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Gift,
    title: "Small Help, Big Impact",
    desc: "Even ₹100 can support tree plantation drives or provide books for community learning.",
  },
  {
    icon: Sparkles,
    title: "100% Transparent",
    desc: "Every contribution is documented. You see exactly how your support creates measurable change.",
  },
  {
    icon: HandHeart,
    title: "Empower Communities",
    desc: "Funding goes directly to volunteer programs, awareness campaigns, and on-ground action.",
  },
];

const DonationSection = () => {
  return (
    <section
      id="donate"
      className="relative bg-emerald-700 text-white py-24 overflow-hidden"
    >
      {/* Ambient depth glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-400/20 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Heart className="w-7 h-7 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Every Contribution Counts
          </h2>

          <p className="text-lg text-emerald-100/90 leading-relaxed">
            Your generosity strengthens communities, restores environments,
            and empowers individuals to create lasting impact.
          </p>
        </motion.div>

        {/* Reason Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="
                group
                bg-white/10
                backdrop-blur-xl
                border border-white/20
                rounded-2xl
                p-8
                transition-all duration-300
                hover:-translate-y-2
                hover:bg-white/20
                hover:shadow-xl
                hover:shadow-black/20
              "
            >
              <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
                <r.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-semibold mb-3">
                {r.title}
              </h3>

              <p className="text-sm text-emerald-100/80 leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="
              rounded-full
              px-12
              py-6
              text-lg
              font-semibold
              bg-white
              text-emerald-700
              hover:bg-emerald-50
              transition-all duration-300
              shadow-xl
              hover:shadow-2xl
              hover:-translate-y-1
              gap-2
            "
          >
            <Heart className="w-5 h-5" />
            Donate Now
          </Button>

          <p className="text-sm text-emerald-100/80 mt-6">
            Secure payment • Tax deductible • Every rupee matters
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default DonationSection;
