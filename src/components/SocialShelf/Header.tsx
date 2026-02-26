import { useState, useEffect } from "react";
import logo from "@/assets/TSS-LOGO.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1E4D4A]/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="ss-container flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt="The Social Shelf Logo"
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-10" : "h-12"
            }`}
          />
          <span className="text-lg md:text-xl tracking-tight font-display text-white">
            The Social Shelf
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">

          {["About", "Activities", "Values"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm tracking-wide text-white transition-colors duration-300 hover:text-[#F2C185] group"
            >
              {item}

              {/* Animated Underline */}
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#F2C185] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="#join"
            className="px-6 py-2.5 rounded-full text-sm tracking-wide
                       bg-[#F2C185] text-[#ffffff]
                       font-medium
                       transition-all duration-300
                       hover:bg-[#e6b06a]"
          >
            Join Us
          </a>

        </nav>
      </div>
    </header>
  );
};

export default Header;