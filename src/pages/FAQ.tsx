import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sparkles, Phone, Mail } from 'lucide-react';

const groups = [
  {
    title: 'התאמה לילד',
    qa: [
      { q: 'האם צריך לדעת לתכנת מראש?', a: 'לא. התכנית מתחילה מאפס, ללא ידע קודם. ה-AI והכלים החזותיים מאפשרים לכל ילד להתחיל לבנות מהיום הראשון.' },
      { q: 'מתאים לילד שלא רואה את עצמו "טכנולוגי"?', a: 'בדיוק לילד הזה התכנית בנויה. כל ילד בוחר נושא שמעניין אותו אישית (ספורט, פנטזיה, חידות), והתהליך מובנה ולא מאיים.' },
      { q: 'מתאים גם לילד שכבר התנסה בכלים דיגיטליים?', a: 'כן. ילדים מתקדמים יכולים להעמיק במכניקות, להוסיף שלבים ולחקור פיתוח מורכב יותר באותה תכנית.' },
      { q: 'מה אם הילד מתקדם מהר/לאט מהקבוצה?', a: 'העבודה אישית. ילד מהיר מקבל אתגרים מתקדמים, ילד שמתקשה מקבל ליווי צמוד יותר. הקבוצה קטנה במיוחד בשביל זה.' },
    ],
  },
  {
    title: 'התוצר והמשחק',
    qa: [
      { q: 'האם כל משתתף בונה משחק?', a: 'כן. כל משתתף יוצא עם משחק דיגיטלי אישי שעובד.' },
      { q: 'מה רמת הגימור הצפויה?', a: 'משחק שניתן להפעיל, להציג ולשתף — עם מסך פתיחה, חוקים, פעולה, אתגר ומשוב. לא מוצר מסחרי, אבל תוצר שגורם לגאווה.' },
      { q: 'האם התוצר נשאר אצל המשתתף?', a: 'כן. המשחק נשאר במלואו אצל הילד וניתן להמשיך לפתח אותו גם אחרי הקייטנה.' },
      { q: 'אפשר לשתף את המשחק עם הורים וחברים?', a: 'ברוב המקרים — כן, בקישור ישיר. תלוי בכלי שבחרנו לבנות איתו את המשחק.' },
      { q: 'אפשר לעבוד בזוגות?', a: 'התכנית בנויה לעבודה אישית, אך יש פעילויות של משוב הדדי ועזרה בין משתתפים.' },
    ],
  },
  {
    title: 'בינה מלאכותית — בטיחות ושימוש',
    qa: [
      { q: 'האם השימוש ב-AI מודרך ובטוח?', a: 'בהחלט. הילדים עובדים רק בכלים שאושרו על ידי המנחה, עם הנחיה רציפה ודגש על שימוש אחראי ופרטיות.' },
      { q: 'מה ההבדל מקייטנת גיימינג רגילה?', a: 'בקייטנות גיימינג רגילות הילד משחק. כאן הוא בונה. ה-AI הוא הכלי, היצירתיות שלו היא המרכז.' },
      { q: 'מה ההבדל מקורס תכנות רגיל?', a: 'אין כתיבת קוד מסורתית. הילד לומד לחשוב, לתכנן ולהנחות AI — מיומנויות שיהיו רלוונטיות לכל מקצוע בעתיד.' },
    ],
  },
  {
    title: 'טכני ולוגיסטי',
    qa: [
      { q: 'איפה ומתי הקייטנה?', a: 'בזום, 13.7–17.7.2025, ימים ראשון-חמישי, 09:00–14:00.' },
      { q: 'האם צריך להתקין תוכנות?', a: 'לא. כל הכלים מבוססי דפדפן. מספיק מחשב, אינטרנט, מצלמה ומיקרופון.' },
      { q: 'האם צריך מנוי בתשלום לכלים?', a: 'לא. אנחנו עובדים עם הגרסאות החינמיות של הכלים. במידת הצורך נציע חלופות.' },
      { q: 'מה קורה אם כלי מסוים לא זמין?', a: 'התכנית גמישה. תמיד יש כלי חלופי שמאפשר להמשיך לבנות.' },
      { q: 'אפשר להפעיל את התכנית גם פיזית?', a: 'כן. התכנית מותאמת גם להפעלה במסגרות חינוך ומתנ"סים. לפרטים — צרו קשר.' },
      { q: 'יש הצגת תוצרים בסיום?', a: 'כן. ביום האחרון כל ילד מציג את המשחק שלו בקצרה, מסביר את התהליך ומשתף קישור.' },
      { q: 'מה קורה אם ילד מתקשה טכנית?', a: 'יש תמיכה חיה במהלך המפגש, שיתוף מסך לפתרון בעיות, ובמקרה הצורך — קשר עם ההורים.' },
      { q: 'אפשר להמשיך לפתח את המשחק אחרי הקייטנה?', a: 'בהחלט. הילדים מקבלים המלצות מעשיות להמשך פיתוח עצמאי.' },
      { q: 'מה נדרש מההורים לפני הקייטנה?', a: 'לוודא שהמחשב והאינטרנט תקינים, להתקין זום, ולהיות זמינים לעזרה נקודתית ביום הראשון אם נדרש.' },
    ],
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="hero-bg">
        <div className="container mx-auto px-4 py-20 text-center">
          <span className="tag-chip mb-6"><Sparkles className="w-4 h-4" /> שאלות שהורים שואלים</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-4 mb-4">שאלות נפוצות</h1>
          <p className="text-lg text-purple-100/85 max-w-2xl mx-auto">כל מה שחשוב לדעת לפני שמרשמים את הילד.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-10">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="text-2xl font-extrabold neon-text mb-4">{g.title}</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {g.qa.map((item, i) => (
                  <AccordionItem key={i} value={`${g.title}-${i}`} className="glass-card border-0 px-5">
                    <AccordionTrigger className="text-right text-white font-semibold hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-purple-100/85 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className="glass-card p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-2">לא מצאתם תשובה?</h3>
            <p className="text-purple-100/80 mb-4">צרו קשר עם גלעד ישירות.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:052-2998444" className="btn-ghost rounded-full px-6 py-3 inline-flex items-center justify-center gap-2"><Phone className="w-4 h-4" /> 052-2998444</a>
              <a href="mailto:Gilad84@gmail.com" className="btn-ghost rounded-full px-6 py-3 inline-flex items-center justify-center gap-2"><Mail className="w-4 h-4" /> Gilad84@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-bg py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">להבטיח מקום בקייטנה</h2>
          <Link to="/register"><Button className="btn-primary rounded-full px-10 py-6">להרשמה</Button></Link>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
