export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

export interface Entity {
   id: string;
}

export interface Tag {
   type: string;
   title: string;
   source?: any;
}

export interface PaginationReqParams {
   page: number;
   per_page?: number;
}

export type OrderByValidValues = 'featured' | 'latest'
   | 'oldest' | 'position' | 'relevant';
