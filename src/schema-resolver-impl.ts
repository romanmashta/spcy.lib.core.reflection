import _ from 'lodash';
import { TypeInfo } from './meta.model';
import { SchemaResolver, Prototypes } from './schema-resolver';
import * as cr from './meta.model';

type TypesMap = Map<string, TypeInfo>;
type PackageMap = Map<string, TypesMap>;

class SchemaResolverImpl implements SchemaResolver {
  private repo: PackageMap = new Map<string, TypesMap>();

  createGenericType = (type: cr.ObjectType | cr.TypeReference | cr.AllOf, typeArguments: TypeInfo[]): TypeInfo => {
    if (type.$typeArguments) {
      const map = _.zipObject(type.$typeArguments, typeArguments);
      const genericType = _.cloneDeepWith(type, v => {
        if (cr.isTypeReference(v) && map[v.$ref]) {
          return map[v.$ref];
        }
        return undefined;
      });
      return genericType;
    }
    return type;
  };

  resolve = (ref: cr.TypeReference): TypeInfo | undefined => {
    const packageRepo = this.repo.get(ref.$refPackage);
    const targetType = packageRepo?.get(ref.$ref);
    if (!ref.$refArguments) {
      return targetType;
    }
    if (!packageRepo || !targetType) return undefined;

    const type = packageRepo.get(`${ref.$ref}.${ref.$refArguments}`);
    if (type) return type;
    if (cr.isObjectType(targetType) || cr.isTypeReference(targetType) || cr.isAllOf(targetType)) {
      const genericType = this.createGenericType(targetType, ref.$arguments || []);
      packageRepo.set(ref.$refArguments, genericType);
      return genericType;
    }
    return undefined;
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
    _.forEach(types, p => this.register(p.ref, p.typeInfo));
  }
}

export const SchemaRepository: SchemaResolver = new SchemaResolverImpl();
