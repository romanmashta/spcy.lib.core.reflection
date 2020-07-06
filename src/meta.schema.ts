import * as r from './index.model';
import { Prototype } from './prototype';

const TypeInfoType: r.TypeInfo & Prototype<r.TypeInfo> = {
  $id: 'TypeInfo',
  oneOf: [
    {
      $ref: 'ObjectType'
    },
    {
      $ref: 'StringType'
    },
    {
      $ref: 'BooleanType'
    },
    {
      $ref: 'NumberType'
    },
    {
      $ref: 'DateType'
    },
    {
      $ref: 'NullType'
    },
    {
      $ref: 'ArrayType'
    },
    {
      $ref: 'TypeReference'
    },
    {
      $ref: 'EnumType'
    },
    {
      $ref: 'ConstLiteral'
    },
    {
      $ref: 'OneOf'
    },
    {
      $ref: 'AllOf'
    }
  ]
};

const TypeReferenceType: r.TypeInfo & Prototype<r.TypeReference> = {
  $id: 'TypeReference',
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
        $ref: 'TypeReference'
      }
    }
  }
};

const ArrayTypeType: r.TypeInfo & Prototype<r.ArrayType> = {
  $id: 'ArrayType',
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
      $ref: 'TypeInfo'
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

const ConstLiteralType: r.TypeInfo & Prototype<r.ConstLiteral> = {
  $id: 'ConstLiteral',
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

const EnumTypeType: r.TypeInfo & Prototype<r.EnumType> = {
  $id: 'EnumType',
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

const NullTypeType: r.TypeInfo & Prototype<r.NullType> = {
  $id: 'NullType',
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

const DateTypeType: r.TypeInfo & Prototype<r.DateType> = {
  $id: 'DateType',
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

const BooleanTypeType: r.TypeInfo & Prototype<r.BooleanType> = {
  $id: 'BooleanType',
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

const StringTypeType: r.TypeInfo & Prototype<r.StringType> = {
  $id: 'StringType',
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

const NumberTypeType: r.TypeInfo & Prototype<r.NumberType> = {
  $id: 'NumberType',
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

const ObjectTypeType: r.TypeInfo & Prototype<r.ObjectType> = {
  $id: 'ObjectType',
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
        $ref: 'TypeInfo'
      }
    },
    additionalProperties: {
      oneOf: [
        {
          $ref: 'TypeInfo'
        },
        {
          type: 'boolean'
        }
      ]
    }
  }
};

const OneOfType: r.TypeInfo & Prototype<r.OneOf> = {
  $id: 'OneOf',
  type: 'object',
  required: ['oneOf'],
  properties: {
    $id: {
      type: 'string'
    },
    oneOf: {
      type: 'array',
      items: {
        $ref: 'TypeInfo'
      }
    }
  }
};

const AllOfType: r.TypeInfo & Prototype<r.AllOf> = {
  $id: 'AllOf',
  type: 'object',
  required: ['allOf'],
  properties: {
    $id: {
      type: 'string'
    },
    allOf: {
      type: 'array',
      items: {
        $ref: 'TypeInfo'
      }
    }
  }
};

const ModuleType: r.TypeInfo & Prototype<r.Module> = {
  $id: 'Module',
  type: 'object',
  required: ['$defs'],
  properties: {
    $id: {
      type: 'string'
    },
    $defs: {
      type: 'object',
      additionalProperties: {
        $ref: 'TypeInfo'
      }
    }
  }
};

export const MetaModule: r.Module = {
  $id: 'lib.core.reflection',
  $defs: {
    TypeInfo: TypeInfoType,
    TypeReference: TypeReferenceType,
    ArrayType: ArrayTypeType,
    ConstLiteral: ConstLiteralType,
    EnumType: EnumTypeType,
    NullType: NullTypeType,
    DateType: DateTypeType,
    BooleanType: BooleanTypeType,
    StringType: StringTypeType,
    NumberType: NumberTypeType,
    ObjectType: ObjectTypeType,
    OneOf: OneOfType,
    AllOf: AllOfType,
    Module: ModuleType
  }
};
