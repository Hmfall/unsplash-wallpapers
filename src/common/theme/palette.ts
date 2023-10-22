export const palette = () => ({
   primary: {
      light: '#f7be60',
      main: '#e0ac56',
      dark: '',
   },
   secondary: {
      light: '#c7bba7',
      main: '#605b53',
      dark: '',
   },
   background: {
      light: '#252423',
      main: '#1c1c1c',
      dark: '#161615',
      accent: '#292724',
   },
});

declare module '@mui/material/styles' {
   interface TypeBackground {
      light?: string;
      main?: string;
      dark?: string;
   }
}