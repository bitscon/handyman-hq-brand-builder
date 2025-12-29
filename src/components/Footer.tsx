import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-dark text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Handyman HQ" className="h-12 w-auto brightness-0 invert" />
              <span className="font-display text-3xl tracking-wide">
                HANDYMAN HQ
              </span>
            </Link>
            <p className="text-blue-light mb-6 max-w-md">
              Your Go-To-Guy for Home Projects. Serving Forney, Mesquite, Sunnyvale and surrounding areas with quality craftsmanship and reliable service.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/Handyman-HQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl tracking-wide mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-blue-light hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-light hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl tracking-wide mb-6">CONTACT US</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:214-477-0078"
                  className="flex items-center gap-3 text-blue-light hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>214-477-0078</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-blue-light">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Forney, Mesquite, Sunnyvale & Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-light">
            <p>© {new Date().getFullYear()} Handyman HQ. All rights reserved.</p>
            <p>Your Go-To-Guy for Home Projects</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
