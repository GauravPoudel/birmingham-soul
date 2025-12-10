import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Send,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description:
        "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Welcome to Our Community!",
      description:
        "You've been added to our newsletter. Expect inspiration in your inbox soon.",
    });

    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4 animate-fade-up opacity-0">
              Get in Touch
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-fade-up opacity-0 stagger-1">
              We'd Love to
              <br />
              <span className="text-primary italic">Hear From You</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up opacity-0 stagger-2">
              Questions, feedback, or just want to say namaste? We're here for
              you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="bg-card"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-card"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    required
                    className="bg-card"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more..."
                    rows={6}
                    required
                    className="bg-card resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Studio Info */}
              <div className="bg-card rounded-2xl p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Visit Our Studio
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-sage-dark" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        42 Zen Lane, Jewellery Quarter
                        <br />
                        Birmingham B3 1JQ, United Kingdom
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-sage-dark" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a
                        href="tel:+441211234567"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +44 121 123 4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-sage-dark" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:hello@soulfulflow.yoga"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@soulfulflow.yoga
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-sage-dark" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Studio Hours</p>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
                        <p>Saturday: 7:00 AM - 6:00 PM</p>
                        <p>Sunday: 8:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-sage-light rounded-2xl overflow-hidden h-64 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-sage mx-auto mb-4" />
                  <p className="font-heading text-lg text-sage-dark">
                    Jewellery Quarter, Birmingham
                  </p>
                  <p className="text-sm text-sage-dark/70">
                    In the heart of Birmingham's creative district
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card rounded-2xl p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Connect With Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center hover:bg-sage/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-sage-dark" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center hover:bg-sage/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-sage-dark" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center hover:bg-sage/20 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-6 h-6 text-sage-dark" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Join Our <span className="text-primary italic">Community</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for wellness tips, exclusive offers,
              and inspiration delivered to your inbox.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 bg-card"
              />
              <Button type="submit" variant="sage" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Community Gallery Placeholder */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">
              @SoulfulFlowYoga
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
              Our Community
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-sage-light flex items-center justify-center group hover:bg-sage/20 transition-colors cursor-pointer"
              >
                <Instagram className="w-8 h-8 text-sage-dark/50 group-hover:text-sage group-hover:scale-110 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
