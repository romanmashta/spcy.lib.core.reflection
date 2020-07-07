import * as r from './reflection';
import { MetaModule, Types as MetaTypes } from './meta.schema';
import { MetaExtensionsModule, Types as MetaExtensionsTypes } from './meta-extensions.schema';

const PackageName = 'lib.core.reflection';

export const IndexModule: r.Module = {
  $id: PackageName,
  $defs: {
    ...MetaModule.$defs,
    ...MetaExtensionsModule.$defs
  }
};

export const Types = {
  ...MetaTypes,
  ...MetaExtensionsTypes
};
