import { TypeInfo } from './meta.model';
import { PrototypeInfo } from './prototype';

export interface Prototypes {
  [name: string]: PrototypeInfo;
}

export interface SchemaResolver {
  resolve(packageRef: string, ref: string): TypeInfo | undefined;

  register(packageRef: string, ref: string, def: TypeInfo): void;

  registerTypes(types: Prototypes): void;
}
