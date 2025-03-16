import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, DollarSign, Award } from 'lucide-react';

const EventDetailsPage = ({ selectedEvent, setSelectedEvent }) => {
  // Sample event data structure
  // const eventExample = {
  //   name: "Tech Conference 2025",
  //   image: "/api/placeholder/800/400", // Using placeholder image
  //   timing: "March 15, 2025 • 9:00 AM - 5:00 PM",
  //   location: "Tech Center, San Francisco, CA",
  //   price: "From $99",
  //   prize: "$5,000 Hackathon Prize Pool",
  //   details: "Join us for the biggest tech conference of the year featuring keynotes from industry leaders, hands-on workshops, networking opportunities, and more!"
  // };

  if (!selectedEvent) return null;

  return (
    <motion.div 
      className="fixed top-0 z-10 left-0 w-screen h-screen flex items-center justify-center bg-black/70  bg-opacity-70 p-4 overflow-y-auto"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
    >
      <motion.div 
        className="bg-[#1d1d1d] text-gray-800 rounded-lg max-w-2xl w-full shadow-xl overflow-hidden"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {/* Event Image */}
        <div className="w-full h-64 bg-gray-200 relative">
          <img 
            src={selectedEvent.img || "/api/placeholder/800/400"} 
            alt={selectedEvent.name} 
            className="w-full h-full object-cover"
          />
          <button 
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
            onClick={() => setSelectedEvent(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Event Content */}
        <div className="p-6 text-white">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-6 orbitron">{selectedEvent.name}</h2>
          
          {/* Event Info Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-2">
              <Clock className="text-blue-800 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-sm text-gray-500">TIMING</h3>
                <p>{selectedEvent.timing || "TBA"}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <MapPin className="text-blue-800 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-sm text-gray-500">LOCATION</h3>
                <p>{selectedEvent.location || "TBA"}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <DollarSign className="text-blue-800 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-sm text-gray-500">PRICE</h3>
                <p>{selectedEvent.price || "Free"}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <Award className="text-blue-800 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-sm text-gray-500">PRIZE</h3>
                <p>{selectedEvent.prize || "N/A"}</p>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div>
            <h3 className="font-bold text-lg text-white mb-2">About This Event</h3>
            <p className="text-white">{selectedEvent.details}</p>
          </div>
          
          {/* Register Button */}
          <div className="mt-6">
            <button className="bg-bluetext-blue-800 orbitron hover:bg-purple-700 transition text-white px-6 py-3 rounded-lg w-full font-semibold">
              Register Now
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventDetailsPage;