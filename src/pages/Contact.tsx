
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
              צרו קשר
            </h1>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Mail className="w-8 h-8 mx-auto mb-4 text-camp-blue-600" />
                    <h3 className="font-semibold text-lg mb-2">אימייל</h3>
                    <p className="text-gray-600">info@ai-camp.co.il</p>
                  </div>
                  <div className="text-center">
                    <Phone className="w-8 h-8 mx-auto mb-4 text-camp-blue-600" />
                    <h3 className="font-semibold text-lg mb-2">טלפון</h3>
                    <p className="text-gray-600">050-1234567</p>
                  </div>
                  <div className="text-center">
                    <MessageCircle className="w-8 h-8 mx-auto mb-4 text-camp-blue-600" />
                    <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                    <p className="text-gray-600">050-1234567</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button 
                    className="font-semibold text-lg px-8 py-3"
                    style={{ 
                      backgroundColor: '#FFD84C',
                      color: '#1A1A1A',
                      border: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#EAB100';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#FFD84C';
                    }}
                  >
                    שלחו הודעה
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
