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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {lectureItems.map((item, index) => (
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

export default AboutLectures;