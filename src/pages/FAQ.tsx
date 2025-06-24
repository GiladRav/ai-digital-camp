
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, Users, Brain, Target, Code, Lightbulb, Star, Heart, MessageSquare, Calendar } from 'lucide-react';
import Layout from '@/components/Layout';

const FAQ = () => {
  const generalFAQs = [
    {
      question: "מהי קייטנת יזמות דיגיטלית ופיתוח אפליקציות בינה מלאכותית?",
      answer: "זוהי תכנית חדשנית המשלבת יזמות דיגיטלית ופיתוח אפליקציות בדרך מעשית וחווייתית, תוך שימוש בכלי בינה מלאכותית מתקדמים. המשתתפים ילמדו להכיר הזדמנויות עסקיות, לפתח רעיונות יצירתיים ולהפוך אותם לאפליקציות פועלות."
    },
    {
      question: "למי מיועדת הקייטנה?",
      answer: "הקייטנה מיועדת לתלמידי כיתות ו'-ח' (גילאי 11–14)."
    },
    {
      question: "האם נדרש רקע טכני קודם?",
      answer: "לא נדרש כל רקע טכני או עסקי קודם. התכנית מעוצבת כך שתתאים גם לתלמידים ללא ניסיון בתכנות או בפיתוח."
    },
    {
      question: "אילו כישורים נדרשים מהמשתתפים?",
      answer: "נדרשת סקרנות טכנולוגית, חשיבה יצירתית, עניין ביזמות ופתרון בעיות. התכנית גם מעודדת חשיבה יצירתית, פתרון בעיות, עבודת צוות ומנהיגות."
    },
    {
      question: "מה העלות למשתתף?",
      answer: "עלות הקייטנה למשתתף היא 1,800 ₪."
    }
  ];

  const technicalFAQs = [
    {
      question: "באיזה פורמט מתקיימת הקייטנה?",
      answer: "הקייטנה מתקיימת כמפגשים בזום עם מדריך מומחה."
    },
    {
      question: "מהו משך הקייטנה?",
      answer: "הקייטנה נמשכת 5 ימים מרוכזים."
    },
    {
      question: "מהן שעות הפעילות היומיות?",
      answer: "הפעילות מתקיימת בין השעות 10:00–14:00, ואורך מפגש יומי הוא 4 שעות (כולל הפסקות)."
    },
    {
      question: "כמה שעות למידה פעילה יש בקייטנה?",
      answer: "סך הכל יש 20 שעות הוראה."
    },
    {
      question: "מה גודל הקבוצה בקייטנה?",
      answer: "גודל הקבוצה נע בין 12 ל-15 משתתפים."
    },
    {
      question: "מהן הדרישות הטכנולוגיות להשתתפות?",
      answer: "נדרש מחשב נייד או שולחני עם חיבור אינטרנט יציב, מצלמה, מיקרופון ואוזניות. מומלץ להשתמש בדפדפן מעודכן (Chrome/Firefox/Safari). טאבלט או סמארטפון הם אופציונליים לבדיקת אפליקציות מובייל."
    },
    {
      question: "האם צריך לרכוש תוכנות או ציוד מיוחד?",
      answer: "אין צורך ברכישת תוכנה. כל הכלים מבוססי ווב, וחשבונות לפלטפורמות ייווצרו בהדרכת המדריך."
    }
  ];

  const programFAQs = [
    {
      question: "אילו סוגי אפליקציות יבנו המשתתפים?",
      answer: "המשתתפים יבנו 1-2 אפליקציות פועלות, שיכולות להיות אפליקציות מובייל או ווב."
    },
    {
      question: "מה המשמעות של \"פיתוח באמצעות כלים ללא קוד\" (No-Code)?",
      answer: "הפיתוח מתבצע באמצעות כלים המאפשרים בניית אפליקציות ורכיבים דיגיטליים ללא צורך בכתיבת קוד. זה מאפשר לילדים לפתח אפליקציות שלמות במהירות ובקלות, גם ללא ידע בתכנות."
    },
    {
      question: "כיצד משולבת בינה מלאכותית (AI) בתכנית?",
      answer: "התכנית מאפשרת למשתתפים לרתום את כוחה של בינה מלאכותית ליצירת תוכן ועיצוב אפליקציות, אפיון ומחקר, כתיבת תוכן ופיתוח טכנולוגי. הם יכירו עקרונות יזמות דיגיטלית מודרנית מבוססת AI, ילמדו על מחקר שוק אוטומטי, בניית מודל עסקי חכם, ועיצוב חוויית משתמש עם AI."
    },
    {
      question: "אילו כלים ופלטפורמות מרכזיות ישמשו בקייטנה?",
      answer: "המשתתפים יתמקדו בפלטפורמות כמו Canva AI Assistant, Rosebud AI, Bubble, Lovable.dev, Firebase Studio, Replit Ghostwriter, MagicSchool AI, Diffit, Base44, Websim, ו-Google AI Studio."
    },
    {
      question: "מהם יעדי הלמידה העיקריים של הקייטנה?",
      answer: "יזמות דיגיטלית: פיתוח חשיבה יזמית, זיהוי הזדמנויות עסקיות, למידת עקרונות מחקר שוק, בניית מודל עסקי והצגת פרויקטים עסקיים. פיתוח אפליקציות: שימוש בכלי AI ליצירת אפליקציות פועלות, הבנת עקרונות עיצוב UI/UX, ולמידת תהליכי בדיקה ושיפור מוצר. מיומנויות דיגיטליות: היכרות עם למעלה מ-10 פלטפורמות AI, פיתוח כישורי פתרון בעיות, חשיבה אלגוריתמית, עבודת צוות ומנהיגות."
    },
    {
      question: "מהי גישת ההדרכה בקייטנה?",
      answer: "הגישה היא למידה מבוססת פרויקטים, שבה כל מפגש כולל פיתוח מעשי של אפליקציה או רכיב עסקי. הפרויקטים מותאמים לתחומי עניין ויכולות אישיות, תוך עידוד ניסוי, טעייה ולמידה מכשלונות בסביבה בטוחה."
    }
  ];

  const outcomesFAQs = [
    {
      question: "מהם התוצרים הצפויים בסיום הקייטנה?",
      answer: "המשתתפים יסיימו עם 1-2 אפליקציות פועלות, מודל עסקי בסיסי, אסטרטגיית שיווק דיגיטלי, מצגת מכירה מקצועית (Pitch Deck), ותיק עבודות דיגיטלי המציג את כל הפרויקטים."
    },
    {
      question: "מהו \"ערב הפיצ'ינג\" המוזכר?",
      answer: "הקייטנה מסתיימת בערב פיצ'ינג מרגש בסגנון \"הכרישים\", בו המשתתפים יציגו את הפרויקטים שלהם בפני קהל, כולל הוריהם. זוהי חוויה של התנסות ב-pitching ובאמנות המכירה."
    },
    {
      question: "כיצד מתבצע מעקב אחר התקדמות המשתתפים?",
      answer: "התהליך כולל משוב מתמיד (ביקורות קוד ועיצוב, הנחיה אישית, דיונים קבוצתיים), מצגת סיום של הפרויקט הגמור, ורפלקציה אישית באמצעות יומן למידה יומי."
    },
    {
      question: "מה תפקידו של המדריך בקייטנה?",
      answer: "המדריך הוא מומחה שתפקידו להנחות טכנית, ללוות בתהליך החשיבה היזמית, לתת הכוונה עסקית ומשוב, ולעודד יצירתיות, חדשנות ומנהיגות, תוך יצירת סביבה של למידת עמיתים."
    },
    {
      question: "מהם יעדי הלמידה לטווח הארוך?",
      answer: "הקייטנה מכוונת לפתח מנטליות של יזמות מבוססת AI, להקנות מיומנויות טכנולוגיות (פיתוח, עיצוב ומחקר משתמשים עם סיוע AI), לפתח אוריינות בינה מלאכותית (הבנה, שימוש והערכה ביקורתית של כלי AI), לצבור ניסיון במנהיגות דיגיטלית ועבודת צוות, ולהבין יסודות עסקיים בעידן ה-AI."
    }
  ];

  const specialFAQs = [
    {
      question: "כיצד מתבצעת התקשורת עם ההורים?",
      answer: "תתקיים מפגש הכנה לפני תחילת הקייטנה. יהיו עדכונים יומיים בקבוצת וואטסאפ, וכן מצגת סיום משפחתית ביום החמישי. בסיום, יוגש דוח סיכום אישי לכל משתתף."
    },
    {
      question: "האם הקייטנה מתאימה לילדים עם קשיי למידה או צרכים מיוחדים?",
      answer: "התכנית מתמקדת בלומד וכי הפרויקטים מותאמים לתחומי עניין ויכולות אישיות, וכן מתבצעת התאמה אישית של תוכן לכישורים ותחומי עניין ייחודיים. אנו ממליצים לפנות אלינו באופן פרטני על מנת לבדוק התאמה ולדון בצרכים ספציפיים."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            שאלות נפוצות
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            מצאו כאן תשובות מקיפות לכל השאלות החשובות על הקייטנה. 
            המידע מאורגן בקטגוריות ברורות לנוחותכם.
          </p>
        </div>
      </section>

      {/* Parent Communication Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-2 rtl:space-x-reverse mb-4">
              <Heart className="w-8 h-8 text-red-500" />
              <Users className="w-8 h-8 text-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              תקשורת עם הורים ומעורבות משפחתית
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              אנחנו מאמינים שהצלחת הילדים מתחילה במעורבות ההורים. 
              להלן התכנית המקיפה שלנו לשיתוף וליווי ההורים לאורך כל התהליך.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-camp-blue-600">תכנית תקשורת מקיפה</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• מפגש הכנה משפחתי לפני הקייטנה</li>
                  <li>• עדכונים יומיים במהלך הקורס</li>
                  <li>• אפליקציה מותאמת להורים</li>
                  <li>• מעקב והכוונה ארוכת טווח</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
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

      {/* General FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-2 rtl:space-x-reverse mb-4">
              <Star className="w-8 h-8 text-yellow-500" />
              <Lightbulb className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              מידע כללי על הקייטנה
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {generalFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`general-${index}`} className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-right hover:no-underline">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Technical FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-2 rtl:space-x-reverse mb-4">
              <Brain className="w-8 h-8 text-purple-600" />
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              שאלות טכניות ולוגיסטיות
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {technicalFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`technical-${index}`} className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-right hover:no-underline">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Program Content FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-2 rtl:space-x-reverse mb-4">
              <Target className="w-8 h-8 text-green-600" />
              <Brain className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              תוכן הקייטנה ושיטות לימוד
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {programFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`program-${index}`} className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-right hover:no-underline">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Outcomes FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-2 rtl:space-x-reverse mb-4">
              <Star className="w-8 h-8 text-yellow-500" />
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              תוצאות ומעקב הישגים
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {outcomesFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`outcomes-${index}`} className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-right hover:no-underline">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Special Needs FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-2 rtl:space-x-reverse mb-4">
              <Heart className="w-8 h-8 text-red-500" />
              <Users className="w-8 h-8 text-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              נושאים מיוחדים
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {specialFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`special-${index}`} className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-right hover:no-underline">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            עדיין יש שאלות?
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">טלפון</h3>
                <p className="text-gray-600 mb-3">050-123-4567</p>
                <p className="text-sm text-gray-500">זמינים א'-ה' 9:00-17:00</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">אימייל</h3>
                <p className="text-gray-600 mb-3">info@aicamp.co.il</p>
                <p className="text-sm text-gray-500">מענה תוך 24 שעות</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">שעות פעילות</h3>
                <p className="text-gray-600 mb-3">א'-ה' 9:00-17:00</p>
                <p className="text-sm text-gray-500">מענה מהיר בווטסאפ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מוכנים להתחיל?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            קיבלתם את כל התשובות? הגיע הזמן להירשם לקייטנה המרגשת ביותר של הקיץ!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-camp-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                הרשמה לקייטנה - 1,800₪
              </Button>
            </Link>
            <Link to="/program">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
                עוד על הקייטנה
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
