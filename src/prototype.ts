import { TypeInfo, TypeReference } from './meta.model';

export interface PrototypeInfo {
  ref: TypeReference;
  typeInfo: TypeInfo;
}

export interface Prototype<T> extends PrototypeInfo {
  _?: string;
}
