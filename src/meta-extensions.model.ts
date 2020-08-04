import { Module } from './meta.model';

export interface ExportModule {
  fileName: string;
  importName: string;
  aliasName: string;
}

export interface SourceFile {
  fileName: string;
  moduleName: string;
  moduleFileName: string;
  reflectionModule: string;
  exports: ExportModule[];
  module: Module;
  isEmpty: boolean;
}

export interface MetaInfo {
  sourceFiles: SourceFile[];
  modules: Module[];
  hasErrors: boolean;
}
