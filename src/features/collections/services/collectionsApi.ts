import { PhotosReqParams } from '../../photo/types';
import { $mockApiHost } from '../../../common/utils/axiosConfig';
import { builderQuery } from '../../../common/utils/builderQuery';
import { PaginationReqParams } from '../../../common/types/common';

export const fetchList = async (params: PaginationReqParams) => {
   const { data } = await $mockApiHost.get(
      builderQuery<PaginationReqParams>({
         url: '/collections',
         params: params,
      }),
   );
   return data;
};