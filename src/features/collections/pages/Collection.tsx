import React, { useEffect } from 'react';
import PhotoGrid from '../../photo/components/PhotoGrid';
import { useAppDispatch } from '../../../common/hooks/useTStore';
import { useParams } from 'react-router-dom';
import { fetchPhotosByCollections } from '../../photo/slice/actions';

const Collection = () => {
   const dispatch = useAppDispatch();
   const { id } = useParams<{ id: string }>();

   useEffect(() => {
      dispatch(fetchPhotosByCollections({
         page: 1,
         collections: id,
      }));
   }, [dispatch]);

   return (
      <div>
         <PhotoGrid/>
      </div>
   );
};

export default Collection;