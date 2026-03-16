import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // ─── Colors ───────────────────────────────────────────────────────────
      colors: {
        // Primary — Brand Orange
        primary: {
          DEFAULT: '#F4A261',
          hover: '#E58B3A',
          soft: '#FFE9D5',
        },
        // Backgrounds & Surfaces
        background: '#FFFFFF',
        'surface-warm': '#FFF7ED',
        'surface-muted': '#FFF1E6',
        'surface-inset': '#F9EDE1',
        // Borders
        border: {
          DEFAULT: '#EADFD3',
          strong: '#DFD1C4',
        },
        // Text
        ink: {
          DEFAULT: '#111827',
          strong: '#0B0F1A',
        },
        text: {
          DEFAULT: '#101828',
          muted: '#475467',
          subtle: '#667085',
        },
        // Semantic
        success: '#12B76A',
        warning: '#F79009',
        error: '#F04438',
        info: '#0EA5E9',
      },

      // ─── Typography ───────────────────────────────────────────────────────
      fontFamily: {
        // Use CSS variables injected by next/font/google — falls back to direct name if var not set
        sans: ['var(--font-sans)', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['var(--font-sans)', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '800' }],
        h1: ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.025em', fontWeight: '700' }],
        h2: ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.25', fontWeight: '700' }],
        h3: ['clamp(1.125rem, 2vw, 1.375rem)', { lineHeight: '1.3', fontWeight: '600' }],
        h4: ['1rem', { lineHeight: '1.4', fontWeight: '600' }],
        body: ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        small: ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        caption: ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
        btn: ['0.9375rem', { lineHeight: '1', fontWeight: '600' }],
      },

      // ─── Border Radius ────────────────────────────────────────────────────
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },

      // ─── Spacing ──────────────────────────────────────────────────────────
      spacing: {
        xs: '0.25rem',   // 4px
        sm: '0.5rem',    // 8px
        md: '1rem',      // 16px
        lg: '1.5rem',    // 24px
        xl: '2rem',      // 32px
        '2xl': '3rem',   // 48px
        '3xl': '4rem',   // 64px
      },

      // ─── Shadows ──────────────────────────────────────────────────────────
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.08)',
        md: '0 4px 16px rgba(0,0,0,0.10)',
        lg: '0 10px 15px rgba(0,0,0,0.1)',
        xl: '0 20px 25px rgba(0,0,0,0.15)',
        // focus rings
        'focus-primary': '0 0 0 3px rgba(244, 162, 97, 0.12)',
        'focus-input': '0 0 0 2px rgba(244, 162, 97, 0.2)',
      },

      // ─── Max Width ────────────────────────────────────────────────────────
      maxWidth: {
        prose: '65ch',
        container: '75rem',
        narrow: '52rem',
      },

      // ─── Animations ───────────────────────────────────────────────────────
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '70%': { transform: 'scale(1.1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.015)' },
        },
        countUp: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        arrowSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(4px)' },
        },
        underlineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        progressFill: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width, 0%)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        tabIndicatorSlide: {
          '0%': { left: 'var(--tab-from, 0)' },
          '100%': { left: 'var(--tab-to, 0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease forwards',
        'slide-up': 'slideUp 500ms ease forwards',
        'fade-slide-up': 'fadeSlideUp 500ms ease forwards',
        'scale-in': 'scaleIn 300ms ease forwards',
        'pop-in': 'popIn 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'breathe': 'breathe 4s ease-in-out infinite',
        'slide-in-right': 'slideInRight 300ms ease forwards',
        // Stagger helpers (delay applied via inline style --reveal-delay)
        'reveal': 'fadeSlideUp 500ms ease forwards',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}

export default config
