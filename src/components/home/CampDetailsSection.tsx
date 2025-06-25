
import { Phone, Mail, Calendar, Clock, MapPin, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CampDetailsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 gradient-text">
            פרטי הקייטנה
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <Calendar className="w-8 h-8 text-camp-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">תאריכים</h3>
                <p className="text-gray-600">13.7.2025 – 17.7.2025</p>
                <p className="text-sm text-gray-500">ראשון – חמישי</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <Clock className="w-8 h-8 text-camp-purple-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">שעות</h3>
                <p className="text-gray-600">10:00–14:00</p>
                <p className="text-sm text-gray-500">4 שעות יומיות</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <MapPin className="w-8 h-8 text-camp-teal-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">פורמט</h3>
                <p className="text-gray-600">מפגשים בזום</p>
                <p className="text-sm text-gray-500">עם מדריך מומחה</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <CreditCard className="w-8 h-8 text-camp-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">עלות</h3>
                <p className="text-2xl font-bold text-camp-blue-600">1,400₪</p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 text-center">מפעיל הקייטנה</h3>
                <div className="text-center space-y-2">
                  <p className="font-medium text-lg">גלעד רביד</p>
                  <div className="flex justify-center items-center space-x-4 rtl:space-x-reverse">
                    <a 
                      href="tel:052-2998444" 
                      className="flex items-center space-x-2 rtl:space-x-reverse text-camp-blue-600 hover:text-camp-blue-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>052-2998444</span>
                    </a>
                    <a 
                      href="mailto:Gilad84@gmail.com" 
                      className="flex items-center space-x-2 rtl:space-x-reverse text-camp-blue-600 hover:text-camp-blue-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Gilad84@gmail.com</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampDetailsSection;
