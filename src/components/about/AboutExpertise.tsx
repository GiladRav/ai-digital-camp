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

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {expertiseItems.map((item, index) => (
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
                <p className="text-muted-foreground leading-relaxed">
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