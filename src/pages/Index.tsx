
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Smartphone, 
  Users, 
  Trophy, 
  Clock, 
  CheckCircle,
  Target,
  Lightbulb,
  Code,
  Presentation,
  Star,
  Zap,
  Heart,
  BookOpen
} from 'lucide-react';
import Layout from '@/components/Layout';

const Index = () => {
  const benefits = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "חשיבה יזמית מערכתית",
      description: "פיתוח יכולות פתרון בעיות מורכבות וחשיבה מערכתית"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "אוריינות AI מתקדמת",
      description: "שימוש יצירתי ב-10+ פלטפורמות בינה מלאכותית מובילות"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "פיתוח אפליקציות פועלות",
      description: "בניית אפליקציות אמיתיות עם כלי No-Code/Low-Code"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "מיומנויות חברתיות-רגשיות",
      description: "בניית ביטחון עצמי, מנהיגות דיגיטלית ועבודת צוות"
    }
  ];

  const weeklySchedule = [
    { day: "יום 1", focus: "חושבים כמו יזמים", description: "זיהוי בעיות ופיתוח רעיונות", color: "bg-camp-blue-100 text-camp-blue-800" },
    { day: "יום 2", focus: "יוצרים חוויה דיגיטלית", description: "עיצוב UX/UI ונגישות", color: "bg-camp-purple-100 text-camp-purple-800" },
    { day: "יום 3", focus: "בונים אפליקציה בלי קוד", description: "פיתוח עם כלי No-Code", color: "bg-camp-teal-100 text-camp-teal-800" },
    { day: "יום 4", focus: "שילוב בינה מלאכותית", description: "הוספת יכולות AI לאפליקציה", color: "bg-camp-blue-100 text-camp-blue-800" },
    { day: "יום 5", focus: "הצגת מיזם כמו בסטארטאפ", description: "פיץ' אישי והצגת הפרויקט", color: "bg-camp-purple-100 text-camp-purple-800" }
  ];

  const outcomes = [
    { icon: Brain, text: "מפת חשיבה אישית לרעיון דיגיטלי" },
    { icon: Smartphone, text: "אפליקציה פעילה ותפקודית" },
    { icon: Code, text: "שליטה בכלי AI ופלטפורמות מתקדמות" },
    { icon: Presentation, text: "פיץ' אישי בסגנון סטארטאפ" },
    { icon: Target, text: "זהות אישית ולוגו למיזם" },
    { icon: CheckCircle, text: "ביטחון עצמי טכנולוגי" }
  ];

  const targetAudience = [
    "בני נוער בגילאי 11-14 (כיתות ו'-ח')",
    "ללא צורך בידע טכני מוקדם",
    "עניין ביזמות ופתרון בעיות",
    "סקרנות טכנולוגיה ויצירתיות",
    "מוטיבציה ללמידה פעילה"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              מחנה קיץ דיגיטלי אינטנסיבי - קיץ 2024
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              יזמות דיגיטלית ופיתוח
              <br />
              <span className="text-yellow-300">אפליקציות AI</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              תכנית חינוכית חדשנית המכינה את דור העתיד לעולם שבו 80% מהמקצועות בשנות ה-2030 
              עדיין לא קיימים היום. שילוב יזמות, טכנולוגיה ובינה מלאכותית בגישה פדגוגית מתקדמת.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-camp-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                  הרשמה לקייטנה - 1,800₪
                </Button>
              </Link>
              <Link to="/program">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
                  מה בתכנית?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              למה התכנית שלנו שונה?
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <Star className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                  <h3 className="font-bold text-lg text-camp-blue-600">הצורך</h3>
                  <p className="text-gray-600">הכנת דור עתידי לעולם משתנה</p>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-bold text-lg text-camp-purple-600">הפתרון</h3>
                  <p className="text-gray-600">שילוב יזמות, AI ופיתוח דיגיטלי</p>
                </div>
                <div className="text-center">
                  <BookOpen className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <h3 className="font-bold text-lg text-camp-teal-600">הגישה</h3>
                  <p className="text-gray-600">למידה חווייתית ומבוססת פרויקטים</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">20 שעות לימוד פעיל</h3>
                <p className="text-gray-600">5 ימים מרוכזים, 4 שעות ביום</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">עד 15 משתתפים</h3>
                <p className="text-gray-600">ליווי אישי וקבוצה אינטימית</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">10+ פלטפורמות AI</h3>
                <p className="text-gray-600">כלים מובילים ומתקדמים</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">פרויקטים אמיתיים</h3>
                <p className="text-gray-600">מרעיון למוצר מוחשי</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            מטרות התכנית
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            מבנה לימודי יומי
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {weeklySchedule.map((day, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge className={`mb-3 ${day.color}`}>
                      {day.day}
                    </Badge>
                    <h3 className="font-bold text-sm mb-2">{day.focus}</h3>
                    <p className="text-xs text-gray-600">{day.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
              <h3 className="font-bold text-lg mb-4 text-center gradient-text">מבנה יומי מובנה</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div>
                  <h4 className="font-semibold text-camp-blue-600">09:00-09:15</h4>
                  <p className="text-sm text-gray-600">צ'ק-אין ומיקוד</p>
                </div>
                <div>
                  <h4 className="font-semibold text-camp-purple-600">09:15-10:15</h4>
                  <p className="text-sm text-gray-600">למידה חדשה</p>
                </div>
                <div>
                  <h4 className="font-semibold text-camp-teal-600">10:30-11:45</h4>
                  <p className="text-sm text-gray-600">תרגול מונחה</p>
                </div>
                <div>
                  <h4 className="font-semibold text-camp-blue-600">12:00-13:00</h4>
                  <p className="text-sm text-gray-600">יישום עצמאי</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/program">
                <Button variant="outline" size="lg">
                  ראה פירוט מלא של התכנית
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            תוצרי הקייטנה - מה המשתתפים יוצרים?
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => {
              const IconComponent = outcome.icon;
              return (
                <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-white">
                    <IconComponent size={20} />
                  </div>
                  <span className="font-medium">{outcome.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
              למי זה מתאים?
            </h2>
            <Card className="p-8">
              <CardContent className="p-0">
                <ul className="space-y-4 text-lg">
                  {targetAudience.map((item, index) => (
                    <li key={index} className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            שיטות הוראה חדשניות
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3 text-camp-blue-600">למידה מבוססת פרויקטים</h3>
                <p className="text-gray-600">פיתוח פרויקטים אמיתיים עם מחזור קולב: חוויה-רפלקציה-הפשטה-ניסוי</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3 text-camp-purple-600">כיתה הפוכה</h3>
                <p className="text-gray-600">הכנה מראש, תרגול במפגש, יישום אחרי</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3 text-camp-teal-600">למידה משחקית</h3>
                <p className="text-gray-600">נקודות, הישגים ודיפרנציאציה לרמות יכולת שונות</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3 text-camp-blue-600">AI כשותף למידה</h3>
                <p className="text-gray-600">שימוש בבינה מלאכותית כשותף ליצירה (לא תחליף למדריך)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            שאלות נפוצות
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3">איך מתקיימים המפגשים?</h3>
                <p className="text-gray-600">מחנה קיץ דיגיטלי אינטנסיבי בזום עם מדריך מומחה, 5 ימים מרוכזים בין השעות 09:00-13:00.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3">איזה כלים נשתמש?</h3>
                <p className="text-gray-600">למעלה מ-10 פלטפורמות AI מובילות וכלי No-Code/Low-Code מתקדמים, כולם מבוססי ווב.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3">מה מעורבות ההורים?</h3>
                <p className="text-gray-600">מפגש הכנה משפחתי, עדכונים יומיים, הרצאות ערב ואפשרויות מנטורינג משותפות.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3">איך מתבטא הפיץ' הסופי?</h3>
                <p className="text-gray-600">הצגה אישית מול הקבוצה בסגנון סטארטאפ, עם שקף/שקופית ותמונת האפליקציה שפותחה.</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link to="/faq">
              <Button variant="outline" size="lg">
                עוד שאלות ותשובות
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            מוכנים להצטרף למהפכה הדיגיטלית?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            הצטרפו עכשיו לתכנית החינוכית החדשנית שמכינה את דור העתיד לעולם של 2030
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-camp-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                הרשמה לקייטנה - 1,800₪
              </Button>
            </Link>
            <div className="text-white/80">
              <p className="text-sm">מקומות מוגבלים • הרשמה מוקדמת חובה</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
