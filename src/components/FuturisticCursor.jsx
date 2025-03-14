import React, { useState, useEffect } from 'react';

const FuturisticCursor = () => {
  // State for cursor position
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // State for cursor visibility (useful for touch devices)
  const [visible, setVisible] = useState(false);
  // State for hover effect
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Add custom CSS to hide the default cursor
    const style = document.createElement('style');
    style.textContent = `
      body * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    // Show cursor on mouse movement
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    // Hide cursor when mouse leaves the window
    const onMouseLeave = () => {
      setVisible(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    
    // Set up hover detection
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, ul,  button, input, select, [role="button"]');
      
      const onMouseOver = () => setIsHovering(true);
      const onMouseOut = () => setIsHovering(false);
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseover', onMouseOver);
        el.addEventListener('mouseout', onMouseOut);
      });
      
      return () => {
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseover', onMouseOver);
          el.removeEventListener('mouseout', onMouseOut);
        });
      };
    };
    
    const cleanupHoverListeners = addHoverListeners();

    // Clean up
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.head.removeChild(style);
      cleanupHoverListeners();
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div 
        className="fixed pointer-events-none z-[100] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div 
          className={`
            w-5 h-5 rounded-full bg-white
            flex items-center justify-center
            transition-transform duration-150 ease-out
            ${isHovering ? 'scale-150' : 'scale-100'}
          `}
        >
          {isHovering && (
            <div className="w-1 h-1 rounded-full bg-black" />
          )}
        </div>
      </div>
      
      {/* Ring effect */}
      <div 
        className={`
          fixed pointer-events-none z-40
          transition-opacity duration-300
          ${isHovering ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-12 h-12 rounded-full border border-cyan-400 animate-ping opacity-70" />
      </div>
    </>
  );
};

// Demo/Example implementation
export default FuturisticCursor