import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah B.',
    company: 'Sarah\'s Bakery, Toronto',
    image: 'https://placehold.co/100x100/EBF8FF/3182CE?text=SB',
    quote: "North Sites is a lifesaver. I'm a baker, not a web designer! My site was ready in days and looks incredible. The $79/month is a steal for this level of service."
  },
  {
    name: 'Mike R.',
    company: 'Retro Rides, Vancouver',
    image: 'https://placehold.co/100x100/FEFCBF/B7791F?text=MR',
    quote: "I was quoted $4000 for a simple gallery site. North Sites built it, hosts it, and handles my emails for a tiny fraction of that. 100% recommend for small biz."
  },
  {
    name: 'Chen L.',
    company: 'Local Landscapes, Calgary',
    image: 'https://placehold.co/100x100/E6FFFA/2C7A7B?text=CL',
    quote: "The team is fantastic. They understood my vision, got my site up fast, and the support is always friendly and local. Proud to be a client."
  },
];

const TestimonialCard = ({ name, company, image, quote, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col justify-between"
    >
      <div className="p-6">
        <Quote className="w-8 h-8 text-tech-blue mb-4" />
        <p className="text-gray-600 italic mb-6">"{quote}"</p>
      </div>
      <div className="bg-gray-50 p-6 flex items-center">
        <img className="w-12 h-12 rounded-full mr-4 border-2 border-tech-blue" src={image} alt={name} 
             onError={(e) => e.currentTarget.src = 'https://placehold.co/100x100/cccccc/333333?text=Img'} />
        <div>
          <h4 className="font-semibold text-charcoal">{name}</h4>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const HomeTestimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-charcoal sm:text-4xl">
            Trusted by Canadian Small Businesses
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't just take our word for it. Here's what our clients say.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              name={item.name}
              company={item.company}
              image={item.image}
              quote={item.quote}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// This is the line that was missing
export default HomeTestimonials;

