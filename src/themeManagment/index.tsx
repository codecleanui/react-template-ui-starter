
import { MantineThemeOverride, rem } from '@mantine/core';
export const myTheme: MantineThemeOverride = {
  colorScheme: 'light',
  defaultRadius: 0,
  fontFamily: 'Soehne, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { 
    fontFamily: 'Greycliff CF, sans-serif' 
  },
  globalStyles: (theme) => ({
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },

    body: {
      ...theme.fn.fontStyles(),
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      lineHeight: theme.lineHeight,

    },

    '.your-class': {
      backgroundColor: 'red',
    },

    '#your-id > [data-active]': {
      backgroundColor: 'pink',
    },
  }),
  components: {

  },
  colors: {
    brandPrimaryColor: [
      '#e4f4ff',
      '#bedcf3',
      '#96c5e8',
      '#6eaedf',
      '#4997d6',
      '#327dbd',
      '#266193',
      '#1a466a',
      '#0c2a41',
      '#000f1a',
    ],
    "brand": [
      "#0ca59d",
      "#d3f9d8",
      "#b2f2bb",
      "#8ce99a",
      "#69db7c",
      "#51cf66",
      "#40c057",
      "#37b24d",
      "#2f9e44",
      "#2b8a3e"
    ],
    'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
    'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
  },
  primaryColor: 'brandPrimaryColor',
  primaryShade: {
    light: 3,
    dark: 7
  },
};

