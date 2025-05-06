
import { Link } from "react-router-dom";
import { Mail, MapPin, Play } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-9 text-white pt-16 pb-8">
      <div className="container-hotel">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - Hotel Logo and Description */}
          <div>
            <h3 className="font-display text-xl mb-6">AZURE CREST</h3>
            <p className="text-neutral-1 text-sm mb-6">
              Perched on a limestone bluff where the Adriatic's cerulean waves kiss 
              centuries-old olive groves, Azure Crest is an all-season retreat that 
              marries coastal serenity with contemporary design.
            </p>
            <div className="flex space-x-4 text-gold">
              {/* Social Media Icons */}
              <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 14-7.497 14-13.986 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59l-.047-.02z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-display text-lg mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/rooms" className="hover:text-gold transition-colors">Rooms & Suites</Link></li>
              <li><Link to="/dining" className="hover:text-gold transition-colors">Dining</Link></li>
              <li><Link to="/spa" className="hover:text-gold transition-colors">Spa</Link></li>
              <li><Link to="/experiences" className="hover:text-gold transition-colors">Experiences</Link></li>
              <li><Link to="/events" className="hover:text-gold transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Column 3 - More Links */}
          <div>
            <h3 className="font-display text-lg mb-6 text-gold">More</h3>
            <ul className="space-y-3">
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/offers" className="hover:text-gold transition-colors">Special Offers</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-display text-lg mb-6 text-gold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-gold mr-2 mt-1 flex-shrink-0" />
                <span>Adriatic Coast Road 123, Split-Dalmatia County, Croatia 21000</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-gold mr-2 flex-shrink-0" />
                <a href="mailto:info@azurecrest.com" className="hover:text-gold transition-colors">info@azurecrest.com</a>
              </li>
              <li className="flex items-center">
                <Play size={18} className="text-gold mr-2 flex-shrink-0" />
                <a href="#" className="hover:text-gold transition-colors">Watch our story</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
          <p>© {currentYear} Azure Crest Boutique Hotel. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with ♥ for the Adriatic coast</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
