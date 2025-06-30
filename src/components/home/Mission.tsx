
import { Card, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-16 section-bg-mission">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg card-purple">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-status-success-light rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-status-success" />
                </div>
                <h2 className="text-3xl font-bold text-brand-primary-navy">המשימה שלנו</h2>
              </div>
              <p className="text-lg text-text-primary leading-relaxed">
                אנחנו מאמינים שכל ילד יכול להיות יזם טכנולוגי. בעידן הבינה המלאכותית, הכלים שמאפשרים ליצור טכנולוגיה הפכו נגישים יותר מאי פעם. הקייטנה שלנו נועדה לחבר בין הסקרנות הטבעית של ילדים לבין הכוח הבלתי מוגבל של בינה מלאכותית, ולאפשר להם לממש רעיונות ולפתח פתרונות אמיתיים לבעיות שהם רואים בעולם.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission; 
