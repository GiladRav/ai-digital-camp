import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Clock, 
  Users, 
  Target, 
  Lightbulb,
  Presentation,
  Brain,
  Palette,
  Smartphone,
  CheckCircle,
  BookOpen,
  Code
} from 'lucide-react';

const DailyScheduleDetailed = () => {
  const days = [
    {
      day: "יום 1",
      title: "חושבים כמו יזמים",
      description: "מתחילים להכיר, משתפים רעיונות, ולומדים איך לזהות בעיות אמיתיות מהעולם שסביבנו. כל משתתף.ת בוחר.ת נושא שקרוב אליו ומתחיל לפתח כיוון למיזם דיגיטלי אישי.",
      icon: Lightbulb,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      day: "יום 2",
      title: "יוצרים חוויה דיגיטלית",
      description: "לומדים איך לחשוב כמו משתמשים – מה הופך אפליקציה לנוחה, ברורה ומזמינה? מתנסים בתכנון ראשוני (Wireframes) עם עקרונות עיצוב ונגישות שמתאימים לכולם.",
      icon: Palette,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      day: "יום 3",
      title: "בונים אפליקציה בלי קוד",
      description: "משתמשים בכלים של No-Code כדי להפוך את הרעיון למסכים אמיתיים. בוחרים עיצוב, מוסיפים כפתורים, מייצרים תהליך – ויוצרים אפליקציה פעילה שמתפקדת ממש.",
      icon: Code,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      day: "יום 4",
      title: "שילוב בינה מלאכותית לאפליקציה",
      description: "מגלים איך לשלב יכולות AI אמיתיות בתוך האפליקציה – כמו צ'אט חכם, זיהוי תמונות, או יצירת תוכן אוטומטי. מתרגלים תיקון בעיות ודיוק הפיצ'רים.",
      icon: Brain,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      day: "יום 5",
      title: "הצגת מיזם דיגיטלי כמו בסטארטאפ",
      description: "מסכמים את מה שבנינו, מתכוננים להצגה אישית מול הקבוצה, ולומדים איך להסביר רעיון דיגיטלי בצורה משכנעת. כל משתתף.ת משתף.ת את המיזם, מקבל.ת פידבק, וסוגר.ת את השבוע בגאווה.",
      icon: Presentation,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            מבנה יומי מפורט
          </h2>
        </div>

        <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
          {days.map((day, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 ${day.bgColor} rounded-full flex items-center justify-center`}>
                    <day.icon className={`w-7 h-7 ${day.color}`} />
                  </div>
                  <div>
                    <CardTitle className={`${day.color} text-xl`}>
                      {day.day}: {day.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {day.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyScheduleDetailed;
