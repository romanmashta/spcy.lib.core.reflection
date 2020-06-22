import { TypeInfo } from './meta.model';

export interface SchemaResolver {
  resolve(ref: string): TypeInfo | undefined;

  register(def: TypeInfo): void;
}
