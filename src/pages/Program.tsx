
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
  CheckCircle
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
        {
          time: "09:00-10:15",
          title: "היכרות ומבוא ליזמות דיגיטלית",
          description: "היכרות עם המשתתפים, הכרת עולם היזמות הדיגיטלית ועקרונות בסיסיים"
        },
        {
          time: "10:30-11:45", 
          title: "זיהוי בעיות יומיומיות עם Base44",
          description: "למידה של תהליך זיהוי בעיות וחיפוש הזדמנויות עסקיות בעזרת AI"
        },
        {
          time: "12:00-13:00",
          title: "מחקר שוק פשוט ובניית פרופיל לקוח",
          description: "שימוש ב-MagicSchool AI לביצוע מחקר שוק אוטומטי ובניית דמויות לקוח"
        }
      ]
    },
    {
      day: 2,
      title: "עיצוב וחוויית משתמש",
      color: "bg-camp-purple-500",
      icon: <Palette className="w-6 h-6" />,
      activities: [
        {
          time: "09:00-10:15",
          title: "עקרונות עיצוב UI/UX והכרת Canva AI",
          description: "למידת עקרונות עיצוב משתמש וחוויית משתמש עם כלי AI מתקדמים"
        },
        {
          time: "10:30-11:45",
          title: "בניית wireframes ויצירת תוכן ויזואלי",
          description: "עיצוב ממשקי המשתמש הראשונים וליחת חומרים גרפיים עם Canva AI"
        },
        {
          time: "12:00-13:00",
          title: "תכנון חוויית משתמש עם Websim",
          description: "בניית מסע המשתמש וחוויות אינטראקטיביות"
        }
      ]
    },
    {
      day: 3,
      title: "פיתוח אפליקציה ראשונה",
      color: "bg-camp-teal-500",
      icon: <Smartphone className="w-6 h-6" />,
      activities: [
        {
          time: "09:00-10:15",
          title: "הכרת Bubble ובניית אפליקציה בסיסית",
          description: "צעדים ראשונים בפלטפורמת Bubble לבניית אפליקציות ללא קוד"
        },
        {
          time: "10:30-11:45",
          title: "הוספת תוכן ופיצ'רים עם Firebase Studio",
          description: "שילוב מסד נתונים ותכונות מתקדמות באפליקציה"
        },
        {
          time: "12:00-13:00",
          title: "בדיקה ושיפור האפליקציה",
          description: "בדיקת האפליקציה, איתור בעיות ושיפורים נדרשים"
        }
      ]
    },
    {
      day: 4,
      title: "פיתוח מתקדם עם בינה מלאכותית",
      color: "bg-camp-blue-600",
      icon: <Brain className="w-6 h-6" />,
      activities: [
        {
          time: "09:00-10:15",
          title: "שילוב Lovable.dev ו-Replit Ghostwriter",
          description: "שימוש בכלי AI מתקדמים לכתיבת קוד ופתרון בעיות טכניות"
        },
        {
          time: "10:30-11:45",
          title: "יצירת תוכן דינמי עם Rosebud AI",
          description: "הוספת תוכן גנרטיבי ויצירת חוויות אינטראקטיביות"
        },
        {
          time: "12:00-13:00",
          title: "ניסויים עם Google AI Studio ומודל עסקי",
          description: "יצירת מודלי AI מותאמים אישית ועדכון המודל העסקי"
        }
      ]
    },
    {
      day: 5,
      title: "הצגה וסיכום",
      color: "bg-camp-purple-600",
      icon: <Presentation className="w-6 h-6" />,
      activities: [
        {
          time: "09:00-10:15",
          title: "הכנת מצגת מכירה (Pitch Deck)",
          description: "יצירת מצגת מקצועית עם Canva AI להצגת הפרויקט"
        },
        {
          time: "10:30-11:45",
          title: "חזרות והכנה להצגה",
          description: "שימוש ב-Diffit לכתיבה ברורה ותרגול הצגה"
        },
        {
          time: "12:00-13:00",
          title: "הצגת פרויקטים וחגיגת סיום",
          description: "ערב פיצ'ינג בסגנון 'הכרישים' בפני הורים וחגיגת הישגים"
        }
      ]
    }
  ];

  const tools = [
    {
      category: "יצירת תוכן ועיצוב",
      items: [
        { name: "Canva AI Assistant", description: "עוזר עיצוב מבוסס AI ליצירת תוכן ויזואלי מקצועי" },
        { name: "Rosebud AI", description: "יצירת מדיה גנרטיבית לתמונות, וידאו ותוכן אינטראקטיבי" }
      ]
    },
    {
      category: "פיתוח ותכנות",
      items: [
        { name: "Bubble", description: "פלטפורמת no-code לבניית אפליקציות אינטרנט עם יכולות AI" },
        { name: "Lovable.dev", description: "סיוע תכנות מבוסס AI עם הצעות קוד חכמות" },
        { name: "Firebase Studio", description: "שירותי backend ומסדי נתונים בזמן אמת" },
        { name: "Replit Ghostwriter", description: "כלי תכנות זוגי מבוסס AI" }
      ]
    },
    {
      category: "הוראה ותכנון",
      items: [
        { name: "MagicSchool AI", description: "כלים מקיפים לתכנון ויצירת תוכן חינוכי" },
        { name: "Diffit", description: "התאמה אוטומטית של טקסטים לרמות הבנה שונות" }
      ]
    },
    {
      category: "למידה וסימולציה",
      items: [
        { name: "Base44", description: "חוויות למידה מותאמות אישית מבוססות AI" },
        { name: "Websim", description: "סימולציות אינטרנט אינטראקטיביות" },
        { name: "Google AI Studio", description: "פלטפורמה ליצירת אבות טיפוס עם מודלי AI" }
      ]
    }
  ];

  const outcomes = [
    { icon: <Smartphone />, title: "1-2 אפליקציות פועלות", description: "מובייל (Glide) וווב (Bubble)" },
    { icon: <Target />, title: "מודל עסקי בסיסי", description: "זיהוי בעיה ופתרון עסקי" },
    { icon: <TrendingUp />, title: "אסטרטגיית שיווק דיגיטלי", description: "כולל חומרי שיווק מקצועיים" },
    { icon: <Presentation />, title: "מצגת מכירה", description: "Pitch Deck מקצועי של 5 דקות" },
    { icon: <Code />, title: "תיק עבודות דיגיטלי", description: "מציג את כל הפרויקטים" },
    { icon: <CheckCircle />, title: "ניסיון מעשי", description: "מרעיון ועד מימוש מלא" }
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
              10+ כלי AI
            </Badge>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            מבנה יומי מפורט
          </h2>
          <div className="space-y-8">
            {dailySchedule.map((day) => (
              <Card key={day.day} className="overflow-hidden">
                <CardHeader className={`${day.color} text-white`}>
                  <CardTitle className="flex items-center space-x-3 rtl:space-x-reverse text-xl">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      {day.icon}
                    </div>
                    <div>
                      <span className="text-white/80">יום {day.day}</span>
                      <h3 className="text-xl font-bold">{day.title}</h3>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {day.activities.map((activity, index) => (
                      <div key={index} className="border-r-4 border-gray-200 pr-4">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                          <Badge variant="outline">{activity.time}</Badge>
                          <h4 className="font-semibold">{activity.title}</h4>
                        </div>
                        <p className="text-gray-600 text-sm">{activity.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools and Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            כלים וטכנולוגיות מרכזיים
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            למרות שנשתמש באפליקציות נוספות רבות במהלך הקייטנה, אלו הן הפלטפורמות המרכזיות שנתמקד בהן:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((tool, toolIndex) => (
                      <div key={toolIndex} className="border-b border-gray-100 pb-3 last:border-b-0">
                        <h4 className="font-semibold text-camp-blue-600 mb-1">{tool.name}</h4>
                        <p className="text-sm text-gray-600">{tool.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
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
            {outcomes.map((outcome, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <outcome.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{outcome.title}</h3>
                  <p className="text-gray-600 text-sm">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
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
