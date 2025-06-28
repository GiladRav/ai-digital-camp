import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, TrendingUp, Heart, Bot } from "lucide-react";

const TeachingMethodology = () => {
  const methodologies = [
    {
      icon: Globe,
      title: "למידה מבוססת מציאות",
      description: "כל משתתף בוחר סוגיה שמענינת אותו במציאות ובונה פתרון דיגיטלי מעשי וייחודי",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: TrendingUp,
      title: "מדרגות של ידע",
      description: "כל יום בונה על הקודם ומוסיף כלי AI חדש ומיומנויות מתקדמות, כך שבסוף השבוע כל משתתף עולה 5 מדרגות בידע הטכנולוגי שלו",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Heart,
      title: "גמישות ובחירה אישית",
      description: "התוכנית מתאימה עצמה לתחומי העניין של כל ילד - מי שאוהב ספורט יפתח אפליקציה ספורטיבית, מי שאוהב אמנות יתמקד בעיצוב",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Bot,
      title: "בינה מלאכותית כמנטור אישי",
      description: "כל משתתף לומד לרתום בינה מלאכותית כשותף יצירתי אישי - מחקר שוק, עיצוב, פיתוח והצגה",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            גישת הדרכה
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {methodologies.map((methodology, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`mx-auto w-16 h-16 ${methodology.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <methodology.icon className={`w-8 h-8 ${methodology.color}`} />
                </div>
                <CardTitle className={`text-center ${methodology.color}`}>
                  {methodology.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  {methodology.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingMethodology;
