import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Code, 
  Target, 
  Award
} from 'lucide-react';

const AboutCamp = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            קייטנת הקיץ החדשנית ביותר
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            קייטנה דיגיטלית פורצת דרך לתלמידי חטיבת ביניים שממנפת כלי בינה מלאכותית מתקדמים 
            להפיכת רעיונות לאפליקציות פועלות.
          </p>
        </div>
      </section>

      {/* סקירה כללית */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            סקירה כללית
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              קייטנת יזמות דיגיטלית ופיתוח אפליקציות בינה מלאכותית היא תכנית חדשנית 
              המשלבת יזמות דיגיטלית ופיתוח אפליקציות בדרך מעשית וחווייתית. 
              המשתתפים לומדים להכיר הזדמנויות עסקיות, לפתח רעיונות יצירתיים 
              ולהפוך אותם לאפליקציות פועלות באמצעות כלי בינה מלאכותית מתקדמים.
            </p>
          </div>
        </div>
      </section>

      {/* מטרות מחנה קיץ דיגיטלי - MOVED FROM ABOUT PAGE */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            מטרות מחנה קיץ דיגיטלי
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">הכנת הדור הבא</h3>
                    <p className="text-gray-600">להכין את בני הנוער של היום לעולם הטכנולוגיה של מחר</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">דמוקרטיזציה של הטכנולוגיה</h3>
                    <p className="text-gray-600">להפוך את פיתוח הטכנולוגיה לנגיש לכל משתתף, ללא תלות ברקע או יכולות טכניות</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">פיתוח חשיבה יזמית</h3>
                    <p className="text-gray-600">ללמד משתתפים לזהות בעיות ולפתח פתרונות יצירתיים ומעשיים</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">בניית ביטחון עצמי</h3>
                    <p className="text-gray-600">לתת למשתתפים את החוויה של הצלחה ויצירה בתחום הטכנולוגיה</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* נושאי ליבה */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            נושאי ליבה
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-xl mb-4 text-camp-blue-600">יזמות דיגיטלית</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-camp-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    פיתוח חשיבה יזמית
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-camp-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    זיהוי הזדמנויות עסקיות
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-camp-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    מחקר שוק
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-camp-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    בניית מודל עסקי
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-camp-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    הצגת פרויקטים עסקיים
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-xl mb-4 text-camp-purple-600">פיתוח אפליקציות</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-camp-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    שימוש בכלי בינה מלאכותית
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-camp-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    עיצוב UI/UX
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-camp-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    בדיקות ושיפור מוצר
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-camp-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    שיווק דיגיטלי
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* מתודולוגיה חדשנית */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            מתודולוגיה חדשנית
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="p-0">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  הקייטנה משלבת שיטות למידה חדשניות כדי להבטיח חוויה מעשירה ומהנה:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">למידה מבוססת פרויקטים</h3>
                    <p className="text-gray-600">
                      המשתתפים עובדים על פרויקטים אמיתיים ומפתחים אפליקציות פועלות, מה שמקנה להם ניסיון מעשי ומשמעותי.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">למידה מותאמת אישית</h3>
                    <p className="text-gray-600">
                      התכנים מותאמים לרמה האישית של כל משתתף, כך שכולם יכולים להצליח ולהתקדם בקצב שלהם.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">שימוש בכלי בינה מלאכותית</h3>
                    <p className="text-gray-600">
                      המשתתפים לומדים להשתמש בכלי בינה מלאכותית מתקדמים כדי ליצור תוכן, לעצב אפליקציות ולפתור בעיות.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">עבודת צוות ושיתוף פעולה</h3>
                    <p className="text-gray-600">
                      המשתתפים עובדים בצוותים, משתפים פעולה ולומדים אחד מהשני, מה שמפתח מיומנויות חברתיות חשובות.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* פלטפורמות בינה מלאכותית */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            פלטפורמות בינה מלאכותית
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              המשתתפים ילמדו להשתמש במגוון רחב של פלטפורמות בינה מלאכותית מובילות, כולל:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-600">
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-camp-blue-500 rounded-full flex-shrink-0"></div>
                Canva בינה מלאכותית Assistant
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-camp-blue-500 rounded-full flex-shrink-0"></div>
                Rosebud בינה מלאכותית
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-camp-blue-500 rounded-full flex-shrink-0"></div>
                Bubble
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-camp-blue-500 rounded-full flex-shrink-0"></div>
                Lovable.dev
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-camp-blue-500 rounded-full flex-shrink-0"></div>
              Firebase Studio
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-camp-blue-500 rounded-full flex-shrink-0"></div>
                Replit Ghostwriter
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-camp-blue-500 rounded-full flex-shrink-0"></div>
                MagicSchool בינה מלאכותית
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-camp-blue-500 rounded-full flex-shrink-0"></div>
                Diffit
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-camp-blue-500 rounded-full flex-shrink-0"></div>
                Base44
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-camp-blue-500 rounded-full flex-shrink-0"></div>
                Websim
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-camp-blue-500 rounded-full flex-shrink-0"></div>
                Google בינה מלאכותית Studio
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* דרישות טכנולוגיות - MOVED FROM FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            דרישות טכנולוגיות
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="font-semibold text-xl mb-4">מה נדרש להשתתפות?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">ציוד חובה:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• מחשב נייד או שולחני</li>
                      <li>• חיבור אינטרנט יציב</li>
                      <li>• מצלמה ומיקרופון</li>
                      <li>• אוזניות</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">מומלץ:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• דפדפן מעודכן (Chrome/Firefox/Safari)</li>
                      <li>• טאבלט או סמארטפון לבדיקת אפליקציות</li>
                      <li>• סביבת עבודה שקטה</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  <strong>חשוב לציין:</strong> אין צורך ברכישת תוכנה. כל הכלים מבוססי ווב, 
                  וחשבונות לפלטפורמות ייווצרו בהדרכת המדריך.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* מבנה לימודי יומי מפורט */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            מבנה לימודי יומי מפורט
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="font-semibold text-xl mb-4">יום 1: הכרות עם עולם הבינה המלאכותית</h3>
                <p className="text-gray-600 mb-4">
                  הכרות עם מושגי יסוד, כלים ופלטפורמות מרכזיות. נלמד איך בינה מלאכותית יכולה לעזור לנו ליצור דברים מדהימים.
                </p>

                <h3 className="font-semibold text-xl mb-4">יום 2: פיתוח אפליקציות ללא קוד</h3>
                <p className="text-gray-600 mb-4">
                  נלמד איך לבנות אפליקציות שלמות בלי לכתוב שורת קוד אחת, באמצעות כלים פשוטים וידידותיים.
                </p>

                <h3 className="font-semibold text-xl mb-4">יום 3: עיצוב חוויית משתמש</h3>
                <p className="text-gray-600 mb-4">
                  נלמד איך לגרום לאפליקציה שלנו להיות לא רק פונקציונלית, אלא גם יפה ונעימה לשימוש.
                </p>

                <h3 className="font-semibold text-xl mb-4">יום 4: שיווק ומכירות</h3>
                <p className="text-gray-600 mb-4">
                  נלמד איך לשווק את האפליקציה שלנו לקהל הרחב ואיך לגרום לאנשים להשתמש בה.
                </p>

                <h3 className="font-semibold text-xl mb-4">יום 5: פיצ'ינג משקיעים</h3>
                <p className="text-gray-600">
                  נלמד איך להציג את האפליקציה שלנו בפני משקיעים פוטנציאליים ואיך לגייס כסף כדי להפוך אותה להצלחה גדולה.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מוכנים להצטרף לקייטנה?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            הזדמנות ייחודית לבני נוער ללמוד, ליצור ולהתפתח בעולם הטכנולוgia החדש
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

export default AboutCamp;
