import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Code, 
  Heart, 
  Target, 
  Users, 
  Award,
  Lightbulb,
  TrendingUp,
  Calendar,
  Clock,
  Monitor,
  Cpu,
  Brain
} from 'lucide-react';
import Layout from '@/components/Layout';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "למידה מתוך תשוקה",
      description: "אנחנו מאמינים שלמידה טובה ביותר מגיעה כשהילדים לומדים על נושאים שמעניינים אותם באמת"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "ליווי אישי",
      description: "כל ילד הוא עולם ומלואו. אנחנו מתאימים את הלמידה לכל משתתף בנפרד"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "חדשנות ויצירתיות",
      description: "אנחנו מעודדים חשיבה מחוץ לקופסה ופתרונות יצירתיים לבעיות אמיתיות"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "למידה מעשית",
      description: "התיאוריה חשובה, אבל הכי חשוב הוא שהילדים יכלו ליישם את מה שלמדו בפועל"
    }
  ];

  const goals = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "הכנת הדור הבא",
      description: "להכין את ילדי היום לעולם הטכנולוגיה של מחר"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "דמוקרטיזציה של הטכנולוגיה",
      description: "להפוך את פיתוח הטכנולוגיה לנגיש לכל ילד, ללא תלות ברקע או יכולות טכניות"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "פיתוח חשיבה יזמית",
      description: "ללמד ילדים לזהות בעיות ולפתח פתרונות יצירתיים ומעשיים"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "בניית ביטחון עצמי",
      description: "לתת לילדים את החוויה של הצלחה ויצירה בתחום הטכנולוגיה"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative text-white py-20 px-4" style={{ 
        backgroundImage: 'linear-gradient(rgba(24, 18, 89, 0.4), rgba(24, 18, 89, 0.4)), url("/visuals/1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#FFD84C' }}>
            גלעד רביד
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            מומחה ליזמות חינוכית וחדשנות טכנולוגית עם התמקדות בלמידה מבוססת משחק
          </p>

          {/* Info Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <Calendar className="w-5 h-5" style={{ color: '#1D4ED8' }} />
              <span className="text-sm font-medium" style={{ color: '#D1D5DB' }}>13.7.2025 - 17.7.2025</span>
            </div>
            <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <Users className="w-5 h-5" style={{ color: '#1D4ED8' }} />
              <span className="text-sm font-medium" style={{ color: '#D1D5DB' }}>גילאי 10-14</span>
            </div>
            <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <Monitor className="w-5 h-5" style={{ color: '#1D4ED8' }} />
              <span className="text-sm font-medium" style={{ color: '#D1D5DB' }}>מפגשים מקוונים</span>
            </div>
            <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <Clock className="w-5 h-5" style={{ color: '#1D4ED8' }} />
              <span className="text-sm font-medium" style={{ color: '#D1D5DB' }}>10:00-14:30</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              className="font-semibold text-lg px-8 py-3"
              style={{ 
                backgroundColor: '#FFD84C',
                color: '#181259',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#EAB100';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFD84C';
              }}
            >
              <Link to="/register">
                להרשמה
              </Link>
            </Button>
            <Button 
              asChild 
              className="font-semibold text-lg px-8 py-3"
              style={{ 
                backgroundColor: '#FFD84C',
                color: '#181259',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#EAB100';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFD84C';
              }}
            >
              <Link to="/faq">
                שאלות נפוצות
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
              המשימה שלנו
            </h2>
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-0">
                <p className="text-lg leading-relaxed text-gray-700">
                  אנחנו מאמינים שכל ילד יכול להיות יזם טכנולוגי. בעידן הבינה המלאכותית, 
                  הכלים שמאפשרים ליצור טכנולוגיה הפכו נגישים יותר מאי פעם. 
                  הקייטנה שלנו נועדה לחבר בין הסקרנות הטבעית של ילדים לבין הכוח הבלתי מוגבל של בינה מלאכותית, 
                  ולאפשר להם לממש רעיונות ולפתח פתרונות אמיתיים לבעיות שהם רואים בעולם.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            מומחיות מקצועית
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">חדשנות</h3>
              <p className="text-gray-600">פיתוח פתרונות יצירתיים וחדשניים בתחום החינוך והטכנולוגיה</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">טכנולוגיה</h3>
              <p className="text-gray-600">מומחיות בפיתוח טכנולוגיות מתקדמות ופתרונות דיגיטליים</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">בינה מלאכותית</h3>
              <p className="text-gray-600">התמחות בתחום ה-AI ויישומיו בחינוך ובפיתוח אפליקציות</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">חינוך</h3>
              <p className="text-gray-600">ניסיון עשיר בהוראה ופיתוח מתודולוגיות למידה מתקדמות</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Program */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              למה נוצרה התכנית?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-xl mb-4 text-camp-blue-600">המצב היום</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-camp-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      הטכנולוגיה משתנה בקצב מסחרר
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-camp-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      מיומנויות של היום לא יהיו רלוונטיות מחר
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-camp-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      בינה מלאכותית משנה את חוקי המשחק
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-camp-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      ילדים צריכים להיות יוצרים, לא רק צרכנים
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-xl mb-4 text-camp-purple-600">הפתרון שלנו</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-camp-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      למידה מעשית של כלי AI מתקדמים
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-camp-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      פיתוח אפליקציות אמיתיות ללא תכנות
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-camp-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      בניית חשיבה יזמית ופתרון בעיות
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-camp-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      הכנה לעתיד הטכנולוגי
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Goals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            המטרות שלנו
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {goal.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{goal.title}</h3>
                      <p className="text-gray-600">{goal.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              הגישה החינוכית שלנו
            </h2>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-xl mb-4 text-camp-blue-600">למידה מבוססת פרויקטים</h3>
                    <p className="text-gray-600 mb-4">
                      כל מה שלומדים במהלך הקייטנה מיושם מיד בפרויקטים אמיתיים. 
                      הילדים לא רק לומדים תיאוריה, אלא בונים דברים שפועלים בפועל.
                    </p>
                    
                    <h3 className="font-semibold text-xl mb-4 text-camp-purple-600">התאמה אישית</h3>
                    <p className="text-gray-600">
                      כל ילד מגיע עם תחומי עניין ויכולות שונות. אנחנו מתאימים את הפרויקטים 
                      והקצב ללומד הספציפי, כך שכל אחד מקבל את החוויה המתאימה לו.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl mb-4 text-camp-teal-600">למידה מכשלונות</h3>
                    <p className="text-gray-600 mb-4">
                      אנחנו מעודדים ניסוי וטעייה. טעויות הן חלק מתהליך הלמידה, 
                      ואנחנו עוזרים לילדים להפוך כשלונות להזדמנויות למידה.
                    </p>
                    
                    <h3 className="font-semibold text-xl mb-4 text-camp-blue-600">יזמות אחראית</h3>
                    <p className="text-gray-600">
                      אנחנו מלמדים לא רק איך ליצור טכנולוגיה, אלא גם איך לעשות זאת באופן אתי 
                      ואחראי שתורם לחברה.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team/Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            הרקע והניסיון שלנו
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Badge className="mb-4 bg-camp-blue-100 text-camp-blue-800">רקע טכנולוגי</Badge>
                <h3 className="font-semibold text-lg mb-3">מפתחים מנוסים</h3>
                <p className="text-gray-600 text-sm">
                  הצוות שלנו כולל מפתחים עם ניסיון רב שנים בתחום הטכנולוגיה והבינה המלאכותית
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Badge className="mb-4 bg-camp-purple-100 text-camp-purple-800">רקע חינוכי</Badge>
                <h3 className="font-semibold text-lg mb-3">מחנכים מוסמכים</h3>
                <p className="text-gray-600 text-sm">
                  השילוב של ידע טכנולוגי עם הבנה פדגוגית מעמיקה של עולם הילדים
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Badge className="mb-4 bg-camp-teal-100 text-camp-teal-800">ניסיון מוכח</Badge>
                <h3 className="font-semibold text-lg mb-3">תוצאות מוכחות</h3>
                <p className="text-gray-600 text-sm">
                  ניסיון בהדרכת מאות ילדים בתחומי הטכנולוגיה והיזמות הדיגיטלית
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative text-white py-20 px-4" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("/visuals/2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFD84C' }}>
            בואו להיות חלק מהחזון
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            הצטרפו אלינו במסע מרגש להכנת הדור הבא של יזמי הטכנולוגיה הישראלית
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <Button 
                className="font-semibold text-lg px-8 py-3"
                style={{ 
                  backgroundColor: '#FFD84C',
                  color: '#1A1A1A',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#EAB100';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFD84C';
                }}
              >
                להרשמה
              </Button>
            </Link>
            <Link to="/faq">
              <Button 
                className="font-semibold text-lg px-8 py-3"
                style={{ 
                  backgroundColor: '#FFD84C',
                  color: '#1A1A1A',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#EAB100';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFD84C';
                }}
              >
                שאלות נפוצות
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
