import { TypeInfo } from './meta.model';
import { SchemaResolver } from './schema-resolver';

class SchemaRepositoryInternal implements SchemaResolver {
  private repo: Map<string, TypeInfo> = new Map<string, TypeInfo>();

  resolve = (ref: string): TypeInfo | undefined => this.repo.get(ref);

  register(def: TypeInfo) {
    if (def.$id) this.repo.set(def.$id, def);
  }
}

export const SchemaRepository: SchemaResolver = new SchemaRepositoryInternal();
