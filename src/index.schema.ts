import * as r from './reflection';
import { MetaModule, Types as MetaTypes } from './meta.schema';
import { MetaExtensionsModule, Types as MetaExtensionsTypes } from './meta-extensions.schema';
import { ReferenceModule, Types as ReferenceTypes } from './reference.schema';

export const IndexModule: r.Module = {
  $id: 'lib.core.reflection',
  $defs: {
    ...MetaModule.$defs,
    ...MetaExtensionsModule.$defs,
    ...ReferenceModule.$defs
  }
};

export const Types = {
  ...MetaTypes,
  ...MetaExtensionsTypes,
  ...ReferenceTypes
};
