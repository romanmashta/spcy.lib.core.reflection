import { TypeInfo } from './meta.model';

export interface PrototypeInfo {
  id?: string;
  package: string;
  typeInfo: TypeInfo;
}

export type Prototype<T> = PrototypeInfo;
