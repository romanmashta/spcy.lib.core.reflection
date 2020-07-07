import * as r from './reflection';
import { MetaModule, Types as MetaTypes } from './meta.schema';
import { MetaExtensionsModule, Types as MetaExtensionsTypes } from './meta-extensions.schema';

export const IndexModule: r.Module = {
  $id: 'lib.core.reflection',
  $defs: {
    ...MetaModule.$defs,
    ...MetaExtensionsModule.$defs
  }
};

export const Types = {
  ...MetaTypes,
  ...MetaExtensionsTypes
};
