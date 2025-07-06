import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { 
  Calendar, 
  Clock, 
  Users, 
  CreditCard, 
  Shield, 
  CheckCircle,
  Star,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Monitor
} from 'lucide-react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

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
    updates: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreement) {
      toast({
        title: "שגיאה",
        description: "יש לאשר את תנאי ההשתתפות",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "ההרשמה נשלחה בהצלחה!",
        description: "נחזור אליכם תוך 24 שעות עם פרטי התשלום ואישור ההרשמה",
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        parentName: '',
        parentEmail: '',
        parentPhone: '',
        childName: '',
        childGrade: '',
        experience: '',
        interests: '',
        agreement: false,
        updates: false
      });
    }, 2000);
  };

  const campDetails = {
    price: "1,400₪",
    dates: "13.7.2025 – 17.7.2025",
    days: "ראשון – חמישי", 
    hours: "10:00–14:00",
    format: "מפגשים בזום עם מדריך מומחה",
    groupSize: "עד 15 משתתפים"
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative text-white py-16 px-4" style={{ 
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%), url("/visuals/1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#FFD84C' }}>
            הרשמה לקייטנה
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            מוכנים להתחיל את המסע? מלאו את הפרטים ונחזור אליכם בהקדם עם פרטי התשלום
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
              <a href="#registration-form">
                להרשמה
              </a>
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

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl" style={{ color: '#8B5CF6' }}>פרטי הרשמה</CardTitle>
                <p className="text-gray-600">מלאו את הפרטים הבאים ונחזור אליכם בהקדם</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Parent Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-camp-blue-600">פרטי ההורה</h3>
                    
                    <div>
                      <Label htmlFor="parentName">שם מלא *</Label>
                      <Input
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => handleInputChange('parentName', e.target.value)}
                        placeholder="הכניסו את שמכם המלא"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="parentEmail">אימייל *</Label>
                        <Input
                          id="parentEmail"
                          type="email"
                          value={formData.parentEmail}
                          onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="parentPhone">טלפון *</Label>
                        <Input
                          id="parentPhone"
                          value={formData.parentPhone}
                          onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                          placeholder="050-123-4567"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Child Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-camp-purple-600">פרטי המשתתף</h3>
                    
                    <div>
                      <Label htmlFor="childName">שם המשתתף *</Label>
                      <Input
                        id="childName"
                        value={formData.childName}
                        onChange={(e) => handleInputChange('childName', e.target.value)}
                        placeholder="שם הילד/ה"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="childGrade">כיתה נוכחית *</Label>
                      <Select value={formData.childGrade} onValueChange={(value) => handleInputChange('childGrade', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="בחרו כיתה" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6">כיתה ו'</SelectItem>
                          <SelectItem value="7">כיתה ז'</SelectItem>
                          <SelectItem value="8">כיתה ח'</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="experience">ניסיון קודם (אופציונלי)</Label>
                      <Input
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        placeholder="האם יש ניסיון קודם בתכנות/טכנולוגיה?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="interests">תחומי עניין (אופציונלי)</Label>
                      <Input
                        id="interests"
                        value={formData.interests}
                        onChange={(e) => handleInputChange('interests', e.target.value)}
                        placeholder="משחקים, אפליקציות, רובוטיקה וכו'"
                      />
                    </div>
                  </div>

                  {/* Agreements */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <Checkbox
                        id="agreement"
                        checked={formData.agreement}
                        onCheckedChange={(checked) => handleInputChange('agreement', checked as boolean)}
                      />
                      <Label htmlFor="agreement" className="text-sm leading-relaxed">
                        אני מאשר/ת את השתתפות ילדי בקייטנה ומסכים/ה לתנאי ההשתתפות. 
                        אני מבין/ה שההרשמה תאושר רק לאחר ביצוע התשלום. *
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <Checkbox
                        id="updates"
                        checked={formData.updates}
                        onCheckedChange={(checked) => handleInputChange('updates', checked as boolean)}
                      />
                      <Label htmlFor="updates" className="text-sm leading-relaxed">
                        אני מעוניין/ת לקבל עדכונים על קייטנות וקורסים עתידיים
                      </Label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full font-semibold text-lg py-3"
                    style={{ 
                      backgroundColor: '#FFD84C',
                      color: '#1A1A1A',
                      border: 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = '#EAB100';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = '#FFD84C';
                      }
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "שולח..." : "שלח הרשמה"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar with camp details */}
          <div className="space-y-6">
            {/* Camp Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl" style={{ color: '#8B5CF6' }}>פרטי הקייטנה</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Calendar className="w-5 h-5 text-camp-blue-500" />
                  <div>
                    <p className="font-semibold">תאריכים</p>
                    <p className="text-gray-600">{campDetails.dates}</p>
                    <p className="text-sm text-gray-500">{campDetails.days}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Clock className="w-5 h-5 text-camp-purple-500" />
                  <div>
                    <p className="font-semibold">שעות</p>
                    <p className="text-gray-600">{campDetails.hours}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <MapPin className="w-5 h-5 text-camp-teal-500" />
                  <div>
                    <p className="font-semibold">פורמט</p>
                    <p className="text-gray-600">{campDetails.format}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Users className="w-5 h-5 text-camp-blue-500" />
                  <div>
                    <p className="font-semibold">גודל קבוצה</p>
                    <p className="text-gray-600">{campDetails.groupSize}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CreditCard className="w-5 h-5 text-camp-blue-500" />
                  <div>
                    <p className="font-semibold">מחיר</p>
                    <p className="text-2xl font-bold text-camp-blue-600">{campDetails.price}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Operator Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">מפעיל הקייטנה</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-3">
                  <p className="font-semibold text-lg">גלעד רביד</p>
                  <div className="space-y-2">
                    <a 
                      href="tel:052-2998444" 
                      className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-camp-blue-600 hover:text-camp-blue-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>052-2998444</span>
                    </a>
                    <a 
                      href="mailto:Gilad84@gmail.com" 
                      className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-camp-blue-600 hover:text-camp-blue-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Gilad84@gmail.com</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-green-600">
                  <Shield className="w-5 h-5" />
                  <div>
                    <p className="font-semibold text-sm">תשלום מאובטח</p>
                    <p className="text-xs text-gray-600">הנתונים שלכם מוגנים ומוצפנים</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">תהליך ההרשמה</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">מילוי טופס הרשמה</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-5 h-5 border-2 border-camp-blue-300 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-camp-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-sm">אישור הרשמה ופרטי תשלום</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-500">ביצוע תשלום</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-500">קבלת פרטי הזום</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">צריכים עזרה?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>טלפון:</strong> 050-123-4567</p>
                  <p><strong>אימייל:</strong> info@aicamp.co.il</p>
                  <p><strong>שעות מענה:</strong> א'-ה' 9:00-17:00</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="relative text-white py-16 px-4" style={{ 
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%), url("/visuals/2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#FFD84C' }}>
            הרשמה לקייטנה
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            מוכנים להתחיל את המסע? מלאו את הפרטים ונחזור אליכם בהקדם עם פרטי התשלום
          </p>

          {/* Info Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Calendar className="w-5 h-5" style={{ color: '#2ea41c' }} />
              <span className="text-sm font-medium" style={{ color: '#2ea41c' }}>13.7.2025 - 17.7.2025</span>
            </div>
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-5 h-5" style={{ color: '#a44e1c' }} />
              <span className="text-sm font-medium" style={{ color: '#a44e1c' }}>גילאי 10-14</span>
            </div>
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Monitor className="w-5 h-5" style={{ color: '#921ca4' }} />
              <span className="text-sm font-medium" style={{ color: '#921ca4' }}>מפגשים מקוונים</span>
            </div>
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-5 h-5" style={{ color: '#1c72a4' }} />
              <span className="text-sm font-medium" style={{ color: '#1c72a4' }}>10:00-14:30</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              className="font-semibold text-lg px-8 py-3"
              style={{ 
                backgroundColor: '#FFD84C',
                color: '#1A1A1A',
                border: '0.5px solid #181259'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#EAB100';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFD84C';
              }}
            >
              <a href="#registration-form">
                להרשמה
              </a>
            </Button>
            <Button 
              asChild 
              className="font-semibold text-lg px-8 py-3"
              style={{ 
                backgroundColor: '#FFD84C',
                color: '#1A1A1A',
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
    </Layout>
  );
};

export default Register;
