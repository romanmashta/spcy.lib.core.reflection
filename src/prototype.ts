import { TypeInfo, TypeReference } from './meta.model';

export interface PrototypeInfo extends TypeReference {
  typeInfo: TypeInfo;
}

export interface Prototype<T> extends PrototypeInfo {
  _?: string;
}
