import * as r from './reflection';
import * as m from './meta-extensions.model';

const ExportModuleType: r.TypeInfo = {
  $id: 'ExportModule',
  $package: 'lib.core.reflection',
  type: 'object',
  required: ['fileName', 'importName', 'aliasName'],
  properties: {
    fileName: {
      type: 'string'
    },
    importName: {
      type: 'string'
    },
    aliasName: {
      type: 'string'
    }
  }
};

const ExportModule: r.Prototype<m.ExportModule> = {
  ref: { $ref: ExportModuleType.$id!, $refPackage: ExportModuleType.$package! },
  typeInfo: ExportModuleType
};

const SourceFileType: r.TypeInfo = {
  $id: 'SourceFile',
  $package: 'lib.core.reflection',
  type: 'object',
  required: ['fileName', 'moduleName', 'moduleFileName', 'exports', 'module', 'isEmpty'],
  properties: {
    fileName: {
      type: 'string'
    },
    moduleName: {
      type: 'string'
    },
    moduleFileName: {
      type: 'string'
    },
    exports: {
      type: 'array',
      items: {
        $ref: 'ExportModule',
        $refPackage: 'lib.core.reflection'
      }
    },
    module: {
      $ref: 'Module',
      $refPackage: 'lib.core.reflection'
    },
    isEmpty: {
      type: 'boolean'
    }
  }
};

const SourceFile: r.Prototype<m.SourceFile> = {
  ref: { $ref: SourceFileType.$id!, $refPackage: SourceFileType.$package! },
  typeInfo: SourceFileType
};

const MetaInfoType: r.TypeInfo = {
  $id: 'MetaInfo',
  $package: 'lib.core.reflection',
  type: 'object',
  required: ['sourceFiles', 'modules', 'hasErrors'],
  properties: {
    sourceFiles: {
      type: 'array',
      items: {
        $ref: 'SourceFile',
        $refPackage: 'lib.core.reflection'
      }
    },
    modules: {
      type: 'array',
      items: {
        $ref: 'Module',
        $refPackage: 'lib.core.reflection'
      }
    },
    hasErrors: {
      type: 'boolean'
    }
  }
};

const MetaInfo: r.Prototype<m.MetaInfo> = {
  ref: { $ref: MetaInfoType.$id!, $refPackage: MetaInfoType.$package! },
  typeInfo: MetaInfoType
};

export const MetaExtensionsModule: r.Module = {
  $id: 'lib.core.reflection',
  $defs: {
    ExportModule: ExportModuleType,
    SourceFile: SourceFileType,
    MetaInfo: MetaInfoType
  }
};

export const Types = {
  ExportModule,
  SourceFile,
  MetaInfo
};
