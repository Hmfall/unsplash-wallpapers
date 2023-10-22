import React, { FC, useEffect } from 'react';
import { fetchTopics } from '../../features/topics/slice/topicsSlice';
import { useAppDispatch } from '../../common/hooks/useTStore';

import PhotoGrid from '../../features/photo/components/PhotoGrid';
import TopicsHomeTabs from '../../features/topics/components/TopicsHomeTabs';

const Home: FC = () => {


   return (
      <div>
         {/*<TopicsHomeTabs/>*/}
         <PhotoGrid/>
      </div>
   );
};

export default Home;