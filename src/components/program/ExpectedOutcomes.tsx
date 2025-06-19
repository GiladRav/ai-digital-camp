
import { Card, CardContent } from '@/components/ui/card';
import { 
  Brain, 
  Smartphone, 
  Palette, 
  Presentation, 
  Code, 
  CheckCircle 
} from 'lucide-react';

const ExpectedOutcomes = () => {
  const outcomes = [
    { 
      icon: Brain, 
      title: "מפת חשיבה אישית", 
      description: "זיהוי בעיה אמיתית ותכנון פתרון מותאם" 
    },
    { 
      icon: Smartphone, 
      title: "אפליקציה פעילה", 
      description: "גרסה תפקודית עם ניווט ותכונות AI" 
    },
    { 
      icon: Palette, 
      title: "זהות ויזואלית", 
      description: "שם, לוגו וצבעים מותאמים למיזם" 
    },
    { 
      icon: Presentation, 
      title: "פיץ' אישי", 
      description: "הצגה מקצועית בסגנון סטארטאפ" 
    },
    { 
      icon: Code, 
      title: "שליטה טכנולוגית", 
      description: "יכולת עבודה עם כלי AI מתקדמים" 
    },
    { 
      icon: CheckCircle, 
      title: "ביטחון עצמי", 
      description: "זהות מקצועית וביטוי אישי" 
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          תוצרי הקייטנה - מה המשתתפים יוצרים ולומדים?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => {
            const IconComponent = outcome.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{outcome.title}</h3>
                  <p className="text-gray-600 text-sm">{outcome.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpectedOutcomes;
