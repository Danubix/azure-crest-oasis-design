
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'Dining', path: '/dining' },
    { name: 'Spa', path: '/spa' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Offers', path: '/offers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ease-hotel ${
        isScrolled 
          ? 'bg-white shadow-depth-1' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-hotel">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="z-10">
            <h1 className={`font-display text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-azure' : 'text-white'}`}>
              AZURE CREST
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-body text-sm uppercase tracking-wider hover:text-gold transition-colors duration-300 ${
                  isScrolled ? 'text-neutral-9' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="btn-secondary">Book Now</Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden z-10 ${isScrolled ? 'text-neutral-9' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-azure bg-opacity-95 z-40">
          <div className="h-full flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-display text-white text-xl hover:text-gold transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="btn-secondary mt-6" onClick={() => setIsMobileMenuOpen(false)}>
                Book Now
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
