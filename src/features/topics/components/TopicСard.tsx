import React, { FC } from 'react';
import { Topic } from '../types/index';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

interface TopicCardProps {
   topic: Topic;
};

const TopicsCard: FC<TopicCardProps> = ({ topic }) => {
   const navigate = useNavigate();

   return (
      <div onClick={() => navigate(`${topic.slug}`)}>
         {topic.title}
         <Outlet/>
      </div>
   );
};

export default TopicsCard;