import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';
import { Calendar, Clock, Users, CreditCard, Shield, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';

const Register = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    childName: '',
    childGrade: '',
    experience: '',
    interests: '',
    agreement: false,
    updates: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) {
      toast({ title: 'שגיאה', description: 'יש לאשר את תנאי ההשתתפות', variant: 'destructive' });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: 'ההרשמה נשלחה בהצלחה!', description: 'נחזור אליכם תוך 24 שעות עם פרטי תשלום ואישור הרשמה.' });
      setIsSubmitting(false);
      setFormData({
        parentName: '', parentEmail: '', parentPhone: '', childName: '',
        childGrade: '', experience: '', interests: '', agreement: false, updates: false,
      });
    }, 1500);
  };

  return (
    <Layout>
      <section className="hero-bg">
        <div className="container mx-auto px-4 py-16 text-center">
          <span className="tag-chip mb-6"><Sparkles className="w-4 h-4" /> הרשמה לקייטנה</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-4 mb-4">
            צעד אחד <span className="neon-text">לתפוס מקום</span>
          </h1>
          <p className="text-lg text-purple-100/85 max-w-2xl mx-auto">
            מלאו את הפרטים ונחזור אליכם תוך 24 שעות עם כל המידע ופרטי התשלום.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8 max-w-6xl">
          {/* FORM */}
          <div className="lg:col-span-2">
            <div className="glass-card p-6 md:p-8">
              <h2 className="text-2xl font-extrabold text-white mb-1">פרטי הרשמה</h2>
              <p className="text-purple-200/70 text-sm mb-6">כל השדות בכוכבית הם חובה.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-bold text-[#FFD84C] mb-3">פרטי ההורה</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="parentName" className="text-purple-100">שם מלא *</Label>
                      <Input id="parentName" value={formData.parentName} onChange={(e) => handleInputChange('parentName', e.target.value)} placeholder="הכניסו שם מלא" required className="bg-white/5 border-purple-400/30 text-white placeholder:text-purple-300/40" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="parentEmail" className="text-purple-100">אימייל *</Label>
                        <Input id="parentEmail" type="email" value={formData.parentEmail} onChange={(e) => handleInputChange('parentEmail', e.target.value)} placeholder="your@email.com" required className="bg-white/5 border-purple-400/30 text-white placeholder:text-purple-300/40" />
                      </div>
                      <div>
                        <Label htmlFor="parentPhone" className="text-purple-100">טלפון *</Label>
                        <Input id="parentPhone" value={formData.parentPhone} onChange={(e) => handleInputChange('parentPhone', e.target.value)} placeholder="050-000-0000" required className="bg-white/5 border-purple-400/30 text-white placeholder:text-purple-300/40" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-[#FFD84C] mb-3">פרטי המשתתף</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="childName" className="text-purple-100">שם המשתתף *</Label>
                      <Input id="childName" value={formData.childName} onChange={(e) => handleInputChange('childName', e.target.value)} placeholder="שם הילד/ה" required className="bg-white/5 border-purple-400/30 text-white placeholder:text-purple-300/40" />
                    </div>
                    <div>
                      <Label htmlFor="childGrade" className="text-purple-100">כיתה נוכחית *</Label>
                      <Select value={formData.childGrade} onValueChange={(v) => handleInputChange('childGrade', v)}>
                        <SelectTrigger className="bg-white/5 border-purple-400/30 text-white"><SelectValue placeholder="בחרו כיתה" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6">כיתה ו'</SelectItem>
                          <SelectItem value="7">כיתה ז'</SelectItem>
                          <SelectItem value="8">כיתה ח'</SelectItem>
                          <SelectItem value="9">כיתה ט'</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="experience" className="text-purple-100">ניסיון קודם (אופציונלי)</Label>
                      <Input id="experience" value={formData.experience} onChange={(e) => handleInputChange('experience', e.target.value)} placeholder="האם יש ניסיון קודם בתכנות/AI?" className="bg-white/5 border-purple-400/30 text-white placeholder:text-purple-300/40" />
                    </div>
                    <div>
                      <Label htmlFor="interests" className="text-purple-100">תחומי עניין (אופציונלי)</Label>
                      <Input id="interests" value={formData.interests} onChange={(e) => handleInputChange('interests', e.target.value)} placeholder="ספורט, פנטזיה, חידות, מוזיקה..." className="bg-white/5 border-purple-400/30 text-white placeholder:text-purple-300/40" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Checkbox id="agreement" checked={formData.agreement} onCheckedChange={(c) => handleInputChange('agreement', c as boolean)} className="border-purple-400/50 mt-1" />
                    <Label htmlFor="agreement" className="text-sm text-purple-100/85 leading-relaxed">
                      אני מאשר/ת את השתתפות ילדי בקייטנה ומסכים/ה לתנאי ההשתתפות. ההרשמה תאושר רק לאחר ביצוע התשלום. *
                    </Label>
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox id="updates" checked={formData.updates} onCheckedChange={(c) => handleInputChange('updates', c as boolean)} className="border-purple-400/50 mt-1" />
                    <Label htmlFor="updates" className="text-sm text-purple-100/85 leading-relaxed">
                      מעוניין/ת לקבל עדכונים על קייטנות וקורסים עתידיים
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="btn-primary w-full rounded-full py-6 text-base" disabled={isSubmitting}>
                  {isSubmitting ? 'שולח...' : 'שלח הרשמה'}
                </Button>
              </form>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-5">
            <div className="glass-card p-6">
              <h3 className="text-lg font-extrabold text-white mb-4">פרטי הקייטנה</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3"><Calendar className="w-5 h-5 text-[#FFD84C]" /><div><div className="text-purple-200/70">תאריכים</div><div className="font-semibold text-white">13.7–17.7.2025 (א'–ה')</div></div></li>
                <li className="flex gap-3"><Clock className="w-5 h-5 text-[#FFD84C]" /><div><div className="text-purple-200/70">שעות</div><div className="font-semibold text-white">09:00–14:00</div></div></li>
                <li className="flex gap-3"><MapPin className="w-5 h-5 text-[#FFD84C]" /><div><div className="text-purple-200/70">פורמט</div><div className="font-semibold text-white">מקוון בזום</div></div></li>
                <li className="flex gap-3"><Users className="w-5 h-5 text-[#FFD84C]" /><div><div className="text-purple-200/70">קבוצה</div><div className="font-semibold text-white">עד 15 משתתפים</div></div></li>
                <li className="flex gap-3"><CreditCard className="w-5 h-5 text-[#FFD84C]" /><div><div className="text-purple-200/70">מחיר</div><div className="font-bold text-2xl neon-text">1,400 ₪</div></div></li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-extrabold text-white mb-3">מפעיל הקייטנה</h3>
              <p className="text-white font-semibold mb-2">גלעד רביד</p>
              <a href="tel:052-2998444" className="flex items-center gap-2 text-purple-200/85 hover:text-white text-sm"><Phone className="w-4 h-4" /> 052-2998444</a>
              <a href="mailto:Gilad84@gmail.com" className="flex items-center gap-2 text-purple-200/85 hover:text-white text-sm mt-1"><Mail className="w-4 h-4" /> Gilad84@gmail.com</a>
            </div>

            <div className="glass-card p-4 flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#A78BFA]" />
              <div>
                <p className="text-sm font-semibold text-white">תשלום מאובטח</p>
                <p className="text-xs text-purple-200/70">הנתונים שלכם מוגנים</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
