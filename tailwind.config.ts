import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'move-to-rt': {
          '0%': {
            transform: 'translate(0px, 0px) rotate(0deg)',
            opacity: '100'
          },
          '33%': {
            transform: 'translate(-23%, 57%) rotate(0deg)',
            opacity: '100'
          },
          '66%': {
            transform: 'translate(-82%, 5%) rotate(0deg)',
            opacity: '100'
          },
          '100%': {
            transform: 'translate(0px, 0px) rotate(0deg)',
            opacity: '100'
          }
        },
        'move-to-dc': {
          '0%': {
            transform: 'translate(0px, 0px) rotate(0deg)',
            opacity: '100'
          },
          '33%': {
            transform: 'translate(-57%, -57%) rotate(0deg)',
            opacity: '100'
          },
          '66%': {
            transform: 'translate(23%, -57%) rotate(0deg)',
            opacity: '100'
          },

          '100%': {
            transform: 'translate(0px, 0px) rotate(0deg)',
            opacity: '100'
          }
        },
        'move-to-lt': {
          '0%': {
            transform: 'translate(0px, 0px) rotate(0deg)',
            opacity: '100'
          },
          '33%': {
            transform: 'translate(82%, -5%) rotate(0deg)',
            opacity: '100'
          },
          '66%': {
            transform: 'translate(57%, 57%) rotate(0deg)',
            opacity: '100'
          },

          '100%': {
            transform: 'translate(0px, 0px) rotate(0deg)',
            opacity: '100'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'move-rt': 'move-to-rt 37s linear infinite ',
        'move-dc': 'move-to-dc 37s linear infinite ',
        'move-lt': 'move-to-lt 37s linear infinite '
      }
    }
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-animate')]
} satisfies Config;

export default config;
