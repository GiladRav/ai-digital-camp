import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Smartphone, Brain, Presentation, Trophy } from "lucide-react";

const OutcomesSection = () => {
  const outcomes = [
    {
      icon: Lightbulb,
      title: "חשיבה יזמית",
      description: "יכולת לזהות בעיות בסביבה ולחשוב על פתרונות דיגיטליים יצירתיים ומעשיים",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: Smartphone,
      title: "אפליקציה פועלת",
      description: "פרויקט דיגיטלי מוגמר שעובד באמת בהתאם לבחירת כל משתתפ.ת",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Brain,
      title: "אוריינות דיגיטלית מתקדמת",
      description: "ידע מעשי בכלי בינה מלאכותית ופלטפורמות פיתוח שיסייעו בלמידה ויצירה לכל החיים",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Presentation,
      title: "כישורי הצגה ותקשורת",
      description: "יכולת להציג רעיונות בצורה משכנעת ומקצועית כמו יזמים אמיתיים",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Trophy,
      title: "ביטחון עצמי טכנולוגי",
      description: "תחושת מסוגלות ועצמאות בעולם הדיגיטלי ויכולת להמשיך ללמוד לבד",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            מה נלמד?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {outcomes.map((outcome, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className={`mx-auto w-14 h-14 ${outcome.bgColor} rounded-full flex items-center justify-center mb-3`}>
                  <outcome.icon className={`w-7 h-7 ${outcome.color}`} />
                </div>
                <CardTitle className={`text-center ${outcome.color} text-lg`}>
                  {outcome.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {outcome.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
