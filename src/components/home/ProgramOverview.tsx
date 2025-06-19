
import { Card, CardContent } from '@/components/ui/card';
import { Users, Calendar, Clock, Target } from 'lucide-react';

const ProgramOverview = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "5 ימים מרוכזים",
      description: "מחנה קיץ דיגיטלי אינטנסיבי"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "20 שעות למידה",
      description: "4 שעות יומיות כולל הפסקות"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "עד 15 משתתפים",
      description: "ליווי אישי וקשב מקסימלי"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "גילאי 11-14",
      description: "מותאם לתלמידי כיתות ו'-ח'"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
          סקירה כללית על הקייטנה
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          קייטנת "יזמות דיגיטלית ופיתוח אפליקציות AI" היא קייטנה חינוכית חדשנית לבני נוער, 
          המשלבת יזמות, טכנולוגיה ובינה מלאכותית בגישה פדגוגית מתקדמת.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-camp-blue-700">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
