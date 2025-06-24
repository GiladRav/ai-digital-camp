import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            אודות
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            החזון שלנו הוא להכין את הדור הבא של יזמי הטכנולוגיה ולהפוך את עולם הבינה המלאכותית לנגיש לכל משתתף
          </p>
        </div>
      </section>

      {/* פתיח כללי */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            פתיח כללי
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600">[פתיח אישי יתווסף בהמשך]</p>
          </div>
        </div>
      </section>

      {/* הרקע והניסיון שלי */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            הרקע והניסיון שלי
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Badge className="mb-4 bg-camp-blue-100 text-camp-blue-800">רקע טכנולוגי</Badge>
                <h3 className="font-semibold text-lg mb-3">מפתחים מנוסים</h3>
                <p className="text-gray-600 text-sm">
                  הצוות שלנו כולל מפתחים עם ניסיון רב שנים בתחום הטכנולוגיה והבינה המלאכותית
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Badge className="mb-4 bg-camp-purple-100 text-camp-purple-800">רקע חינוכי</Badge>
                <h3 className="font-semibold text-lg mb-3">מחנכים מוסמכים</h3>
                <p className="text-gray-600 text-sm">
                  השילוב של ידע טכנולוגי עם הבנה פדגוגית מעמיקה של עולם בני הנוער
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Badge className="mb-4 bg-camp-teal-100 text-camp-teal-800">ניסיון מוכח</Badge>
                <h3 className="font-semibold text-lg mb-3">תוצאות מוכחות</h3>
                <p className="text-gray-600 text-sm">
                  ניסיון בהדרכת מאות משתתפים בתחומי הטכנולוגיה והיזמות הדיגיטלית
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            בואו להיות חלק מהחזון
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            הצטרפו אלינו במסע מרגש להכנת הדור הבא של יזמי הטכנולוגיה הישראלית
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-camp-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                הרשמה לקייטנה - 1,600₪
              </Button>
            </Link>
            <Link to="/faq">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
                יש לי שאלות
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
