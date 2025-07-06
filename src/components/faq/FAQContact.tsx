import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, Clock } from 'lucide-react';

const FAQContact = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#8B5CF6' }}>
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
  );
};

export default FAQContact;