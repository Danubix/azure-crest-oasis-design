
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const rooms = [
  {
    name: "Deluxe Sea View Room",
    description: "Wake up to panoramic Adriatic vistas in our spacious deluxe rooms featuring custom terrazzo floors and a private balcony.",
    price: "From €350 per night",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop"
  },
  {
    name: "Olive Grove Suite",
    description: "Nestled among ancient olive trees, these expansive suites offer indoor-outdoor living with a private garden terrace.",
    price: "From €520 per night",
    image: "https://images.unsplash.com/photo-1587985064135-0366536eab42?w=800&auto=format&fit=crop"
  },
  {
    name: "Captain's Villa",
    description: "Our signature two-bedroom villa features original stone walls, a private infinity plunge pool and dedicated butler service.",
    price: "From €1,200 per night",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop"
  },
  {
    name: "Heritage Loft",
    description: "Located in the hotel's historic tower with 360° views, featuring exposed beams and a spectacular copper soaking tub.",
    price: "From €480 per night",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop"
  }
];

const RoomsCarousel = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-hotel">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display mb-4">Rooms & Suites</h2>
          <p className="text-lg text-neutral-9/80 max-w-3xl mx-auto">
            Each of our accommodations offers a unique blend of historical character
            and contemporary comfort with stunning views.
          </p>
        </div>

        <div className={`transition-all duration-1000 ease-hotel ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}>
          <Carousel className="w-full">
            <CarouselContent>
              {rooms.map((room, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="card-hotel h-full flex flex-col overflow-hidden">
                    <div className="h-64 overflow-hidden rounded-t-hotel">
                      <img 
                        src={room.image} 
                        alt={room.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-display mb-2">{room.name}</h3>
                      <p className="text-neutral-9/80 mb-4 flex-grow">{room.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-azure font-semibold">{room.price}</span>
                        <Button variant="outline" className="border-azure text-azure hover:bg-azure hover:text-white">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 space-x-4">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
          
          <div className="text-center mt-10">
            <Button className="btn-primary">View All Accommodations</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsCarousel;
