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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {experienceItems.map((item, index) => (
            <Card key={index} className={`${getCardClasses(item.variant)} hover:scale-105 transition-all duration-300`}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconClasses(item.variant)}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-primary text-lg">
                    {item.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {item.content && (
                  <p className="text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
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