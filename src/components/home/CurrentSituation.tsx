
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Lightbulb, Users } from "lucide-react";

const CurrentSituation = () => {
  const situations = [
    {
      title: "אתגר",
      content: "בעוד כעשור כ-80% מהמקצועות שקיימים היום צפויים להפוך ללא רלוונטיים.",
      icon: AlertTriangle,
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      title: "פתרון",
      content: "שילוב שלושה תחומי ידע קריטיים: יזמות כחשיבה מערכתית, אוריינות בינה מלאכותית ופיתוח דיגיטלי",
      icon: Lightbulb,
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "שיטה",
      content: "תהליך למידה מקוון בהובלת מומחה מקצועי עם התאמה אישית לפי תחומי עניין",
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            המצב כיום
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {situations.map((situation, index) => (
            <Card key={index} className={`${situation.bgColor} border-2 ${situation.borderColor} hover:shadow-md transition-all duration-300`}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm`}>
                    <situation.icon className={`w-5 h-5 ${situation.color}`} />
                  </div>
                  <CardTitle className={`${situation.color} text-lg`}>
                    {situation.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {situation.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentSituation;
