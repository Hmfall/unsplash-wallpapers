import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../common/hooks/useTStore';
import { fetchPhotosByTopic } from '../../photo/slice/actions';
import PhotoGrid from '../../photo/components/PhotoGrid';
import { selectPhotos } from '../../photo/slice/photosSlice';


const Topic: FC = () => {
   const dispatch = useAppDispatch();
   const { id } = useParams<{ id: string }>();
   // const { filters } = useAppSelector(selectPhotos);
   const { filters: { order_by } } = useAppSelector(selectPhotos);
   console.log(order_by);

   useEffect(() => {
      dispatch(fetchPhotosByTopic({
         page: 1,
         order_by,
         slug: id,
      }));
   }, [dispatch, order_by]);

   return (
      <div>
         <PhotoGrid/>
      </div>
   );
};

export default Topic;