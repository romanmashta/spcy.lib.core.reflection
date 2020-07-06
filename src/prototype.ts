import { TypeInfo } from './meta.model';

export interface Prototype<T> {
  id?: string;
  package: string;
  typeInfo: TypeInfo;
}

export function createInstance<T>(type: Prototype<T>, data: T): T {
  return data;
}
