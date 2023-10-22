import { isAxiosError } from 'axios';

export const builderError = (e: unknown): string => {
   if (isAxiosError(e)) {
      return e.response?.data;
   }
   return (e as Error).message;
};