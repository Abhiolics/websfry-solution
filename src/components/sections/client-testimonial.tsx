"use client";

import Image from 'next/image';
import { useState } from 'react';

  const testimonials = [
  {
    id: 1,
    name: 'Abhay Pratap Singh',
    company: 'Founder, Startup Nexus',
    image: '/images/users/user-1.png',
    testimonial:
      'Websfry Solution delivered a fast, secure, and scalable website for our startup. Their attention to detail and modern tech approach really stood out.',
  },
  {
    id: 2,
    name: 'Mritunjay Pathak',
    company: 'CTO, FinEdge Solutions',
    image: '/images/users/user-2.png',
    testimonial:
      'The team at Websfry Solution helped us automate key processes using AI. Smooth execution, clear communication, and strong technical expertise.',
  },
  {
    id: 3,
    name: 'Dileep Patel',
    company: 'Director, Patel Enterprises',
    image: '/images/users/user-3.png',
    testimonial:
      'From UI/UX to backend development, Websfry Solution handled everything professionally. Our app performance improved significantly.',
  },
  {
    id: 4,
    name: 'Ankit Sharma',
    company: 'Product Manager, TechGrow',
    image: '/images/users/user-4.png',
    testimonial:
      'Websfry Solution understands business needs, not just code. Their digital marketing and web strategy helped us increase conversions.',
  },
  {
    id: 5,
    name: 'Rohit Verma',
    company: 'Founder, Verma Digital',
    image: '/images/users/user-1.png',
    testimonial:
      'Security was our biggest concern, and Websfry Solution nailed it. Their cybersecurity practices gave us confidence to scale safely.',
  },
  {
    id: 6,
    name: 'Pooja Mehta',
    company: 'Marketing Lead, BrandCraft',
    image: '/images/users/user-2.png',
    testimonial:
      'The UI/UX designs delivered by Websfry Solution were clean, modern, and user-focused. Our users love the new experience.',
  },
  {
    id: 7,
    name: 'Saurabh Mishra',
    company: 'Operations Head, CloudNova',
    image: '/images/users/user-3.png',
    testimonial:
      'Working with Websfry Solution felt like working with an in-house tech team. Reliable, fast, and always solution-oriented.',
  },
  {
    id: 8,
    name: 'Neha Singh',
    company: 'Co-Founder, EduSpark',
    image: '/images/users/user-2.png',
    testimonial:
      'Websfry Solution helped us launch our platform on time with excellent performance. Their development process is very structured.',
  },
  {
    id: 9,
    name: 'Aman Gupta',
    company: 'CEO, GrowthStack India',
    image: '/images/users/user-3.png',
    testimonial:
      'If you want a tech partner who understands growth, automation, and scalability—Websfry Solution is the right choice.',
  },
];


  export default function TestimonialsSection() {
    const [showAll, setShowAll] = useState(false);

    // Determine which testimonials to display
    const visibleTestimonials = showAll
      ? testimonials
      : testimonials.slice(0, 6);

    return (
      <section className="md:py-28 py-14 relative">
        <div className="wrapper">
          <div>
            <div className="max-w-2xl mx-auto mb-12 text-center">
              <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
                What our users say
              </h2>
              <p className="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
                Unlock the Potential of Innovation. Discover the Advanced AI
                Tools Transforming Your Ideas into Reality with Unmatched
                Precision and Intelligence.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-[72rem] mx-auto">
              {visibleTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>

            {/* Show More Button */}
            <div className="mt-8 text-center relative z-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 px-6 py-3.5 text-sm font-medium text-gray-800 bg-white border border-gray-200 dark:hover:bg-gray-900 rounded-full shadow-theme-xs hover:bg-gray-50 focus:outline-none"
              >
                <span>{showAll ? 'Show less...' : 'Show more...'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gradient overlay when collapsed */}
        {!showAll && (
          <div className="white-gradient h-[264px]  w-full absolute bottom-0"></div>
        )}
      </section>
    );
  }

  // Testimonial Card Component
  function TestimonialCard({
    testimonial,
  }: {
    testimonial: (typeof testimonials)[number];
  }) {
    return (
      <div className="p-2 bg-gray-50 dark:bg-white/5 dark:border-gray-800 dark:hover:border-white/10 border rounded-[20px] border-gray-100 hover:border-primary-200 transition">
        <div className="flex items-center p-3 mb-3 bg-white/90 dark:bg-white/[0.03] rounded-2xl">
          <div>
            <Image
              src={testimonial.image || '/placeholder.svg'}
              alt={testimonial.name}
              width={52}
              height={52}
              className="size-13 object-cover ring-2 ring-white dark:ring-gray-700 mr-4 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
            />
          </div>
          <div>
            <h3 className="text-gray-800 font-base dark:text-white/90">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.company}
            </p>
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03]">
          <p className="text-base leading-6 text-gray-700 dark:text-gray-400">
            {testimonial.testimonial}
          </p>
        </div>
      </div>
    );
  }
