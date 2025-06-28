import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Palette, Code, Brain } from "lucide-react";

const AIPlatformsSection = () => {
  const platforms = [
    {
      icon: Bot,
      title: "ChatGPT",
      description: "יצירת תוכן, כתיבה יצירתית ופתרון בעיות",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Palette,
      title: "Midjourney",
      description: "יצירת תמונות ואיורים מקצועיים",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Code,
      title: "Bubble",
      description: "בניית אפליקציות ללא קוד עם AI",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Brain,
      title: "Claude",
      description: "ניתוח טקסטים וכתיבה מתקדמת",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            פלטפורמות בינה מלאכותית
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            היכרות מעשית עם הכלים המתקדמים ביותר בעולם הבינה המלאכותית
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`mx-auto w-16 h-16 ${platform.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <platform.icon className={`w-8 h-8 ${platform.color}`} />
                </div>
                <CardTitle className={`${platform.color} text-lg`}>
                  {platform.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  {platform.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIPlatformsSection;
