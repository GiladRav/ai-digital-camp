import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from 'react-router-dom';
import { ExternalLink, Brain, Palette, Code, Search, Calendar, Users, Clock, Monitor } from 'lucide-react';
import Layout from '@/components/Layout';
const Platforms = () => {
  const platformCategories = [{
    title: "מנועי שפה טבעית ומחקר",
    icon: <Search className="w-6 h-6" />,
    color: "bg-emerald-500",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-300",
    bgLight: "bg-emerald-50",
    platforms: [{
      name: "ChatGPT",
      description: "מנוע השפה הטבעית המתקדם של OpenAI שמשמש כשותף יצירתי לפיתוח רעיונות עסקיים ויצירת תוכן מקצועי. המשתתפים ילמדו להנחות את הבינה המלאכותית באמצעות שאלות חכמות ובקשות מדויקות, ויוכלו לקבל עזרה ביצירת תוכן שיווקי, תיאורי מוצרים ותסריטים לאפליקציות שלהם. הכלי מפתח חשיבה אסטרטגית ומסייע להפוך רעיונות גולמיים למסרים ברורים ומשכנעים.",
      link: "https://chat.openai.com/"
    }, {
      name: "Claude",
      description: "עוזר בינה מלאכותית מתקדם המתמחה בחשיבה אנליטית עמוקה ופתרון בעיות מורכבות בצורה מתודית. המשתתפים ישתמשו ב-Claude לניתוח מחקר שוק מעמיק, פיתוח אסטרטגיות עסקיות מבוססות נתונים וקבלת משוב מפורט ובונה על הרעיונות והפרויקטים שלהם. הפלטפורמה מצטיינת בהסבר מושגים עסקיים וטכנולוגיים מורכבים בשפה פשוטה ונגישה, ומסייעת למשתתפים לפתח חשיבה ביקורתית ויכולת ניתוח.",
      link: "https://claude.ai/"
    }, {
      name: "Perplexity",
      description: "מנוע חיפוש מבוסס בינה מלאכותית המשלב מידע עדכני מהאינטרנט עם יכולות ניתוח וסינתזה מתקדמות. המשתתפים ילמדו לבצע מחקר שוק מעמיק ומקצועי, לאמת רעיונות עסקיים מול נתוני שוק אמיתיים ולאסוף מידע מהימן לתמיכה בפרויקטים שלהם. הכלי מפתח מיומנויות חקר ומחקר דיגיטלי, ומלמד כיצד להבחין בין מידע איכותי למידע לא מהימן, מיומנות חיונית בעידן המידע.",
      link: "https://www.perplexity.ai/"
    }]
  }, {
    title: "עיצוב ויצירת תוכן ויזואלי",
    icon: <Palette className="w-6 h-6" />,
    color: "bg-rose-500",
    textColor: "text-rose-700",
    borderColor: "border-rose-300",
    bgLight: "bg-rose-50",
    platforms: [{
      name: "Gamma AI",
      description: "פלטפורמה חדשנית ליצירת מצגות אינטראקטיביות ומרשימות באמצעות בינה מלאכותית מתקדמת. המשתתפים ישתמשו ב-Gamma ליצירת מצגות מכירה מקצועיות, דפי נחיתה אינטראקטיביים ומצגות הצגת הפרויקט הסופי. הכלי מאפשר יצירת תוכן ויזואלי דינמי עם אלמנטים אינטראקטיביים, אנימציות ועיצוב מותאם לקהל יעד, ללא צורך בכישורי עיצוב או תכנות מתקדמים. הפלטפורמה מפתחת מיומנויות הצגה ותקשורת ויזואלית.",
      link: "https://gamma.app/"
    }, {
      name: "Canva AI",
      description: "פלטפורמת עיצוב מתקדמת המשלבת בינה מלאכותית ליצירת תוכן ויזואלי מקצועי ומרשים. המשתתפים ילמדו ליצור לוגואים ייחודיים, פוסטרים משכנעים, אייקונים מותאמים ועיצובים מרהיבים לאפליקציות שלהם, הכל ללא צורך בניסיון קודם בעיצוב גרפי. הפלטפורמה מציעה הצעות עיצוב חכמות המבוססות על עקרונות עיצוב מקצועיים, התאמה אוטומטית לקווים מנחים של מותגים ויצירת תוכן ויזואלי עקבי. הכלי מפתח טעם עיצובי וחוש אסתטי דיגיטלי.",
      link: "https://www.canva.com/ai-assistant/"
    }, {
      name: "Rosebud AI",
      description: "פלטפורמה מתקדמת ליצירת מדיה גנרטיבית המאפשרת יצירת תמונות מותאמות אישית, סרטונים קצרים ותוכן אינטראקטיבי ייחודי. המשתתפים יוכלו ליצור תוכן ויזואלי מקורי ובלתי נשכח לאפליקציות שלהם, אנימציות משתתפות ורכיבי מולטימדיה מרשימים שיהפכו את האפליקציות שלהם לבולטות ומזכירות. הפלטפורמה מאפשרת ניסוי עם סגנונות ויזואליים שונים ויצירת זהות ויזואלית ייחודית לכל פרויקט. הכלי מעודד יצירתיות דיגיטלית וחשיבה חזותית חדשנית.",
      link: "https://rosebud.ai/"
    }]
  }, {
    title: "פלטפורמות ללא-קוד וסימולציות",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-amber-500",
    textColor: "text-amber-700",
    borderColor: "border-amber-300",
    bgLight: "bg-amber-50",
    platforms: [{
      name: "Lovable.dev",
      description: "פלטפורמת סיוע תכנות מבוססת בינה מלאכותית המציעה הצעות קוד חכמות והסברים מפורטים בזמן אמת. המשתתפים ילמדו עקרונות תכנות בסיסיים ומתקדמים תוך קבלת עזרה חכמה ומותאמת אישית מהבינה המלאכותית, ויוכלו להבין כיצד עובדות האפליקציות שהם בונים מאחורי הקלעים. הפלטפורמה מספקת הסברים פשוטים למושגי תכנות מורכבים ומסייעת במעבר הדרגתי מכלי ללא קוד לתכנות אמיתי. הכלי מפתח חשיבה לוגית ומיומנויות פתרון בעיות טכניות.",
      link: "https://lovable.dev/"
    }, {
      name: "Base44",
      description: "פלטפורמה מתקדמת ללמידה מותאמת אישית המנתחת את דפוסי הלמידה של כל משתתף ומתאימה את התוכן, הקצב והאתגרים בהתאם. המשתתפים יחוו למידה מותאמת לגילם ולרמתם, עם אתגרים הדרגתיים המבטיחים הצלחה מתמדת ושמחה בתהליך הלמידה. הפלטפורמה מספקת משוב מיידי ומפורט על ההתקדמות, ומסייעת לכל משתתף לזהות את החוזקות שלו ולפתח אותן. הכלי מפתח מודעות עצמית ללמידה ומיומנויות של למידה עצמאית ומתמדת.",
      link: "https://app.base44.com/"
    }, {
      name: "Websim",
      description: "פלטפורמה חדשנית ליצירת סימולציות אינטרנט אינטראקטיביות וחוויות למידה וירטואליות מרשימות. המשתתפים יוכלו ליצור הדמיות מציאותיות של האפליקציות שלהם, לבדוק רעיונות עסקיים בסביבה וירטואלית מבוקרת ולהציג את החזון שלהם בצורה חווייתית ומשכנעת. הפלטפורמה מאפשרת יצירת אבות טיפוס אינטראקטיביים וניסוי עם חוויות משתמש שונות לפני השקעה בפיתוח מלא. הכלי מפתח יכולת אבחון וחשיבה עיצובית.",
      link: "https://websim.com/"
    }]
  }, {
    title: "פיתוח ותכנות מתקדם",
    icon: <Code className="w-6 h-6" />,
    color: "bg-indigo-500",
    textColor: "text-indigo-700",
    borderColor: "border-indigo-300",
    bgLight: "bg-indigo-50",
    platforms: [{
      name: "Bubble",
      description: "פלטפורמת פיתוח ללא קוד המאפשרת למשתתפים לבנות אפליקציות אינטרנט מלאות ופועלות ללא צורך בידע תכנות מתקדם. המשתתפים ילמדו ליצור אפליקציות אינטראקטיביות עם ממשק משתמש מקצועי, מסדי נתונים מורכבים ופונקציונליות עסקית מתקדמת כמו מערכות תשלום, ניהול משתמשים ויצירת דוחות. הפלטפורמה מדמוקרטת את עולם פיתוח האפליקציות ומאפשרת להפוך רעיונות עסקיים למציאות דיגיטלית פועלת. הכלי מפתח חשיבה מערכתית והבנה עמוקה של תהליכים עסקיים.",
      link: "https://bubble.io/"
    }, {
      name: "Firebase Studio",
      description: "פלטפורמה מקיפה לבניית תשתית אחורית מתקדמת לאפליקציות עם שירותי מסד נתונים בזמן אמת ואינטגרציה של בינה מלאכותית. המשתתפים ילמדו כיצד לשמור ולנהל מידע באפליקציות שלהם, לנהל משתמשים בצורה מאובטחת ולהוסיף תכונות מתקדמות כמו התראות דחיפה, עדכונים אוטומטיים וסנכרון בין מכשירים. הפלטפורמה מספקת הבנה מעמיקה של איך אפליקציות אמיתיות עובדות ברקע ומה נדרש כדי להפוך רעיון לשירות דיגיטלי מדרגי. הכלי מפתח חשיבה ארכיטקטונית ומיומנויות ניהול נתונים.",
      link: "https://firebase.studio/"
    }, {
      name: "Google AI Studio",
      description: "פלטפורמה מקיפה וחדשנית ליצירת אבות טיפוס וניסויים עם מודלים מתקדמים של בינה מלאכותית. המשתתפים יוכלו להכיר מושגי למידת מכונה ועיבוד שפה טבעית בצורה מעשית וחווייתית, ליצור יישומי בינה מלאכותית מותאמים אישית ולחקור את האפשרויות הבלתי מוגבלות של בינה מלאכותית בעתיד. הפלטפורמה מספקת כלים ידידותיים לעבודה עם טכנולוגיות מתקדמות ומסייעת להבין איך בינה מלאכותית יכולה לשפר ולהאיץ כמעט כל תחום. הכלי מפתח חשיבה עתידנית ויכולת חדשנות טכנולוגית.",
      link: "https://aistudio.google.com/"
    }]
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="relative text-white py-20 px-4" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("/visuals/1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{
          color: '#FFD84C'
        }}>
            פלטפורמות בקורס
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">במהלך השבוע נכיר למעלה מ-12 פלטפורמות AI מובילות ונלמד לרתום את כוחן ליצירת אפליקציות מקצועיות</p>

          {/* Info Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Calendar className="w-5 h-5" style={{ color: '#2ea41c' }} />
              <span className="text-sm font-medium" style={{ color: '#2ea41c' }}>13.7.2025 - 17.7.2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-5 h-5" style={{ color: '#a44e1c' }} />
              <span className="text-sm font-medium" style={{ color: '#a44e1c' }}>גילאי 10-14</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Monitor className="w-5 h-5" style={{ color: '#921ca4' }} />
              <span className="text-sm font-medium" style={{ color: '#921ca4' }}>מפגשים מקוונים</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-5 h-5" style={{ color: '#1c72a4' }} />
              <span className="text-sm font-medium" style={{ color: '#1c72a4' }}>10:00-14:30</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="font-semibold text-lg px-8 py-3" style={{
            backgroundColor: '#FFD84C',
            color: '#1A1A1A',
            border: 'none'
          }} onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#EAB100';
          }} onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#FFD84C';
          }}>
              <Link to="/register">
                להרשמה
              </Link>
            </Button>
            <Button asChild className="font-semibold text-lg px-8 py-3" style={{
            backgroundColor: '#FFD84C',
            color: '#1A1A1A',
            border: 'none'
          }} onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#EAB100';
          }} onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#FFD84C';
          }}>
              <Link to="/contact">
                צרו קשר
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            מה נלמד?
          </h2>
          <div className="max-w-4xl mx-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-white">
                  <TableHead className="text-right font-bold text-lg text-gray-800">קטגוריה</TableHead>
                  <TableHead className="text-right font-bold text-lg text-gray-800">פלטפורמות</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {platformCategories.map((category, index) => <TableRow key={index} className={`${category.borderColor} border-r-4 ${category.bgLight}`}>
                    <TableCell className={`font-semibold ${category.textColor} text-lg`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center text-white shadow-md`}>
                          {category.icon}
                        </div>
                        {category.title}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-2">
                        {category.platforms.map((platform, platformIndex) => <span key={platformIndex} className={`px-4 py-2 rounded-full text-sm font-medium ${category.color} text-white shadow-sm`}>
                            {platform.name}
                          </span>)}
                      </div>
                    </TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Platform Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {platformCategories.map((category, categoryIndex) => <div key={categoryIndex} className={`${category.bgLight} rounded-3xl p-8`}>
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 ${category.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <h2 className={`text-3xl md:text-4xl font-bold ${category.textColor} mb-4`}>
                    {category.title}
                  </h2>
                  <div className={`w-24 h-1 ${category.color} mx-auto rounded-full`}></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {category.platforms.map((platform, platformIndex) => <Card key={platformIndex} className={`h-full hover:shadow-xl transition-all duration-300 ${category.borderColor} border-r-4 border-l-4 bg-white/80 backdrop-blur-sm transform hover:-translate-y-1`}>
                      <CardHeader className="text-center pb-4">
                        <CardTitle className={`text-2xl ${category.textColor} font-bold`}>
                          {platform.name}
                        </CardTitle>
                        <div className={`w-16 h-1 ${category.color} mx-auto rounded-full`}></div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-gray-700 leading-relaxed mb-6 text-right text-sm">
                          {platform.description}
                        </p>
                        <a href={platform.link} target="_blank" rel="noopener noreferrer" className="block">
                          <Button className={`w-full ${category.color} hover:opacity-90 text-white shadow-md transition-all duration-300 hover:shadow-lg`}>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            בקר באתר הפלטפורמה
                          </Button>
                        </a>
                      </CardContent>
                    </Card>)}
                </div>
              </div>)}
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
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFD84C' }}>
            מוכנים להתחיל את המסע?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            הצטרפו עכשיו לקייטנה ותכירו את כל הפלטפורמות המתקדמות האלה
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <Button className="font-semibold text-lg px-8 py-3" style={{
              backgroundColor: '#FFD84C',
              color: '#1A1A1A',
              border: 'none'
            }} onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#EAB100';
            }} onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#FFD84C';
            }}>
                להרשמה
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="font-semibold text-lg px-8 py-3" style={{
              backgroundColor: '#FFD84C',
              color: '#1A1A1A',
              border: 'none'
            }} onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#EAB100';
            }} onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#FFD84C';
            }}>
                צרו קשר
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Platforms;