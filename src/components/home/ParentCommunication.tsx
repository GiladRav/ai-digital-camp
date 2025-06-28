
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, Users } from "lucide-react";

const ParentCommunication = () => {
  const communicationStages = [
    {
      stage: "לפני",
      title: "שיחת הכנה אישית",
      description: "שיחה עם כל הורה להכרת הילד, הצרכים שלו ותחומי העניין הייחודיים, בנוסף להסבר מפורט על מהלך הקייטנה והציפיות",
      icon: Phone,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      stage: "במהלך",
      title: "מייל עדכון יומי",
      description: "מייל עדכון יומי עם תמונות ותובנות מהיום, בנוסף לזמינות מלאה של המדריכים לכל שאלה או חשש לאורך כל שעות הפעילות",
      icon: Mail,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      stage: "אחרי",
      title: "ערב הרצאה מיוחד להורים",
      description: "ערב הרצאה מיוחד להורים עם הצגת הפרויקטים, סיכום התפתחות כל ילד והמלצות להמשך פיתוח הכישורים שנרכשו",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            תקשורת עם הורים
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {communicationStages.map((stage, index) => (
            <Card key={index} className={`${stage.bgColor} border-2 ${stage.borderColor} hover:shadow-md transition-all duration-300`}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm`}>
                    <stage.icon className={`w-5 h-5 ${stage.color}`} />
                  </div>
                  <CardTitle className={`${stage.color} text-lg`}>
                    {stage.stage}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <h3 className="font-semibold mb-2 text-gray-800 text-sm">
                  {stage.title}
                </h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  {stage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-2">
            <Link to="/faq">
              שאלות ותשובות
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ParentCommunication;
