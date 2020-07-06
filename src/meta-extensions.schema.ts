import * as r from './index.model';
import { Prototype } from './prototype';

const ExportModuleType: r.TypeInfo & Prototype<r.ExportModule> = {
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

const SourceFileType: r.TypeInfo & Prototype<r.SourceFile> = {
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

const MetaInfoType: r.TypeInfo & Prototype<r.MetaInfo> = {
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

export const MetaExtensionsModule: r.Module = {
  $id: 'lib.core.reflection',
  $defs: {
    ExportModule: ExportModuleType,
    SourceFile: SourceFileType,
    MetaInfo: MetaInfoType
  }
};
