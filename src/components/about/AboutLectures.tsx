import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Handshake, Presentation, Gamepad2, GraduationCap, MessageCircle } from "lucide-react";

const AboutLectures = () => {
  const lectureItems = [
    {
      icon: Brain,
      title: "איך מכונה חושבת?",
      content: "מבוא ל-AI ולמידת מכונה, כולל תרגול כלי AI.",
      variant: "purple"
    },
    {
      icon: Handshake,
      title: "לשחק את האמון",
      content: "בניית שיתוף פעולה בתנאי אי-ודאות דרך מודל תורת המשחקים.",
      variant: "blue"
    },
    {
      icon: Presentation,
      title: "יסודות הפיץ' המוצלח",
      content: "יצירת מסרים אפקטיביים לגיוס השקעה, כולל תרגול מעשי.",
      variant: "green"
    },
    {
      icon: Gamepad2,
      title: "גיימינג להורים",
      content: "חשיפה לכלים חינוכיים בשימוש במשחקים ובינה מלאכותית.",
      variant: "orange"
    },
    {
      icon: GraduationCap,
      title: "משחק למידה",
      content: "שינוי טרמינולוגיה מעולם המשחקים לשיפור למידה ויצירתיות בכיתה.",
      variant: "teal"
    },
    {
      icon: MessageCircle,
      title: "שיח חינוכי בסוגיות שנויות במחלוקת",
      content: "כלים לניהול שיח כיתתי בטוח ומכבד.",
      variant: "purple"
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
    <section className="py-16 bg-gradient-to-br from-indigo-25 to-purple-25">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            🗣 הרצאות וסדנאות נבחרות
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {lectureItems.map((item, index) => (
            <Card key={index} className={`${getCardClasses(item.variant)} hover:scale-105 hover:-translate-y-2 hover:rotate-1 transition-all duration-500 animate-fade-in group relative overflow-hidden`} style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg"></div>
                <div className="flex flex-col gap-3 relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getIconClasses(item.variant)} shadow-lg group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300 self-start`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-primary text-lg font-bold group-hover:text-secondary transition-colors duration-300 leading-tight">
                    {item.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground transition-colors duration-300">
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

export default AboutLectures;