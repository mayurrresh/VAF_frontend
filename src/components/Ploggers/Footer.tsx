import { Mail, MapPin } from "lucide-react";
const footerLogo = "/images/Ploggers/sambhajinagar-logo-for-Website.png";

const Footer = () => {
  const quickLinks = [
    { label: "What is Plogging", href: "#what-is-plogging" },
    { label: "Why It Matters", href: "#why-it-matters" },
    { label: "What We Do", href: "#what-we-do" },
    { label: "Community", href: "#community" },
    { label: "Our Impact", href: "#impact" },
  ];

  return (
    <footer className="section-padding bg-foreground text-background/90 py-12">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <a
              href="/"
              className="inline-block mb-4 transition-all duration-300 hover:scale-110 hover:opacity-90"
            >
              <img
                src={footerLogo}
                alt="Chh. Sambhajinagar Ploggers Logo"
                className="h-14 w-auto object-contain"
              />
            </a>

            <p className="text-sm text-background/70 leading-relaxed">
              A grassroots environmental initiative promoting community
              participation and cleaner public spaces through plogging.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group relative text-sm text-background/70 transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">
              Get in Touch
            </h4>

            <ul className="space-y-3">
              
              {/* Address */}
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Chh.+Sambhajinagar,+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-background/70 transition-all duration-300 hover:text-primary hover:translate-x-1"
                >
                  <MapPin className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                  Chh. Sambhajinagar, Maharashtra
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:contact@sambhajinagarplogging.org"
                  className="group flex items-center gap-3 text-sm text-background/70 transition-all duration-300 hover:text-primary hover:translate-x-1"
                >
                  <Mail className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                  contact@sambhajinagarplogging.org
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50 text-center sm:text-left">
            © {new Date().getFullYear()} Chh. Sambhajinagar Ploggers.
            An initiative by Vinit Abhedya Foundation.
          </p>

          <p className="text-sm text-background/50 transition-colors duration-300 hover:text-primary">
            Move. Clean. Repeat.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;