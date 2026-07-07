import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export function MouseGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 140, damping: 26, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 140, damping: 26, mass: 0.4 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX - 180);
      y.set(event.clientY - 180);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [x, y]);

  return (
    <motion.div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <motion.div
        className="absolute h-[360px] w-[360px] rounded-full blur-3xl"
        style={{
          x: springX,
          y: springY,
          background: 'radial-gradient(circle, rgba(255,43,43,0.24), rgba(255,43,43,0.04) 42%, transparent 72%)',
        }}
      />
    </motion.div>
  );
}
