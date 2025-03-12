import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const EventFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 w-full z-10 relative bottom-0 left-0 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Event Info */}
          <div >
            <div className=' flex items-center gap-3'>
            <img 
              src="/img.png" 
              alt="Event Logo" 
              className="h-12 mb-4"
            />
            <h3 className="text-2xl font-bold mb-4 orbitron">Signifiya 2k25</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Join us for the most anticipated event of the year featuring amazing speakers, workshops, and networking opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">About</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Schedule</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Speakers</a></li> */}
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Sponsors</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Venue</a></li> */}
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Register</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 text-purple-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">Adamas University, Adamas Knowledge City, Barasat - Barrackpore Road, Jagannathpur, Kolkata, West Bengal 700126</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-purple-500 flex-shrink-0" size={18} />
                <a href="tel:+123456789" className="text-gray-400 hover:text-purple-400 transition"> +91-7085431394 </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-purple-500 flex-shrink-0" size={18} />
                <a href="mailto:info@event.com" className="text-gray-400 hover:text-purple-400 transition">abhishek85431@gmail.com</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          {/* <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter to get the latest updates about the event.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500"
              />
              <button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Signifiya 2k2k. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EventFooter;