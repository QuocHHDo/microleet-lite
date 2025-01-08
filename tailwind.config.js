/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],

  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '.visualization-container': {
              margin: '2rem 0',
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
            },

            svg: {
              display: 'block',
              margin: '0 auto',
            },

            pre: {
              backgroundColor: 'transparent',
              padding: '0',
              margin: '0',
              borderRadius: '0',
            },

            code: {
              backgroundColor: 'hsl(var(--code-inline-background))',
              color: 'hsl(var(--code-inline-foreground))',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
              fontFamily: 'var(--font-mono)',
            },

            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },

            '.code-block': {
              backgroundColor: 'hsl(var(--code-block-background))',
              borderRadius: 'var(--radius)',
              margin: '1.5rem 0',
            },
          },
        },
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },

        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },

        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },

        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },

        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },

        code: {
          outer: 'hsl(var(--code-block-background))',
          inner: 'hsl(var(--code-background))',
          foreground: 'hsl(var(--code-foreground))',
          syntax: {
            comment: 'hsl(var(--code-comment))',
            string: 'hsl(var(--code-string))',
            number: 'hsl(var(--code-number))',
            keyword: 'hsl(var(--code-keyword))',
            function: 'hsl(var(--code-function))',
            variable: 'hsl(var(--code-variable))',
            operator: 'hsl(var(--code-operator))',
          },
        },
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },

  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
