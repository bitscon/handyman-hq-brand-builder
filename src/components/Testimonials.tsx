import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Vicky Tate",
    rating: 5,
    text: "My husband and I are very thankful to Handyman! We have recently relocated to Texas and the Handyman has helped us with just about everything in our home...hanging curtains, added all push knobs to all our cabinetry, hanging all our pictures throughout our home, providing measurements for items within our home from installing garage panels. The Handyman has been truly a blessing and delivers awesome customer service and works with a spirit of excellence! We certainly recommend him for all your household needs!",
  },
  {
    name: "Pious Installations",
    rating: 5,
    text: "Quality work and excellent craftsmanship.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real reviews from our satisfied customers on Facebook
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Verified Facebook Review
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
