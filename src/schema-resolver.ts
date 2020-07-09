import * as cr from './meta.model';
import { PrototypeInfo } from './prototype';

export interface Prototypes {
  [name: string]: PrototypeInfo;
}

export interface SchemaResolver {
  resolve(ref: cr.TypeReference): cr.TypeInfo | undefined;

  register(ref: cr.TypeReference, def: cr.TypeInfo): void;

  registerTypes(types: Prototypes): void;
}
