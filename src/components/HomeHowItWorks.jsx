import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, PencilLine, Rocket } from 'lucide-react';

const steps = [
  {
    icon: PencilLine,
    title: '1. Choose Your Plan',
    description: "Select the package that fits your business needs. No hidden fees, just simple monthly or yearly pricing.",
  },
  {
    icon: Zap,
    title: '2. We Build It All',
    description: "We handle the design, setup, security, and WordPress installation. You just tell us about your business.",
  },
  {
    icon: Rocket,
    title: '3. Launch Your Site',
    description: "In just a few days, your professional, secure website is live and ready for customers. We handle all the updates.",
  },
];

const HowItWorksCard = ({ icon: Icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="bg-tech-blue text-white p-4 rounded-full mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold text-charcoal mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const HomeHowItWorks = () => {
  return (
    <section className="py-20 bg-cream-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-charcoal sm:text-4xl">
            Get Online in 3 Simple Steps
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We handle the website. You handle your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <HowItWorksCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// This is the line that was missing
export default HomeHowItWorks;

