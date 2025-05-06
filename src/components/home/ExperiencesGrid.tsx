
import { useInView } from 'react-intersection-observer';
import { Button } from "@/components/ui/button";

const experiences = [
  {
    name: "Cliff-Edge Infinity Pool",
    description: "Freshwater mirrored against an endless horizon, our signature infinity pool seems to blend seamlessly with the Adriatic Sea.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop"
  },
  {
    name: "Thalasso Spa & Hammam",
    description: "Indulge in mineral-rich seawater therapies and organic lavender scrubs in our award-winning wellness sanctuary.",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&auto=format&fit=crop"
  },
  {
    name: "Culinary Atelier",
    description: "Join our chef for morning market tours followed by a six-course degustation paired with estate vineyard wines.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745adc4b?w=800&auto=format&fit=crop"
  },
  {
    name: "Private Yacht Excursions",
    description: "Sail to hidden coves along the Dalmatian coast with a personal sommelier and snorkel guide aboard our luxury vessel.",
    image: "https://images.unsplash.com/photo-1593351415075-3bac9f45c877?w=800&auto=format&fit=crop"
  }
];

const ExperiencesGrid = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="section-padding bg-neutral-1">
      <div className="container-hotel">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display mb-4">Signature Experiences</h2>
          <p className="text-lg text-neutral-9/80 max-w-3xl mx-auto">
            Curated adventures and indulgences that showcase the best of coastal Croatian luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className={`overflow-hidden rounded-hotel relative group transition-all duration-1000 ease-hotel ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-96">
                <img 
                  src={experience.image} 
                  alt={experience.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-xl md:text-2xl font-display text-white mb-2">{experience.name}</h3>
                  <p className="text-white/80 mb-4 max-w-md">{experience.description}</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-neutral-9">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary">View All Experiences</Button>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesGrid;
