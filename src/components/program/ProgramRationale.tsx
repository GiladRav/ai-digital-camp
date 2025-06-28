import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Target } from "lucide-react";

const ProgramRationale = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* חזון */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-600">חזון</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed">
                החזון שלנו הוא להכין את הדור הבא של יזמי הטכנולוגיה ולהפוך את עולם ה-AI לנגיש לכל ילד
              </p>
            </CardContent>
          </Card>

          {/* המשימה שלנו */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-600">המשימה שלנו</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed">
                אנחנו מאמינים שכל ילד יכול להיות יזם טכנולוגי. בעידן הבינה המלאכותית, הכלים שמאפשרים ליצור טכנולוגיה הפכו נגישים יותר מאי פעם. הקייטנה שלנו נועדה לחבר בין הסקרנות הטבעית של ילדים לבין הכוח הבלתי מוגבל של בינה מלאכותית, ולאפשר להם לממש רעיונות ולפתח פתרונות אמיתיים לבעיות שהם רואים בעולם.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramRationale;
