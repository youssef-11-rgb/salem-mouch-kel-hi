import React, { useState } from 'react';
import { ChevronDown, Mail, Clock, CheckCircle } from 'lucide-react';

const Maple = ({ size = 24, className = "" }) => (
  <i className={`fab fa-canadian-maple-leaf ${className}`} style={{fontSize: size}}></i>
);

const AccordionItem = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setOpen(!open)} 
        className="w-full flex justify-between items-center py-4 text-left font-semibold text-gray-900 hover:text-blue-600 transition"
      >
        {title}
        <ChevronDown 
          className={`w-5 h-5 text-blue-600 transition-transform ${open ? 'rotate-180' : ''}`} 
        />
      </button>

        {open && (
        <div className="pb-4 text-gray-600">
          {content}
        </div>
      )}
    </div>
  );
};

const faqData = [
  { 
    title: "What is included in the $79/month Starter package?", 
    content: "The Starter package includes a 3-page website, mobile responsive design, basic hosting, 1 business email, SSL certificate, monthly updates, and Canadian support. Perfect for new businesses getting started online." 
  },
  { 
    title: "What's the difference between the Professional and Business plans?", 
    content: "The Professional plan ($99/month) includes 5 pages, 3 business emails, contact forms, blog integration, and basic SEO. The Business plan ($149/month) includes 10 pages, 10 business emails, e-commerce (up to 20 products), booking system, and advanced SEO features." 
  },
  { 
    title: "Do I have to update my website myself?", 
    content: "No! We handle all updates for you. This includes WordPress core updates, plugin updates, security patches, and content updates. You just focus on your business while we keep your website running smoothly." 
  },
  { 
    title: "Is my data hosted in Canada?", 
    content: "Yes — we host all websites on Canadian-based servers to ensure fast performance for your Canadian customers and compliance with Canadian data protection laws." 
  },
  { 
    title: "How quickly can you build my website?", 
    content: "Most websites are completed and launched within 7 days. We'll work with you to gather content and requirements, then build and test your site before going live." 
  },
  { 
    title: "Can I cancel my subscription anytime?", 
    content: "Yes, you can cancel your subscription at any time with no penalties. We believe in earning your business every month, not locking you into long-term contracts." 
  },
  { 
    title: "Do you provide ongoing support?", 
    content: "Absolutely! All plans include ongoing support from our Canadian team. You can reach us via email for any questions or issues." 
  },
  { 
    title: "What if I need changes to my website after it's built?", 
    content: "We include monthly content updates with all plans. For larger changes or new features, we can discuss additional work at reasonable rates. We're here to help your business grow online." 
  }
];

const Support = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-red-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5">
          <Maple size={400} className="text-red-600" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Maple size={16} className="mr-2" />
              Canadian Support Team
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Support — <span className="text-blue-600">we're here to help</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find quick answers to common questions or get in touch with our Canadian support team for personalized help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to the most common questions</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
            {faqData.map((faq, i) => (
              <AccordionItem key={i} title={faq.title} content={faq.content} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-xl text-gray-600">Get in touch with our Canadian support team</p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Get help via email within 24 hours</p>
              <a href="mailto:support@northsites.ca" className="text-blue-600 font-semibold hover:underline">
                support@northsites.ca
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Email Support Hours</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center">
                <Clock className="mr-3" size={24} />
                <div className="text-left">
                  <div className="font-semibold">Monday - Friday</div>
                  <div className="text-blue-100">9:00 AM - 6:00 PM EST</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="mr-3" size={24} />
                <div className="text-left">
                  <div className="font-semibold">Response Time</div>
                  <div className="text-blue-100">Within 24 hours guaranteed</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Support;
