
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // In a real implementation, this would call an API
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail('');
  };

  return (
    <section ref={ref} className="py-16 bg-neutral-1">
      <div className="container-hotel">
        <div className={`bg-azure rounded-hotel overflow-hidden transition-all duration-1000 ease-hotel ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-display text-white mb-4">
                Stay Inspired
              </h2>
              <p className="text-white/90 mb-6">
                Subscribe to receive exclusive offers, insider travel tips, and invitations 
                to our seasonal events. Your journey with Azure Crest continues.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-white/20 border-white/30 text-white placeholder:text-white/70 focus-visible:ring-gold"
                />
                <Button type="submit" className="btn-secondary whitespace-nowrap">
                  Subscribe
                </Button>
              </form>
              <p className="text-white/80 text-xs mt-4">
                By subscribing, you agree to our privacy policy. We never share your information.
              </p>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop" 
                alt="Azure Crest Beach" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
