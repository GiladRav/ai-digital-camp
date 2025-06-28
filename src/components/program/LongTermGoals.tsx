import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Code, Brain, Users, TrendingUp } from "lucide-react";

const LongTermGoals = () => {
  const goals = [
    {
      title: "יזמות מבוססת AI",
      description: "פיתוח מנטליות של זיהוי הזדמנויות ופתרון בעיות עם כלי בינה מלאכותית",
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "מיומנויות טכנולוגיות",
      description: "יסודות פיתוח, עיצוב ומחקר משתמשים עם סיוע AI",
      icon: Code,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "אוריינות בינה מלאכותית",
      description: "יכולת להבין, להשתמש ולהעריך כלי AI באופן ביקורתי",
      icon: Brain,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "מנהיגות דיגיטלית",
      description: "ניסיון בהנהגת פרויקטים טכנולוגיים ועבודת צוות",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      title: "יסודות עסקיים בעידן הAI",
      description: "הבנה בסיסית של שוק דיגיטלי, כלכלה ויזמות מודרנית",
      icon: TrendingUp,
      color: "text-red-600",
      bgColor: "bg-red-100"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            יעדים לטווח הארוך
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            הקייטנה שלנו לא רק מלמדת מיומנויות טכנולוגיות, אלא מכינה את המשתתפים לעתיד המקצועי שלהם
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {goals.map((goal, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${goal.bgColor} rounded-full flex items-center justify-center`}>
                    <goal.icon className={`w-6 h-6 ${goal.color}`} />
                  </div>
                  <CardTitle className={`${goal.color} text-lg`}>
                    {goal.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {goal.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              השקעה בעתיד הטכנולוגי
            </h3>
            <p className="text-gray-700 leading-relaxed">
              הקייטנה שלנו מספקת יסודות חזקים שיעזרו למשתתפים להצליח בעולם הטכנולוגי המשתנה במהירות. 
              המיומנויות שנלמדות כאן יהיו רלוונטיות ויקרות ערך לאורך שנים רבות.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongTermGoals; 