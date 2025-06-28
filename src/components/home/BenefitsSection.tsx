import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Users, Brain, Code } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "בינה מלאכותית משנה את חוקי המשחק",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Users,
      title: "ילדים צריכים ליצור ולפתח תוכן, לא רק צרכנים",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Brain,
      title: "למידה מעשית של פלטפורמות AI מובילות",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Code,
      title: "פיתוח אפליקציות אמיתיות ללא תכנות",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            למה להרשם?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className={`mx-auto w-14 h-14 ${benefit.bgColor} rounded-full flex items-center justify-center mb-3`}>
                  <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                </div>
                <CardTitle className={`text-center ${benefit.color} text-lg`}>
                  {benefit.title}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
