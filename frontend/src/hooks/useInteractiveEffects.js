import { useRef, useState, useCallback } from 'react';

/**
 * Hook for creating 3D tilt cards that respond to mouse position.
 * Returns a ref and event handlers to attach to the target element.
 */
export function useTiltEffect(intensity = 10) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * intensity;
    const rotateY = (x - 0.5) * intensity;
    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease',
    });
  }, [intensity]);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease',
    });
  }, []);

  return { ref, style, handleMouseMove, handleMouseLeave };
}

/**
 * Hook for spotlight / gradient follower effect inside a container.
 * Returns a CSS gradient that follows the mouse.
 */
export function useSpotlight() {
  const ref = useRef(null);
  const [spotlight, setSpotlight] = useState('');

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSpotlight(`radial-gradient(400px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.06), transparent 60%)`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setSpotlight('');
  }, []);

  return { ref, spotlight, handleMouseMove, handleMouseLeave };
}
