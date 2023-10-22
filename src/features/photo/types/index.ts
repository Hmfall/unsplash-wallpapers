import { Nullable, Entity } from '../../../common/types/common';
import { PaginationReqParams, Tag } from '../../../common/types/common';

export interface PaginatedPhotoResults {
   total: number;
   total_pages: number;
   results: Photo[];
}

export interface Photo extends Entity {
   alt_description?: Nullable<string>;
   blur_hash: Nullable<string>;
   breadcrumbs: any[];
   color: Nullable<string>;
   created_at: string;
   current_user_collections: any[];
   description: Nullable<string>;
   height: number;
   liked_by_user: boolean;
   likes: number;
   links: {
      download: string;
      download_location: string;
      html: string;
      self: string;
   };
   promoted_at: Nullable<string>;
   slug: Nullable<string>;
   sponsorship: Nullable<any>;
   tags: Tag[];
   topic_submissions: Nullable<any>;
   updated_at: string;
   urls: {
      full: string;
      raw: string;
      regular: string;
      small: string;
      thumb: string;
   };
   user: any;
   width: number;
}

export interface PhotosReqParams extends PaginationReqParams {
   query?: Nullable<string>;
   order_by?: Nullable<string>;
   collections?: Nullable<string>;
   content_filter?: Nullable<string>;
   color?: PhotoValidColorValues;
   orientation?: Nullable<string>;
   slug?: string;
}

export type PhotoValidColorValues = 'black_and_white' | 'black' |
   'white' | 'yellow' | 'orange' | 'red' | 'purple' | 'magenta'
   | 'green' | 'teal' | 'blue';

export type PhotoValidOrientationValues = 'landscape' | 'portrait' | 'squarish';

