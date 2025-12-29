import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-handyman.jpg";

const Hero = () => {
  const highlights = [
    "15+ Years Experience",
    "Honest & Reliable",
    "Quality Craftsmanship",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-40 bg-primary geometric-triangle opacity-90" />
      <div className="absolute bottom-0 left-0 w-48 h-96 bg-primary geometric-triangle-left opacity-90" />
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional handyman at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-dark/95 via-blue-dark/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground mb-6 animate-fade-in opacity-0">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Serving Forney, Mesquite, Sunnyvale & More</span>
          </div>

          {/* Headline */}
          <h1 className="section-title text-secondary-foreground mb-6 animate-fade-in-delay-1 opacity-0">
            YOUR GO-TO-GUY<br />
            <span className="text-primary">FOR HOME PROJECTS</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-blue-light mb-8 max-w-lg animate-fade-in-delay-2 opacity-0">
            From painting to faucets, ceiling fans to fences — we handle all your home repairs with quality craftsmanship and honest pricing.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-delay-2 opacity-0">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-blue-light">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3 opacity-0">
            <a href="tel:214-477-0078" className="btn-primary">
              <Phone className="w-5 h-5" />
              <span>Call 214-477-0078</span>
            </a>
            <Link to="/services" className="btn-outline border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-blue-dark">
              <span>View Our Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
