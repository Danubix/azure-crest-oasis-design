
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    title: 'Prime Location',
    description: 'Perched on a limestone bluff with panoramic views of the Adriatic Sea and centuries-old olive groves surrounding the property.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 14 4-4"></path>
        <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
      </svg>
    ),
    title: 'Sea-Inspired Design',
    description: 'Blending 17th-century architecture with contemporary interiors that highlight sustainable materials and floor-to-ceiling coastal views.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
        <path d="M12 17h.01"></path>
      </svg>
    ),
    title: 'Personalized Service',
    description: 'Our attentive staff curates bespoke experiences for each guest, from private yacht excursions to chef-guided culinary adventures.'
  }
];

const FeaturesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="section-padding bg-neutral-1" ref={ref}>
      <div className="container-hotel">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display mb-4">Why Azure Crest</h2>
          <p className="text-lg text-neutral-9/80 max-w-3xl mx-auto">
            An all-season retreat that combines historical charm with modern luxury,
            creating an unforgettable coastal experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`card-hotel hover:shadow-lg text-center transition-all duration-700 ease-hotel ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="text-azure">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-display mb-3">{feature.title}</h3>
              <p className="text-neutral-9/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
