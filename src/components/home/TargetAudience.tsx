import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Brain, Heart } from "lucide-react";

const TargetAudience = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            קהל יעד
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader className="pb-3">
              <div className="mx-auto w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <CardTitle className="text-blue-600">גילאי 10-14</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">(כיתות ו'-ח')</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-3">
              <div className="mx-auto w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <Brain className="w-7 h-7 text-green-600" />
              </div>
              <CardTitle className="text-green-600">אין צורך בידע טכני</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">מוקדם</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-3">
              <div className="mx-auto w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Heart className="w-7 h-7 text-purple-600" />
              </div>
              <CardTitle className="text-purple-600">חובבי טכנולוגיה</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">ודמיון</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
