import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Wand2, Code2, Share2, CheckCircle2, Sparkles, Gamepad2, Brain, Lightbulb, Users } from 'lucide-react';

const days = [
  {
    n: 1, t: 'מרעיון אישי לקונספט משחק',
    goal: 'מעבר מ"יש לי רעיון" ל"יש לי משחק שאפשר להתחיל לבנות".',
    bullets: ['בחירת תחום עניין אישי', 'הגדרת מטרה ומכניקה מרכזית', 'שיחה ראשונה עם AI לפיתוח הרעיון'],
    icon: Target,
  },
  {
    n: 2, t: 'תכנון חוויית משחק ברורה',
    goal: 'מתכננים את המבנה כך ששחקן חדש יבין מה לעשות.',
    bullets: ['מסך פתיחה, הוראות וחוקים', 'זרימת משחק ומשוב לשחקן', 'גרסה ראשונה שאפשר להפעיל'],
    icon: Wand2,
  },
  {
    n: 3, t: 'ממשחק ראשוני למשחק משופר',
    goal: 'בודקים, מתקנים, משפרים — מחזור איטרציה אמיתי.',
    bullets: ['משוב עמיתים ובדיקת חוויה', 'שימוש ב-AI לפתרון תקלות', 'הוספת ניקוד, שלבים או רמות'],
    icon: Code2,
  },
  {
    n: 4, t: 'ליטוש, הצגה ושיתוף',
    goal: 'המשחק עובר ליטוש סופי ומוכן להצגה ושיתוף.',
    bullets: ['בדיקות אחרונות וליטוש UX', 'הסבר קצר ופיץ׳ של 1–2 דקות', 'קישור לשיתוף עם הורים וחברים'],
    icon: Share2,
  },
];

const Program = () => {
  return (
    <Layout>
      <section className="hero-bg">
        <div className="container mx-auto px-4 py-20 text-center">
          <span className="tag-chip mb-6"><Sparkles className="w-4 h-4" /> מה הילד שלי יעשה בקייטנה?</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5 mt-4">
            ארבעה ימים. <span className="gradient-text">משחק אחד אישי.</span>
          </h1>
          <p className="text-lg text-purple-100/85 max-w-2xl mx-auto mb-8">
            תהליך מובנה שבסופו כל משתתף מחזיק משחק דיגיטלי שעובד — נבנה על ידו, עם בינה מלאכותית כשותפה.
          </p>
          <Link to="/register"><Button className="btn-primary rounded-full px-8 py-6">להרשמה</Button></Link>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="section-title">המשחק כשפה. ה-AI ככלי. הילד כיוצר.</h2>
          <p className="section-subtitle">
            התכנית מבוססת על למידה מתוך עניין אישי. כל ילד עובד על הרעיון שלו, מקבל מסגרת ברורה ורואה התקדמות מוחשית בכל יום.
          </p>
        </div>
      </section>

      {/* DAILY JOURNEY */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {days.map((d) => (
              <div key={d.n} className="glass-card glass-card-hover p-7">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#8B5CF6,#181259)' }}>
                      <d.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-purple-300/70 font-semibold">יום {d.n}</div>
                      <h3 className="text-lg font-bold text-white">{d.t}</h3>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-purple-200/80 mb-4 italic">{d.goal}</p>
                <ul className="space-y-2">
                  {d.bullets.map((b) => (
                    <li key={b} className="flex gap-2 items-start text-sm text-purple-100/90">
                      <CheckCircle2 className="w-4 h-4 text-[#FFD84C] flex-shrink-0 mt-1" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT KID GETS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">מה הילד יוצא איתו בסוף?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Gamepad2, t: 'משחק שעובד', d: 'מסך פתיחה, חוקים, פעולה, אתגר ומשוב לשחקן.' },
              { icon: Brain, t: 'כושר עבודה עם AI', d: 'יודע לנסח פרומפט, להחליט מה לקבל ומה לתקן.' },
              { icon: Lightbulb, t: 'תהליך יצירה', d: 'התנסה ברעיון, בנייה, בדיקה, שיפור והצגה.' },
            ].map((c) => (
              <div key={c.t} className="glass-card glass-card-hover p-6 text-center">
                <c.icon className="w-9 h-9 text-[#FFD84C] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{c.t}</h3>
                <p className="text-sm text-purple-100/75">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="py-16 border-y border-purple-500/15" style={{ background: 'rgba(139,92,246,0.04)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="section-title">מתאים לילד שלי?</h2>
            <p className="section-subtitle">התכנית נבנתה לטווח רחב של ילדים — לא רק ל"גיקים".</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'אוהב משחקים ורוצה להבין איך הם נבנים',
              'סקרן לגבי בינה מלאכותית ורוצה להתנסות',
              'אוהב לעצב, לצייר ולהמציא דמויות ועולמות',
              'אוהב חידות, אתגרים ובניית מערכות',
              'חושש מטכנולוגיה ורוצה להרגיש "אני יכול"',
              'כבר התנסה בכלים דיגיטליים ורוצה לעלות שלב',
            ].map((t) => (
              <div key={t} className="glass-card p-4 flex gap-3 items-center">
                <Users className="w-5 h-5 text-[#A78BFA] flex-shrink-0" />
                <span className="text-purple-100/90">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-bg py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">מוכנים להזיז את הילד מהצופה ליוצר?</h2>
          <Link to="/register"><Button className="btn-primary rounded-full px-10 py-6 text-base">להרשמה לקייטנה</Button></Link>
        </div>
      </section>
    </Layout>
  );
};

export default Program;
