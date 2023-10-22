import { useEffect, useRef } from 'react';

// @ts-ignore
export const useObserver = (ref, canLoad, isLoading, callback) => {
   const observer = useRef();

   useEffect(() => {
      if (isLoading) return;
      // @ts-ignore
      if (observer.current) observer.current.disconnect();
// @ts-ignore
      var cb = function (entries, observer) {
         if (entries[0].isIntersecting && canLoad) {
            callback();
         }
      };
      // @ts-ignore
      observer.current = new IntersectionObserver(cb);
      // @ts-ignore
      observer.current.observe(ref.current);
   }, [isLoading]);
};