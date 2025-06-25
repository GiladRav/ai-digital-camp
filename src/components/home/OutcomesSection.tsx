
import { 
  Brain, 
  Smartphone, 
  Code,
  Presentation,
  Target,
  CheckCircle
} from 'lucide-react';

const OutcomesSection = () => {
  const outcomes = [
    { icon: Brain, text: "מפת חשיבה אישית לרעיון דיגיטלי" },
    { icon: Smartphone, text: "אפליקציה פעילה ותפקודית" },
    { icon: Code, text: "שליטה בכלי AI ופלטפורמות מתקדמות" },
    { icon: Presentation, text: "פיץ' אישי בסגנון סטארטאפ" },
    { icon: Target, text: "זהות אישית ולוגו למיזם" },
    { icon: CheckCircle, text: "ביטחון עצמי טכנולוגי" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          תוצרי הקייטנה - מה המשתתפים יוצרים?
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => {
            const IconComponent = outcome.icon;
            return (
              <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-white">
                  <IconComponent size={20} />
                </div>
                <span className="font-medium">{outcome.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
