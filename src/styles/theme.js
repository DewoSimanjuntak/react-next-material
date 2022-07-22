import { createTheme } from '@mui/material/styles';

export const colors = {
  darkGreen: '#003B4A',
  darkGreen75: '#205A63',
  darkGreen50: '#366A70',
  darkGreen25: '#507A7D',
  teal: '#0095A9', //'#E5EDF8',
  teal75: '#3EAFBD',
  teal50: '#7FCAD3',
  teal25: '#BFE$E8',
  peach: '#F2EAE6',
  peach75: '#F2EAE6',
  peach50: '#F9F5F3',
  peach25: '#FDFAF9',
};

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//     button: {
//       background: string
//       color: string
//     }
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//     button?: {
//       background?: string;
//       color?: string;
//     },
//   }
// };


export const primaryTheme = createTheme({
  button: {
    background: colors.teal, // "linear-gradient(89.86deg, #0095A9 -3.29%, #00C6E0 102.48%)",
    color: 'white'
  },
});

export const secondaryTheme = createTheme({
  button: {
    background: 'white',
    color: colors.teal,
    borderColor: "#205A63",
  },
});

export const patientButtonPrimary = createTheme({
  button: {
    background: colors.teal,
    color: 'white'
  },
});
export const patientButtonSecondary = createTheme({
  button: {
    background: 'white',
    color: colors.teal,
    borderColor: "#205A63",
  },
});
export const providerButtonPrimary = createTheme({
  button: {
    background: "darkGray",
    color: 'white'
  },
});
export const providerButtonSecondary = createTheme({
  button: {
    background: 'white',
    color: "darkGray",
    borderColor: "darkGray",
  },
});