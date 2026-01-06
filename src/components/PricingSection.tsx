import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "5,000",
    period: "/month",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Full gym access",
      "Standard equipment",
      "Locker room access",
      "Free parking",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "8,000",
    period: "/month",
    description: "For dedicated fitness enthusiasts seeking more",
    features: [
      "Everything in Basic",
      "All premium equipment",
      "2 Personal training sessions",
      "Nutrition consultation",
      "Guest passes (2/month)",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "15,000",
    period: "/month",
    description: "The ultimate fitness experience with full benefits",
    features: [
      "Everything in Premium",
      "Unlimited personal training",
      "Priority equipment access",
      "Custom meal plans",
      "Recovery zone access",
      "Unlimited guest passes",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Membership Plans
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
            INVEST IN <span className="text-gradient">YOURSELF</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your goals. All memberships include full access to our facilities.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-glow ${
                plan.popular
                  ? "bg-gradient-card border-primary scale-105"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-muted-foreground">PKR</span>
                  <span className="font-display text-5xl text-gradient">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
