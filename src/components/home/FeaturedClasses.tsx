import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Users, ArrowRight, Sparkles } from "lucide-react";

const featuredClasses = [
  {
    id: 1,
    title: "Forest Flow",
    category: "Nature-Inspired",
    description:
      "Connect with the grounding energy of nature through flowing sequences inspired by the forest's rhythm.",
    duration: "60 min",
    level: "All Levels",
    instructor: "Maya Chen",
    color: "chakra-heart",
    intention: "Grounding & Connection",
  },
  {
    id: 2,
    title: "Chakra Awakening",
    category: "Spiritual",
    description:
      "Journey through the seven energy centers, releasing blockages and restoring balance to body and soul.",
    duration: "75 min",
    level: "Intermediate",
    instructor: "Priya Sharma",
    color: "chakra-crown",
    intention: "Energy Balance",
  },
  {
    id: 3,
    title: "Office Reset",
    category: "Modern Wellness",
    description:
      "Release tension from desk work with targeted stretches and stress-relieving breathwork.",
    duration: "45 min",
    level: "Beginner",
    instructor: "James Wilson",
    color: "chakra-throat",
    intention: "Pain Relief & Clarity",
  },
  {
    id: 4,
    title: "Moon Ritual",
    category: "Spiritual",
    description:
      "Align with lunar cycles through gentle, intuitive movement and deep restorative practices.",
    duration: "90 min",
    level: "All Levels",
    instructor: "Luna Rodriguez",
    color: "chakra-third-eye",
    intention: "Intuition & Release",
  },
];

export function FeaturedClasses() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">
              Featured Experiences
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Classes Curated for
              <br />
              <span className="text-primary italic">Your Journey</span>
            </h2>
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link to="/classes">
              View All Classes
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredClasses.map((yogaClass, index) => (
            <div
              key={yogaClass.id}
              className="group relative bg-card rounded-2xl overflow-hidden hover-lift"
            >
              <div className="p-8">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-sage-light text-sage-dark text-xs font-medium">
                    {yogaClass.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{yogaClass.intention}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {yogaClass.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {yogaClass.description}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{yogaClass.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{yogaClass.level}</span>
                  </div>
                </div>

                {/* Instructor & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">
                        {yogaClass.instructor
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {yogaClass.instructor}
                    </span>
                  </div>
                  <Button variant="sage" size="sm" asChild>
                    <Link to="/booking">Book Now</Link>
                  </Button>
                </div>
              </div>

              {/* Decorative Element */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] bg-${yogaClass.color}/10 -z-10 group-hover:scale-150 transition-transform duration-700`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
