import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Wifi, Headphones } from "lucide-react";

const TechRequirements = () => {
  const requirements = [
    {
      icon: Monitor,
      title: "מחשב או טאבלט",
      description: "מחשב נייד או טאבלט עם חיבור יציב לאינטרנט",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Wifi,
      title: "חיבור אינטרנט",
      description: "חיבור אינטרנט יציב למפגשים מקוונים",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Headphones,
      title: "אוזניות (אופציונלי)",
      description: "אוזניות לשיפור איכות השמע במפגשים",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            דרישות טכניות
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {requirements.map((requirement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`mx-auto w-16 h-16 ${requirement.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <requirement.icon className={`w-8 h-8 ${requirement.color}`} />
                </div>
                <CardTitle className={`${requirement.color} text-lg`}>
                  {requirement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  {requirement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechRequirements; 