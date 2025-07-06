import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Lightbulb, TrendingUp } from "lucide-react";

const AboutExpertise = () => {
  const expertiseItems = [
    {
      icon: BookOpen,
      title: "קורסים מקוונים",
      content: "פיתוח והנחייה של קורסים והכשרות עם כלים דיגיטליים ואינטראקטיביות.",
      variant: "blue"
    },
    {
      icon: Users,
      title: "ייעוץ פדגוגי",
      content: "הובלת שינוי בארגוני חינוך באמצעות שילוב טכנולוגיות והוראה חדשנית.",
      variant: "green"
    },
    {
      icon: Lightbulb,
      title: "פיתוח תכניות חינוכיות",
      content: "תכנון ותפעול של תכניות מבוססות טכנולוגיה לקהל מגוון.",
      variant: "purple"
    },
    {
      icon: TrendingUp,
      title: "הטמעת חדשנות טכנולוגית",
      content: "סדנאות מעשיות בשימוש בכלים מתקדמים, כולל AI, בלמידה והובלה.",
      variant: "orange"
    }
  ];

  const getCardClasses = (variant: string) => {
    switch (variant) {
      case "purple": return "card-purple";
      case "blue": return "card-blue";
      case "green": return "card-green";
      case "orange": return "card-orange";
      default: return "card-blue";
    }
  };

  const getIconClasses = (variant: string) => {
    switch (variant) {
      case "purple": return "icon-purple";
      case "blue": return "icon-blue";
      case "green": return "icon-green";
      case "orange": return "icon-orange";
      default: return "icon-blue";
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            🎯 התמחויות מקצועיות
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {expertiseItems.map((item, index) => (
            <Card key={index} className={`${getCardClasses(item.variant)} hover:scale-105 hover:-translate-y-3 transition-all duration-500 animate-fade-in group relative overflow-hidden`} style={{ animationDelay: `${index * 0.15}s` }}>
              <CardHeader className="pb-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="flex items-center gap-4 pt-2">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${getIconClasses(item.variant)} shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-primary text-xl font-bold group-hover:text-secondary transition-colors duration-300 flex-1">
                    {item.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground transition-colors duration-300">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutExpertise;