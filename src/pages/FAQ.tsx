
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, Users, MessageSquare, Calendar, Heart } from 'lucide-react';
import Layout from '@/components/Layout';

const FAQ = () => {
  const technicalFAQs = [
    {
      question: "באיזה פורמט מתקיימת הקייטנה?",
      answer: "הקייטנה מתקיימת במפגשים בזום עם מדריך מומחה. 5 ימים מרוכזים בין השעות 09:00-13:00. כל יום כולל 4 שעות למידה עם הפסקות מתוכננות."
    },
    {
      question: "מה משך הקייטנה?",
      answer: "הקייטנה נמשכת 5 ימים רצופים (א'-ה') עם סך של 20 שעות למידה. כל יום כולל 4 שעות עם הפסקות. ביום החמישי יתקיים ערב הצגת פרויקטים משותף עם ההורים."
    },
    {
      question: "איזה גילאים מתאימים לקייטנה?",
      answer: "הקייטנה מיועדת לתלמידי כיתות ו'-ח' (גילאי 11-14). הקייטנה מותאמת במיוחד לגיל הזה ולא דורשת ידע טכני קודם."
    },
    {
      question: "באיזו פלטפורמה מתקיימים המפגשים?",
      answer: "המפגשים מתקיימים בזום. נשלח לכם קישור למפגש לפני תחילת הקייטנה. יש לוודא שיש לכם חיבור אינטרנט יציב, מצלמה, מיקרופון ואוזניות."
    },
    {
      question: "כמה משתתפים יש בכל קבוצה?",
      answer: "מקסימום 15 משתתפים בקבוצה כדי להבטיח ליווי אישי וקשב מקסימלי לכל משתתף. זה מאפשר למדריך לתת תשומת לב אישית לכל אחד."
    },
    {
      question: "איזה ציוד טכנולוגי נדרש?",
      answer: "נדרש מחשב נייד או מחשב שולחני עם חיבור לאינטרנט יציב, מצלמה, מיקרופון ואוזניות איכותיות. דפדפן מעודכן (Chrome/Firefox/Safari). כל התוכנות שנשתמש בהן מבוססות ווב ואין צורך לרכוש תוכנה."
    },
    {
      question: "האם יש צורך לרכוש תוכנות?",
      answer: "לא! כל הכלים שנשתמש בהם מבוססי ווב וחינמיים. נעזור ליצור חשבונות בפלטפורמות השונות במהלך הקייטנה עצמה בהדרכת המדריך."
    }
  ];

  const emotionalFAQs = [
    {
      question: "האם הקייטנה מתאימה לילדים ללא ידע טכני?",
      answer: "בהחלט! הקייטנה בנויה במיוחד עבור מתחילים מוחלטים. נשתמש בכלי no-code ובינה מלאכותית שמאפשרים ליצור אפליקציות ללא צורך בתכנות. כל מה שנדרש הוא סקרנות וחשיבה יצירתית."
    },
    {
      question: "איך אתם מתמודדים עם רמות שונות של ילדים?",
      answer: "המדריך מותאם את הפעילויות לכל משתתף בנפרד. הפרויקטים גמישים ומאפשרים לכל אחד להתקדם בקצב שלו ולפי תחומי העניין שלו. נשתמש בכלי AI שעוזרים להתאים את התוכן לרמה של כל משתתף."
    },
    {
      question: "מה קורה אם הילד שלי מתקשה לעקוב?",
      answer: "המדריך שלנו מנוסה בעבודה עם ילדים ויודע לזהות כשמישהו נתקל בקושי. יש ליווי אישי, הפסקות לשאלות, וגם אפשרות ליצור קשר עם המדריך בין המפגשים. אנחנו מתחייבים שכל ילד יגיע לסוף עם הרגשת הצלחה."
    },
    {
      question: "איך אתם שומרים על המוטיבציה לאורך השבוע?",
      answer: "השיטה שלנו מבוססת על פרויקטים מעניינים שהילדים בוחרים בעצמם. כל יום יש הישגים קטנים שנותנים הרגשת הצלחה. בנוסף, העבודה עם כלי AI מרגשת ומעוררת סקרנות טבעית."
    },
    {
      question: "מה לגבי ביטחון אישי וביישנות?",
      answer: "אנחנו יוצרים סביבה בטוחה ותומכת. ההצגות בסוף הן אופציונליות ואנחנו עוזרים לכל ילד להרגיש בנוח. המדריך מנוסה בעבודה עם ילדים ויודע איך לחזק ביטחון עצמי."
    },
    {
      question: "איך ההורים יכולים לעקוב אחרי ההתקדמות?",
      answer: "אנחנו שולחים עדכון יומי לקבוצת וואטסאפ של ההורים עם סיכום של הפעילויות וההתקדמות. בסוף השבוע כל הורה מקבל דוח אישי על הילד שלו כולל תוצרים והמלצות להמשך."
    },
    {
      question: "מה קורה אם הילד חסר במפגש?",
      answer: "אנחנו מקליטים את המפגשים (באישור ההורים) ושולחים חומר משלים. המדריך גם יכול לתת הדרכה אישית קצרה לפני המפגש הבא כדי להשלים על החסר."
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
            כאן תוכלו למצוא תשובות לשאלות הנפוצות ביותר על הקייטנה. 
            לא מצאתם מה שחיפשתם? צרו קשר ונשמח לעזור!
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

      {/* Technical FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            שאלות טכניות
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {technicalFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`technical-${index}`} className="border rounded-lg px-6">
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

      {/* Emotional/Pedagogical FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            שאלות רגשיות ופדגוגיות
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {emotionalFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`emotional-${index}`} className="border rounded-lg px-6 bg-white">
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
      <section className="py-16 bg-gray-50">
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
