import { Breakpoint } from '@mui/system/createTheme/createBreakpoints';
import { palette } from './palette';

export const components = () => ({
   MuiContainer: {
      defaultProps: {
         // maxWidth: 'xxl' as Breakpoint,
         maxWidth: '100%',
      },
      styleOverrides: {
         root: {
            padding: '0 15px !important',
         },
      },
   },
   MuiCssBaseline: {
      styleOverrides: {
         html: {
            fontSize: '87.5% !important',
         },
         a: {
            textDecoration: 'none',
            color: 'inherit',
            '&:hover': {
               color: palette().primary.light,
               cursor: 'pointer',
            },
         },
         li: {
            padding: 0,
            margin: 0,
            listStyle: 'none',
         },
         ul: {
            padding: 0,
            margin: 0,
         },
         img: {
            verticalAlign: 'top',
            height: '100%',
            width: '100%',
         },
      },
   },
   MuiPagination: {
      styleOverrides: {
         root: {
            li: {
               background: palette().background.accent,
               marginRight: '2px',
            },
            button: {
               color: palette().secondary.light,
            },
         },
      },
   },
});
