import * as r from './reflection';
import * as m from './meta-extensions.model';

const PackageName = 'lib.core.reflection';

const ExportModuleType: r.TypeInfo = {
  $id: 'ExportModule',
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
  id: ExportModuleType.$id,
  package: PackageName,
  typeInfo: ExportModuleType
};
const SourceFileType: r.TypeInfo = {
  $id: 'SourceFile',
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
        $ref: 'ExportModule'
      }
    },
    module: {
      $ref: 'Module'
    },
    isEmpty: {
      type: 'boolean'
    }
  }
};
const SourceFile: r.Prototype<m.SourceFile> = {
  id: SourceFileType.$id,
  package: PackageName,
  typeInfo: SourceFileType
};
const MetaInfoType: r.TypeInfo = {
  $id: 'MetaInfo',
  type: 'object',
  required: ['sourceFiles', 'modules', 'hasErrors'],
  properties: {
    sourceFiles: {
      type: 'array',
      items: {
        $ref: 'SourceFile'
      }
    },
    modules: {
      type: 'array',
      items: {
        $ref: 'Module'
      }
    },
    hasErrors: {
      type: 'boolean'
    }
  }
};
const MetaInfo: r.Prototype<m.MetaInfo> = {
  id: MetaInfoType.$id,
  package: PackageName,
  typeInfo: MetaInfoType
};

export const MetaExtensionsModule: r.Module = {
  $id: PackageName,
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
