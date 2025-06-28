
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Brain, Heart } from "lucide-react";

const TargetAudience = () => {
  const audiencePoints = [
    {
      icon: Users,
      title: "גילאי 10-14",
      content: "כיתות ה'-ח' - הגיל המושלם להתחיל ללמוד יזמות דיגיטלית",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Brain,
      title: "אין צורך בידע מוקדם",
      content: "מתחילים מהבסיס ומתקדמים בהדרגה עם ליווי צמוד",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Heart,
      title: "חובבי טכנולוגיה ודמיון",
      content: "ילדים סקרנים שאוהבים ליצור, לחשוב ולפתור בעיות",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            קהל יעד
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {audiencePoints.map((point, index) => (
            <Card key={index} className={`${point.bgColor} border-2 ${point.borderColor} hover:shadow-md transition-all duration-300`}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm`}>
                    <point.icon className={`w-5 h-5 ${point.color}`} />
                  </div>
                  <CardTitle className={`${point.color} text-lg`}>
                    {point.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {point.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
