import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Laptop, Wifi, Camera, Headphones, Smartphone, CheckCircle, AlertCircle } from "lucide-react";

const TechRequirements = () => {
  const requirements = [
    {
      title: "חיוני",
      items: [
        {
          icon: Laptop,
          text: "מחשב נייד או מחשב שולחני עם חיבור לאינטרנט יציב",
          required: true
        },
        {
          icon: Camera,
          text: "מצלמה, מיקרופון ואוזניות לשיפור איכות הקול",
          required: true
        },
        {
          icon: Wifi,
          text: "דפדפן מעודכן (Chrome/Firefox/Safari)",
          required: true
        }
      ]
    },
    {
      title: "אופציונאלי",
      items: [
        {
          icon: Smartphone,
          text: "טאבלט או סמארטפון לבדיקת אפליקציות מובייל",
          required: false
        }
      ]
    }
  ];

  const importantNotes = [
    "אין צורך ברכישת תוכנה - כל הכלים מבוססי ווב",
    "חשבונות לפלטפורמות ייווצרו בהדרכת המדריך"
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            דרישות טכנולוגיות
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {requirements.map((section, index) => (
            <Card key={index} className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {section.title === "חיוני" ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <Smartphone className="w-5 h-5 text-blue-600" />
                  )}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <item.icon className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700">{item.text}</p>
                        {item.required && (
                          <Badge variant="secondary" className="mt-1 text-xs">
                            נדרש
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 max-w-4xl mx-auto">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <AlertCircle className="w-5 h-5" />
                חשוב לדעת
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {importantNotes.map((note, index) => (
                  <li key={index} className="flex items-start gap-2 text-orange-700">
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechRequirements; 