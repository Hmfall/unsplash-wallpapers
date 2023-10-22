import { palette } from './palette';

export const typography = () => ({
   fontFamily: [
      'Nunito Sans', 'sans-serif',
   ].join(','),
   body1: {
      fontSize: '1rem',
      color: palette().primary.main,
   },
   body2: {
      fontSize: '1rem',
      color: palette().secondary.main,
   },
   h2: {
      fontSize: '2rem',
      color: palette().secondary.light,
   },
   subtitle1: {
      fontSize: '1rem',
      color: palette().primary.main,
   }
});
