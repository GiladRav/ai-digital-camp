import { Card, CardContent } from "@/components/ui/card";
import { Eye } from "lucide-react";

const Vision = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">חזון</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                החזון שלנו הוא להכין את הדור הבא של יזמי הטכנולוגיה ולהפוך את עולם ה-AI לנגיש לכל ילד
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Vision; 