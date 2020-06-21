import { TypeInfo, Module } from './meta.model';
import { SchemaRepository } from './schema-repository';

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
SchemaRepository.register(TypeInfoSchema);

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
SchemaRepository.register(TypeReferenceSchema);

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
SchemaRepository.register(ArrayTypeSchema);

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
SchemaRepository.register(ConstLiteralSchema);

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
SchemaRepository.register(EnumTypeSchema);

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
SchemaRepository.register(NullTypeSchema);

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
SchemaRepository.register(DateTypeSchema);

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
SchemaRepository.register(BooleanTypeSchema);

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
SchemaRepository.register(StringTypeSchema);

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
SchemaRepository.register(NumberTypeSchema);

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
SchemaRepository.register(ObjectTypeSchema);

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
SchemaRepository.register(OneOfSchema);

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
SchemaRepository.register(AllOfSchema);

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
SchemaRepository.register(ModuleSchema);

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
SchemaRepository.register(SourceFileSchema);

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
