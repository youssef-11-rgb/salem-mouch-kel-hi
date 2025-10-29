import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  { icon: '🔒', title: 'Free SSL Security', description: 'All sites include a secure certificate. Keep customer data safe and improve SEO.' },
  { icon: '📧', title: 'Business Emails', description: 'Professional emails like you@yourbusiness.ca included with plans.' },
  { icon: '🛠️', title: 'Managed WordPress', description: 'We setup, maintain, and update your WordPress site so you don’t have to.' },
  { icon: '🇨🇦', title: 'Canadian Support', description: 'Friendly, local support via email. No offshore call centres.' },
];

const Card = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="p-6 bg-white rounded-xl shadow hover:shadow-2xl border border-gray-100"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-charcoal">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const HomeValue = () => {
  return (
    <section className="py-20 bg-cream-white">
      <div className="container-max mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-charcoal mb-3">You handle the coffee. We handle the code.</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Every package is tailored for small businesses who want a secure, affordable online presence without the tech headache.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => <Card key={f.title} {...f} delay={i * 0.12} />)}
        </div>
      </div>
    </section>
  );
};

export default HomeValue;
