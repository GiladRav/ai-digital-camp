
import { Card, CardContent } from '@/components/ui/card';

const EducationalApproach = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            הגישה החינוכית שלנו
          </h2>
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-xl mb-4 text-camp-blue-600">למידה מבוססת פרויקטים</h3>
                  <p className="text-gray-600 mb-4">
                    כל מה שלומדים במהלך הקייטנה מיושם מיד בפרויקטים אמיתיים. 
                    הילדים לא רק לומדים תיאוריה, אלא בונים דברים שפועלים בפועל.
                  </p>
                  
                  <h3 className="font-semibold text-xl mb-4 text-camp-purple-600">התאמה אישית</h3>
                  <p className="text-gray-600">
                    כל ילד מגיע עם תחומי עניין ויכולות שונות. אנחנו מתאימים את הפרויקטים 
                    והקצב ללומד הספציפי, כך שכל אחד מקבל את החוויה המתאימה לו.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-4 text-camp-teal-600">למידה מכשלונות</h3>
                  <p className="text-gray-600 mb-4">
                    אנחנו מעודדים ניסוי וטעייה. טעויות הן חלק מתהליך הלמידה, 
                    ואנחנו עוזרים לילדים להפוך כשלונות להזדמנויות למידה.
                  </p>
                  
                  <h3 className="font-semibold text-xl mb-4 text-camp-blue-600">יזמות אחראית</h3>
                  <p className="text-gray-600">
                    אנחנו מלמדים לא רק איך ליצור טכנולוגיה, אלא גם איך לעשות זאת באופן אתי 
                    ואחראי שתורם לחברה.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationalApproach;
