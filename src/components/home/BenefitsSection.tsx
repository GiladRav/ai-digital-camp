
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Users, Brain, Code } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "בינה מלאכותית משנה את חוקי המשחק",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      icon: Users,
      title: "ילדים צריכים ליצור ולפתח תוכן, לא רק צרכנים",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Brain,
      title: "למידה מעשית של פלטפורמות AI מובילות",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Code,
      title: "פיתוח אפליקציות אמיתיות ללא תכנות",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            למה להרשם?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className={`${benefit.bgColor} border-2 ${benefit.borderColor} hover:shadow-md transition-all duration-300`}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm`}>
                    <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                  </div>
                  <CardTitle className={`${benefit.color} text-base leading-tight`}>
                    {benefit.title}
                  </CardTitle>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
