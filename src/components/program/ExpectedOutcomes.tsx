import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Smartphone, Palette, CheckCircle, Presentation } from "lucide-react";

const ExpectedOutcomes = () => {
  const outcomes = [
    {
      icon: Lightbulb,
      title: "חשיבה יזמית",
      description: "פיתוח יכולת זיהוי בעיות ויצירת פתרונות דיגיטליים זיהוי בעיה אמיתית מהחיים, תכנון פתרון מותאם לקהל יעד ויצירת מפת חשיבה לרעיון דיגיטלי מקורי.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: Smartphone,
      title: "מיומנויות פיתוח מעשיות",
      description: "תהליך פיתוח אפליקציה מרעיון ועד מוצר פועל תכנון מסכים, יצירת אפליקציה תפקודית עם כלי AI מתקדמים ותרגול שיפור מתמיד על בסיס בדיקות.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Palette,
      title: "עיצוב וזהות ויזואלית",
      description: "פיתוח חוש אסתטי ויכולת עיצוב דיגיטלי בחירת שם ולוגו, עיצוב ממשק משתמש אינטואיטיבי והבנת עקרונות נגישות ופשטות בעיצוב.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: CheckCircle,
      title: "אפליקציה מוגמרת",
      description: "תוצר דיגיטלי אמיתי שניתן לשתף ולהציג אפליקציה פעילה עם ניווט, תכונות חכמות וקישור ייחודי שניתן לשתף עם משפחה וחברים.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Presentation,
      title: "מיומנויות הצגה",
      description: "ביטחון עצמי בהצגת רעיונות טכנולוגיים הכנת מצגת מכירה קצרה, הצגה מול הקבוצה ופיתוח יכולות ביטוי וביטחון עצמי בתחום הטכנולוגיה.",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            תוצרים: מה המשתתפים יוצרים ולומדים?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {outcomes.map((outcome, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`mx-auto w-16 h-16 ${outcome.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <outcome.icon className={`w-8 h-8 ${outcome.color}`} />
                </div>
                <CardTitle className={`text-center ${outcome.color}`}>
                  {outcome.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {outcome.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpectedOutcomes;
