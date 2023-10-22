import { $mockApiHost } from '../../../common/utils/axiosConfig';
import { builderQuery } from '../../../common/utils/builderQuery';
import { ListTopicsReqParams } from '../types';

export const fetchList = async (params: ListTopicsReqParams) => {
   const { data } = await $mockApiHost.get(
      builderQuery<ListTopicsReqParams>({
         url: '/topics',
         params: params,
      }),
   );
   return data;
};

