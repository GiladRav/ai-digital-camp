
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ParentCommunication = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          תקשורת עם הורים
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-lg mb-3 text-camp-blue-600">לפני</h3>
              <p className="text-gray-600">שיחת הכנה אישית</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-lg mb-3 text-camp-purple-600">במהלך</h3>
              <p className="text-gray-600">מייל יומי + זמינות שוטפת</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-lg mb-3 text-camp-teal-600">אחרי</h3>
              <p className="text-gray-600">ערב סיכום והצגת מיזמים</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Link to="/faq">
            <Button variant="outline" size="lg">
              שאלות ותשובות
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ParentCommunication;
