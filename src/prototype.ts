import { TypeInfo } from './meta.model';

export interface Prototype<T> {
  id?: string;
  typeInfo: TypeInfo;
}
