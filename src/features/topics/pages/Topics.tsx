import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../common/hooks/useTStore';
import { fetchTopics, selectTopics } from '../slice/topicsSlice';
import { Topic } from '../types';
import TopicsСard from '../components/TopicСard';
import CardGridTest from '../../../common/components/CardGridTest';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import TopicsCard from '../components/TopicСard';
import { selectPhotos } from '../../photo/slice/photosSlice';

const Topics = () => {
   const dispatch = useAppDispatch();
   const { results, isLoading } = useAppSelector(selectTopics);


   const navigate = useNavigate();

   useEffect(() => {
      dispatch(fetchTopics({
         page: 1,
         order_by: 'position',
      }));
   }, [dispatch]);

   console.log('Topics');
   return (
      <Box>
         <Box>
            <Typography variant="h4">
               Topics
            </Typography>
            <Typography>
               Explore the world through topics of beautiful photos free to use under the Unsplash License.
            </Typography>
         </Box>
         <Box>
            <Box>
               {results.map((topic: Topic) => (
                  <TopicsСard
                     key={topic.id}
                     topic={topic}
                  />
               ))}
            </Box>
         </Box>
      </Box>
   );
};

export default Topics;