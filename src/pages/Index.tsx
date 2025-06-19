
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
  Presentation
} from 'lucide-react';
import Layout from '@/components/Layout';

const Index = () => {
  const benefits = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "בינה מלאכותית מתקדמת",
      description: "למידה והתנסות עם 10+ כלי AI מובילים ומתקדמים"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "פיתוח אפליקציות אמיתיות",
      description: "בניית 1-2 אפליקציות פועלות ללא צורך בתכנות"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "קבוצות קטנות",
      description: "עד 15 משתתפים לקבוצה לליווי אישי מקסימלי"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "ערב פיצ'ינג מרגש",
      description: "הצגת הפרויקטים בסגנון 'הכרישים' בפני הורים"
    }
  ];

  const weeklySchedule = [
    { day: "יום 1", focus: "יסודות יזמות דיגיטלית", color: "bg-camp-blue-100 text-camp-blue-800" },
    { day: "יום 2", focus: "עיצוב וחוויית משתמש", color: "bg-camp-purple-100 text-camp-purple-800" },
    { day: "יום 3", focus: "פיתוח אפליקציה ראשונה", color: "bg-camp-teal-100 text-camp-teal-800" },
    { day: "יום 4", focus: "פיתוח מתקדם עם AI", color: "bg-camp-blue-100 text-camp-blue-800" },
    { day: "יום 5", focus: "הצגה וסיכום", color: "bg-camp-purple-100 text-camp-purple-800" }
  ];

  const outcomes = [
    { icon: Code, text: "1-2 אפליקציות פועלות" },
    { icon: Target, text: "מודל עסקי בסיסי" },
    { icon: Lightbulb, text: "אסטרטגיית שיווק דיגיטלי" },
    { icon: Presentation, text: "מצגת מכירה מקצועית" },
    { icon: CheckCircle, text: "תיק עבודות דיגיטלי" },
    { icon: Trophy, text: "ניסיון מעשי מרוכז" }
  ];

  const targetAudience = [
    "תלמידי כיתות ו'-ח' (גילאי 11-14)",
    "ללא רקע טכני נדרש",
    "סקרנות טכנולוגית",
    "חשיבה יצירתית",
    "עניין ביזמות ופתרון בעיות"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              קייטנה דיגיטלית חדשנית לקיץ 2024
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              קייטנת יזמות דיגיטלית
              <br />
              <span className="text-yellow-300">עם בינה מלאכותית</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              הצטרפו לדור הבא של יזמי טכנולוגיה! קייטנה פורצת דרך לתלמידי חטיבת ביניים 
              שממנפת כלי AI מתקדמים להפיכת רעיונות לאפליקציות אמיתיות
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-camp-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                  הרשמה לקייטנה - 1,600₪
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

      {/* Brief Description */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              למה הקייטנה שלנו שונה?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              <strong>5 ימים מרוכזים</strong> של למידה מרתקת בזום עם מדריך מומחה. 
              נכיר למעלה מ-10 פלטפורמות AI מובילות ונפתח אפליקציות אמיתיות ללא צורך בידע תכנות קודם. 
              הקורס מגיע לשיא עם <strong>ערב פיצ'ינג מרגש</strong> בסגנון "הכרישים" 
              שבו המשתתפים יציגו את הרעיונות שלהם כמו יזמים אמיתיים!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">20 שעות למידה</h3>
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
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">פרויקטים אמיתיים</h3>
                <p className="text-gray-600">אפליקציות פועלות ותיק עבודות</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            יתרונות עיקריים של הקייטנה
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

      {/* Weekly Schedule Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            מבנה השבוע
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {weeklySchedule.map((day, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge className={`mb-3 ${day.color}`}>
                      {day.day}
                    </Badge>
                    <p className="font-medium text-sm">{day.focus}</p>
                  </CardContent>
                </Card>
              ))}
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
            מה מקבלים מהקייטנה?
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

      {/* Quick FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            שאלות נפוצות
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3">האם נדרש ידע קודם בתכנות?</h3>
                <p className="text-gray-600">לא! הקייטנה בנויה במיוחד עבור מתחילים. נשתמש בכלי no-code וAI שמאפשרים פיתוח ללא תכנות.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3">איך מתקיימים המפגשים?</h3>
                <p className="text-gray-600">המפגשים מתקיימים בזום עם מדריך מומחה, 5 ימים מרוכזים בין השעות 09:00-13:00.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3">מה הציוד הנדרש?</h3>
                <p className="text-gray-600">מחשב עם חיבור לאינטרנט, מצלמה, מיקרופון ואוזניות. כל התוכנות מבוססות ווב.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3">האם יש תעודה בסיום?</h3>
                <p className="text-gray-600">כן! כל משתתף יקבל תעודת השתתפות ותיק עבודות דיגיטלי עם כל הפרויקטים שפיתח.</p>
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
            מוכנים להתחיל את המסע?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            הצטרפו עכשיו לקייטנה הדיגיטלית החדשנית ביותר בישראל ותהפכו לדור הבא של יזמי הטכנולוגיה
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-camp-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                הרשמה לקייטנה - 1,600₪
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
