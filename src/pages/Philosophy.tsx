
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  Lightbulb, 
  Target
} from 'lucide-react';

const Philosophy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            הפילוסופיה שלנו
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            הגישה החינוכית שלנו מבוססת על ערכים ברורים ומתודולוגיה מוכחת
          </p>
        </div>
      </section>

      {/* גישה חינוכית */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            גישה חינוכית
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-xl mb-4 text-camp-blue-600">למידה מבוססת פרויקטים</h3>
                    <p className="text-gray-600 mb-4">
                      כל מה שלומדים במהלך הקייטנה מיושם מיד בפרויקטים אמיתיים. 
                      המשתתפים לא רק לומדים תיאוריה, אלא בונים דברים שפועלים בפועל.
                    </p>
                    
                    <h3 className="font-semibold text-xl mb-4 text-camp-purple-600">התאמה אישית</h3>
                    <p className="text-gray-600">
                      כל משתתף מגיע עם תחומי עניין ויכולות שונות. אנחנו מתאימים את הפרויקטים 
                      והקצב ללומד הספציפי, כך שכל אחד מקבל את החוויה המתאימה לו.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl mb-4 text-camp-teal-600">למידה מכשלונות</h3>
                    <p className="text-gray-600 mb-4">
                      אנחנו מעודדים ניסוי וטעייה. טעויות הן חלק מתהליך הלמידה, 
                      ואנחנו עוזרים למשתתפים להפוך כשלונות להזדמנויות למידה.
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

      {/* תפקיד המדריך - MOVED FROM ABOUT CAMP */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            תפקיד המדריך
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="p-0">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  המדריך הוא מומחה שתפקידו להנחות טכנית, ללוות בתהליך החשיבה היזמית, 
                  לתת הכוונה עסקית ומשוב, ולעודד יצירתיות, חדשנות ומנהיגות, 
                  תוך יצירת סביבה של למידת עמיתים.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">תפקידי המדריך:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• הנחיה טכנית מקצועית</li>
                      <li>• ליווי בתהליך חשיבה יזמית</li>
                      <li>• מתן הכוונה עסקית</li>
                      <li>• עידוד יצירתיות וחדשנות</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">יצירת סביבה תומכת:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• למידת עמיתים</li>
                      <li>• פיתוח מנהיגות</li>
                      <li>• משוב בונה ומתמיד</li>
                      <li>• עידוד וחיזוק ביטחון עצמי</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* משימה */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
              משימה
            </h2>
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-0">
                <p className="text-lg leading-relaxed text-gray-700">
                  אנחנו מאמינים שכל משתתף יכול להיות יזם טכנולוגי. בעידן הבינה המלאכותית, 
                  הכלים שמאפשרים ליצור טכנולוגיה הפכו נגישים יותר מאי פעם. 
                  הקייטנה שלנו נועדה לחבר בין הסקרנות הטבעית של בני נוער לבין הכוח הבלתי מוגבל של בינה מלאכותית, 
                  ולאפשר להם לממש רעיונות ולפתח פתרונות אמיתיים לבעיות שהם רואים בעולם.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ערכים מובילים */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            ערכים מובילים
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-3">למידה מתוך תשוקה</h3>
                <p className="text-gray-600 text-sm leading-relaxed">אנחנו מאמינים שלמידה טובה ביותר מגיעה כשהמשתתפים לומדים על נושאים שמעניינים אותם באמת</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-3">ליווי אישי</h3>
                <p className="text-gray-600 text-sm leading-relaxed">כל משתתף הוא עולם ומלואו. אנחנו מתאימים את הלמידה לכל משתתף בנפרד</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-3">חדשנות ויצירתיות</h3>
                <p className="text-gray-600 text-sm leading-relaxed">אנחנו מעודדים חשיבה מחוץ לקופסה ופתרונות יצירתיים לבעיות אמיתיות</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-3">למידה מעשית</h3>
                <p className="text-gray-600 text-sm leading-relaxed">התיאוריה חשובה, אבל הכי חשוב הוא שהמשתתפים יוכלו ליישם את מה שלמדו בפועל</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* הצורך במחנה קיץ דיגיטלי */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              הצורך במחנה קיץ דיגיטלי
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
                      משתתפים צריכים להיות יוצרים, לא רק צרכנים
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
                      למידה מעשית של כלי בינה מלאכותית מתקדמים
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

      {/* הערכה ומעקב - MOVED FROM CURRENT LOCATION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            הערכה ומעקב
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-xl mb-4">משוב מתמיד</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• ביקורות קוד ועיצוב</li>
                      <li>• הנחיה אישית</li>
                      <li>• דיונים קבוצתיים</li>
                      <li>• רפלקציה יומית</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-4">מעקב התקדמות</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• יומן למידה אישי</li>
                      <li>• מצגת פרויקט סיום</li>
                      <li>• הערכה עצמית</li>
                      <li>• משוב עמיתים</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* מדדי הצלחה - MOVED FROM CURRENT LOCATION */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            מדדי הצלחה
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3">תוצרים טכנולוגיים</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• אפליקציות פועלות</li>
                  <li>• מודל עסקי</li>
                  <li>• מצגת מכירה</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3">מיומנויות אישיות</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• ביטחון עצמי</li>
                  <li>• יכולת הצגה</li>
                  <li>• חשיבה יצירתית</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-3">מעורבות משפחתית</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• שביעות רצון הורים</li>
                  <li>• המשך פעילות</li>
                  <li>• התפתחות לטווח ארוך</li>
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
            בואו להיות חלק מהחזון
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            הצטרפו אלינו במסע מרגש להכנת הדור הבא של יזמי הטכנולוגיה הישראלית
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

export default Philosophy;
