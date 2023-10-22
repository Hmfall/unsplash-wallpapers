import React, { FC, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import Flexbox from '../../../common/components/styled/Flexbox';
import { useAppDispatch, useAppSelector } from '../../../common/hooks/useTStore';
import { fetchTopics, selectTopics } from '../slice/topicsSlice';
import { Topic } from '../types';
import { fetchPhotosByTopic } from '../../photo/slice/actions';

const TopicsHomeTabs: FC = () => {
   const dispatch = useAppDispatch();
   const { results, isLoading } = useAppSelector(selectTopics);

   // useEffect(() => {
   //    dispatch(fetchTopics());
   // }, [dispatch]);

   // const handleSetTargetTopic = (slug: string) => {
   //    dispatch(fetchPhotosByTopic(
   //       slug,
   //    ));
   // };

   if (isLoading) {
      return <Box>{'TopicsPage loading...'}</Box>;
   }

   return (
      <Flexbox>
         <Box component="ul" sx={{ display: 'flex' }}>
            {results.map((topic: Topic) => (
               <Box
                  component="li"
                  key={topic.title}
                  mr={6}
                  // onClick={() => handleSetTargetTopic(topic.slug)}
               >
                  <Typography component="a" variant="h6">
                     {topic.title}
                  </Typography>
               </Box>
            ))}
         </Box>
      </Flexbox>
   );
};

export default TopicsHomeTabs;