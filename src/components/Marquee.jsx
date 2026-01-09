import { useEffect, useRef } from 'react';

const Marquee = ({ children, speed = 1, direction = 'left', className = '' }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const content = marquee.querySelector('.marquee-content');
    if (!content) return;

    // Clone content for seamless loop
    const clone = content.cloneNode(true);
    clone.classList.add('marquee-clone');
    marquee.appendChild(clone);

    // Calculate animation duration based on content width
    const contentWidth = content.offsetWidth;
    const duration = contentWidth / (speed * 50); // Adjust speed multiplier as needed
    
    // Set CSS custom property for animation duration
    marquee.style.setProperty('--marquee-duration', `${duration}s`);
    marquee.style.setProperty('--marquee-width', `${contentWidth}px`);

    return () => {
      if (clone.parentNode) {
        clone.parentNode.removeChild(clone);
      }
    };
  }, [speed, direction]);

  return (
    <div 
      ref={marqueeRef} 
      className={`overflow-hidden whitespace-nowrap marquee-container ${className}`}
      style={{
        '--marquee-duration': '20s',
        '--marquee-width': '100%'
      }}
    >
      <div className="marquee-content inline-block marquee-animate">{children}</div>
      <style>{`
        .marquee-animate {
          animation: marquee-scroll var(--marquee-duration, 20s) linear infinite;
        }
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * var(--marquee-width, 100%)));
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;

