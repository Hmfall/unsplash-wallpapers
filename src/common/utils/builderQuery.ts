import { CLIENT_ID } from '../../common/constants/index';
//https://youtu.be/pwcpXge3dEA?t=10122
interface queryProps<T> {
   url: string;
   params: T;
}

export const builderQuery = <T>({ url, params }: queryProps<T>) => {
   let queryString: string = `${url}?`;

   for (const key in params) {
      queryString = queryString.concat(
         String(key), '=', String(params[key]), '&',
      );
   }

   return queryString.concat(CLIENT_ID);
};