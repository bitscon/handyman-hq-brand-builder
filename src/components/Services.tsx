import { Link } from "react-router-dom";
import { ArrowRight, Paintbrush, Tv, Fan, Droplets, Fence, ShieldCheck, Lightbulb, Wrench } from "lucide-react";
import servicePainting from "@/assets/service-painting.jpg";
import serviceTvMount from "@/assets/service-tv-mount.jpg";
import serviceCeilingFan from "@/assets/service-ceiling-fan.jpg";
import serviceFaucet from "@/assets/service-faucet.jpg";
import serviceFence from "@/assets/service-fence.jpg";
import serviceSecurity from "@/assets/service-security.jpg";

const services = [
  {
    title: "Painting",
    description: "Interior and exterior painting services to refresh your home with quality finishes.",
    icon: Paintbrush,
    image: servicePainting,
  },
  {
    title: "TV Wall Mounts",
    description: "Professional TV mounting with clean cable management for the perfect viewing experience.",
    icon: Tv,
    image: serviceTvMount,
  },
  {
    title: "Ceiling Fans",
    description: "Expert ceiling fan installation and replacement to keep your home comfortable.",
    icon: Fan,
    image: serviceCeilingFan,
  },
  {
    title: "Faucets & Plumbing",
    description: "Faucet installation, repair and minor plumbing fixes done right the first time.",
    icon: Droplets,
    image: serviceFaucet,
  },
  {
    title: "Fences",
    description: "Fence repair and installation to enhance your property's privacy and curb appeal.",
    icon: Fence,
    image: serviceFence,
  },
  {
    title: "Security Cameras",
    description: "Professional security camera installation for your home's safety and peace of mind.",
    icon: ShieldCheck,
    image: serviceSecurity,
  },
];

const additionalServices = [
  "Gutters",
  "Light Fixtures",
  "Cabinet Pulls & Handles",
  "Drywall Repair",
  "Furniture Assembly",
  "Door Installation",
  "Window Repair",
  "Garage Door Repair",
];

interface ServicesProps {
  showAll?: boolean;
}

const Services = ({ showAll = false }: ServicesProps) => {
  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-4">
            Our Services
          </span>
          <h2 className="section-title text-foreground mb-6">
            WHAT WE <span className="text-primary">CAN DO</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From small repairs to larger projects, we handle it all with care and expertise. Quality workmanship, honest pricing, and reliable service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayedServices.map((service, index) => (
            <div
              key={service.title}
              className="service-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl tracking-wide text-foreground mb-3">
                {service.title.toUpperCase()}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        {showAll && (
          <div className="bg-muted rounded-2xl p-8 md:p-12 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-8 h-8 text-primary" />
              <h3 className="font-display text-2xl tracking-wide text-foreground">
                AND SO MUCH MORE...
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {additionalServices.map((service) => (
                <div key={service} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        {!showAll && (
          <div className="text-center">
            <Link to="/services" className="btn-secondary">
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
