import { Clock, MapPin, Phone } from "lucide-react";

const schedule = [
  { day: "Monday", hours: "6:00 AM - 12:00 AM", isToday: false },
  { day: "Tuesday", hours: "6:00 AM - 12:00 AM", isToday: true },
  { day: "Wednesday", hours: "6:00 AM - 12:00 AM", isToday: false },
  { day: "Thursday", hours: "6:00 AM - 12:00 AM", isToday: false },
  { day: "Friday", hours: "6:00 AM - 12:00 AM", isToday: false },
  { day: "Saturday", hours: "6:00 AM - 12:00 AM", isToday: false },
  { day: "Sunday", hours: "8:00 AM - 10:00 PM", isToday: false },
];

const HoursSection = () => {
  // Get current day
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  
  return (
    <section id="hours" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Visit Us
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-8">
              HOURS &<br />
              <span className="text-gradient">LOCATION</span>
            </h2>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    Sector H, Bahria Enclave<br />
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <a 
                    href="tel:03185576657" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    0318 5576657
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Open Now</h4>
                  <p className="text-primary font-medium">
                    18 hours daily
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Schedule */}
          <div className="bg-gradient-card rounded-2xl p-8 border border-border">
            <h3 className="font-display text-2xl text-foreground mb-6">Weekly Schedule</h3>
            <div className="space-y-4">
              {schedule.map((item) => {
                const isCurrentDay = item.day === today;
                return (
                  <div
                    key={item.day}
                    className={`flex justify-between items-center py-3 px-4 rounded-xl transition-colors ${
                      isCurrentDay
                        ? "bg-primary/10 border border-primary/30"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <span className={`font-medium ${isCurrentDay ? "text-primary" : "text-foreground"}`}>
                      {item.day}
                      {isCurrentDay && (
                        <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                          Today
                        </span>
                      )}
                    </span>
                    <span className="text-muted-foreground">{item.hours}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursSection;
