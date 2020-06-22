import { TypeInfo, Module } from './meta.model';
import { SchemaRepository } from './schema-repository';

export const TypeInfoSchema: TypeInfo = {
  $id: '#/$defs/TypeInfo',
  oneOf: [
    {
      $ref: '#/$defs/ObjectType',
      $package: '@spcy/lib.core.reflection'
    },
    {
      $ref: '#/$defs/StringType',
      $package: '@spcy/lib.core.reflection'
    },
    {
      $ref: '#/$defs/BooleanType',
      $package: '@spcy/lib.core.reflection'
    },
    {
      $ref: '#/$defs/NumberType',
      $package: '@spcy/lib.core.reflection'
    },
    {
      $ref: '#/$defs/DateType',
      $package: '@spcy/lib.core.reflection'
    },
    {
      $ref: '#/$defs/NullType',
      $package: '@spcy/lib.core.reflection'
    },
    {
      $ref: '#/$defs/ArrayType',
      $package: '@spcy/lib.core.reflection'
    },
    {
      $ref: '#/$defs/TypeReference',
      $package: '@spcy/lib.core.reflection'
    },
    {
      $ref: '#/$defs/EnumType',
      $package: '@spcy/lib.core.reflection'
    },
    {
      $ref: '#/$defs/ConstLiteral',
      $package: '@spcy/lib.core.reflection'
    },
    {
      $ref: '#/$defs/OneOf',
      $package: '@spcy/lib.core.reflection'
    },
    {
      $ref: '#/$defs/AllOf',
      $package: '@spcy/lib.core.reflection'
    }
  ]
};
SchemaRepository.register(TypeInfoSchema);

export const TypeReferenceSchema: TypeInfo = {
  $id: '#/$defs/TypeReference',
  type: 'object',
  required: ['$ref'],
  properties: {
    $id: {
      type: 'string'
    },
    $ref: {
      type: 'string'
    },
    $package: {
      type: 'string'
    }
  }
};
SchemaRepository.register(TypeReferenceSchema);

export const ArrayTypeSchema: TypeInfo = {
  $id: '#/$defs/ArrayType',
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
      $ref: '#/$defs/TypeInfo',
      $package: '@spcy/lib.core.reflection'
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
SchemaRepository.register(ArrayTypeSchema);

export const ConstLiteralSchema: TypeInfo = {
  $id: '#/$defs/ConstLiteral',
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
SchemaRepository.register(ConstLiteralSchema);

export const EnumTypeSchema: TypeInfo = {
  $id: '#/$defs/EnumType',
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
SchemaRepository.register(EnumTypeSchema);

export const NullTypeSchema: TypeInfo = {
  $id: '#/$defs/NullType',
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
SchemaRepository.register(NullTypeSchema);

export const DateTypeSchema: TypeInfo = {
  $id: '#/$defs/DateType',
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
SchemaRepository.register(DateTypeSchema);

export const BooleanTypeSchema: TypeInfo = {
  $id: '#/$defs/BooleanType',
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
SchemaRepository.register(BooleanTypeSchema);

export const StringTypeSchema: TypeInfo = {
  $id: '#/$defs/StringType',
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
SchemaRepository.register(StringTypeSchema);

export const NumberTypeSchema: TypeInfo = {
  $id: '#/$defs/NumberType',
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
SchemaRepository.register(NumberTypeSchema);

export const ObjectTypeSchema: TypeInfo = {
  $id: '#/$defs/ObjectType',
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
        $ref: '#/$defs/TypeInfo',
        $package: '@spcy/lib.core.reflection'
      }
    },
    additionalProperties: {
      oneOf: [
        {
          $ref: '#/$defs/TypeInfo',
          $package: '@spcy/lib.core.reflection'
        },
        {
          type: 'boolean'
        }
      ]
    }
  }
};
SchemaRepository.register(ObjectTypeSchema);

export const OneOfSchema: TypeInfo = {
  $id: '#/$defs/OneOf',
  type: 'object',
  required: ['oneOf'],
  properties: {
    $id: {
      type: 'string'
    },
    oneOf: {
      type: 'array',
      items: {
        $ref: '#/$defs/TypeInfo',
        $package: '@spcy/lib.core.reflection'
      }
    }
  }
};
SchemaRepository.register(OneOfSchema);

export const AllOfSchema: TypeInfo = {
  $id: '#/$defs/AllOf',
  type: 'object',
  required: ['allOf'],
  properties: {
    $id: {
      type: 'string'
    },
    allOf: {
      type: 'array',
      items: {
        $ref: '#/$defs/TypeInfo',
        $package: '@spcy/lib.core.reflection'
      }
    }
  }
};
SchemaRepository.register(AllOfSchema);

export const ModuleSchema: TypeInfo = {
  $id: '#/$defs/Module',
  type: 'object',
  required: ['$defs'],
  properties: {
    $defs: {
      type: 'object',
      additionalProperties: {
        $ref: '#/$defs/TypeInfo',
        $package: '@spcy/lib.core.reflection'
      }
    }
  }
};
SchemaRepository.register(ModuleSchema);

export const SourceFileSchema: TypeInfo = {
  $id: '#/$defs/SourceFile',
  type: 'object',
  required: ['fileName', 'module'],
  properties: {
    fileName: {
      type: 'string'
    },
    module: {
      $ref: '#/$defs/Module',
      $package: '@spcy/lib.core.reflection'
    }
  }
};
SchemaRepository.register(SourceFileSchema);

export const MetaInfoSchema: TypeInfo = {
  $id: '#/$defs/MetaInfo',
  type: 'object',
  required: ['sourceFiles', 'modules', 'hasErrors'],
  properties: {
    sourceFiles: {
      type: 'array',
      items: {
        $ref: '#/$defs/SourceFile',
        $package: '@spcy/lib.core.reflection'
      }
    },
    modules: {
      type: 'array',
      items: {
        $ref: '#/$defs/Module',
        $package: '@spcy/lib.core.reflection'
      }
    },
    hasErrors: {
      type: 'boolean'
    }
  }
};
SchemaRepository.register(MetaInfoSchema);

export const MetaSchema: Module = {
  $defs: {
    TypeInfo: TypeInfoSchema,
    TypeReference: TypeReferenceSchema,
    ArrayType: ArrayTypeSchema,
    ConstLiteral: ConstLiteralSchema,
    EnumType: EnumTypeSchema,
    NullType: NullTypeSchema,
    DateType: DateTypeSchema,
    BooleanType: BooleanTypeSchema,
    StringType: StringTypeSchema,
    NumberType: NumberTypeSchema,
    ObjectType: ObjectTypeSchema,
    OneOf: OneOfSchema,
    AllOf: AllOfSchema,
    Module: ModuleSchema,
    SourceFile: SourceFileSchema,
    MetaInfo: MetaInfoSchema
  }
};
