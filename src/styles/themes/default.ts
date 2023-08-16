export const defaultTheme = {
  white: '#FFFFFF',
  background: '#FAFAFA',
  card: '#F3F2F2',
  input: '#EDEDED',
  button: '#E6E5E5',
  hover: '#D7D5D5',
  label: '#8D8686',
  text: '#574F4D',
  subtitle: '#403937',
  title: '#272221',

  purpleLight: '#EBE5F9',
  purple: '#8047F8',
  purpleDark: '#4B2995',
  yellowLight: '#F1E9C9',
  yellow: '#DBAC2C',
  yellowDark: '#C47F17',


  font: {
    size: {
      title: {
        xs: '1.125rem',
        sm: '1.25rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },

      text: {
        xxs: '.625rem',
        xs: '.75rem',
        sm: '.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        xxl: '1.5rem',
      },
    },
  },

  layout: {
    width: 'min(1120px, 100%)',
    paddingX: '1.5rem',
  },
} as const
