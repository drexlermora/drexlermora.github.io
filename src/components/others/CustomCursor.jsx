import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false); // State for hover interaction

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
    };

    document.addEventListener('mousemove', moveCursor);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  // Set hover effects for interactive elements
  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const interactiveElements = document.querySelectorAll('button, a, .cursor-grow');
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor fixed z-[9999] bg-blue-500 w-8 h-8 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out ${
        isHovered ? 'scale-150' : 'scale-100'
      }`}
      style={{
        left: '0px',
        top: '0px',
        position: 'fixed',
        pointerEvents: 'none',
        transform: 'translate3d(0, 0, 0)',
      }}
    />
  );
};

export default CustomCursor;
