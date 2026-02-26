function Footer() {
  return (
    <footer className="bg-[#0B1F1E] text-white py-16">
      <div className="ss-container">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-semibold text-[#FFF8EE]">
              Social Shelf
            </p>
            <p className="text-sm text-white/60 mt-2">
              A Vinit Abhedya Foundation Initiative
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-10 text-sm tracking-wide font-medium">
            <a
              href="#about"
              className="text-white/70 hover:text-[#C2410C] transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#activities"
              className="text-white/70 hover:text-[#C2410C] transition-colors duration-300"
            >
              Activities
            </a>
            <a
              href="#values"
              className="text-white/70 hover:text-[#C2410C] transition-colors duration-300"
            >
              Values
            </a>
            <a
              href="#join"
              className="text-white/70 hover:text-[#C2410C] transition-colors duration-300"
            >
              Join
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 h-px bg-white/10" />

        {/* Bottom Section */}
        <div className="mt-8 text-center text-xs text-white/50 tracking-wide">
          © {new Date().getFullYear()} Social Shelf. Crafted with intention.
        </div>

      </div>
    </footer>
  );
}

export default Footer;