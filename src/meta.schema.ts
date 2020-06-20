import { TypeInfo } from './meta.model';

export const TypeInfoSchema: TypeInfo = {
  $id: '@spcy/lib.core.reflection/TypeInfo',
  oneOf: [
    {
      $ref: '@spcy/lib.core.reflection/ObjectType'
    },
    {
      $ref: '@spcy/lib.core.reflection/StringType'
    },
    {
      $ref: '@spcy/lib.core.reflection/BooleanType'
    },
    {
      $ref: '@spcy/lib.core.reflection/NumberType'
    },
    {
      $ref: '@spcy/lib.core.reflection/DateType'
    },
    {
      $ref: '@spcy/lib.core.reflection/NullType'
    },
    {
      $ref: '@spcy/lib.core.reflection/ArrayType'
    },
    {
      $ref: '@spcy/lib.core.reflection/TypeReference'
    },
    {
      $ref: '@spcy/lib.core.reflection/EnumType'
    },
    {
      $ref: '@spcy/lib.core.reflection/ConstLiteral'
    },
    {
      $ref: '@spcy/lib.core.reflection/OneOf'
    },
    {
      $ref: '@spcy/lib.core.reflection/AllOf'
    }
  ]
};

export const TypeReferenceSchema: TypeInfo = {
  $id: '@spcy/lib.core.reflection/TypeReference',
  type: 'object',
  required: ['$ref'],
  properties: {
    $id: {
      type: 'string'
    },
    $ref: {
      type: 'string'
    }
  }
};

export const ArrayTypeSchema: TypeInfo = {
  $id: '@spcy/lib.core.reflection/ArrayType',
  type: 'object',
  required: ['type', 'items'],
  properties: {
    $id: {
      type: 'string'
    },
    type: {
      const: 'array'
    },
    items: {
      $ref: '@spcy/lib.core.reflection/TypeInfo'
    },
    minItems: {
      type: 'number'
    },
    maxItems: {
      type: 'number'
    },
    uniqueItems: {
      type: 'boolean'
    }
  }
};

export const ConstLiteralSchema: TypeInfo = {
  $id: '@spcy/lib.core.reflection/ConstLiteral',
  type: 'object',
  required: ['const'],
  properties: {
    $id: {
      type: 'string'
    },
    const: {
      oneOf: [
        {
          type: 'string'
        },
        {
          type: 'number'
        },
        {
          type: 'boolean'
        },
        {
          type: 'null'
        }
      ]
    }
  }
};

export const EnumTypeSchema: TypeInfo = {
  $id: '@spcy/lib.core.reflection/EnumType',
  type: 'object',
  required: ['enum'],
  properties: {
    $id: {
      type: 'string'
    },
    enum: {
      type: 'array',
      items: {
        type: 'string'
      }
    }
  }
};

export const NullTypeSchema: TypeInfo = {
  $id: '@spcy/lib.core.reflection/NullType',
  type: 'object',
  required: ['type'],
  properties: {
    $id: {
      type: 'string'
    },
    type: {
      const: 'null'
    }
  }
};

export const DateTypeSchema: TypeInfo = {
  $id: '@spcy/lib.core.reflection/DateType',
  type: 'object',
  required: ['type'],
  properties: {
    $id: {
      type: 'string'
    },
    type: {
      const: 'date'
    }
  }
};

export const BooleanTypeSchema: TypeInfo = {
  $id: '@spcy/lib.core.reflection/BooleanType',
  type: 'object',
  required: ['type'],
  properties: {
    $id: {
      type: 'string'
    },
    type: {
      const: 'boolean'
    }
  }
};

export const StringTypeSchema: TypeInfo = {
  $id: '@spcy/lib.core.reflection/StringType',
  type: 'object',
  required: ['type'],
  properties: {
    $id: {
      type: 'string'
    },
    type: {
      const: 'string'
    },
    minLength: {
      type: 'number'
    },
    maxLength: {
      type: 'number'
    },
    pattern: {
      type: 'string'
    }
  }
};

export const NumberTypeSchema: TypeInfo = {
  $id: '@spcy/lib.core.reflection/NumberType',
  type: 'object',
  required: ['type'],
  properties: {
    $id: {
      type: 'string'
    },
    type: {
      const: 'number'
    },
    minimum: {
      type: 'number'
    },
    maximum: {
      type: 'number'
    }
  }
};

export const ObjectTypeSchema: TypeInfo = {
  $id: '@spcy/lib.core.reflection/ObjectType',
  type: 'object',
  required: ['type'],
  properties: {
    $id: {
      type: 'string'
    },
    type: {
      const: 'object'
    },
    required: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    properties: {
      type: 'object',
      additionalProperties: {
        $ref: '@spcy/lib.core.reflection/TypeInfo'
      }
    },
    additionalProperties: {
      oneOf: [
        {
          $ref: '@spcy/lib.core.reflection/TypeInfo'
        },
        {
          type: 'boolean'
        }
      ]
    }
  }
};

export const OneOfSchema: TypeInfo = {
  $id: '@spcy/lib.core.reflection/OneOf',
  type: 'object',
  required: ['oneOf'],
  properties: {
    $id: {
      type: 'string'
    },
    oneOf: {
      type: 'array',
      items: {
        $ref: '@spcy/lib.core.reflection/TypeInfo'
      }
    }
  }
};

export const AllOfSchema: TypeInfo = {
  $id: '@spcy/lib.core.reflection/AllOf',
  type: 'object',
  required: ['allOf'],
  properties: {
    $id: {
      type: 'string'
    },
    allOf: {
      type: 'array',
      items: {
        $ref: '@spcy/lib.core.reflection/TypeInfo'
      }
    }
  }
};

export const ModuleSchema: TypeInfo = {
  $id: '@spcy/lib.core.reflection/Module',
  type: 'object',
  required: ['$defs'],
  properties: {
    $defs: {
      type: 'object',
      additionalProperties: {
        $ref: '@spcy/lib.core.reflection/TypeInfo'
      }
    }
  }
};

export const SourceFileSchema: TypeInfo = {
  $id: '@spcy/lib.core.reflection/SourceFile',
  type: 'object',
  required: ['fileName', 'module'],
  properties: {
    fileName: {
      type: 'string'
    },
    module: {
      $ref: '@spcy/lib.core.reflection/Module'
    }
  }
};

export const MetaInfoSchema: TypeInfo = {
  $id: '@spcy/lib.core.reflection/MetaInfo',
  type: 'object',
  required: ['sourceFiles', 'modules', 'hasErrors'],
  properties: {
    sourceFiles: {
      type: 'array',
      items: {
        $ref: '@spcy/lib.core.reflection/SourceFile'
      }
    },
    modules: {
      type: 'array',
      items: {
        $ref: '@spcy/lib.core.reflection/Module'
      }
    },
    hasErrors: {
      type: 'boolean'
    }
  }
};
