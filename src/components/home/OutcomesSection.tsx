import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Smartphone, Brain, Presentation, Trophy } from "lucide-react";

const OutcomesSection = () => {
  const outcomes = [
    {
      icon: Lightbulb,
      title: "חשיבה יזמית",
      description: "יכולת לזהות בעיות בסביבה ולחשוב על פתרונות דיגיטליים יצירתיים ומעשיים",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      icon: Smartphone,
      title: "אפליקציה פועלת",
      description: "פרויקט דיגיטלי מוגמר שעובד באמת בהתאם לבחירת כל משתתפ.ת",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Brain,
      title: "אוריינות דיגיטלית מתקדמת",
      description: "ידע מעשי בכלי בינה מלאכותית ופלטפורמות פיתוח שיסייעו בלמידה ויצירה לכל החיים",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Presentation,
      title: "כישורי הצגה ותקשורת",
      description: "יכולת להציג רעיונות בצורה משכנעת ומקצועית כמו יזמים אמיתיים",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Trophy,
      title: "ביטחון עצמי טכנולוגי",
      description: "תחושת מסוגלות ועצמאות בעולם הדיגיטלי ויכולת להמשיך ללמוד לבד",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#181259' }}>
            מה נלמד?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {outcomes.map((outcome, index) => (
            <Card key={index} className={`${outcome.bgColor} border-2 ${outcome.borderColor} hover:shadow-md transition-all duration-300`}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm`}>
                    <outcome.icon className={`w-5 h-5 ${outcome.color}`} />
                  </div>
                  <CardTitle className={`${outcome.color} text-base`}>
                    {outcome.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 text-sm leading-relaxed">
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
