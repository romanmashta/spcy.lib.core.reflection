import { TypeInfo } from './meta.model';

class SchemaRepositoryInternal {
  private repo: Map<string, TypeInfo> = new Map<string, TypeInfo>();

  resolve = (ref: string): TypeInfo | undefined => this.repo.get(ref);

  register(def: TypeInfo) {
    if (def.$id) this.repo.set(def.$id, def);
  }
}

export const SchemaRepository = new SchemaRepositoryInternal();
