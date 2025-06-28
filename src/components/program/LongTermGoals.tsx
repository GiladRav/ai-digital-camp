import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Globe } from "lucide-react";

const LongTermGoals = () => {
  const goals = [
    {
      icon: Target,
      title: "הכנה לעתיד הטכנולוגי",
      description: "פיתוח כישורים שיהיו רלוונטיים בעולם של 2030",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Users,
      title: "חשיבה יזמית מתקדמת",
      description: "יכולת לזהות הזדמנויות ולפתח פתרונות דיגיטליים",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Globe,
      title: "אוריינות דיגיטלית מתקדמת",
      description: "ידע מעשי בכלי בינה מלאכותית ופלטפורמות פיתוח",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            מטרות ארוכות טווח
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {goals.map((goal, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`mx-auto w-16 h-16 ${goal.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <goal.icon className={`w-8 h-8 ${goal.color}`} />
                </div>
                <CardTitle className={`${goal.color} text-lg`}>
                  {goal.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  {goal.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LongTermGoals; 