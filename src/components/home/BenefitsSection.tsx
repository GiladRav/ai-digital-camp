
import { Card, CardContent } from '@/components/ui/card';
import { 
  Brain, 
  Smartphone, 
  Zap,
  Heart
} from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "חשיבה יזמית מערכתית",
      description: "פיתוח יכולות פתרון בעיות מורכבות וחשיבה מערכתית"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "אוריינות AI מתקדמת",
      description: "שימוש יצירתי ב-10+ פלטפורמות בינה מלאכותית מובילות"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "פיתוח אפליקציות פועלות",
      description: "בניית אפליקציות אמיתיות עם כלי No-Code/Low-Code"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "מיומנויות חברתיות-רגשיות",
      description: "בניית ביטחון עצמי, מנהיגות דיגיטלית ועבודת צוות"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          מטרות התכנית
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
