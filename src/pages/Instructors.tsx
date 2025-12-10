import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Quote } from "lucide-react";
import { instructors } from "@/data/classes";

const Instructors = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4 animate-fade-up opacity-0">
              Our Teachers
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-fade-up opacity-0 stagger-1">
              Guided by
              <br />
              <span className="text-primary italic">Wisdom & Heart</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up opacity-0 stagger-2">
              Our instructors are more than teachers—they are devoted
              practitioners who embody the transformative power of yoga in their
              daily lives.
            </p>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {instructors.map((instructor, index) => (
              <article
                key={instructor.id}
                className="group bg-card rounded-2xl overflow-hidden hover-lift"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Avatar Section */}
                  <div className="lg:col-span-2 bg-sage-light p-8 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-40 h-40 rounded-full bg-sage/20 flex items-center justify-center">
                        <span className="font-heading text-4xl text-sage-dark">
                          {instructor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <Award className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-3 p-8">
                    <div className="mb-4">
                      <h3 className="font-heading text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {instructor.name}
                      </h3>
                      <p className="text-primary text-sm font-medium">
                        {instructor.title}
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                        Teaching Focus
                      </p>
                      <p className="text-foreground">{instructor.focus}</p>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {instructor.bio}
                    </p>

                    {/* Philosophy Quote */}
                    <div className="bg-muted rounded-xl p-4 mb-6">
                      <Quote className="w-4 h-4 text-primary mb-2" />
                      <p className="text-sm italic text-foreground">
                        "{instructor.philosophy}"
                      </p>
                    </div>

                    {/* Certifications */}
                    <div className="flex flex-wrap gap-2">
                      {instructor.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="px-3 py-1 rounded-full bg-sage-light text-sage-dark text-xs font-medium"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Interested in Teaching with Us?
            </h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for passionate, qualified yoga teachers who
              share our vision of transformative practice.
            </p>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Practice with{" "}
            <span className="text-primary italic">Our Teachers</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Book a class and experience the guidance of our expert instructors
            firsthand.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/booking">
              Book a Session
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Instructors;
