import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Laptop, School, GraduationCap } from "lucide-react";

const AboutExperience = () => {
  const experienceItems = [
    {
      icon: Laptop,
      title: "ניהול מעבדת חדשנות בגיימינג",
      content: "מכללת ספיר",
      variant: "purple"
    },
    {
      icon: Users,
      title: "ניהול קהילות יוצרי תוכן",
      content: '"ספיטבול"',
      variant: "blue"
    },
    {
      icon: Building,
      title: "ניהול קהילות טכנו‑פדגוגיות",
      content: "החברה למתנ\"סים",
      variant: "green"
    },
    {
      icon: School,
      title: "תפקידים במשרד החינוך, המרכז לטכנולוגיה חינוכית, תכנית חותם",
      content: "",
      variant: "orange"
    },
    {
      icon: GraduationCap,
      title: "הוראה בתחומי אזרחות, גאוגרפיה ותעודת הוראה",
      content: "",
      variant: "teal"
    }
  ];

  const getCardClasses = (variant: string) => {
    switch (variant) {
      case "purple": return "card-purple";
      case "blue": return "card-blue";
      case "green": return "card-green";
      case "orange": return "card-orange";
      case "teal": return "card-teal";
      default: return "card-purple";
    }
  };

  const getIconClasses = (variant: string) => {
    switch (variant) {
      case "purple": return "icon-purple";
      case "blue": return "icon-blue";
      case "green": return "icon-green";
      case "orange": return "icon-orange";
      case "teal": return "icon-teal";
      default: return "icon-purple";
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-25 to-purple-25">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            👤 ניסיון מקצועי והכשרה
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experienceItems.map((item, index) => (
            <Card key={index} className={`${getCardClasses(item.variant)} hover:scale-105 hover:-translate-y-3 hover:rotate-2 transition-all duration-500 animate-fade-in group relative overflow-hidden shadow-lg hover:shadow-2xl`} style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg"></div>
                <div className="flex flex-col gap-4 relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getIconClasses(item.variant)} shadow-md group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 self-start`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-primary text-lg font-bold group-hover:text-secondary transition-colors duration-300 leading-tight">
                    {item.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                {item.content && (
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground transition-colors duration-300 pl-4 font-medium">
                      {item.content}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutExperience;