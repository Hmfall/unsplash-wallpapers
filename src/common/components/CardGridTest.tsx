import React, { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ImageList from '@mui/material/ImageList';
import { Photo } from '../../features/photo/types';
import { useAppDispatch } from '../hooks/useTStore';
import { selectPhotos } from '../../features/photo/slice/photosSlice';
import PhotoCard from '../../features/photo/components/PhotoCard';
import { useParams } from 'react-router-dom';

const CardGridTest: FC = () => {
   // const dispatch = useAppDispatch();
   // const { results, isLoading } = useSelector(selectImages);


   return (
      <ImageList
         variant="masonry"
         cols={6}
         gap={20}
      >
         {/*{results.map((photo: Photo, i) => (*/}
         {/*   <PhotoCa1d*/}
         {/*      key={photo.id}*/}
         {/*      photo={photo}*/}
         {/*      // inputRef={lastElRef}*/}
         {/*      isLast={i === results.length - 1 ? true : false}*/}
         {/*   />*/}
         {/*))}*/}
      </ImageList>
   );
};

export default CardGridTest;