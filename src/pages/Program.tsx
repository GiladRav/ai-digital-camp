
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
  ExternalLink,
  Star,
  Zap,
  Heart,
  BookOpen
} from 'lucide-react';
import Layout from '@/components/Layout';

const Program = () => {
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

  const coreSubjects = [
    {
      title: "יזמות בעידן הדיגיטלי",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-blue-500",
      description: "היכרות עם האקוסיסטם הסטארטאפ הישראלי ועקרונות יזמות מודרנית"
    },
    {
      title: "טכנולוגיות מתפתחות בAI",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-purple-500",
      description: "הבנה מעמיקה של יכולות הבינה המלאכותית ויישומיה"
    },
    {
      title: "עיצוב וחוויית משתמש",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-teal-500",
      description: "עקרונות UX/UI עם דגש על נגישות כוללנית"
    },
    {
      title: "ניהול פרויקטים מתקדם",
      icon: <Target className="w-6 h-6" />,
      color: "bg-green-500",
      description: "מתודולוגיות Agile וניהול צוותים דיגיטליים"
    },
    {
      title: "אתיקה וחינוך דיגיטלי",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-500",
      description: "אחריות חברתית ושימוש אתי בטכנולוגיה"
    }
  ];

  const outcomes = [
    { 
      icon: Brain, 
      title: "מפת חשיבה אישית", 
      description: "זיהוי בעיה אמיתית ותכנון פתרון מותאם" 
    },
    { 
      icon: Smartphone, 
      title: "אפליקציה פעילה", 
      description: "גרסה תפקודית עם ניווט ותכונות AI" 
    },
    { 
      icon: Palette, 
      title: "זהות ויזואלית", 
      description: "שם, לוגו וצבעים מותאמים למיזם" 
    },
    { 
      icon: Presentation, 
      title: "פיץ' אישי", 
      description: "הצגה מקצועית בסגנון סטארטאפ" 
    },
    { 
      icon: Code, 
      title: "שליטה טכנולוגית", 
      description: "יכולת עבודה עם כלי AI מתקדמים" 
    },
    { 
      icon: CheckCircle, 
      title: "ביטחון עצמי", 
      description: "זהות מקצועית וביטוי אישי" 
    }
  ];

  const methodology = [
    {
      title: "למידה מבוססת פרויקטים",
      description: "פיתוח פרויקטים אמיתיים עם מחזור קולב של חוויה-רפלקציה-הפשטה-ניסוי",
      color: "text-camp-blue-600"
    },
    {
      title: "כיתה הפוכה",
      description: "הכנה מראש, תרגול במפגש, יישום אחרי המפגש",
      color: "text-camp-purple-600"
    },
    {
      title: "למידה משחקית",
      description: "נקודות, הישגים ודיפרנציאציה לרמות יכולת שונות",
      color: "text-camp-teal-600"
    },
    {
      title: "AI כשותף למידה",
      description: "שימוש בבינה מלאכותית כשותף ליצירה (לא תחליף למדריך)",
      color: "text-camp-blue-600"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            תכנית יזמות דיגיטלית ופיתוח אפליקציות AI
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            תכנית חינוכית חדשנית בת 5 ימים המכינה דור עתידי לעולם דיגיטלי משתנה
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge className="bg-white/20 text-white border-white/30">
              <Clock className="w-4 h-4 mr-2" />
              20 שעות לימוד פעיל
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <Users className="w-4 h-4 mr-2" />
              עד 15 משתתפים
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <Brain className="w-4 h-4 mr-2" />
              10+ פלטפורמות AI
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <Star className="w-4 h-4 mr-2" />
              מחנה קיץ אינטנסיבי
            </Badge>
          </div>
        </div>
      </section>

      {/* Program Rationale */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            רציונל התכנית
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-3 text-camp-blue-600">הצורך</h3>
                  <p className="text-gray-600">הכנת דור עתידי לעולם שבו 80% מהמקצועות בשנות ה-2030 עדיין לא קיימים היום</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-3 text-camp-purple-600">הפתרון</h3>
                  <p className="text-gray-600">שילוב שלושה תחומי ידע קריטיים: יזמות כחשיבה מערכתית, אוריינות AI ופיתוח דיגיטלי</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <BookOpen className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-3 text-camp-teal-600">הגישה</h3>
                  <p className="text-gray-600">למידה חווייתית ומבוססת פרויקטים עם אסטרטגיות קונסטרוקטיביסטיות</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
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
          
          {/* Daily Structure */}
          <div className="bg-white p-8 rounded-lg shadow-lg mt-12">
            <h3 className="font-bold text-xl mb-6 text-center gradient-text">מבנה יומי מובנה</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-camp-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-camp-blue-600" />
                </div>
                <h4 className="font-semibold text-camp-blue-600">09:00-09:15</h4>
                <p className="text-sm text-gray-600">צ'ק-אין ומיקוד</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-camp-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-8 h-8 text-camp-purple-600" />
                </div>
                <h4 className="font-semibold text-camp-purple-600">09:15-10:15</h4>
                <p className="text-sm text-gray-600">למידה חדשה</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-camp-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-camp-teal-600" />
                </div>
                <h4 className="font-semibold text-camp-teal-600">10:30-11:45</h4>
                <p className="text-sm text-gray-600">תרגול מונחה</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-camp-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8 text-camp-blue-600" />
                </div>
                <h4 className="font-semibold text-camp-blue-600">12:00-13:00</h4>
                <p className="text-sm text-gray-600">יישום עצמאי</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Subjects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            נושאי ליבה בתכנית
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreSubjects.map((subject, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${subject.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                    {subject.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{subject.title}</h3>
                  <p className="text-gray-600 text-sm">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Platforms Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">
            פלטפורמות AI מתקדמות בקורס
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            נכיר למעלה מ-10 פלטפורמות AI מובילות ונלמד לרתום את כוחן ליצירת אפליקציות מקצועיות
          </p>
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
            תוצרי הקייטנה - מה המשתתפים יוצרים ולומדים?
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

      {/* Teaching Methodology */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            מתודולוגיה חדשנית
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {methodology.map((method, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className={`font-semibold text-lg mb-3 ${method.color}`}>{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Communication */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            תקשורת עם הורים ומעורבות משפחתית
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3 text-camp-blue-600">תכנית תקשורת מקיפה</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• מפגש הכנה משפחתי לפני התכנית</li>
                  <li>• עדכונים יומיים במהלך הקורס</li>
                  <li>• אפליקציה מותאמת להורים</li>
                  <li>• מעקב והכוונה ארוכת טווח</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3 text-camp-purple-600">מעורבות הורים</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• הרצאות ערב בנושאים רלוונטיים</li>
                  <li>• יום הורים עם השתתפות בסדנאות</li>
                  <li>• הזדמנויות מנטורינג בתחומי מומחיות</li>
                  <li>• פרויקטים משותפים הורים-ילדים</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מוכנים להצטרף לתכנית החדשנית?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            הירשמו עכשיו למחנה קיץ דיגיטלי שיכין את הילדים שלכם לעתיד הטכנולוגי
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-camp-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                הרשמה לקייטנה - 1,800₪
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
