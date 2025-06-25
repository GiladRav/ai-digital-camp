
import { 
  Brain, 
  Smartphone, 
  Zap,
  Presentation,
  Shield
} from 'lucide-react';

const OutcomesSection = () => {
  const outcomes = [
    { 
      icon: Brain, 
      text: "חשיבה יזמית: יכולת לזהות בעיות בסביבה ולחשוב על פתרונות דיגיטליים יצירתיים ומעשיים" 
    },
    { 
      icon: Smartphone, 
      text: "אפליקציה פועלת: פרויקט דיגיטלי מוגמר שעובד באמת ומספק פתרון לבעיה אמיתית" 
    },
    { 
      icon: Zap, 
      text: "אוריינות דיגיטלית מתקדמת: ידע מעשי בכלי בינה מלאכותית ופלטפורמות פיתוח שיסייעו בלמידה ויצירה לכל החיים" 
    },
    { 
      icon: Presentation, 
      text: "כישורי הצגה ותקשורת: יכולת להציג רעיונות בצורה משכנעת ומקצועית כמו יזמים אמיתיים" 
    },
    { 
      icon: Shield, 
      text: "ביטחון עצמי טכנולוגי: תחושת מסוגלות ועצמאות בעולם הדיגיטלי ויכולת להמשיך ללמוד לבד" 
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          תוצרי הקייטנה – מה המשתתפים יוצרים?
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {outcomes.map((outcome, index) => {
            const IconComponent = outcome.icon;
            return (
              <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse p-6 bg-white rounded-lg border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <IconComponent size={24} />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{outcome.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
