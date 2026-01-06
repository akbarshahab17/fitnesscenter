import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import strengthImg from "@/assets/strength.jpg";
import cardioImg from "@/assets/cardio.jpg";
import ptImg from "@/assets/pt.jpg";

const programs = [
  {
    title: "Strength Training",
    description: "Build muscle, increase strength, and transform your physique with our comprehensive weight training program.",
    image: strengthImg,
  },
  {
    title: "Cardio & HIIT",
    description: "Burn calories and boost your metabolism with high-intensity interval training and cardio sessions.",
    image: cardioImg,
  },
  {
    title: "Personal Training",
    description: "Get one-on-one attention from our expert trainers who create customized programs just for you.",
    image: ptImg,
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Programs
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4">
              TRAIN WITH <span className="text-gradient">PURPOSE</span>
            </h2>
          </div>
          <Button variant="outline" size="lg" className="mt-6 md:mt-0">
            View All Programs
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={program.image}
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                  0{index + 1}
                </span>
                <h3 className="font-display text-3xl text-foreground mb-3 group-hover:text-gradient transition-all">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
