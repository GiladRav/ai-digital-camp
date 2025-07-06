import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Code, 
  Heart, 
  Target, 
  Users, 
  Award,
  Lightbulb,
  TrendingUp,
  Calendar,
  Clock,
  Monitor,
  Cpu,
  Brain
} from 'lucide-react';
import Layout from '@/components/Layout';

const aboutSections = [
  {
    title: 'לומד לכל החיים',
    content: 'מחויב לצמיחה אישית ומקצועית מתמשכת'
  },
  {
    title: 'יזם חינוכי–חברתי',
    content: 'מוביל אינטגרציה טכנולוגית ואוריינות דיגיטלית'
  },
  {
    title: 'מנחה סדנאות והכשרות',
    content: 'בהתייחס לנושאים של חדשנות טכנולוגית, יזמות וחינוך'
  },
  {
    title: 'בניית קואליציות',
    content: 'יזום שותפויות אסטרטגיות בין גורמי עניין'
  },
  {
    title: 'ניהול קהילות',
    content: 'ניסיון בסביבות דיגיטליות ופיזיות בתחומים שונים'
  }
];

const expertiseSections = [
  {
    title: 'קורסים מקוונים',
    content: 'פיתוח והנחייה של קורסים והכשרות עם כלים דיגיטליים ואינטראקטיביות.'
  },
  {
    title: 'ייעוץ פדגוגי',
    content: 'הובלת שינוי בארגוני חינוך באמצעות שילוב טכנולוגיות והוראה חדשנית.'
  },
  {
    title: 'פיתוח תכניות חינוכיות',
    content: 'תכנון ותפעול של תכניות מבוססות טכנולוגיה לקהל מגוון.'
  },
  {
    title: 'הטמעת חדשנות טכנולוגית',
    content: 'סדנאות מעשיות בשימוש בכלים מתקדמים, כולל AI, בלמידה והובלה.'
  }
];

const lecturesSections = [
  {
    title: 'איך מכונה חושבת?',
    content: 'מבוא ל-AI ולמידת מכונה, כולל תרגול כלי AI.'
  },
  {
    title: 'לשחק את האמון',
    content: 'בניית שיתוף פעולה בתנאי אי-ודאות דרך מודל תורת המשחקים.'
  },
  {
    title: "יסודות הפיץ' המוצלח",
    content: 'יצירת מסרים אפקטיביים לגיוס השקעה, כולל תרגול מעשי.'
  },
  {
    title: 'גיימינג להורים',
    content: 'חשיפה לכלים חינוכיים בשימוש במשחקים ובינה מלאכותית.'
  },
  {
    title: 'משחק למידה',
    content: 'שינוי טרמינולוגיה מעולם המשחקים לשיפור למידה ויצירתיות בכיתה.'
  },
  {
    title: 'שיח חינוכי בסוגיות שנויות במחלוקת',
    content: 'כלים לניהול שיח כיתתי בטוח ומכבד.'
  }
];

const educationSections = [
  {
    title: 'תואר שני ביישוב סכסוכים וגישור',
    content: 'אוניברסיטת תל אביב'
  },
  {
    title: 'תואר ראשון ביחסים בינלאומיים וסוציולוגיה',
    content: 'האוניברסיטה העברית'
  },
  {
    title: 'תעודת הוראה',
    content: ''
  },
  {
    title: 'תעודת מגשר',
    content: ''
  }
];

const experienceSections = [
  {
    title: 'ניהול מעבדת חדשנות בגיימינג',
    content: 'מכללת ספיר'
  },
  {
    title: 'ניהול קהילות יוצרי תוכן',
    content: '"ספיטבול"'
  },
  {
    title: 'ניהול קהילות טכנו‑פדגוגיות',
    content: 'החברה למתנ"סים'
  },
  {
    title: 'תפקידים במשרד החינוך, המרכז לטכנולוגיה חינוכית, תכנית חותם',
    content: ''
  },
  {
    title: 'הוראה בתחומי אזרחות, גאוגרפיה ותעודת הוראה',
    content: ''
  }
];

