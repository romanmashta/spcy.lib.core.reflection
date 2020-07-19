import { TypeInfo } from './meta.model';

export interface Reference {
  $type?: TypeInfo;
  $ref?: string;
  object?: unknown;
}

export interface ReferenceWithType<T> extends Reference {
  object?: T;
}

export interface ReferenceSet {
  $type?: TypeInfo;
  $ref?: string;
  objects?: {
    [id: string]: unknown;
  };
}

export interface ReferenceSetWithType<T extends { [id: string]: T }> extends ReferenceSet {
  objects?: T;
}
