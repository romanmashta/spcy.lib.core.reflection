import { TypeInfo, TypeReference } from './meta.model';

export interface PrototypeInfo extends TypeReference {
  typeInfo: TypeInfo;
}

export type Prototype<T> = PrototypeInfo;
