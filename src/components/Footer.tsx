import { Link } from "react-router-dom";
import { Sprout, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-gradient-accent p-2 shadow-soft">
                <Sprout className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold text-foreground">
                TerraCrop
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Cultivating Intelligence, Growing Prosperity
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/analyze" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Analyze Land
                </Link>
              </li>
              <li>
                <Link to="/invest" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Investment Opportunities
                </Link>
              </li>
              <li>
                <Link to="/policies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Government Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span>info@terracrop.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>Agricultural Innovation Hub, Silicon Valley</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} TerraCrop. All rights reserved. Powered by AI for sustainable agriculture.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
