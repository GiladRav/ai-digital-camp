import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, TrendingUp, Heart, Bot } from "lucide-react";

const TeachingMethodology = () => {
  const methodologies = [
    {
      icon: Globe,
      title: "למידה מבוססת מציאות",
      description: "כל משתתף בוחר סוגיה שמענינת אותו במציאות ובונה פתרון דיגיטלי מעשי וייחודי",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: TrendingUp,
      title: "מדרגות של ידע",
      description: "כל יום בונה על הקודם ומוסיף כלי AI חדש ומיומנויות מתקדמות, כך שבסוף השבוע כל משתתף עולה 5 מדרגות בידע הטכנולוגי שלו",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Heart,
      title: "גמישות ובחירה אישית",
      description: "התוכנית מתאימה עצמה לתחומי העניין של כל ילד - מי שאוהב ספורט יפתח אפליקציה ספורטיבית, מי שאוהב אמנות יתמקד בעיצוב",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Bot,
      title: "בינה מלאכותית כמנטור אישי",
      description: "כל משתתף לומד לרתום בינה מלאכותית כשותף יצירתי אישי - מחקר שוק, עיצוב, פיתוח והצגה",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#181259' }}>
            גישת הדרכה
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {methodologies.map((methodology, index) => (
            <Card key={index} className={`${methodology.bgColor} border-2 ${methodology.borderColor} hover:shadow-md transition-all duration-300`}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm`}>
                    <methodology.icon className={`w-5 h-5 ${methodology.color}`} />
                  </div>
                  <CardTitle className={`${methodology.color} text-base`}>
                    {methodology.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 text-sm leading-relaxed">
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
