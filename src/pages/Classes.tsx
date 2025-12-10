import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, Sparkles, ArrowRight, Filter } from "lucide-react";
import {
  classes,
  categoryDescriptions,
  type ClassCategory,
} from "@/data/classes";

const categories: ClassCategory[] = [
  "Physical Focus",
  "Inner Intentions",
  "Philosophical & Spiritual",
  "Nature-Inspired",
  "Modern Wellness",
];

const Classes = () => {
  const [activeCategory, setActiveCategory] = useState<ClassCategory | "All">(
    "All"
  );
  const [activeLevel, setActiveLevel] = useState<string>("All");

  const filteredClasses = classes.filter((c) => {
    const categoryMatch =
      activeCategory === "All" || c.category === activeCategory;
    const levelMatch = activeLevel === "All" || c.level === activeLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4 animate-fade-up opacity-0">
              Our Classes
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-fade-up opacity-0 stagger-1">
              Experiences Curated for
              <br />
              <span className="text-primary italic">Your Journey</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up opacity-0 stagger-2">
              From physical foundations to spiritual depths, discover classes
              designed to meet you exactly where you are.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border bg-background sticky top-[72px] z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("All")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                All Classes
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Level Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select
                value={activeLevel}
                onChange={(e) => setActiveLevel(e.target.value)}
                className="bg-muted border-none rounded-lg px-4 py-2 text-sm font-medium text-foreground focus:ring-2 focus:ring-primary"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="All Levels">All Levels</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Category Description */}
      {activeCategory !== "All" && (
        <section className="py-8 bg-sage-light">
          <div className="container mx-auto px-6">
            <p className="text-sage-dark text-center max-w-2xl mx-auto">
              {categoryDescriptions[activeCategory]}
            </p>
          </div>
        </section>
      )}

      {/* Classes Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses.map((yogaClass) => (
              <article
                key={yogaClass.id}
                className="group bg-card rounded-2xl overflow-hidden hover-lift"
              >
                <div className="p-6">
                  {/* Category & Subcategory */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-sage-light text-sage-dark text-xs font-medium">
                      {yogaClass.subcategory}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {yogaClass.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {yogaClass.title}
                  </h3>

                  {/* Intention */}
                  <div className="flex items-center gap-1.5 text-xs text-primary mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{yogaClass.intention}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {yogaClass.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{yogaClass.duration} min</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{yogaClass.level}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      with <span className="text-foreground">{yogaClass.instructor}</span>
                    </span>
                    <Button variant="sage" size="sm" asChild>
                      <Link to="/booking">Book</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredClasses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No classes match your current filters.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setActiveCategory("All");
                  setActiveLevel("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Book your spot in one of our transformative classes and begin your
            journey today.
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

export default Classes;
