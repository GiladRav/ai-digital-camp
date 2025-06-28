import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Lightbulb, Users } from "lucide-react";

const CurrentSituation = () => {
  const situations = [
    {
      title: "אתגר",
      content: "בעוד כעשור כ-80% מהמקצועות שקיימים היום צפויים להפוך ללא רלוונטיים.",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      title: "פתרון",
      content: "שילוב שלושה תחומי ידע קריטיים: יזמות כחשיבה מערכתית, אוריינות בינה מלאכותית ופיתוח דיגיטלי",
      icon: Lightbulb,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "שיטה",
      content: "תהליך למידה מקוון בהובלת מומחה מקצועי עם התאמה אישית לפי תחומי עניין",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            המצב כיום
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {situations.map((situation, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${situation.bgColor} rounded-full flex items-center justify-center`}>
                    <situation.icon className={`w-6 h-6 ${situation.color}`} />
                  </div>
                  <CardTitle className={`${situation.color} text-xl`}>
                    {situation.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
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