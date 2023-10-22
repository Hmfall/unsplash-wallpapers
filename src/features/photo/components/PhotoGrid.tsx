import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';


import { selectPhotos, selectPhotosFilters, setOrderBy } from '../slice/photosSlice';
import { useAppDispatch, useAppSelector } from '../../../common/hooks/useTStore';
import ImageList from '@mui/material/ImageList';
import { Photo } from '../types';
import PhotoCard from './PhotoCard';

import { Box, Button } from '@mui/material';

const PhotoGrid = () => {
   const dispatch = useAppDispatch();
   const {
      results,
      total_pages,
      isLoading,
      isError,
      filters: { page },
   } = useSelector(selectPhotos);

   const test = () => {
      console.log("123");
      dispatch(setOrderBy('oldest'));
   };

   const test2 = () => {
      console.log("test");
      dispatch(setOrderBy('latest'));
   };

   if (isLoading) {
      return <div>isLoading</div>;
   }

   return (
      <ImageList
         variant="masonry"
         cols={6}
         gap={20}
      >
         {results.map((photo: Photo, i) => (
            <PhotoCard
               key={photo.id}
               photo={photo}
            />
         ))}
         <Box sx={{ width: '100%', height: '1px', background: 'red' }}>
            <Button onClick={test}>
               123
            </Button>
            <Button onClick={test2}>
               latest
            </Button>
         </Box>
      </ImageList>
   );
};
export default PhotoGrid;