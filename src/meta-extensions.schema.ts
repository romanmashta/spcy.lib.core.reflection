import { TypeInfo, Module } from './index.model';

const ExportModule: TypeInfo = {
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

const SourceFile: TypeInfo = {
  $id: 'SourceFile',
  type: 'object',
  required: ['fileName', 'moduleName', 'exports', 'module', 'isEmpty'],
  properties: {
    fileName: {
      type: 'string'
    },
    moduleName: {
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

const MetaInfo: TypeInfo = {
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

export const MetaExtensionsSchema: Module = {
  $id: '@spcy/lib.core.reflection',
  $defs: {
    ExportModule,
    SourceFile,
    MetaInfo
  }
};
