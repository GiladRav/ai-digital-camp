import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Palette, Code, Zap } from "lucide-react";

const AIPlatformsSection = () => {
  const platformCategories = [
    {
      icon: MessageSquare,
      title: "מנועי שפה טבעית ומחקר",
      platforms: ["ChatGPT", "Claude", "Perplexity"],
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Palette,
      title: "עיצוב ויצירת תוכן ויזואלי",
      platforms: ["Gamma AI", "Canva AI", "Rosebud AI"],
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Code,
      title: "פלטפורמות ללא-קוד וסימולציות",
      platforms: ["Lovable.dev", "Base44", "Websim"],
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Zap,
      title: "פיתוח ותכנות מתקדם",
      platforms: ["Bubble", "Firebase Studio", "Google AI Studio"],
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            פלטפורמות AI מתקדמות בקורס
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            נכיר למעלה מ-10 פלטפורמות AI מובילות ונלמד לרתום את כוחן ליצירת אפליקציות מקצועיות
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {platformCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`mx-auto w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <CardTitle className={`text-center ${category.color}`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.platforms.map((platform, platformIndex) => (
                    <span 
                      key={platformIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIPlatformsSection;
