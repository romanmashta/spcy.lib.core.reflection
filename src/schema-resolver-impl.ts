import _ from 'lodash';
import { TypeInfo } from './meta.model';
import { SchemaResolver, Prototypes } from './schema-resolver';

type TypesMap = Map<string, TypeInfo>;
type PackageMap = Map<string, TypesMap>;

class SchemaResolverImpl implements SchemaResolver {
  private repo: PackageMap = new Map<string, TypesMap>();

  resolve = (refPackage: string, ref: string): TypeInfo | undefined => this.repo.get(refPackage)?.get(ref);

  register(refPackage: string, ref: string, def: TypeInfo) {
    let map = this.repo.get(refPackage);
    if (!map) {
      map = new Map<string, TypeInfo>();
      this.repo.set(refPackage, map);
    }
    map.set(ref, def);
  }

  registerTypes(types: Prototypes) {
    _.forEach(types, p => this.register(p.$ref, p.$ref, p.typeInfo));
  }
}

export const SchemaRepository: SchemaResolver = new SchemaResolverImpl();
