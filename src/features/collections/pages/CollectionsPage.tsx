import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../common/hooks/useTStore';
import { useSelector } from 'react-redux';
import { fetchCollections, selectCollections } from '../slice/collectionsSlice';
import { Collection } from '../types';
import CollectionCard from '../components/CollectionCard';

const CollectionsPage = () => {
   const dispatch = useAppDispatch();
   const { page, results, isLoading } = useSelector(selectCollections);

   useEffect(() => {
      dispatch(fetchCollections({
         page: 1,
      }));
   }, []);

   if (!isLoading) {
      console.log(results);
   }

   return (
      <div>
         {results.map((collection: Collection) => (
            <CollectionCard
               key={collection.id}
               collection={collection}
            />
         ))}
      </div>
   );
};

export default CollectionsPage;