const About = () => {
  return (
    <Layout>
      {/* Top Hero Section */}
      <section className="relative text-white py-16 px-4" style={{ 
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%), url("/visuals/1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#FFD84C' }}>
            גלעד רביד
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            מומחה ליזמות חינוכית וחדשנות טכנולוגית עם התמקדות בלמידה מבוססת משחק
          </p>

          {/* Info Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <Calendar className="w-5 h-5" style={{ color: '#1D4ED8' }} />
              <span className="text-sm font-medium" style={{ color: '#D1D5DB' }}>13.7.2025 - 17.7.2025</span>
            </div>
            <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <Users className="w-5 h-5" style={{ color: '#1D4ED8' }} />
              <span className="text-sm font-medium" style={{ color: '#D1D5DB' }}>גילאי 10-14</span>
            </div>
            <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <Monitor className="w-5 h-5" style={{ color: '#1D4ED8' }} />
              <span className="text-sm font-medium" style={{ color: '#D1D5DB' }}>מפגשים מקוונים</span>
            </div>
            <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <Clock className="w-5 h-5" style={{ color: '#1D4ED8' }} />
              <span className="text-sm font-medium" style={{ color: '#D1D5DB' }}>10:00-14:30</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              variant="primary"
              className="font-semibold text-lg px-8 py-3"
              style={{ 
                backgroundColor: '#FFD84C',
                color: '#181259',
                border: '0.5px solid #181259'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#EAB100';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFD84C';
              }}
            >
              <Link to="/register">
                להרשמה
              </Link>
            </Button>
            <Button 
              asChild 
              className="font-semibold text-lg px-8 py-3"
              style={{ 
                backgroundColor: '#FFD84C',
                color: '#181259',
                border: '0.5px solid #181259'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#EAB100';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFD84C';
              }}
            >
              <Link to="/faq">
                שאלות נפוצות
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#181259' }}>
              ✨ קצת עליי
            </h2>
            {aboutSections.map((item, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="text-xl font-semibold mb-1" style={{ color: '#181259' }}>{item.title}</h3>
                <div className="text-lg text-gray-700">{item.content}</div>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#181259' }}>
              🎯 התמחויות מקצועיות
            </h2>
            {expertiseSections.map((item, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="text-xl font-semibold mb-1" style={{ color: '#181259' }}>{item.title}</h3>
                <div className="text-lg text-gray-700">{item.content}</div>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#181259' }}>
              🗣 הרצאות וסדנאות נבחרות
            </h2>
            {lecturesSections.map((item, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="text-xl font-semibold mb-1" style={{ color: '#181259' }}>{item.title}</h3>
                <div className="text-lg text-gray-700">{item.content}</div>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#181259' }}>
              🎓 השכלה
            </h2>
            {educationSections.map((item, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="text-xl font-semibold mb-1" style={{ color: '#181259' }}>{item.title}</h3>
                {item.content && <div className="text-lg text-gray-700">{item.content}</div>}
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#181259' }}>
              👤 ניסיון מקצועי והכשרה
            </h2>
            {experienceSections.map((item, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="text-xl font-semibold mb-1" style={{ color: '#181259' }}>{item.title}</h3>
                {item.content && <div className="text-lg text-gray-700">{item.content}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Hero Section (Call to Action) */}
      <section className="relative text-white py-16 px-4" style={{ 
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%), url("/visuals/2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFD84C' }}>
            בואו להיות חלק מהחזון
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            הצטרפו אלינו במסע מרגש להכנת הדור הבא של יזמי הטכנולוגיה הישראלית
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <Button 
                className="font-semibold text-lg px-8 py-3"
                style={{ 
                  backgroundColor: '#FFD84C',
                  color: '#181259',
                  border: '0.5px solid #181259'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#EAB100';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFD84C';
                }}
              >
                להרשמה
              </Button>
            </Link>
            <Link to="/faq">
              <Button 
                className="font-semibold text-lg px-8 py-3"
                style={{ 
                  backgroundColor: '#FFD84C',
                  color: '#181259',
                  border: '0.5px solid #181259'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#EAB100';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFD84C';
                }}
              >
                שאלות נפוצות
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
