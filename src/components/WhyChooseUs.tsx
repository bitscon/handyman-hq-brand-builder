import { Award, Clock, DollarSign, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "15+ YEARS EXPERIENCE",
    description: "Decades of hands-on experience tackling home projects of all sizes.",
  },
  {
    icon: ThumbsUp,
    title: "HONEST & RELIABLE",
    description: "We show up on time, do the job right, and treat your home with respect.",
  },
  {
    icon: DollarSign,
    title: "FAIR PRICING",
    description: "Transparent quotes with no hidden fees. We stick to what we quote.",
  },
  {
    icon: Clock,
    title: "QUICK RESPONSE",
    description: "Fast service when you need it. Most jobs completed same week.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-background text-secondary-foreground font-medium text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="section-title text-secondary-foreground mb-6">
            THE <span className="text-primary">HANDYMAN HQ</span> DIFFERENCE
          </h2>
          <p className="text-lg text-secondary-foreground/80">
            We're not just handymen — we're your neighbors committed to making your home better.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-background rounded-xl p-8 text-center shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-cta flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl tracking-wide text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
