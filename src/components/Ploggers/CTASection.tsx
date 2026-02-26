import { ArrowRight, Users, Calendar, Footprints } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const actions = [
    {
      icon: Calendar,
      title: "Join a Plogging Drive",
      description: "Participate in our next community drive",
      buttonText: "Find Upcoming Drives",
      primary: true,
    },
    {
      icon: Users,
      title: "Volunteer With Us",
      description: "Help organize and lead community activities",
      buttonText: "Become a Volunteer",
      primary: false,
    },
    {
      icon: Footprints,
      title: "Walk With Us",
      description: "Start small — just show up and walk",
      buttonText: "Get Started",
      primary: false,
    },
  ];

  return (
    <section
      id="join"
      className="section-padding bg-gradient-to-br from-primary to-forest text-white"
    >
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join the Movement
          </h2>
          <p className="text-lg opacity-90">
            Every step counts. Every piece of litter matters.
            Be part of something that makes a real difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {actions.map((action) => (
            <div
              key={action.title}
              className={`
                rounded-2xl p-8 text-center
                transition-all duration-300
                ${
                  action.primary
                    ? "bg-white text-foreground shadow-2xl hover:-translate-y-3"
                    : "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:-translate-y-2"
                }
              `}
            >
              {/* Icon */}
              <div
                className={`
                  inline-flex items-center justify-center
                  w-14 h-14 rounded-xl mb-6
                  ${
                    action.primary
                      ? "bg-primary/10 text-primary"
                      : "bg-white/20 text-white"
                  }
                `}
              >
                <action.icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-semibold mb-3 ${
                  action.primary ? "text-foreground" : "text-white"
                }`}
              >
                {action.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm mb-6 ${
                  action.primary
                    ? "text-muted-foreground"
                    : "text-white/80"
                }`}
              >
                {action.description}
              </p>

              {/* Button */}
              <Button
                variant={action.primary ? "default" : "secondary"}
                size="sm"
                className={`
                  group
                  transition-all duration-300
                  hover:-translate-y-1
                  ${
                    action.primary
                      ? "hover:shadow-lg hover:shadow-primary/30"
                      : "bg-white text-primary hover:bg-white/90"
                  }
                `}
              >
                {action.buttonText}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;