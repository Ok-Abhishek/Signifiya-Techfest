import React, { useState, useEffect, useRef } from 'react';

const TwoLayerOrbitingSponsors = ({ sponsors = [] }) => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 800, height: 600 });
  const [isMobile, setIsMobile] = useState(false);
  
  // Sample sponsors data for three layers if none provided
  const defaultSponsors = {
    platinum: [
      // { id: 1, name: "TechCorp", image: "/Previous Sponsors 100 x 100/0.png", tier: "Platinum" },
      //{ id: 2, name: "InnovateCo", image: "/Previous Sponsors 100 x 100/0.png", tier: "Platinum" },
      //{ id: 3, name: "FutureTech", image: "/Previous Sponsors 100 x 100/0.png", tier: "Platinum" }
    ],
    gold: [
      { id: 4, name: "DevGroup", image: "/Previous Sponsors 100 x 100/1.png", tier: "Gold" },
      { id: 5, name: "CloudSys", image: "/Previous Sponsors 100 x 100/2.png", tier: "Gold" },
      { id: 6, name: "NetWorks", image: "/Previous Sponsors 100 x 100/3.png", tier: "Gold" },
      { id: 7, name: "DataLabs", image: "/Previous Sponsors 100 x 100/4.png", tier: "Gold" }
    ],
    silver: [
      { id: 8, name: "CodeCraft", image: "/Previous Sponsors 100 x 100/5.png", tier: "Silver" },
      { id: 9, name: "AppStudio", image: "Previous Sponsors 100 x 100/6.png", tier: "Silver" },
      { id: 10, name: "WebSphere", image: "Previous Sponsors 100 x 100/7.png", tier: "Silver" },
      { id: 11, name: "ByteWorks", image: "Previous Sponsors 100 x 100/8.png", tier: "Silver" },
      { id: 12, name: "TechSolutions", image: "Previous Sponsors 100 x 100/9.png", tier: "Silver" },
      { id: 13, name: "DigitalEdge", image: "Previous Sponsors 100 x 100/10.png", tier: "Silver" }
    ]
  };

  // Use provided sponsors or default ones
  const sponsorsList = sponsors.length > 0 
    ? {
        // platinum: sponsors.filter(s => s.tier === "Platinum"),
        gold: sponsors.filter(s => s.tier === "Gold"),
        silver: sponsors.filter(s => s.tier === "Silver")
      }
    : defaultSponsors;
  
  // State to track animation for each layer (different speeds)
  const [rotations, setRotations] = useState({
    // platinum: 0,
    gold: 120,     // Start at 120 degrees offset
    silver: 240    // Start at 240 degrees offset
  });
  
  // Handle responsive sizing and detect mobile
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);
        
        // Make height responsive but maintain aspect ratio
        // Increase height on mobile for better visibility
        setContainerSize({
          width: width,
          height: mobile ? width * 1.2 : Math.min(window.innerHeight * 0.7, width * 0.8)
        });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Animation loop with smoother transitions
  useEffect(() => {
    let animationFrameId;
    let lastTimestamp = 0;
    
    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      
      // Smoother animation with time-based updates
      if (elapsed > 16) { // ~60fps
        setRotations(prev => ({
          platinum: (prev.platinum + 0.05 * elapsed/16) % 360, // Slowest
          gold: (prev.gold + 0.08 * elapsed/16) % 360,         // Medium
          silver: (prev.silver + 0.12 * elapsed/16) % 360      // Fastest
        }));
        lastTimestamp = timestamp;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  
  // Calculate radiuses based on container size and device
  const getRadiusForLayer = (layer) => {
    const smallestDimension = Math.min(containerSize.width, containerSize.height);
    const maxRadius = smallestDimension / (isMobile ? 1.8 : 2.2); // Larger orbits on mobile
    
    // Calculate each orbit's radius proportionally
    switch(layer) {
      case 'platinum': return maxRadius * (isMobile ? 0.4 : 0.4);
      case 'gold': return maxRadius * (isMobile ? 0.65 : 0.65);
      case 'silver': return maxRadius * (isMobile ? 0.9 : 0.9);
      default: return maxRadius * 0.5;
    }
  };
  
  // Calculate uniform item size based on container size
  const getUniformItemSize = () => {
    const smallestDimension = Math.min(containerSize.width, containerSize.height);
    // Larger icons on mobile (10% vs 7% on desktop)
    const baseSize = smallestDimension * (isMobile ? 0.1 : 0.07);
    return Math.max(baseSize, isMobile ? 35 : 30); // Increased minimum size on mobile
  };
  
  // Function to render a single orbit layer
  const renderOrbitLayer = (sponsors, rotation, layer) => {
    const radius = getRadiusForLayer(layer);
    const itemSize = getUniformItemSize();
    
    // For mobile, limit the number of displayed sponsors to prevent crowding
    const displayedSponsors = isMobile && sponsors.length > 4 
      ? sponsors.slice(0, 4) // Show only 4 sponsors per orbit on mobile
      : sponsors;
    
    return displayedSponsors.map((sponsor, index) => {
      // Calculate position on the orbit
      const angle = (rotation + (index * (360 / displayedSponsors.length))) % 360;
      const radians = angle * (Math.PI / 180);
      
      // Calculate x and y positions
      const left = `calc(50% + ${Math.sin(radians) * radius}px)`;
      const top = `calc(50% - ${Math.cos(radians) * radius}px)`;
      
      return (
        <div 
          key={sponsor.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            left, 
            top,
            zIndex: angle > 180 ? 0 : 5,
            transition: 'none' // Remove default transition for smoother animation
          }}
        >
          <div className="bg-[#2D2D62] p-1 sm:p-2 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-transform">
            <img 
              src={sponsor.image} 
              alt={sponsor.name} 
              className="rounded-full h-full object-cover"
              style={{ width: `${itemSize}px`, height: `${itemSize}px` }}
            />
          </div>
          <div className="mt-2 bg-white px-3 py-1.5 rounded-lg shadow-md opacity-0 hover:opacity-100 transition-opacity absolute left-1/2 transform -translate-x-1/2">
            <p className="text-sm font-medium whitespace-nowrap">{sponsor.name}</p>
          </div>
        </div>
      );
    });
  };

  // Calculate center element size based on container
  const getCenterSize = () => {
    const size = Math.min(containerSize.width, containerSize.height) * (isMobile ? 0.35 : 0.25);
    return Math.max(size, isMobile ? 140 : 100); // Larger minimum size on mobile
  };

  return (
    <section className="w-full overflow-hidden py-20 mb-10 flex flex-col items-center justify-center">
      <div className="container  mx-auto text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#8080B3] orbitron">Partners & Sponsors</h2>
        <p className="text-[#8080B3] mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
          Thank you to all the organizations that made this event possible.
        </p>
        
        <div 
          ref={containerRef}
          className="relative mx-auto py-16" // Added vertical padding for more space
          style={{ height: `${containerSize.height}px`, maxWidth: '100%' }}
        >
          {/* Center text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div 
              className="rounded-full bg-[#2D2D62]/20 shadow-lg flex items-center justify-center"
              style={{ width: `${getCenterSize()}px`, height: `${getCenterSize()}px` }}
            >
              <div className="text-center p-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl orbitron font-bold text-[#5D5D9C] uppercase">Past</h3>
                <h3 className="text-2xl sm:text-3xl md:text-4xl orbitron font-bold text-[#5D5D9C] uppercase">Sponsors</h3>
              </div>
            </div>
          </div>
          
          {/* Inner orbit - Platinum sponsors */}
          {renderOrbitLayer(sponsorsList.platinum, rotations.platinum, 'platinum')}
          
          {/* Middle orbit - Gold sponsors */}
          {renderOrbitLayer(sponsorsList.gold, rotations.gold, 'gold')}
          
          {/* Outer orbit - Silver sponsors */}
          {renderOrbitLayer(sponsorsList.silver, rotations.silver, 'silver')}
          
          {/* Orbit paths (visual guides) */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5D5D9C]/30"
            style={{ 
              width: `${getRadiusForLayer('platinum') * 2}px`, 
              height: `${getRadiusForLayer('platinum') * 2}px` 
            }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5D5D9C]/30"
            style={{ 
              width: `${getRadiusForLayer('gold') * 2}px`, 
              height: `${getRadiusForLayer('gold') * 2}px` 
            }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5D5D9C]/30"
            style={{ 
              width: `${getRadiusForLayer('silver') * 2}px`, 
              height: `${getRadiusForLayer('silver') * 2}px` 
            }}
          ></div>
        </div>
        
        <div className="mt-8 sm:mt-16 md:mt-20">
          <button className="bg-[#3D3D82] hover:bg-[#4D4D92] text-white px-6 py-3 orbitron rounded-lg font-semibold transition text-sm sm:text-base">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default TwoLayerOrbitingSponsors;