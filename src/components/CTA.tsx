import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 bg-blue-dark relative overflow-hidden">
      {/* Geometric accents */}
      <div className="absolute top-0 left-0 w-32 h-64 bg-primary geometric-triangle-left opacity-90" />
      <div className="absolute bottom-0 right-0 w-32 h-64 bg-primary geometric-triangle opacity-90 rotate-180" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title text-secondary-foreground mb-6">
            READY TO GET YOUR<br />
            <span className="text-primary">PROJECT STARTED?</span>
          </h2>
          <p className="text-xl text-blue-light mb-10 max-w-2xl mx-auto">
            Give us a call today for a free estimate. We're here to help with all your home repair and improvement needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:214-477-0078"
              className="btn-primary text-xl px-10 py-5"
            >
              <Phone className="w-6 h-6" />
              <span>Call 214-477-0078</span>
            </a>
            <Link
              to="/services"
              className="btn-outline border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-blue-dark"
            >
              <span>View Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="mt-8 text-blue-light">
            Serving Forney, Mesquite, Sunnyvale & Surrounding Areas
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
