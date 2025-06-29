
import { Card, CardContent } from '@/components/ui/card';

const MissionStatement = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            המשימה שלנו
          </h2>
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-0">
              <p className="text-lg leading-relaxed text-gray-700">
                אנחנו מאמינים שכל ילד יכול להיות יזם טכנולוגי. בעידן הבינה המלאכותית, 
                הכלים שמאפשרים ליצור טכנולוגיה הפכו נגישים יותר מאי פעם. 
                הקייטנה שלנו נועדה לחבר בין הסקרנות הטבעית של ילדים לבין הכוח הבלתי מוגבל של בינה מלאכותית, 
                ולאפשר להם לממש רעיונות ולפתח פתרונות אמיתיים לבעיות שהם רואים בעולם.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
