import React from 'react';
import { motion } from 'framer-motion';

const HomeHero = () => {
  const headlineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="relative min-h-[75vh] flex items-center">
      {/* decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-white via-white to-gray-50 -z-10" />

      <div className="container-max mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-7/12">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal leading-tight mb-6"
            initial="hidden"
            animate="visible"
            variants={headlineVariants}
          >
            Sam thought websites cost <span className="text-maple-red line-through">$3000</span>... ☕
          </motion.h1>

          <motion.p className="text-lg text-gray-700 mb-8 max-w-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            ...until he found North Sites. Now his coffee shop website is live — secure, fast, and ready for customers.
            No upfront headaches. We handle hosting, SSL, emails, and maintenance.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="/pricing"
              className="inline-block px-6 py-3 rounded-full bg-tech-blue text-white text-lg font-semibold shadow-lg"
              whileHover={{ scale: 1.03 }}
            >
              Get started — from $79/month
            </motion.a>

            <a href="/contact" className="inline-block px-6 py-3 rounded-full bg-white border border-gray-200 text-charcoal font-semibold">
              Talk to Sales
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-500">Two months free with annual plans.</p>
        </div>

        <div className="lg:w-5/12">
          <div className="rounded-2xl bg-white shadow-xl border border-gray-100 p-6">
            <div className="h-44 rounded-md bg-gradient-to-r from-maple-red/10 to-tech-blue/10 flex items-center justify-center text-4xl">
              ☕ Sam's Coffee Shop
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <p><strong>Built & launched:</strong> 7 days</p>
              <p><strong>Includes:</strong> Hosting, SSL, 5 emails, maintenance</p>
              <p className="mt-3 text-xs text-gray-500 italic">Real small business results — fast and simple.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
