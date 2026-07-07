import { motion } from 'framer-motion';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type CommonProps = {
  children: ReactNode;
  className?: string;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

const baseClass =
  'group inline-flex items-center justify-center gap-3 rounded-full border border-white/12 px-6 py-3 text-sm font-medium transition-colors duration-300';

const MotionButton = motion.button as unknown as React.ComponentType<any>;
const MotionLink = motion.a as unknown as React.ComponentType<any>;

export function GlowButton({ children, className = '', ...props }: ButtonProps) {
  return (
    <MotionButton
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClass} bg-white text-black hover:bg-[#f4f4f4] ${className}`}
      {...props}
    >
      {children}
    </MotionButton>
  );
}

export function GlowLink({ children, className = '', ...props }: LinkProps) {
  return (
    <MotionLink
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClass} bg-transparent text-white hover:border-white/24 hover:bg-white/5 ${className}`}
      {...props}
    >
      {children}
    </MotionLink>
  );
}
