
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
  BookOpen
} from 'lucide-react';

const DailyScheduleDetailed = () => {
  const dailySchedule = [
    {
      day: 1,
      title: "חושבים כמו יזמים",
      color: "bg-camp-blue-500",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "מתחילים להכיר, משתפים רעיונות, ולומדים איך לזהות בעיות אמיתיות מהעולם שסביבנו",
      activities: [
        "היכרות ובניית אמון בקבוצה",
        "זיהוי בעיות אמיתיות מהחיים שמעניינות",
        "בחירת נושא אישי וכיוון למיזם דיגיטלי",
        "מחקר שוק עם ChatGPT ו-Perplexity"
      ]
    },
    {
      day: 2,
      title: "יוצרים חוויה דיגיטלית",
      color: "bg-camp-purple-500",
      icon: <Palette className="w-6 h-6" />,
      description: "לומדים איך לחשוב כמו משתמשים - מה הופך אפליקציה לנוחה, ברורה ומזמינה",
      activities: [
        "עקרונות UX/UI ועיצוב ממוקד משתמש",
        "תכנון ראשוני (Wireframes) ידני ודיגיטלי",
        "עקרונות נגישות וכלליות בעיצוב",
        "יצירת תוכן ויזואלי עם Canva AI"
      ]
    },
    {
      day: 3,
      title: "בונים אפליקציה בלי קוד",
      color: "bg-camp-teal-500",
      icon: <Smartphone className="w-6 h-6" />,
      description: "משתמשים בכלים של No-Code כדי להפוך את הרעיון למסכים אמיתיים",
      activities: [
        "היכרות עם Bubble ופלטפורמות No-Code",
        "בניית מבנה מסכים וניווט",
        "בחירת עיצוב וצבעים מותאמים",
        "יצירת אפליקציה פעילה ותפקודית"
      ]
    },
    {
      day: 4,
      title: "שילוב בינה מלאכותית",
      color: "bg-camp-blue-600",
      icon: <Brain className="w-6 h-6" />,
      description: "מגלים איך לשלב יכולות AI אמיתיות בתוך האפליקציה",
      activities: [
        "שילוב Lovable.dev ו-Google AI Studio",
        "הוספת צ'אט חכם או זיהוי תמונות",
        "יצירת תוכן אוטומטי עם Rosebud AI",
        "תיקון בעיות ודיוק פיצ'רים"
      ]
    },
    {
      day: 5,
      title: "הצגת מיזם כמו בסטארטאפ",
      color: "bg-camp-purple-600",
      icon: <Presentation className="w-6 h-6" />,
      description: "מסכמים את מה שבנינו ומתכוננים להצגה אישית מול הקבוצה",
      activities: [
        "הכנת מצגת מכירה עם Gamma AI",
        "תרגול הצגה אישית ופיץ'",
        "הצגת המיזמים מול הקבוצה",
        "משוב, פידבק וחגיגת סיום"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          מבנה לימודי יומי מפורט
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {dailySchedule.map((day) => (
            <Card key={day.day} className="hover:shadow-lg transition-shadow">
              <CardHeader className={`${day.color} text-white rounded-t-lg`}>
                <CardTitle className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    {day.icon}
                  </div>
                  <div>
                    <span className="text-white/80 text-sm">יום {day.day}</span>
                    <h3 className="text-xl font-bold">{day.title}</h3>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 font-medium">{day.description}</p>
                <ul className="space-y-2">
                  {day.activities.map((activity, index) => (
                    <li key={index} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{activity}</span>
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

export default DailyScheduleDetailed;
