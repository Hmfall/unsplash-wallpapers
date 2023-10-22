import { $mockApiHost } from '../../../common/utils/axiosConfig';
import { PhotosReqParams } from '../types';
import { builderQuery } from '../../../common/utils/builderQuery';

export const fetchBySearch = async (params: PhotosReqParams) => {
   const { data } = await $mockApiHost.get(
      builderQuery<PhotosReqParams>({
         url: '/search/photos',
         params: params,
      }),
   );
   return data;
};

export const fetchEditorialFeed = async (params: PhotosReqParams) => {
   const { data } = await $mockApiHost.get(
      builderQuery<PhotosReqParams>({
         url: '/photos',
         params: params,
      }),
   );
   return data;
};

export const fetchByTopic = async (params: PhotosReqParams) => {
   const { slug } = params;
   const { data } = await $mockApiHost.get(
      builderQuery<PhotosReqParams>({
         url: `/topics/${slug}/photos`,
         params: params,
      }),
   );
   return data;
};

export const fetchByCollections = async (params: PhotosReqParams) => {
   const { collections } = params;
   const { data } = await $mockApiHost.get(
      builderQuery<PhotosReqParams>({
         url: `/collections/${collections}/photos`,
         params: params,
      }),
   );
   return data;
};