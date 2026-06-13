import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Gamepad2, Sparkles, Calendar, Clock, Users, Monitor, Trophy,
  Brain, Rocket, ShieldCheck, Target, Wand2, Code2, Share2, CheckCircle2
} from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="hero-bg relative overflow-hidden">
        <div className="container mx-auto px-4 py-24 md:py-32 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-400/30 bg-purple-500/10 backdrop-blur">
            <Sparkles className="w-4 h-4 text-[#FFD84C]" />
            <span className="text-sm text-purple-100">קייטנת קיץ 2025 · בני 11–15</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black leading-[1.1] mb-6 text-white">
            הילדים לא רק <span className="gradient-text">משחקים</span>.<br />
            הם <span className="neon-text">בונים</span> את המשחק.
          </h1>

          <p className="text-lg md:text-xl text-purple-100/85 max-w-2xl mx-auto mb-10">
            תכנית מרוכזת בה כל ילד מפתח משחק דיגיטלי אישי בעזרת בינה מלאכותית — מרעיון לתוצר אינטראקטיבי שניתן להפעיל, להציג ולשתף.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="tag-chip"><Calendar className="w-4 h-4" /> 13.7–17.7.2025</span>
            <span className="tag-chip"><Clock className="w-4 h-4" /> 09:00–14:00</span>
            <span className="tag-chip"><Users className="w-4 h-4" /> גילאי 11–15</span>
            <span className="tag-chip"><Monitor className="w-4 h-4" /> מקוון בזום</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register"><Button className="btn-primary rounded-full px-8 py-6 text-base">לתפוס מקום בקייטנה</Button></Link>
            <Link to="/program"><Button className="btn-ghost rounded-full px-8 py-6 text-base">מה הילד שלי יבנה?</Button></Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="section-title">תוצר אמיתי. לא עוד קייטנת מסכים.</h2>
            <p className="section-subtitle">ארבעה ימים מרוכזים שבסופם יש משחק שאפשר להפעיל, להראות לסבתא ולשלוח לחברים בקישור.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: 'AI שעובד בשבילם', desc: 'הילדים לומדים להנחות בינה מלאכותית — לא לפחד ממנה. כלי עבודה אמיתי לעתיד שלהם.' },
              { icon: Gamepad2, title: 'מרעיון למשחק', desc: 'כל ילד בוחר רעיון אישי: ספורט, פנטזיה, חידות. ובונה משחק שמתאים לו.' },
              { icon: Trophy, title: 'תוצר להציג', desc: 'בסוף הקייטנה — לינק שאפשר לשתף עם הורים, חברים ובני משפחה.' },
            ].map((v) => (
              <div key={v.title} className="glass-card glass-card-hover p-7">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg,#8B5CF6,#181259)' }}>
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{v.title}</h3>
                <p className="text-purple-100/75 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY 4 DAYS */}
      <section className="py-20 border-y border-purple-500/15" style={{ background: 'rgba(139,92,246,0.04)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="section-title">המסע: מרעיון לתוצר</h2>
            <p className="section-subtitle">ארבעה שלבים ברורים. בכל יום הילד מתקדם צעד נוסף עם המשחק שלו.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              { n: '01', icon: Target, t: 'רעיון', d: 'בוחרים תחום אישי, מגדירים מטרה ומכניקת משחק.' },
              { n: '02', icon: Wand2, t: 'תכנון', d: 'מסכים, חוקים, הוראות וזרימה ברורה לשחקן.' },
              { n: '03', icon: Code2, t: 'בנייה', d: 'בונים, בודקים ומשפרים עם פרומפטים חכמים ל-AI.' },
              { n: '04', icon: Share2, t: 'הצגה', d: 'משחק מלוטש, הסבר קצר וקישור לשיתוף.' },
            ].map((s) => (
              <div key={s.n} className="glass-card glass-card-hover p-6 relative">
                <div className="absolute top-4 left-4 text-5xl font-black text-purple-500/15">{s.n}</div>
                <s.icon className="w-8 h-8 text-[#FFD84C] mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">יום {s.n.replace('0','')} · {s.t}</h3>
                <p className="text-sm text-purple-100/75 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / WHY US */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              למה הורים בוחרים בנו?
            </h2>
            <div className="space-y-4">
              {[
                'ללא ידע קודם בתכנות. הכלים נגישים, ההדרכה צעד-אחר-צעד.',
                'קבוצה קטנה — ליווי אישי ומקום לכל ילד להתקדם בקצב שלו.',
                'שימוש בטוח ומודרך ב-AI, עם דגש על חשיבה ביקורתית.',
                'תוצר ממשי שאפשר להמשיך לפתח גם אחרי הקייטנה.',
                'מתאים גם לילדים שלא מגדירים עצמם "טכנולוגיים".',
              ].map((t) => (
                <div key={t} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#FFD84C] flex-shrink-0 mt-0.5" />
                  <p className="text-purple-100/90 leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8">
            <ShieldCheck className="w-10 h-10 text-[#A78BFA] mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">הבטחה פדגוגית</h3>
            <p className="text-purple-100/80 leading-relaxed mb-6">
              כל ילד בסוף הקייטנה יוצא עם משחק שעובד, יכולת להסביר איך בנה אותו, ותחושה אמיתית של "אני יכול".
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div><div className="text-3xl font-black neon-text">4</div><div className="text-xs text-purple-200/70 mt-1">ימי פיתוח</div></div>
              <div><div className="text-3xl font-black neon-text">12+</div><div className="text-xs text-purple-200/70 mt-1">כלי AI</div></div>
              <div><div className="text-3xl font-black neon-text">1</div><div className="text-xs text-purple-200/70 mt-1">משחק אישי</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS CARD */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="tag-chip mb-4"><Rocket className="w-4 h-4" /> פרטי הקייטנה</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-4">מקום מוגבל. קבוצה קטנה.</h2>
                <p className="text-purple-100/80 mb-6">
                  5 ימים, מפגשים מקוונים בזום, מדריך מומחה, עד 15 משתתפים בקבוצה.
                </p>
                <div className="space-y-2 text-purple-100/85">
                  <div className="flex justify-between border-b border-purple-500/15 py-2"><span>תאריכים</span><span className="font-semibold text-white">13.7–17.7.2025</span></div>
                  <div className="flex justify-between border-b border-purple-500/15 py-2"><span>שעות</span><span className="font-semibold text-white">09:00–14:00</span></div>
                  <div className="flex justify-between border-b border-purple-500/15 py-2"><span>גילאים</span><span className="font-semibold text-white">11–15</span></div>
                  <div className="flex justify-between py-2"><span>מחיר</span><span className="font-semibold neon-text">1,400 ₪</span></div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-purple-200/70 mb-4">המקומות מוגבלים — ההרשמה מתבצעת לפי סדר הגעה.</p>
                <Link to="/register"><Button className="btn-primary rounded-full px-10 py-6 text-base w-full md:w-auto">להרשמה</Button></Link>
                <p className="text-xs text-purple-200/60 mt-4">תשובה תוך 24 שעות · ללא התחייבות בשלב ההרשמה</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-bg py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            קיץ אחד. <span className="neon-text">משחק אחד.</span> חוויה שתישאר.
          </h2>
          <p className="text-purple-100/85 max-w-xl mx-auto mb-8">השאירו פרטים ונחזור אליכם עם כל המידע.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register"><Button className="btn-primary rounded-full px-8 py-6 text-base">הרשמה לקייטנה</Button></Link>
            <Link to="/faq"><Button className="btn-ghost rounded-full px-8 py-6 text-base">שאלות שהורים שואלים</Button></Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
