/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#050505',
        surface2: '#0d0d0d',
        accent: '#ff2b2b',
        muted: '#9ca3af',
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 43, 43, 0.18)',
        glowStrong: '0 0 70px rgba(255, 43, 43, 0.28)',
      },
      backgroundImage: {
        'radial-luxury': 'radial-gradient(circle at top, rgba(255,43,43,0.16), transparent 38%), radial-gradient(circle at 80% 12%, rgba(255,255,255,0.08), transparent 18%), radial-gradient(circle at 20% 90%, rgba(255,43,43,0.08), transparent 22%)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(0, -18px, 0) scale(1.03)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        drift: 'drift 10s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
