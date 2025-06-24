import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import ProgramOverview from '@/components/home/ProgramOverview';
import BenefitsSection from '@/components/home/BenefitsSection';
import TargetAudience from '@/components/home/TargetAudience';
import OutcomesSection from '@/components/home/OutcomesSection';
import DailySchedule from '@/components/home/DailySchedule';
import TeachingMethodology from '@/components/home/TeachingMethodology';
import FAQSection from '@/components/home/FAQSection';
import FinalCTA from '@/components/home/FinalCTA';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      {/* הנאה עם משמעות */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            הנאה עם משמעות
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">המציאות של 2025</h3>
            <p className="mb-4">[תוכן יתווסף בהמשך]</p>
            
            <h3 className="text-2xl font-semibold mb-4">מחנה קיץ דיגיטלי</h3>
            <p className="mb-4">[תוכן יתווסף בהמשך]</p>
            
            <h3 className="text-2xl font-semibold mb-4">איך זה עובד?</h3>
            <p className="mb-4">[תוכן יתווסף בהמשך]</p>
          </div>
        </div>
      </section>

      <ProgramOverview />
      <BenefitsSection />
      <TargetAudience />
      
      {/* קייטנה עם אפליקציה */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            קייטנה עם אפליקציה
          </h2>
          <OutcomesSection />
        </div>
      </section>

      {/* מידע נוסף */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            מידע נוסף
          </h2>
          <DailySchedule />
          <TeachingMethodology />
          <FAQSection />
        </div>
      </section>

      {/* מטרות כלליות */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            מטרות כלליות
          </h2>
          <OutcomesSection />
        </div>
      </section>

      {/* מחנה קיץ דיגיטלי ייחודי */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            מחנה קיץ דיגיטלי ייחודי
          </h2>
          <BenefitsSection />
        </div>
      </section>

      {/* תכנים יומיים */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            תכנים יומיים
          </h2>
          <p className="text-center text-gray-600">[טבלה של תכנים יומיים תתווסף בהמשך]</p>
        </div>
      </section>

      {/* גישת הדרכה */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            גישת הדרכה
          </h2>
          <p className="text-center text-gray-600">[תוכן יתווסף בהמשך]</p>
        </div>
      </section>

      {/* תקשורת עם הורים ומעורבות משפחתית - MOVED FROM FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-8 h-8 text-red-500">❤️</div>
              <div className="w-8 h-8 text-blue-500">👥</div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              תקשורת עם הורים ומעורבות משפחתית
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              אנחנו מאמינים שהצלחת המשתתפים מתחילה במעורבות ההורים. 
              להלן התכנית המקיפה שלנו לשיתוף וליווי ההורים לאורך כל התהליך.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 text-blue-600">💬</div>
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
                  <div className="w-6 h-6 text-purple-600">📅</div>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-camp-purple-600">מעורבות הורים</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• הרצאות ערב בנושאים רלוונטיים</li>
                  <li>• יום הורים עם השתתפות בסדנאות</li>
                  <li>• הזדמנויות מנטורינג בתחומי מומחיות</li>
                  <li>• פרויקטים משותפים הורים-בני נוער</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* עלות ותמיכה */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            עלות ותמיכה
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">עלות הקייטנה: 1,600₪</h3>
              <p className="text-lg text-gray-700 mb-6">
                הקייטנה כוללת את כל החומרים, הכלים והליווי הדרוש למשך 5 ימים מלאים
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
                <div>
                  <h4 className="font-semibold mb-2">מה כלול במחיר:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 20 שעות הדרכה מקצועית</li>
                    <li>• גישה לכל פלטפורמות הבינה המלאכותית</li>
                    <li>• ליווי אישי לכל משתתף</li>
                    <li>• חומרי לימוד דיגיטליים</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">תמיכה וליווי:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• תמיכה טכנית מלאה</li>
                    <li>• ליווי הורים</li>
                    <li>• עדכונים יומיים</li>
                    <li>• תעודת השתתפות</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* שאלות נפוצות קצרות */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            שאלות נפוצות קצרות
          </h2>
          <p className="text-center text-gray-600">[4 שאלות נפוצות קצרות יתווספו בהמשך]</p>
        </div>
      </section>

      <FinalCTA />
    </Layout>
  );
};

export default Index;
