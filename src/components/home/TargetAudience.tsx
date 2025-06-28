import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Brain, Heart } from "lucide-react";

const TargetAudience = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            קהל יעד
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-blue-600">גילאי 10-14</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">(כיתות ו'-ח')</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-green-600">אין צורך בידע טכני</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">מוקדם</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-purple-600">חובבי טכנולוגיה</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">ודמיון</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
