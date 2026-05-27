import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRefs = useRef([]);
  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const [hoverState, setHoverState] = useState('default'); // default | link | button | text

  useEffect(() => {
    // Detect touch device — hide custom cursor
    if ('ontouchstart' in window) return;
    document.body.classList.add('has-custom-cursor');

    const TRAIL_COUNT = 6;
    const trailPositions = Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 }));

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const updateHoverState = (e) => {
      const el = e.target.closest('a, button, [data-cursor="pointer"], input, textarea, select');
      const textEl = e.target.closest('h1, h2, h3, p, span');
      if (el) {
        if (el.classList.contains('btn') || el.tagName === 'BUTTON') setHoverState('button');
        else setHoverState('link');
      } else if (textEl) {
        setHoverState('text');
      } else {
        setHoverState('default');
      }
    };

    let animId;
    const animate = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (!dot || !ring) { animId = requestAnimationFrame(animate); return; }

      // Smooth follow for ring
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12;

      // Dot follows exactly
      dot.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
      ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;

      // Trail
      trailPositions.forEach((pos, i) => {
        const target = i === 0 ? mouse.current : trailPositions[i - 1];
        pos.x += (target.x - pos.x) * (0.3 - i * 0.035);
        pos.y += (target.y - pos.y) * (0.3 - i * 0.035);
        const el = trailRefs.current[i];
        if (el) {
          el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
          el.style.opacity = `${0.3 - i * 0.045}`;
        }
      });

      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', updateHoverState);
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', updateHoverState);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <div className="custom-cursor-container" aria-hidden="true">
      {/* Trail particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="cursor-trail"
        />
      ))}
      {/* Outer ring */}
      <div ref={ringRef} className={`cursor-ring cursor-${hoverState}`} />
      {/* Inner dot */}
      <div ref={dotRef} className={`cursor-dot cursor-${hoverState}`} />
    </div>
  );
}
