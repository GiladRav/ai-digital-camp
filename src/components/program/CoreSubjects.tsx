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
        "פיתוח חשיבה יזמית וזיהוי הזדמנויות עסקיות",
        "למידת עקרונות מחקר שוק ובניית מודל עסקי פשוט",
        "הכרת תהליכי פיתוח מוצר מרעיון ועד מימוש",
        "בנייה והצגה של פרויקטים עסקיים מקוריים",
        "פיתוח מיומנויות הצגה, שיווק ומכירה"
      ]
    },
    {
      icon: Smartphone,
      title: "פיתוח אפליקציות",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      items: [
        "שימוש בכלי AI מתקדמים ליצירת אפליקציות פועלות ללא צורך בתכנות",
        "הבנת עקרונות עיצוב UI/UX עם סיוע בינה מלאכותית",
        "למידת תהליכי בדיקה, שיפור ופיתוח מוצר עם משוב אוטומטי",
        "הכרת טכנולוגיות AI כמו למידת מכונה, עיבוד שפה טבעית ויצירת תוכן",
        "בנייה של 1-2 אפליקציות פועלות עם אינטגרציה של AI"
      ]
    },
    {
      icon: Brain,
      title: "מיומנויות דיגיטליות",
      color: "text-green-600",
      bgColor: "bg-green-100",
      items: [
        "היכרות עם 10+ פלטפורמות AI מתקדמות לפיתוח ויצירה",
        "פיתוח כישורי פתרון בעיות וחשיבה אלגוריתמית עם סיוע AI",
        "תרגול עבודת צוות ומנהיגות בפרויקטים דיגיטליים",
        "ביטוי יצירתי ופיתוח זהות מקצועית צעירה בעידן הAI"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            מטרות מרכזיות
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
