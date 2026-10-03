/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* gray-200 */
        input: "var(--color-input)", /* gray-200 */
        ring: "var(--color-ring)", /* green-600 */
        background: "var(--color-background)", /* white */
        foreground: "var(--color-foreground)", /* dark-charcoal */
        surface: "var(--color-surface)", /* gray-50 */
        primary: '#6BAE4B',
        'primary-foreground': '#FFFFFF',
        secondary: {
          DEFAULT: "var(--color-secondary)", /* dark-charcoal */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-600 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* gray-50 */
          foreground: "var(--color-muted-foreground)", /* gray-500 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* slate-700 */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* dark-charcoal */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white */
          foreground: "var(--color-card-foreground)", /* dark-charcoal */
        },
        success: {
          DEFAULT: "var(--color-success)", /* green-600 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* yellow-500 */
          foreground: "var(--color-warning-foreground)", /* dark-charcoal */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-600 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        trust: {
          DEFAULT: "var(--color-trust)", /* blue-500 */
          foreground: "var(--color-trust-foreground)", /* white */
        },
        urgent: {
          DEFAULT: "var(--color-urgent)", /* red-500 */
          foreground: "var(--color-urgent-foreground)", /* white */
        },
        action: {
          DEFAULT: "var(--color-action)", /* green-700 */
          foreground: "var(--color-action-foreground)", /* white */
        },
        'text-primary': "var(--color-text-primary)", /* dark-charcoal */
        'text-secondary': "var(--color-text-secondary)", /* gray-600 */
      },
      fontFamily: {
        headline: ['Inter', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        cta: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        instrument: ['var(--font-instrument)', "'Instrument Serif'", 'serif'],
        barlow: ['var(--font-barlow)', "'Barlow'", 'sans-serif'],
      },
      fontWeight: {
        headline: '700',
        'headline-medium': '600',
        'headline-normal': '400',
        body: '400',
        'body-semibold': '600',
        cta: '600',
        mono: '400',
        'mono-medium': '500',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'elevation-sm': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'elevation-md': '0 4px 16px rgba(0, 0, 0, 0.1)',
        'elevation-lg': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'certification-glow': '0 0 20px rgba(107, 174, 75, 0.3)',
      },
      spacing: {
        'grid-base': '8px',
        'grid-sm': '24px',
        'grid-md': '48px',
        'grid-lg': '96px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}