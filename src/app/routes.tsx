import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import AppLayout from './layouts/AppLayout';
import Home from './home/Home';
import Topics from '../features/topics/pages/Topics';
import Topic from '../features/topics/pages/Topic';
import CollectionsPage from '../features/collections/pages/CollectionsPage';
import Collection from '../features/collections/pages/Collection';

export const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<AppLayout/>}>
         <Route index element={<Home/>}/>
         <Route path="/topics" element={<Topics/>}/>
         <Route path="/topics/:id" element={<Topic/>}/>
         <Route path="/collections" element={<CollectionsPage/>}/>
         <Route path="/collections/:id" element={<Collection/>}/>
      </Route>
   ),
);
