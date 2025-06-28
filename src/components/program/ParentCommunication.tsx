import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Users } from "lucide-react";

const ParentCommunication = () => {
  const communicationStages = [
    {
      stage: "לפני",
      title: "שיחת הכנה אישית",
      description: "שיחה עם כל הורה להכרת הילד, הצרכים שלו ותחומי העניין הייחודיים, בנוסף להסבר מפורט על מהלך הקייטנה והציפיות",
      icon: Phone,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      stage: "במהלך",
      title: "מייל עדכון יומי",
      description: "מייל עדכון יומי עם תמונות ותובנות מהיום, בנוסף לזמינות מלאה של המדריכים לכל שאלה או חשש לאורך כל שעות הפעילות",
      icon: Mail,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      stage: "אחרי",
      title: "ערב הרצאה מיוחד להורים",
      description: "ערב הרצאה מיוחד להורים עם הצגת הפרויקטים, סיכום התפתחות כל ילד והמלצות להמשך פיתוח הכישורים שנרכשו",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            תקשורת עם הורים
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {communicationStages.map((stage, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`mx-auto w-16 h-16 ${stage.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <stage.icon className={`w-8 h-8 ${stage.color}`} />
                </div>
                <CardTitle className={`text-center ${stage.color}`}>
                  {stage.stage}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-center mb-3">{stage.title}</h3>
                <p className="text-gray-600 text-center">
                  {stage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParentCommunication;
