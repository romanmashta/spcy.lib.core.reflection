import { IndexModule } from './index.schema';
import { Module } from './index.model';

export interface ReflectionSeeds {
  types: Record<string, Module>;
}

export const seedModule = (module: Module): ReflectionSeeds => ({
  types: {
    [module.$id!]: module
  }
});

export const Seed = {
  ...seedModule(IndexModule)
};
