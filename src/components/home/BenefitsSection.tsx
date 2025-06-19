
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Palette, Users, Shield } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "למה הקייטנה שונה?",
      description: "שילוב יחודי של יזמות, טכנולוגיה ובינה מלאכותית",
      color: "bg-blue-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "למידה חווייתית",
      description: "יצירת אפליקציות אמיתיות עם כלי AI מתקדמים",
      color: "bg-purple-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "עבודת צוות",
      description: "פיתוח מיומנויות חברתיות ומנהיגות דיגיטלית",
      color: "bg-teal-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "אתיקה דיגיטלית",
      description: "שימוש אחראי בטכנולוגיה ובינה מלאכותית",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          למה הקייטנה שונה?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${benefit.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-xl mb-3 text-camp-blue-700">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
