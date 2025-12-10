import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-24 md:py-32 bg-gradient-forest relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Testimonial */}
          <div className="mb-12">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-chakra-solar text-chakra-solar"
                />
              ))}
            </div>
            <blockquote className="font-heading text-xl md:text-2xl text-primary-foreground/90 italic mb-4">
              "Soulful Flow has transformed not just my practice, but my entire approach 
              to life. The instructors truly embody what they teach."
            </blockquote>
            <cite className="text-primary-foreground/60 text-sm">
              — Sarah M., Member since 2022
            </cite>
          </div>

          {/* CTA Content */}
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary-foreground/70 mb-4">
            Begin Your Journey Today
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
            Your First Class is
            <br />
            <span className="text-clay-light italic">On Us</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Experience the Soulful Flow difference with a complimentary introductory 
            session. No commitment, just an invitation to explore what's possible.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="xl"
              className="bg-primary-foreground text-forest hover:bg-primary-foreground/90 shadow-medium"
              asChild
            >
              <Link to="/booking">
                Claim Your Free Class
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
