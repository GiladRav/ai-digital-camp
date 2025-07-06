import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Smartphone, Brain } from "lucide-react";

const CoreSubjects = () => {
  const subjects = [
    {
      icon: Lightbulb,
      title: "יזמות דיגיטלית",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      items: [
        "פיתוח חשיבה יזמית וזיהוי הזדמנויות בעולם משתנה",
        "תכנון ופיתוח פרויקט אישי – משלב הרעיון ועד להצגה",
        "חיזוק כישורי תקשורת, שכנוע והצגת רעיונות בביטחון"
      ]
    },
    {
      icon: Smartphone,
      title: "פיתוח אפליקציות עם בינה מלאכותית",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      items: [
        "יצירת אפליקציות באמצעות כלים חכמים – ללא צורך בכתיבת קוד",
        "היכרות עם עקרונות עיצוב חוויית משתמש (ממשק ושימושיות)",
        "פיתוח אישי של 1–2 אפליקציות מקוריות המשלבות בינה מלאכותית"
      ]
    },
    {
      icon: Brain,
      title: "מיומנויות דיגיטליות מתקדמות",
      color: "text-green-600",
      bgColor: "bg-green-100",
      items: [
        "עבודה מעשית עם למעלה מ-10 פלטפורמות בינה מלאכותית",
        "פיתוח חשיבה יצירתית, פתרון בעיות ושיתוף פעולה בצוות",
        "חיזוק הביטוי האישי והביטחון העצמי דרך עשייה טכנולוגית יצירתית"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#181259' }}>
            מסלולי התפתחות
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {subjects.map((subject, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`mx-auto w-16 h-16 ${subject.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <subject.icon className={`w-8 h-8 ${subject.color}`} />
                </div>
                <CardTitle className={`text-center ${subject.color}`}>
                  {subject.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {subject.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 text-sm leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSubjects;
