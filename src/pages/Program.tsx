
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Users, 
  Target, 
  Lightbulb,
  Code,
  Presentation,
  Brain,
  Palette,
  Smartphone,
  TrendingUp,
  CheckCircle,
  Search,
  ExternalLink
} from 'lucide-react';
import Layout from '@/components/Layout';

const Program = () => {
  const dailySchedule = [
    {
      day: 1,
      title: "יסודות יזמות דיגיטלית",
      color: "bg-camp-blue-500",
      icon: <Lightbulb className="w-6 h-6" />,
      activities: [
        "היכרות ומבוא ליזמות דיגיטלית",
        "זיהוי בעיות יומיומיות עם Base44",
        "מחקר שוק עם ChatGPT ו-Perplexity"
      ]
    },
    {
      day: 2,
      title: "עיצוב וחוויית משתמש",
      color: "bg-camp-purple-500",
      icon: <Palette className="w-6 h-6" />,
      activities: [
        "עקרונות עיצוב UI/UX עם Canva AI",
        "בניית wireframes ויצירת תוכן ויזואלי",
        "תכנון חוויית משתמש עם Websim"
      ]
    },
    {
      day: 3,
      title: "פיתוח אפליקציה ראשונה",
      color: "bg-camp-teal-500",
      icon: <Smartphone className="w-6 h-6" />,
      activities: [
        "הכרת Bubble ובניית אפליקציה בסיסית",
        "הוספת תוכן ופיצ'רים עם Firebase Studio",
        "בדיקה ושיפור האפליקציה"
      ]
    },
    {
      day: 4,
      title: "פיתוח מתקדם עם בינה מלאכותית",
      color: "bg-camp-blue-600",
      icon: <Brain className="w-6 h-6" />,
      activities: [
        "שילוב Lovable.dev בפיתוח",
        "יצירת תוכן דינמי עם Rosebud AI",
        "ניסויים עם Google AI Studio"
      ]
    },
    {
      day: 5,
      title: "הצגה וסיכום",
      color: "bg-camp-purple-600",
      icon: <Presentation className="w-6 h-6" />,
      activities: [
        "הכנת מצגת מכירה עם Gamma AI",
        "חזרות והכנה להצגה עם Claude",
        "הצגת פרויקטים וחגיגת סיום"
      ]
    }
  ];

  const platformCategories = [
    {
      category: "מנועי שפה טבעית ומחקר",
      icon: <Search className="w-5 h-5" />,
      color: "bg-blue-500",
      items: [
        { name: "ChatGPT", description: "מנוע השפה הטבעית המתקדם של OpenAI" },
        { name: "Claude", description: "עוזר בינה מלאכותית לחשיבה אנליטית" },
        { name: "Perplexity", description: "מנוע חיפוש מבוסס בינה מלאכותית" }
      ]
    },
    {
      category: "עיצוב ויצירת תוכן ויזואלי",
      icon: <Palette className="w-5 h-5" />,
      color: "bg-purple-500",
      items: [
        { name: "Gamma AI", description: "יצירת מצגות אינטראקטיביות מתקדמות" },
        { name: "Canva AI", description: "עיצוב מקצועי עם בינה מלאכותית" },
        { name: "Rosebud AI", description: "יצירת מדיה גנרטיבית ותוכן ויזואלי" }
      ]
    },
    {
      category: "פלטפורמות ללא-קוד וסימולציות",
      icon: <Brain className="w-5 h-5" />,
      color: "bg-teal-500",
      items: [
        { name: "Lovable.dev", description: "סיוע תכנות מבוסס בינה מלאכותית" },
        { name: "Base44", description: "למידה מותאמת אישית עם AI" },
        { name: "Websim", description: "סימולציות אינטרנט אינטראקטיביות" }
      ]
    },
    {
      category: "פיתוח ותכנות מתקדם",
      icon: <Code className="w-5 h-5" />,
      color: "bg-blue-600",
      items: [
        { name: "Bubble", description: "פיתוח אפליקציות ללא קוד" },
        { name: "Firebase Studio", description: "תשתית אחורית ומסדי נתונים" },
        { name: "Google AI Studio", description: "יצירת מודלי בינה מלאכותית" }
      ]
    }
  ];

  const outcomes = [
    { icon: Smartphone, title: "1-2 אפליקציות פועלות", description: "מובייל וווב מלאות" },
    { icon: Target, title: "מודל עסקי בסיסי", description: "זיהוי בעיה ופתרון עסקי" },
    { icon: TrendingUp, title: "אסטרטגיית שיווק דיגיטלי", description: "כולל חומרי שיווק מקצועיים" },
    { icon: Presentation, title: "מצגת מכירה", description: "Pitch Deck מקצועי של 5 דקות" },
    { icon: Code, title: "תיק עבודות דיגיטלי", description: "מציג את כל הפרויקטים" },
    { icon: CheckCircle, title: "ניסיון מעשי", description: "מרעיון ועד מימוש מלא" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            מה בתכנית הקייטנה?
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            תכנית מקיפה בת 5 ימים שתלמד אתכם לפתח אפליקציות אמיתיות עם כלי בינה מלאכותית מתקדמים
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge className="bg-white/20 text-white border-white/30">
              <Clock className="w-4 h-4 mr-2" />
              20 שעות למידה
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <Users className="w-4 h-4 mr-2" />
              עד 15 משתתפים
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <Brain className="w-4 h-4 mr-2" />
              12+ פלטפורמות AI
            </Badge>
          </div>
        </div>
      </section>

      {/* Daily Schedule Summary */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            מבנה יומי מתוכנן
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {dailySchedule.map((day) => (
              <Card key={day.day} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className={`${day.color} text-white rounded-t-lg`}>
                  <CardTitle className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      {day.icon}
                    </div>
                    <div>
                      <span className="text-white/80 text-sm">יום {day.day}</span>
                      <h3 className="text-lg font-bold">{day.title}</h3>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-sm">
                    {day.activities.map((activity, index) => (
                      <li key={index} className="text-gray-600">
                        • {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Tools and Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            פלטפורמות AI מתקדמות בקורס
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            נכיר למעלה מ-12 פלטפורמות AI מובילות ונלמד לרתום את כוחן ליצירת אפליקציות מקצועיות
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {platformCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center text-white`}>
                      {category.icon}
                    </div>
                    <span className="gradient-text">{category.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((tool, toolIndex) => (
                      <div key={toolIndex} className="border-b border-gray-100 pb-2 last:border-b-0">
                        <h4 className="font-semibold text-camp-blue-600 text-sm">{tool.name}</h4>
                        <p className="text-xs text-gray-600">{tool.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/platforms">
              <Button size="lg" className="gradient-bg text-white hover:opacity-90">
                <ExternalLink className="w-5 h-5 mr-2" />
                צפה בפירוט מלא של הפלטפורמות
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            תוצרים צפויים
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => {
              const IconComponent = outcome.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{outcome.title}</h3>
                    <p className="text-gray-600 text-sm">{outcome.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            גישת ההדרכה
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3 text-camp-blue-600">למידה מבוססת פרויקטים</h3>
                <p className="text-gray-600">כל מפגש כולל פיתוח מעשי של אפליקציה או רכיב עסקי</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3 text-camp-purple-600">התמקדות בלומד</h3>
                <p className="text-gray-600">פרויקטים מותאמים לתחומי עניין ויכולות אישיות</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3 text-camp-teal-600">למידה אקטיבית</h3>
                <p className="text-gray-600">שילוב בין תיאוריה למעשה עם דגש על יצירה</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3 text-camp-blue-600">סביבה בטוחה</h3>
                <p className="text-gray-600">עידוד ניסוי, טעייה ולמידה מכשלונות</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מוכנים להצטרף לתכנית?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            הירשמו עכשיו וקבלו מקום בקייטנה הדיגיטלית החדשנית ביותר
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-camp-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                הרשמה לקייטנה - 1,600₪
              </Button>
            </Link>
            <Link to="/faq">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
                יש לי שאלות
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Program;
