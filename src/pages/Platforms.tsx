
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Link } from 'react-router-dom';
import { ExternalLink, Brain, Palette, Code, Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Layout from '@/components/Layout';

const Platforms = () => {
  const [openCards, setOpenCards] = useState<string[]>([]);

  const toggleCard = (platformName: string) => {
    setOpenCards(prev => 
      prev.includes(platformName) 
        ? prev.filter(name => name !== platformName)
        : [...prev, platformName]
    );
  };

  const platformCategories = [
    {
      title: "מנועי שפה טבעית ומחקר",
      icon: <Search className="w-6 h-6" />,
      color: "bg-blue-500",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
      platforms: [
        {
          name: "ChatGPT",
          description: "מנוע השפה הטבעית המתקדם של OpenAI שמשמש כשותף יצירתי לפיתוח רעיונות עסקיים ויצירת תוכן מקצועי. המשתתפים ילמדו להנחות את הבינה המלאכותית באמצעות שאלות חכמות ובקשות מדויקות, ויוכלו לקבל עזרה ביצירת תוכן שיווקי, תיאורי מוצרים ותסריטים לאפליקציות שלהם. הכלי מפתח חשיבה אסטרטגית ומסייע להפוך רעיונות גולמיים למסרים ברורים ומשכנעים.",
          link: "https://chat.openai.com/"
        },
        {
          name: "Claude",
          description: "עוזר בינה מלאכותית מתקדם המתמחה בחשיבה אנליטית עמוקה ופתרון בעיות מורכבות בצורה מתודית. המשתתפים ישתמשו ב-Claude לניתוח מחקר שוק מעמיק, פיתוח אסטרטגיות עסקיות מבוססות נתונים וקבלת משוב מפורט ובונה על הרעיונות והפרויקטים שלהם. הפלטפורמה מצטיינת בהסבר מושגים עסקיים וטכנולוגיים מורכבים בשפה פשוטה ונגישה, ומסייעת למשתתפים לפתח חשיבה ביקורתית ויכולת ניתוח.",
          link: "https://claude.ai/"
        },
        {
          name: "Perplexity",
          description: "מנוע חיפוש מבוסס בינה מלאכותית המשלב מידע עדכני מהאינטרנט עם יכולות ניתוח וסינתזה מתקדמות. המשתתפים ילמדו לבצע מחקר שוק מעמיק ומקצועי, לאמת רעיונות עסקיים מול נתוני שוק אמיתיים ולאסוף מידע מהימן לתמיכה בפרויקטים שלהם. הכלי מפתח מיומנויות חקר ומחקר דיגיטלי, ומלמד כיצד להבחין בין מידע איכותי למידע לא מהימן, מיומנות חיונית בעידן המידע.",
          link: "https://www.perplexity.ai/"
        }
      ]
    },
    {
      title: "עיצוב ויצירת תוכן ויזואלי",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-purple-500",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
      platforms: [
        {
          name: "Gamma AI",
          description: "פלטפורמה חדשנית ליצירת מצגות אינטראקטיביות ומרשימות באמצעות בינה מלאכותית מתקדמת. המשתתפים ישתמשו ב-Gamma ליצירת מצגות מכירה מקצועיות, דפי נחיתה אינטראקטיביים ומצגות הצגת הפרויקט הסופי. הכלי מאפשר יצירת תוכן ויזואלי דינמי עם אלמנטים אינטראקטיביים, אנימציות ועיצוב מותאם לקהל יעד, ללא צורך בכישורי עיצוב או תכנות מתקדמים. הפלטפורמה מפתחת מיומנויות הצגה ותקשורת ויזואלית.",
          link: "https://gamma.app/"
        },
        {
          name: "Canva AI",
          description: "פלטפורמת עיצוב מתקדמת המשלבת בינה מלאכותית ליצירת תוכן ויזואלי מקצועי ומרשים. המשתתפים ילמדו ליצור לוגואים ייחודיים, פוסטרים משכנעים, אייקונים מותאמים ועיצובים מרהיבים לאפליקציות שלהם, הכל ללא צורך בניסיון קודם בעיצוב גרפי. הפלטפורמה מציעה הצעות עיצוב חכמות המבוססות על עקרונות עיצוב מקצועיים, התאמה אוטומטית לקווים מנחים של מותגים ויצירת תוכן ויזואלי עקבי. הכלי מפתח טעם עיצובי וחוש אסתטי דיגיטלי.",
          link: "https://www.canva.com/ai-assistant/"
        },
        {
          name: "Rosebud AI",
          description: "פלטפורמה מתקדמת ליצירת מדיה גנרטיבית המאפשרת יצירת תמונות מותאמות אישית, סרטונים קצרים ותוכן אינטראקטיבי ייחודי. המשתתפים יוכלו ליצור תוכן ויזואלי מקורי ובלתי נשכח לאפליקציות שלהם, אנימציות משתתפות ורכיבי מולטימדיה מרשימים שיהפכו את האפליקציות שלהם לבולטות ומזכירות. הפלטפורמה מאפשרת ניסוי עם סגנונות ויזואליים שונים ויצירת זהות ויזואלית ייחודית לכל פרויקט. הכלי מעודד יצירתיות דיגיטלית וחשיבה חזותית חדשנית.",
          link: "https://rosebud.ai/"
        }
      ]
    },
    {
      title: "פלטפורמות ללא-קוד וסימולציות",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-teal-500",
      textColor: "text-teal-700",
      borderColor: "border-teal-200",
      platforms: [
        {
          name: "Lovable.dev",
          description: "פלטפורמת סיוע תכנות מבוססת בינה מלאכותית המציעה הצעות קוד חכמות והסברים מפורטים בזמן אמת. המשתתפים ילמדו עקרונות תכנות בסיסיים ומתקדמים תוך קבלת עזרה חכמה ומותאמת אישית מהבינה המלאכותית, ויוכלו להבין כיצד עובדות האפליקציות שהם בונים מאחורי הקלעים. הפלטפורמה מספקת הסברים פשוטים למושגי תכנות מורכבים ומסייעת במעבר הדרגתי מכלי ללא קוד לתכנות אמיתי. הכלי מפתח חשיבה לוגית ומיומנויות פתרון בעיות טכניות.",
          link: "https://lovable.dev/"
        },
        {
          name: "Base44",
          description: "פלטפורמה מתקדמת ללמידה מותאמת אישית המנתחת את דפוסי הלמידה של כל משתתף ומתאימה את התוכן, הקצב והאתגרים בהתאם. המשתתפים יחוו למידה מותאמת לגילם ולרמתם, עם אתגרים הדרגתיים המבטיחים הצלחה מתמדת ושמחה בתהליך הלמידה. הפלטפורמה מספקת משוב מיידי ומפורט על ההתקדמות, ומסייעת לכל משתתף לזהות את החוזקות שלו ולפתח אותן. הכלי מפתח מודעות עצמית ללמידה ומיומנויות של למידה עצמאית ומתמדת.",
          link: "https://app.base44.com/"
        },
        {
          name: "Websim",
          description: "פלטפורמה חדשנית ליצירת סימולציות אינטרנט אינטראקטיביות וחוויות למידה וירטואליות מרשימות. המשתתפים יוכלו ליצור הדמיות מציאותיות של האפליקציות שלהם, לבדוק רעיונות עסקיים בסביבה וירטואלית מבוקרת ולהציג את החזון שלהם בצורה חווייתית ומשכנעת. הפלטפורמה מאפשרת יצירת אבות טיפוס אינטראקטיביים וניסוי עם חוויות משתמש שונות לפני השקעה בפיתוח מלא. הכלי מפתח יכולת אבחון וחשיבה עיצובית.",
          link: "https://websim.com/"
        }
      ]
    },
    {
      title: "פיתוח ותכנות מתקדם",
      icon: <Code className="w-6 h-6" />,
      color: "bg-blue-600",
      textColor: "text-blue-800",
      borderColor: "border-blue-300",
      platforms: [
        {
          name: "Bubble",
          description: "פלטפורמת פיתוח ללא קוד המאפשרת למשתתפים לבנות אפליקציות אינטרנט מלאות ופועלות ללא צורך בידע תכנות מתקדם. המשתתפים ילמדו ליצור אפליקציות אינטראקטיביות עם ממשק משתמש מקצועי, מסדי נתונים מורכבים ופונקציונליות עסקית מתקדמת כמו מערכות תשלום, ניהול משתמשים ויצירת דוחות. הפלטפורמה מדמוקרטת את עולם פיתוח האפליקציות ומאפשרת להפוך רעיונות עסקיים למציאות דיגיטלית פועלת. הכלי מפתח חשיבה מערכתית והבנה עמוקה של תהליכים עסקיים.",
          link: "https://bubble.io/"
        },
        {
          name: "Firebase Studio",
          description: "פלטפורמה מקיפה לבניית תשתית אחורית מתקדמת לאפליקציות עם שירותי מסד נתונים בזמן אמת ואינטגרציה של בינה מלאכותית. המשתתפים ילמדו כיצד לשמור ולנהל מידע באפליקציות שלהם, לנהל משתמשים בצורה מאובטחת ולהוסיף תכונות מתקדמות כמו התראות דחיפה, עדכונים אוטומטיים וסנכרון בין מכשירים. הפלטפורמה מספקת הבנה מעמיקה של איך אפליקציות אמיתיות עובדות ברקע ומה נדרש כדי להפוך רעיון לשירות דיגיטלי מדרגי. הכלי מפתח חשיבה ארכיטקטונית ומיומנויות ניהול נתונים.",
          link: "https://firebase.studio/"
        },
        {
          name: "Google AI Studio",
          description: "פלטפורמה מקיפה וחדשנית ליצירת אבות טיפוס וניסויים עם מודלים מתקדמים של בינה מלאכותית. המשתתפים יוכלו להכיר מושגי למידת מכונה ועיבוד שפה טבעית בצורה מעשית וחווייתית, ליצור יישומי בינה מלאכותית מותאמים אישית ולחקור את האפשרויות הבלתי מוגבלות של בינה מלאכותית בעתיד. הפלטפורמה מספקת כלים ידידותיים לעבודה עם טכנולוגיות מתקדמות ומסייעת להבין איך בינה מלאכותית יכולה לשפר ולהאיץ כמעט כל תחום. הכלי מפתח חשיבה עתידנית ויכולת חדשנות טכנולוגית.",
          link: "https://aistudio.google.com/"
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            פלטפורמות בקורס
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            במהלך הקייטנה נכיר למעלה מ-12 פלטפורמות AI מובילות ונלמד לרתום את כוחן ליצירת אפליקציות מקצועיות
          </p>
        </div>
      </section>

      {/* Summary Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            סקירת פלטפורמות לפי קטגוריות
          </h2>
          <div className="max-w-4xl mx-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right font-bold text-lg">קטגוריה</TableHead>
                  <TableHead className="text-right font-bold text-lg">פלטפורמות</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {platformCategories.map((category, index) => (
                  <TableRow key={index} className={`${category.borderColor} border-r-4`}>
                    <TableCell className={`font-semibold ${category.textColor} text-lg`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 ${category.color} rounded-full flex items-center justify-center text-white`}>
                          {category.icon}
                        </div>
                        {category.title}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-2">
                        {category.platforms.map((platform, platformIndex) => (
                          <span 
                            key={platformIndex}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${category.color} text-white`}
                          >
                            {platform.name}
                          </span>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Platform Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {platformCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                    {category.icon}
                  </div>
                  <h2 className={`text-3xl md:text-4xl font-bold ${category.textColor}`}>
                    {category.title}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {category.platforms.map((platform, platformIndex) => (
                    <Collapsible key={platformIndex}>
                      <Card className={`h-full hover:shadow-lg transition-shadow ${category.borderColor} border-r-4`}>
                        <CollapsibleTrigger 
                          className="w-full"
                          onClick={() => toggleCard(`${categoryIndex}-${platformIndex}`)}
                        >
                          <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                              <span className={`text-xl ${category.textColor} text-right`}>{platform.name}</span>
                              <div className="flex items-center gap-2">
                                <a 
                                  href={platform.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-gray-400 hover:text-camp-blue-600 transition-colors"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <ExternalLink className="w-5 h-5" />
                                </a>
                                <ChevronDown 
                                  className={`w-5 h-5 transition-transform ${
                                    openCards.includes(`${categoryIndex}-${platformIndex}`) ? 'rotate-180' : ''
                                  }`} 
                                />
                              </div>
                            </CardTitle>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent>
                            <p className="text-gray-600 leading-relaxed mb-4 text-right">
                              {platform.description}
                            </p>
                            <a 
                              href={platform.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <Button variant="outline" size="sm" className="w-full">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                לאתר הפלטפורמה
                              </Button>
                            </a>
                          </CardContent>
                        </CollapsibleContent>
                      </Card>
                    </Collapsible>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מוכנים להתחיל את המסע?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            הצטרפו עכשיו לקייטנה ותכירו את כל הפלטפורמות המתקדמות האלה
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-camp-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                הרשמה לקייטנה - 1,600₪
              </Button>
            </Link>
            <Link to="/program">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
                חזרה לתכנית
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Platforms;
