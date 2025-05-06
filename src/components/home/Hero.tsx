
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Calendar } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern z-10"></div>
        <video 
          className="object-cover w-full h-full"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://player.vimeo.com/external/517088397.hd.mp4?s=9cb7a23b5763c8d26ce640cd49593dd83c8f62c9&profile_id=175&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero content */}
      <div className="container-hotel relative z-20 h-full flex flex-col justify-center pt-24">
        <div className={`max-w-2xl transition-all duration-1000 ease-hotel ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display text-white leading-tight mb-6">
            Where the Adriatic<br />Meets Luxury
          </h1>
          <p className="text-lg md:text-xl text-white opacity-90 mb-8">
            Experience unparalleled coastal serenity in our award-winning boutique retreat 
            where heritage whispers through modern luxury.
          </p>
          <Button className="btn-secondary">Discover Our Story</Button>
        </div>
      </div>

      {/* Booking widget */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container-hotel">
          <div className="bg-white rounded-t-hotel shadow-depth-1 p-6 transform translate-y-1">
            <h3 className="font-display text-xl mb-4 text-center">Book Your Stay</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Check In</label>
                <div className="relative">
                  <Input type="date" className="w-full pl-10" />
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Check Out</label>
                <div className="relative">
                  <Input type="date" className="w-full pl-10" />
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Guests</label>
                <Select>
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults, 1 Child</option>
                  <option>2 Adults, 2 Children</option>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="btn-primary w-full">Check Availability</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
