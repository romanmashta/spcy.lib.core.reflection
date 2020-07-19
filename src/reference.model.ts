import { TypeInfo } from './meta.model';

export interface Reference {
  $type?: TypeInfo;
  $reference: string;
  object?: unknown;
}

export interface ReferenceWithType<T> {
  object?: T;
}

export interface ReferenceSet {
  $type?: TypeInfo;
  $reference: string;
  objects?: {
    [id: string]: unknown;
  };
}

export interface ReferenceSetWithType<T> {
  objects?: T;
}
