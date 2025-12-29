import Header from "@/components/Header";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Hero */}
        <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
          {/* Geometric accents */}
          <div className="absolute top-0 right-0 w-1/4 h-32 bg-primary geometric-triangle opacity-80" />
          <div className="absolute bottom-0 left-0 w-24 h-48 bg-primary geometric-triangle-left opacity-80" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-4">
                Our Services
              </span>
              <h1 className="section-title text-secondary-foreground mb-6">
                COMPLETE HOME<br />
                <span className="text-primary">REPAIR SERVICES</span>
              </h1>
              <p className="text-xl text-blue-light mb-8 max-w-xl">
                From simple repairs to complex installations, we've got you covered. Quality work, fair prices, and reliable service every time.
              </p>
              <a href="tel:214-477-0078" className="btn-primary">
                <Phone className="w-5 h-5" />
                <span>Get a Free Quote</span>
              </a>
            </div>
          </div>
        </section>

        <Services showAll />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
