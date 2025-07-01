
import { Card, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";

const ProgramMission = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F0FDF4' }}>
                  <Target className="w-6 h-6" style={{ color: '#22C55E' }} />
                </div>
                <h2 className="text-3xl font-bold" style={{ color: '#181259' }}>המשימה שלנו</h2>
              </div>
              <p className="text-lg leading-relaxed" style={{ color: '#1F2937' }}>
                אנחנו מאמינים שכל ילד יכול להיות יזם טכנולוגי. בעידן הבינה המלאכותית, הכלים שמאפשרים ליצור טכנולוגיה הפכו נגישים יותר מאי פעם. הקייטנה שלנו נועדה לחבר בין הסקרנות הטבעית של ילדים לבין הכוח הבלתי מוגבל של בינה מלאכותית, ולאפשר להם לממש רעיונות ולפתח פתרונות אמיתיים לבעיות שהם רואים בעולם.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramMission;
