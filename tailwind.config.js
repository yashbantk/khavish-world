/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#2C2C2C',
        primary: {
          DEFAULT: '#D4AF37',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F8F8F8',
          foreground: '#2C2C2C',
        },
        muted: {
          DEFAULT: '#F5F5F5',
          foreground: '#666666',
        },
        accent: {
          DEFAULT: '#D4AF37',
          foreground: '#FFFFFF',
        },
        destructive: '#DC2626',
        border: '#E5E5E5',
        input: '#F5F5F5',
        ring: '#D4AF37',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#2C2C2C',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#2C2C2C',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        heading: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        body: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: '0.625rem',
        md: 'calc(0.625rem - 2px)',
        sm: 'calc(0.625rem - 4px)',
      },
    },
  },
  plugins: [],
}

