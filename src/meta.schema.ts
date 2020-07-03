import { TypeInfo, Module } from './meta.model';
import { SchemaRepository } from './schema-resolver-impl';

export const TypeInfoSchema: TypeInfo = {
  $id: '#/$defs/TypeInfo',
  oneOf: [
    {
      $ref: '#/$defs/ObjectType'
    },
    {
      $ref: '#/$defs/StringType'
    },
    {
      $ref: '#/$defs/BooleanType'
    },
    {
      $ref: '#/$defs/NumberType'
    },
    {
      $ref: '#/$defs/DateType'
    },
    {
      $ref: '#/$defs/NullType'
    },
    {
      $ref: '#/$defs/ArrayType'
    },
    {
      $ref: '#/$defs/TypeReference'
    },
    {
      $ref: '#/$defs/EnumType'
    },
    {
      $ref: '#/$defs/ConstLiteral'
    },
    {
      $ref: '#/$defs/OneOf'
    },
    {
      $ref: '#/$defs/AllOf'
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
    },
    $arguments: {
      type: 'array',
      items: {
        $ref: '#/$defs/TypeReference'
      }
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
      $ref: '#/$defs/TypeInfo'
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
        $ref: '#/$defs/TypeInfo'
      }
    },
    additionalProperties: {
      oneOf: [
        {
          $ref: '#/$defs/TypeInfo'
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
        $ref: '#/$defs/TypeInfo'
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
        $ref: '#/$defs/TypeInfo'
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
        $ref: '#/$defs/TypeInfo'
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
      $ref: '#/$defs/Module'
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
        $ref: '#/$defs/SourceFile'
      }
    },
    modules: {
      type: 'array',
      items: {
        $ref: '#/$defs/Module'
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
