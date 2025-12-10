import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z" />
                  <path d="M12 8C12 8 10 10 10 12C10 14 12 16 12 16C12 16 14 14 14 12C14 10 12 8 12 8Z" />
                </svg>
              </div>
              <span className="font-heading text-xl font-semibold">
                Soulful Flow
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Transform body, mind, and spirit at Birmingham's premier yoga studio. 
              Where traditional wisdom meets modern wellness.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/classes", label: "Our Classes" },
                { href: "/booking", label: "Book a Session" },
                { href: "/instructors", label: "Meet Our Team" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Class Categories */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg font-semibold">Explore</h4>
            <nav className="flex flex-col gap-3">
              {[
                "Physical Focus",
                "Inner Intentions",
                "Spiritual Practice",
                "Nature-Inspired",
                "Modern Wellness",
              ].map((category) => (
                <Link
                  key={category}
                  to="/classes"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  {category}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg font-semibold">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-foreground/70 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-primary-foreground/70">
                  42 Zen Lane, Jewellery Quarter<br />
                  Birmingham B3 1JQ, UK
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-foreground/70 flex-shrink-0" />
                <a
                  href="tel:+441211234567"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  +44 121 123 4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/70 flex-shrink-0" />
                <a
                  href="mailto:hello@soulfulflow.yoga"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  hello@soulfulflow.yoga
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Soulful Flow Yoga. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-sm text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
