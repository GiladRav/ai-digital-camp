import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brain, Palette, Code2, Layers, ExternalLink, Sparkles } from 'lucide-react';

const categories = [
  {
    title: 'AI ושפה טבעית',
    icon: Brain,
    desc: 'כלים שעוזרים לפתח רעיון, לנסח חוקים וליצור תוכן למשחק.',
    items: [
      { name: 'ChatGPT', url: 'https://chat.openai.com/', d: 'שותף יצירה לרעיונות, חוקים ותכנים.' },
      { name: 'Claude', url: 'https://claude.ai/', d: 'חשיבה אנליטית ומשוב מעמיק על המשחק.' },
      { name: 'Perplexity', url: 'https://www.perplexity.ai/', d: 'מחקר מהיר ובדיקת השראה.' },
    ],
  },
  {
    title: 'עיצוב וויזואל',
    icon: Palette,
    desc: 'יצירת מסכים, אייקונים, דמויות ונראות למשחק.',
    items: [
      { name: 'Canva AI', url: 'https://www.canva.com/ai-assistant/', d: 'מסך פתיחה, כפתורים ועיצוב כללי.' },
      { name: 'Gamma', url: 'https://gamma.app/', d: 'הצגת המשחק והפיץ׳ הסופי.' },
      { name: 'Rosebud AI', url: 'https://rosebud.ai/', d: 'יצירת ויזואלים ייחודיים למשחק.' },
    ],
  },
  {
    title: 'פיתוח וללא-קוד',
    icon: Code2,
    desc: 'הפלטפורמות שעליהן בונים את המשחק עצמו.',
    items: [
      { name: 'Lovable', url: 'https://lovable.dev/', d: 'בניית אפליקציות ומשחקים בעזרת AI.' },
      { name: 'Base44', url: 'https://app.base44.com/', d: 'בניית מסכים ולוגיקה ללא קוד.' },
      { name: 'Websim', url: 'https://websim.com/', d: 'סימולציות ואבות טיפוס אינטראקטיביים.' },
    ],
  },
  {
    title: 'אבות-טיפוס ושיתוף',
    icon: Layers,
    desc: 'כלים מהירים לבדיקה, ניסוי וקישור לשיתוף.',
    items: [
      { name: 'Claude Artifacts', url: 'https://claude.ai/', d: 'בניית רכיבי משחק מהר ובאופן אינטראקטיבי.' },
      { name: 'ChatGPT Canvas', url: 'https://chat.openai.com/', d: 'ניסוי וטעייה על הקוד והתוכן.' },
      { name: 'Google AI Studio', url: 'https://aistudio.google.com/', d: 'התנסות במודלים מתקדמים.' },
    ],
  },
];

const Platforms = () => {
  return (
    <Layout>
      <section className="hero-bg">
        <div className="container mx-auto px-4 py-20 text-center">
          <span className="tag-chip mb-6"><Sparkles className="w-4 h-4" /> הארגז כלים</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5 mt-4">
            12+ כלי <span className="gradient-text">AI</span> שעובדים יחד
          </h1>
          <p className="text-lg text-purple-100/85 max-w-2xl mx-auto mb-8">
            התכנית גמישה ואינה תלויה בכלי אחד. הילדים מכירים את הכלים החזקים ביותר בשוק — וכל ילד בוחר את אלה שמתאימים לו.
          </p>
          <Link to="/register"><Button className="btn-primary rounded-full px-8 py-6">להרשמה</Button></Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 space-y-10">
          {categories.map((cat) => (
            <div key={cat.title} className="glass-card p-7 md:p-9">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#8B5CF6,#181259)', boxShadow: '0 0 30px rgba(139,92,246,0.35)' }}>
                  <cat.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white">{cat.title}</h2>
                  <p className="text-sm text-purple-200/75">{cat.desc}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {cat.items.map((it) => (
                  <a key={it.name} href={it.url} target="_blank" rel="noopener noreferrer" className="glass-card glass-card-hover p-5 group">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">{it.name}</h3>
                      <ExternalLink className="w-4 h-4 text-purple-300/60 group-hover:text-[#FFD84C]" />
                    </div>
                    <p className="text-sm text-purple-100/75 leading-relaxed">{it.d}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="glass-card p-6 text-center text-sm text-purple-200/80">
            * אין חובה שכל משתתף ישתמש בכל הכלים. הבחירה לפי רמת הקבוצה והמשחק האישי. אם כלי מסוים אינו זמין — מחליפים אותו בכלי דומה.
          </div>
        </div>
      </section>

      <section className="cta-bg py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">להתחיל לבנות?</h2>
          <Link to="/register"><Button className="btn-primary rounded-full px-10 py-6">להרשמה לקייטנה</Button></Link>
        </div>
      </section>
    </Layout>
  );
};

export default Platforms;
