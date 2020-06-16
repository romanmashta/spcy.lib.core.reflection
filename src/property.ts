export interface Meta {
  minimum?: number;
  maximum?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

export type property<T, E extends Meta = Meta> = T;
