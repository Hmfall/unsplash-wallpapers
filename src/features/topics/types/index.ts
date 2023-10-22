import { Entity, Nullable, OrderByValidValues, PaginationReqParams } from '../../../common/types/common';
import { PhotosReqParams } from '../../photo/types';

export interface Topic extends Entity {
   cover_photo: any;
   current_user_contributions: any;
   description: Nullable<string>;
   ends_at: Nullable<string>;
   featured: boolean;
   links: {
      self: string;
      html: string;
      photos: string;
   };
   only_submissions_after: Nullable<string>;
   owners: any;
   preview_photos: any;
   published_at: string;
   slug: string;
   starts_at: string;
   status: 'open' | 'closed';
   title: string;
   total_current_user_submissions: Nullable<number | string>;
   total_photos: number;
   visibility: string;
   updated_at: string;
}

export interface ListTopicsReqParams extends PaginationReqParams {
   ids?: string;
   order_by: OrderByValidValues;
}