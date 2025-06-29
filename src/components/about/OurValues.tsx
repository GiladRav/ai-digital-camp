
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Lightbulb, Target } from 'lucide-react';

const OurValues = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "למידה מתוך תשוקה",
      description: "אנחנו מאמינים שלמידה טובה ביותר מגיעה כשהילדים לומדים על נושאים שמעניינים אותם באמת"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "ליווי אישי",
      description: "כל ילד הוא עולם ומלואו. אנחנו מתאימים את הלמידה לכל משתתף בנפרד"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "חדשנות ויצירתיות",
      description: "אנחנו מעודדים חשיבה מחוץ לקופסה ופתרונות יצירתיים לבעיות אמיתיות"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "למידה מעשית",
      description: "התיאוריה חשובה, אבל הכי חשוב הוא שהילדים יכלו ליישם את מה שלמדו בפועל"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          הערכים שלנו
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
