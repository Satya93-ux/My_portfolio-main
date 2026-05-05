import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursorDot || !cursorOutline) return;
    
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      cursorDot.style.display = 'none';
      cursorOutline.style.display = 'none';
      return;
    }
    
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      cursorOutline.style.left = outlineX + 'px';
      cursorOutline.style.top = outlineY + 'px';
      requestAnimationFrame(animateOutline);
    };
    animateOutline();
    
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, .project-card, .skill-card, .video-card, .filter-btn, .nav-toggle'
    );
    
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursorDot.classList.add('active');
        cursorOutline.classList.add('active');
      });
      el.addEventListener('mouseleave', () => {
        cursorDot.classList.remove('active');
        cursorOutline.classList.remove('active');
      });
    });
    
    const handleMouseDown = () => {
      cursorDot.classList.add('clicking');
      cursorOutline.classList.add('clicking');
    };
    const handleMouseUp = () => {
      cursorDot.classList.remove('clicking');
      cursorOutline.classList.remove('clicking');
    };
    
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </>
  );
};

export default CustomCursor;
