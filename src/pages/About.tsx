import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Heart, Users, Award, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Authenticity",
    description:
      "We honor the true essence of yoga while making it accessible and relevant to contemporary life.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description:
      "Every body is a yoga body. Our classes welcome practitioners of all backgrounds, abilities, and experience levels.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Our instructors are rigorously trained and deeply committed to their own practice and continuous learning.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4 animate-fade-up opacity-0">
              Our Story
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-fade-up opacity-0 stagger-1">
              A Space for
              <br />
              <span className="text-primary italic">Transformation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up opacity-0 stagger-2">
              Soulful Flow was born from a simple belief: that yoga has the power to 
              transform lives when practiced with intention, community, and joy.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
                From Passion to
                <span className="text-primary italic"> Practice</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2018, Soulful Flow emerged from founder Maya Chen's vision 
                  of creating a yoga space that truly honors both the ancient traditions 
                  and the modern seeker's needs.
                </p>
                <p>
                  After years of studying with master teachers in India, Nepal, and 
                  across Europe, Maya returned to her hometown of Birmingham with a 
                  mission: to build a sanctuary where transformation isn't just 
                  possible—it's inevitable.
                </p>
                <p>
                  Today, our studio in the heart of the Jewellery Quarter serves as a 
                  beacon for those seeking more than just a workout. We offer a pathway 
                  to self-discovery, supported by expert guidance and a compassionate 
                  community.
                </p>
              </div>
              <div className="flex items-center gap-3 text-primary">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Birmingham, United Kingdom</span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-sage-light overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-sage/20 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-12 h-12 text-sage"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z" />
                        <path d="M12 8C12 8 10 10 10 12C10 14 12 16 12 16C12 16 14 14 14 12C14 10 12 8 12 8Z" />
                      </svg>
                    </div>
                    <p className="font-heading text-2xl text-sage-dark italic">
                      "Yoga is the journey of the self, through the self, to the self."
                    </p>
                    <p className="text-sage-dark/70 mt-4 text-sm">— The Bhagavad Gita</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-clay-light/30 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">
              What We Stand For
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
              Our Core <span className="text-primary italic">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card p-8 rounded-2xl hover-lift text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Begin Your <span className="text-primary italic">Journey</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join our community and discover what's possible when ancient wisdom 
            meets modern practice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/booking">
                Book Your First Class
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/instructors">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
