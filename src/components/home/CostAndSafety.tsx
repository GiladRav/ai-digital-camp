
import { Card, CardContent } from '@/components/ui/card';
import { Shield, DollarSign } from 'lucide-react';

const CostAndSafety = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mr-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-2xl gradient-text">עלות</h3>
              </div>
              <p className="text-3xl font-bold text-camp-blue-600 mb-2">1,400 ש"ח</p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-2xl gradient-text">בטיחות ופשטות</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                אין צורך בהתקנת תוכנות או בתשלום דמי מנוי לפלטפורמות. 
                כל הכלים שבהם נעשה שימוש זמינים בדפדפן, כך שאין סיכונים או מורכבויות טכנולוגיות. 
                אנו דואגים לסביבת למידה בטוחה, נגישה ונוחה עבור כל ילד וילדה – 
                בדיוק מה שהורים צריכים כדי להרגיש בטוחים לרשום את ילדיהם.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CostAndSafety;
