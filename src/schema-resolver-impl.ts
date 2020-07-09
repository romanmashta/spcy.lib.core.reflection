import _ from 'lodash';
import { TypeInfo } from './meta.model';
import { SchemaResolver, Prototypes } from './schema-resolver';
import * as cr from './meta.model';

type TypesMap = Map<string, TypeInfo>;
type PackageMap = Map<string, TypesMap>;

class SchemaResolverImpl implements SchemaResolver {
  private repo: PackageMap = new Map<string, TypesMap>();

  resolve = (ref: cr.TypeReference): TypeInfo | undefined => {
    const type = this.repo.get(ref.$refPackage)?.get(ref.$ref);
    return type;
  };

  register(ref: cr.TypeReference, def: TypeInfo) {
    let map = this.repo.get(ref.$refPackage);
    if (!map) {
      map = new Map<string, TypeInfo>();
      this.repo.set(ref.$refPackage, map);
    }
    map.set(ref.$ref, def);
  }

  registerTypes(types: Prototypes) {
    _.forEach(types, p => this.register(p, p.typeInfo));
  }
}

export const SchemaRepository: SchemaResolver = new SchemaResolverImpl();
