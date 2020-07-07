import _ from 'lodash';
import { TypeInfo } from './meta.model';
import { SchemaResolver, Prototypes } from './schema-resolver';

type TypesMap = Map<string, TypeInfo>;
type PackageMap = Map<string, TypesMap>;

class SchemaResolverImpl implements SchemaResolver {
  private repo: PackageMap = new Map<string, TypesMap>();

  resolve = (packageRef: string, ref: string): TypeInfo | undefined => this.repo.get(packageRef)?.get(ref);

  register(packageRef: string, ref: string, def: TypeInfo) {
    let map = this.repo.get(packageRef);
    if (!map) {
      map = new Map<string, TypeInfo>();
      this.repo.set(packageRef, map);
    }
    map.set(ref, def);
  }

  registerTypes(types: Prototypes) {
    _.forEach(types, p => p.id && this.register(p.package, p.id, p.typeInfo));
  }
}

export const SchemaRepository: SchemaResolver = new SchemaResolverImpl();
