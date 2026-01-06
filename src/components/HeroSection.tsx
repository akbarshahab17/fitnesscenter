import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < 4 ? "text-primary fill-primary" : i === 4 ? "text-primary fill-primary/60" : "text-muted-foreground"}`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">4.6 Rating on Google</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-none mb-6 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
            TRANSFORM
            <br />
            <span className="text-gradient">YOUR BODY.</span>
            <br />
            TRANSFORM
            <br />
            YOUR LIFE.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Islamabad's premier fitness destination. State-of-the-art equipment, 
            expert trainers, and a community that pushes you to be your best.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Programs
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div>
              <div className="font-display text-4xl md:text-5xl text-gradient">18+</div>
              <div className="text-sm text-muted-foreground mt-1">Hours Open Daily</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-gradient">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Active Members</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-gradient">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Expert Trainers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
