
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setHidden(false);
    };

    const mouseLeaveHandler = () => setHidden(true);
    const mouseEnterHandler = () => setHidden(false);
    const mouseDownHandler = () => setClicked(true);
    const mouseUpHandler = () => setClicked(false);

    const linkHoverHandler = () => setLinkHovered(true);
    const linkLeaveHandler = () => setLinkHovered(false);

    // Add event listeners for cursor
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseenter', mouseEnterHandler);
    document.addEventListener('mouseleave', mouseLeaveHandler);
    document.addEventListener('mousedown', mouseDownHandler);
    document.addEventListener('mouseup', mouseUpHandler);

    // Add event listeners for links and buttons
    const linksAndButtons = document.querySelectorAll('a, button, .nav-link, .portfolio-link');
    linksAndButtons.forEach(element => {
      element.addEventListener('mouseenter', linkHoverHandler);
      element.addEventListener('mouseleave', linkLeaveHandler);
    });

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseenter', mouseEnterHandler);
      document.removeEventListener('mouseleave', mouseLeaveHandler);
      document.removeEventListener('mousedown', mouseDownHandler);
      document.removeEventListener('mouseup', mouseUpHandler);

      linksAndButtons.forEach(element => {
        element.removeEventListener('mouseenter', linkHoverHandler);
        element.removeEventListener('mouseleave', linkLeaveHandler);
      });
    };
  }, []);

  // Add additional event listeners for links after component update
  useEffect(() => {
    const refreshLinkListeners = () => {
      const linkHoverHandler = () => setLinkHovered(true);
      const linkLeaveHandler = () => setLinkHovered(false);
      
      const linksAndButtons = document.querySelectorAll('a, button, .nav-link, .portfolio-link');
      linksAndButtons.forEach(element => {
        element.addEventListener('mouseenter', linkHoverHandler);
        element.addEventListener('mouseleave', linkLeaveHandler);
      });
      
      return () => {
        linksAndButtons.forEach(element => {
          element.removeEventListener('mouseenter', linkHoverHandler);
          element.removeEventListener('mouseleave', linkLeaveHandler);
        });
      };
    };
    
    const cleanup = refreshLinkListeners();
    return cleanup;
  }, []);

  const cursorClasses = `hidden md:block fixed pointer-events-none z-50 transition-transform duration-150 
    ${hidden ? 'opacity-0' : 'opacity-100'} 
    ${clicked ? 'scale-90' : ''} 
    ${linkHovered ? 'scale-150' : ''}`;

  return (
    <>
      <div 
        className={`${cursorClasses} w-8 h-8 rounded-full bg-transparent border-2 border-portfolio-blue`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div 
        className={`${cursorClasses} w-2 h-2 rounded-full bg-portfolio-blue`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  );
};

export default CustomCursor;
