import { Leaf, Heart, Sun, Moon } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Ancient Wisdom",
    description:
      "Rooted in 5,000 years of yogic tradition, our practice honors the sacred teachings while making them accessible to all.",
  },
  {
    icon: Heart,
    title: "Mindful Movement",
    description:
      "Every asana is an opportunity for self-discovery. We guide you to listen to your body and move with intention.",
  },
  {
    icon: Sun,
    title: "Modern Wellness",
    description:
      "We bridge traditional yoga with contemporary wellness science, addressing the unique challenges of modern life.",
  },
  {
    icon: Moon,
    title: "Sacred Community",
    description:
      "Join a supportive sangha where every soul is welcomed, celebrated, and encouraged on their unique journey.",
  },
];

export function Philosophy() {
  return (
    <section className="py-24 md:py-32 bg-gradient-earth">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">
            Our Philosophy
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Where Tradition Meets
            <br />
            <span className="text-primary italic">Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Soulful Flow, we believe yoga is more than physical practice—it's a path 
            to wholeness. Our studio is a sanctuary where ancient wisdom illuminates 
            the journey to your most authentic self.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group p-8 rounded-2xl bg-card hover:bg-card/80 transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
