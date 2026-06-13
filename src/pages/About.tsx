import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, Mic, Sparkles, Award, BookOpen, Users, Laptop, Building, School } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <section className="hero-bg">
        <div className="container mx-auto px-4 py-20 text-center">
          <span className="tag-chip mb-6"><Sparkles className="w-4 h-4" /> על המנחה</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-4 mb-4">גלעד רביד</h1>
          <p className="text-lg text-purple-100/85 max-w-2xl mx-auto">
            יזם חינוכי וטכנולוגי, מנחה סדנאות AI, גיימינג וחדשנות — עם שנים של ניסיון מעשי בעבודה עם ילדים ובני נוער.
          </p>
        </div>
      </section>

      {/* PROFILE */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="glass-card p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">למה זה משנה למי שמלמד את הילד שלכם</h2>
            <p className="text-purple-100/85 leading-relaxed">
              גלעד אינו רק "מדריך טכני". הוא מחזיק את התהליך הפדגוגי, היצירתי והרגשי לאורך כל הקייטנה — עוזר לכל ילד לצמצם רעיון לתוצר אפשרי, מדגים שימוש נכון ב-AI, ומחזק את תחושת המסוגלות.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center"><GraduationCap className="inline w-8 h-8 mb-2 text-[#FFD84C]" /> השכלה</h2>
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            {[
              { t: 'תואר שני — יישוב סכסוכים וגישור', d: 'אוניברסיטת תל אביב' },
              { t: 'תואר ראשון — יחסים בינלאומיים וסוציולוגיה', d: 'האוניברסיטה העברית' },
              { t: 'תעודת הוראה', d: '' },
              { t: 'תעודת מגשר', d: '' },
            ].map((e) => (
              <div key={e.t} className="glass-card glass-card-hover p-5">
                <div className="flex gap-3 items-start">
                  <BookOpen className="w-5 h-5 text-[#A78BFA] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white">{e.t}</h3>
                    {e.d && <p className="text-sm text-purple-200/75 mt-1">{e.d}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-12 border-y border-purple-500/15" style={{ background: 'rgba(139,92,246,0.04)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center"><Briefcase className="inline w-8 h-8 mb-2 text-[#FFD84C]" /> ניסיון מקצועי</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {[
              { icon: Laptop, t: 'מעבדת חדשנות בגיימינג', d: 'מכללת ספיר' },
              { icon: Users, t: 'ניהול קהילות יוצרי תוכן', d: '"ספיטבול"' },
              { icon: Building, t: 'קהילות טכנו-פדגוגיות', d: 'החברה למתנ"סים' },
              { icon: School, t: 'משרד החינוך · המרכז לטכנולוגיה חינוכית · תכנית חותם', d: '' },
              { icon: GraduationCap, t: 'הוראה: אזרחות, גאוגרפיה, תעודת הוראה', d: '' },
              { icon: Award, t: 'בניית קואליציות ושותפויות אסטרטגיות', d: '' },
            ].map((e) => (
              <div key={e.t} className="glass-card glass-card-hover p-5">
                <e.icon className="w-6 h-6 text-[#FFD84C] mb-2" />
                <h3 className="font-bold text-white text-sm leading-snug">{e.t}</h3>
                {e.d && <p className="text-xs text-purple-200/70 mt-1">{e.d}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LECTURES */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center"><Mic className="inline w-8 h-8 mb-2 text-[#FFD84C]" /> הרצאות וסדנאות נבחרות</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {[
              { t: 'איך מכונה חושבת?', d: 'מבוא ל-AI ולמידת מכונה, כולל תרגול כלי AI.' },
              { t: 'לשחק את האמון', d: 'שיתוף פעולה בתנאי אי-ודאות דרך תורת המשחקים.' },
              { t: 'יסודות הפיץ׳ המוצלח', d: 'יצירת מסרים אפקטיביים לגיוס השקעה.' },
              { t: 'גיימינג להורים', d: 'חשיפה לכלים חינוכיים בעולם המשחקים וה-AI.' },
              { t: 'משחק למידה', d: 'טרמינולוגיה מעולם המשחקים לשיפור למידה בכיתה.' },
              { t: 'שיח חינוכי בסוגיות שנויות במחלוקת', d: 'כלים לניהול שיח כיתתי בטוח ומכבד.' },
            ].map((l) => (
              <div key={l.t} className="glass-card glass-card-hover p-5">
                <h3 className="font-bold text-white mb-1">{l.t}</h3>
                <p className="text-sm text-purple-200/80 leading-relaxed">{l.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-bg py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">בידיים טובות</h2>
          <p className="text-purple-100/85 mb-6 max-w-xl mx-auto">קבוצה קטנה, ליווי אישי, ניסיון של שנים בעבודה עם ילדים ונוער.</p>
          <Link to="/register"><Button className="btn-primary rounded-full px-10 py-6">הרשמה לקייטנה</Button></Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
