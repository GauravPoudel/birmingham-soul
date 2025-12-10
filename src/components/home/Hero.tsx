import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-yoga.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Yoga practitioner in peaceful meditation at Soulful Flow studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24 md:pt-0">
        <div className="max-w-2xl">
          <div className="overflow-hidden mb-6">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary animate-fade-up opacity-0 stagger-1">
              Birmingham's Premier Yoga Studio
            </p>
          </div>

          <div className="overflow-hidden">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-[1.1] mb-6 animate-fade-up opacity-0 stagger-2 drop-shadow-sm">
              Transform Your
              <br />
              <span className="text-primary italic">Body, Mind</span>
              <br />
              & Spirit
            </h1>
          </div>

          <div className="overflow-hidden">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10 max-w-lg animate-fade-up opacity-0 stagger-3 drop-shadow-sm">
              Discover the ancient art of yoga reimagined for modern life. 
              Join our community and begin your journey toward balance, 
              strength, and inner peace.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 stagger-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/booking">
                Book a Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/classes">Explore Classes</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md animate-fade-up opacity-0 stagger-5">
            {[
              { value: "50+", label: "Weekly Classes" },
              { value: "15", label: "Expert Teachers" },
              { value: "2000+", label: "Happy Members" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl md:text-3xl font-semibold text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-breathe" />
        </div>
      </div>
    </section>
  );
}
