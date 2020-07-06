import * as r from './index.model';
import { MetaModule } from './meta.schema';
import { MetaExtensionsModule } from './meta-extensions.schema';

export const IndexModule: r.Module = {
  $id: 'lib.core.reflection',
  $defs: {
    ...MetaModule.$defs,
    ...MetaExtensionsModule.$defs
  }
};
