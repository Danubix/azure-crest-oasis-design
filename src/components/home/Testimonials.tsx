
import { useInView } from 'react-intersection-observer';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Azure Crest perfectly captures the essence of Adriatic luxury. The infinity pool alone is worth the stay—watching the sunset from there was truly magical.",
    author: "Sarah J., London",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop"
  },
  {
    quote: "From the moment we arrived, every detail was perfect. The chef's market tour and cooking class was the highlight of our Croatian adventure.",
    author: "Michael & David, New York",
    image: "https://images.unsplash.com/photo-1551018612-9715965c6742?w=800&auto=format&fit=crop"
  },
  {
    quote: "The restoration of this historic property is breathtaking. Modern luxury that still honors the building's seafaring past. We've already booked for next summer.",
    author: "Emma L., Berlin",
    image: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=800&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-16 relative bg-azure text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="wave" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 C30,20 70,0 100,10 L100,0 L0,0 Z" fill="#FFFFFF"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)"></rect>
        </svg>
      </div>

      <div className="container-hotel relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display mb-4">Guest Experiences</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Unforgettable moments shared by guests who have experienced the Azure Crest difference.
          </p>
        </div>

        <div className={`transition-all duration-1000 ease-hotel ${
          inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-hotel p-6 h-full flex flex-col">
                    <div className="mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#F2C75C" className="inline-block mr-1">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-lg mb-4 flex-grow italic">"{testimonial.quote}"</blockquote>
                    <footer className="text-gold font-semibold">{testimonial.author}</footer>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 space-x-4">
              <CarouselPrevious className="relative static bg-white/20 hover:bg-white/30 border-none text-white" />
              <CarouselNext className="relative static bg-white/20 hover:bg-white/30 border-none text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
