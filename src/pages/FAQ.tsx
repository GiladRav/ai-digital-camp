import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, Calendar, Users, Monitor } from 'lucide-react';
import Layout from '@/components/Layout';

const FAQ = () => {
  const technicalFAQs = [
    {
      question: "באיזה פורמט מתקיימת הקייטנה?",
      answer: "הקייטנה מתקיימת במפגשים בזום עם מדריך מומחה. 5 ימים מרוכזים בין השעות 10:00-14:00. כל יום כולל 4 שעות למידה עם הפסקות מתוכננות."
    },
    {
      question: "מה משך הקייטנה?",
      answer: "הקייטנה נמשכת 5 ימים רצופים (13.7.2025 – 17.7.2025, ימים ראשון-חמישי) עם סך של 20 שעות למידה. כל יום כולל 4 שעות עם הפסקות. ביום החמישי יתקיים ערב הצגת פרויקטים משותף עם ההורים."
    },
    {
      question: "איזה גילאים מתאימים לקייטנה?",
      answer: "הקייטנה מיועדת לתלמידי כיתות ו'-ח' (גילאי 11-14). התכנית מותאמת במיוחד לגיל הזה ולא דורשת ידע טכני קודם."
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
      <section className="relative text-white py-20 px-4" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("/visuals/1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#FFD84C' }}>
            שאלות נפוצות
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            כאן תוכלו למצוא תשובות לשאלות הנפוצות ביותר על הקייטנה. 
            לא מצאתם מה שחיפשתם? בקרו בשאלות נפוצות ונשמח לעזור!
          </p>

          {/* Info Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Calendar className="w-5 h-5" style={{ color: '#2ea41c' }} />
              <span className="text-sm font-medium" style={{ color: '#2ea41c' }}>13.7.2025 - 17.7.2025</span>
            </div>
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-5 h-5" style={{ color: '#a44e1c' }} />
              <span className="text-sm font-medium" style={{ color: '#a44e1c' }}>גילאי 10-14</span>
            </div>
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Monitor className="w-5 h-5" style={{ color: '#921ca4' }} />
              <span className="text-sm font-medium" style={{ color: '#921ca4' }}>מפגשים מקוונים</span>
            </div>
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-5 h-5" style={{ color: '#1c72a4' }} />
              <span className="text-sm font-medium" style={{ color: '#1c72a4' }}>10:00-14:30</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
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
              <Link to="/register">
                להרשמה
              </Link>
            </Button>
            <Button 
              asChild 
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
              <Link to="/faq">
                שאלות נפוצות
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technical FAQs */}
      <section className="py-16">
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
      <section className="py-16 bg-gray-50">
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

      {/* Contact Section - Updated with operator details */}
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
                <a 
                  href="tel:052-2998444" 
                  className="text-camp-blue-600 hover:text-camp-blue-700 transition-colors font-medium"
                >
                  052-2998444
                </a>
                <p className="text-sm text-gray-500 mt-2">זמינים א'-ה' 9:00-17:00</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">אימייל</h3>
                <a 
                  href="mailto:Gilad84@gmail.com" 
                  className="text-camp-blue-600 hover:text-camp-blue-700 transition-colors font-medium"
                >
                  Gilad84@gmail.com
                </a>
                <p className="text-sm text-gray-500 mt-2">מענה תוך 24 שעות</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">מפעיל הקייטנה</h3>
                <p className="text-gray-600 mb-1 font-medium">גלעד רביד</p>
                <p className="text-sm text-gray-500">מענה מהיר בווטסאפ</p>
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
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFD84C' }}>
            מוכנים להתחיל?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            קיבלתם את כל התשובות? הגיע הזמן להירשם לקייטנה המרגשת ביותר של הקיץ!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
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
              <Link to="/register">
                להרשמה
              </Link>
            </Button>
            <Button 
              asChild 
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
              <Link to="/faq">
                שאלות נפוצות
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
