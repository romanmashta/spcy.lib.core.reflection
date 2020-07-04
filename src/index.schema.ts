import { Module } from './meta.model';
import { MetaSchema } from './meta.schema';
import { MetaExtensionsSchema } from './meta-extensions.schema';

export const IndexSchema: Module = {
  $id: '@spcy/lib.core.reflection',
  $defs: {
    ...MetaSchema.$defs,
    ...MetaExtensionsSchema.$defs
  }
};
