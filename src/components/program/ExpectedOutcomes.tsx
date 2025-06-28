import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Smartphone, Users, Lightbulb } from "lucide-react";

const ExpectedOutcomes = () => {
  const outcomes = [
    {
      icon: Trophy,
      title: "פרויקט אישי מוגמר",
      description: "אפליקציה פועלת עם בינה מלאכותית שכל משתתף פיתח בעצמו",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: Smartphone,
      title: "כישורי AI מתקדמים",
      description: "יכולת לעבוד עם 10+ פלטפורמות בינה מלאכותית מובילות",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Users,
      title: "ביטחון עצמי טכנולוגי",
      description: "תחושת מסוגלות ויכולת להמשיך ללמוד ולפתח לבד",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Lightbulb,
      title: "חשיבה יזמית",
      description: "יכולת לזהות הזדמנויות ולפתח פתרונות דיגיטליים יצירתיים",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            תוצאות צפויות
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {outcomes.map((outcome, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`mx-auto w-16 h-16 ${outcome.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <outcome.icon className={`w-8 h-8 ${outcome.color}`} />
                </div>
                <CardTitle className={`${outcome.color} text-lg`}>
                  {outcome.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
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

export default ExpectedOutcomes;
