import { Dumbbell, Users, Clock, Trophy } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    description: "World-class machines and free weights for every fitness level",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Certified professionals dedicated to your success",
  },
  {
    icon: Clock,
    title: "Extended Hours",
    description: "Open 18 hours daily to fit your schedule",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Join hundreds of members who've achieved their goals",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
            YOUR FITNESS JOURNEY
            <br />
            <span className="text-gradient">STARTS HERE</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Located in the heart of Bahria Enclave, Sector H, The Fitness Centre 
            offers everything you need to achieve your fitness goals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">
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

export default AboutSection;
