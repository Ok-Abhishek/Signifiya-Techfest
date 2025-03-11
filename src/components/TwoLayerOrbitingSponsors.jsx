import React, { useState, useEffect } from 'react';

const TwoLayerOrbitingSponsors = ({ sponsors = [] }) => {
  // Sample sponsors data for two layers if none provided
  const defaultSponsors = {
    primary: [
      { id: 1, name: "TechCorp", image: "/api/placeholder/120/120", tier: "Gold" },
      { id: 2, name: "InnovateCo", image: "/api/placeholder/120/120", tier: "Gold" },
      { id: 3, name: "FutureTech", image: "/api/placeholder/120/120", tier: "Gold" },
      { id: 4, name: "DevGroup", image: "/api/placeholder/120/120", tier: "Gold" }
    ],
    secondary: [
      { id: 5, name: "CloudSys", image: "/api/placeholder/100/100", tier: "Silver" },
      { id: 6, name: "NetWorks", image: "/api/placeholder/100/100", tier: "Silver" },
      { id: 7, name: "DataLabs", image: "/api/placeholder/100/100", tier: "Silver" },
      { id: 8, name: "CodeCraft", image: "/api/placeholder/100/100", tier: "Silver" },
      { id: 9, name: "AppStudio", image: "/api/placeholder/100/100", tier: "Silver" },
      { id: 10, name: "WebSphere", image: "/api/placeholder/100/100", tier: "Silver" }
    ]
  };

  // Use provided sponsors or default ones
  const sponsorsList = sponsors.length > 0 
    ? {
        primary: sponsors.filter(s => s.tier === "Gold"),
        secondary: sponsors.filter(s => s.tier === "Silver")
      }
    : defaultSponsors;
  
  // State to track animation for each layer (different speeds)
  const [rotations, setRotations] = useState({
    primary: 0,
    secondary: 180 // Start at opposite position
  });
  
  // Animation loop with different speeds for each layer
  useEffect(() => {
    const interval = setInterval(() => {
      setRotations(prev => ({
        primary: (prev.primary + 0.15) % 360,   // Slower
        secondary: (prev.secondary + 0.25) % 360 // Faster
      }));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  // Function to render a single orbit layer
  const renderOrbitLayer = (sponsors, rotation, radius, itemSize) => {
    return sponsors.map((sponsor, index) => {
      // Calculate position on the orbit
      const angle = (rotation + (index * (360 / sponsors.length))) % 360;
      const radians = angle * (Math.PI / 180);
      
      // Calculate x and y positions
      const left = `calc(50% + ${Math.sin(radians) * radius}px)`;
      const top = `calc(50% - ${Math.cos(radians) * radius}px)`;
      
      return (
        <div 
          key={sponsor.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-linear"
          style={{ 
            left, 
            top,
            zIndex: angle > 180 ? 0 : 5
          }}
        >
          <div className="bg-[#1d1d1d] p-2 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-110">
            <img 
              src={sponsor.image} 
              alt={sponsor.name} 
              className="rounded-full object-cover"
              style={{ width: `${itemSize}px`, height: `${itemSize}px` }}
            />
          </div>
          <div className="mt-2 bg-white px-3 py-1 rounded-lg shadow-sm opacity-0 hover:opacity-100 transition-opacity absolute left-1/2 transform -translate-x-1/2">
            <p className="text-xs font-medium whitespace-nowrap">{sponsor.name}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="w-screen overflow-hidden h-screen  flex flex-col items-center justify-center relative">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold mb-2 text-white/50 orbitron">Partners & Sponsors</h2>
        <p className="text-white/50 mb-24 max-w-2xl mx-auto">
          Thank you to all the organizations that made this event possible.
        </p>
        
        <div className="relative h-96 mx-auto" style={{ maxWidth: '700px' }}>
          {/* Center text */}
          <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className=" p-8 rounded-full bg-black/20 shadow-lg w-48 h-48 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-4xl orbitron font-bold text-purple-700 uppercase">Our</h3>
                <h3 className="text-4xl orbitron font-bold text-purple-700 uppercase">Sponsors</h3>
              </div>
            </div>
          </div>
          
          {/* Primary orbit - Gold sponsors */}
          {renderOrbitLayer(sponsorsList.primary, rotations.primary, 160, 60)}
          
          {/* Secondary orbit - Silver sponsors */}
          {renderOrbitLayer(sponsorsList.secondary, rotations.secondary, 260, 50)}
          
          {/* Orbit paths (visual guides) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 w-80 h-80"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 w-96 h-96" style={{ width: '520px', height: '520px' }}></div>
        </div>
        
        <div className="mt-32">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 orbitron rounded-lg font-semibold transition">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default TwoLayerOrbitingSponsors;