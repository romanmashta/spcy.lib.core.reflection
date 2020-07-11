import * as r from './reflection';
import * as m from './meta.model';

const TypeInfoType: r.TypeInfo = {
  $id: 'TypeInfo',
  $package: 'lib.core.reflection',
  oneOf: [
    {
      $ref: 'ObjectType',
      $refPackage: 'lib.core.reflection'
    },
    {
      $ref: 'StringType',
      $refPackage: 'lib.core.reflection'
    },
    {
      $ref: 'BooleanType',
      $refPackage: 'lib.core.reflection'
    },
    {
      $ref: 'NumberType',
      $refPackage: 'lib.core.reflection'
    },
    {
      $ref: 'DateType',
      $refPackage: 'lib.core.reflection'
    },
    {
      $ref: 'NullType',
      $refPackage: 'lib.core.reflection'
    },
    {
      $ref: 'ArrayType',
      $refPackage: 'lib.core.reflection'
    },
    {
      $ref: 'TypeReference',
      $refPackage: 'lib.core.reflection'
    },
    {
      $ref: 'EnumType',
      $refPackage: 'lib.core.reflection'
    },
    {
      $ref: 'ConstLiteral',
      $refPackage: 'lib.core.reflection'
    },
    {
      $ref: 'OneOf',
      $refPackage: 'lib.core.reflection'
    },
    {
      $ref: 'AllOf',
      $refPackage: 'lib.core.reflection'
    }
  ]
};

const TypeInfo: r.Prototype<m.TypeInfo> = {
  ref: { $ref: TypeInfoType.$id!, $refPackage: TypeInfoType.$package! },
  typeInfo: TypeInfoType
};

const TypeReferenceType: r.TypeInfo = {
  $id: 'TypeReference',
  $package: 'lib.core.reflection',
  type: 'object',
  required: ['$ref', '$refPackage'],
  properties: {
    $id: {
      type: 'string'
    },
    $package: {
      type: 'string'
    },
    $ref: {
      type: 'string'
    },
    $refPackage: {
      type: 'string'
    },
    $refArguments: {
      type: 'string'
    },
    $typeArguments: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    $arguments: {
      type: 'array',
      items: {
        $ref: 'TypeInfo',
        $refPackage: 'lib.core.reflection'
      }
    }
  }
};

const TypeReference: r.Prototype<m.TypeReference> = {
  ref: { $ref: TypeReferenceType.$id!, $refPackage: TypeReferenceType.$package! },
  typeInfo: TypeReferenceType
};

const ArrayTypeType: r.TypeInfo = {
  $id: 'ArrayType',
  $package: 'lib.core.reflection',
  type: 'object',
  required: ['type', 'items'],
  properties: {
    $id: {
      type: 'string'
    },
    $package: {
      type: 'string'
    },
    type: {
      const: 'array'
    },
    items: {
      $ref: 'TypeInfo',
      $refPackage: 'lib.core.reflection'
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

const ArrayType: r.Prototype<m.ArrayType> = {
  ref: { $ref: ArrayTypeType.$id!, $refPackage: ArrayTypeType.$package! },
  typeInfo: ArrayTypeType
};

const ConstLiteralType: r.TypeInfo = {
  $id: 'ConstLiteral',
  $package: 'lib.core.reflection',
  type: 'object',
  required: ['const'],
  properties: {
    $id: {
      type: 'string'
    },
    $package: {
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

const ConstLiteral: r.Prototype<m.ConstLiteral> = {
  ref: { $ref: ConstLiteralType.$id!, $refPackage: ConstLiteralType.$package! },
  typeInfo: ConstLiteralType
};

const EnumTypeType: r.TypeInfo = {
  $id: 'EnumType',
  $package: 'lib.core.reflection',
  type: 'object',
  required: ['enum'],
  properties: {
    $id: {
      type: 'string'
    },
    $package: {
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

const EnumType: r.Prototype<m.EnumType> = {
  ref: { $ref: EnumTypeType.$id!, $refPackage: EnumTypeType.$package! },
  typeInfo: EnumTypeType
};

const NullTypeType: r.TypeInfo = {
  $id: 'NullType',
  $package: 'lib.core.reflection',
  type: 'object',
  required: ['type'],
  properties: {
    $id: {
      type: 'string'
    },
    $package: {
      type: 'string'
    },
    type: {
      const: 'null'
    }
  }
};

const NullType: r.Prototype<m.NullType> = {
  ref: { $ref: NullTypeType.$id!, $refPackage: NullTypeType.$package! },
  typeInfo: NullTypeType
};

const DateTypeType: r.TypeInfo = {
  $id: 'DateType',
  $package: 'lib.core.reflection',
  type: 'object',
  required: ['type'],
  properties: {
    $id: {
      type: 'string'
    },
    $package: {
      type: 'string'
    },
    type: {
      const: 'date'
    }
  }
};

const DateType: r.Prototype<m.DateType> = {
  ref: { $ref: DateTypeType.$id!, $refPackage: DateTypeType.$package! },
  typeInfo: DateTypeType
};

const BooleanTypeType: r.TypeInfo = {
  $id: 'BooleanType',
  $package: 'lib.core.reflection',
  type: 'object',
  required: ['type'],
  properties: {
    $id: {
      type: 'string'
    },
    $package: {
      type: 'string'
    },
    type: {
      const: 'boolean'
    }
  }
};

const BooleanType: r.Prototype<m.BooleanType> = {
  ref: { $ref: BooleanTypeType.$id!, $refPackage: BooleanTypeType.$package! },
  typeInfo: BooleanTypeType
};

const StringTypeType: r.TypeInfo = {
  $id: 'StringType',
  $package: 'lib.core.reflection',
  type: 'object',
  required: ['type'],
  properties: {
    $id: {
      type: 'string'
    },
    $package: {
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

const StringType: r.Prototype<m.StringType> = {
  ref: { $ref: StringTypeType.$id!, $refPackage: StringTypeType.$package! },
  typeInfo: StringTypeType
};

const NumberTypeType: r.TypeInfo = {
  $id: 'NumberType',
  $package: 'lib.core.reflection',
  type: 'object',
  required: ['type'],
  properties: {
    $id: {
      type: 'string'
    },
    $package: {
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

const NumberType: r.Prototype<m.NumberType> = {
  ref: { $ref: NumberTypeType.$id!, $refPackage: NumberTypeType.$package! },
  typeInfo: NumberTypeType
};

const ObjectTypeType: r.TypeInfo = {
  $id: 'ObjectType',
  $package: 'lib.core.reflection',
  type: 'object',
  required: ['type'],
  properties: {
    $id: {
      type: 'string'
    },
    $package: {
      type: 'string'
    },
    $typeArguments: {
      type: 'array',
      items: {
        type: 'string'
      }
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
        $ref: 'TypeInfo',
        $refPackage: 'lib.core.reflection'
      }
    },
    additionalProperties: {
      oneOf: [
        {
          $ref: 'TypeInfo',
          $refPackage: 'lib.core.reflection'
        },
        {
          type: 'boolean'
        }
      ]
    }
  }
};

const ObjectType: r.Prototype<m.ObjectType> = {
  ref: { $ref: ObjectTypeType.$id!, $refPackage: ObjectTypeType.$package! },
  typeInfo: ObjectTypeType
};

const OneOfType: r.TypeInfo = {
  $id: 'OneOf',
  $package: 'lib.core.reflection',
  type: 'object',
  required: ['oneOf'],
  properties: {
    $id: {
      type: 'string'
    },
    $package: {
      type: 'string'
    },
    oneOf: {
      type: 'array',
      items: {
        $ref: 'TypeInfo',
        $refPackage: 'lib.core.reflection'
      }
    }
  }
};

const OneOf: r.Prototype<m.OneOf> = {
  ref: { $ref: OneOfType.$id!, $refPackage: OneOfType.$package! },
  typeInfo: OneOfType
};

const AllOfType: r.TypeInfo = {
  $id: 'AllOf',
  $package: 'lib.core.reflection',
  type: 'object',
  required: ['allOf'],
  properties: {
    $id: {
      type: 'string'
    },
    $package: {
      type: 'string'
    },
    allOf: {
      type: 'array',
      items: {
        $ref: 'TypeInfo',
        $refPackage: 'lib.core.reflection'
      }
    }
  }
};

const AllOf: r.Prototype<m.AllOf> = {
  ref: { $ref: AllOfType.$id!, $refPackage: AllOfType.$package! },
  typeInfo: AllOfType
};

const ModuleType: r.TypeInfo = {
  $id: 'Module',
  $package: 'lib.core.reflection',
  type: 'object',
  required: ['$defs'],
  properties: {
    $id: {
      type: 'string'
    },
    $package: {
      type: 'string'
    },
    $defs: {
      type: 'object',
      additionalProperties: {
        $ref: 'TypeInfo',
        $refPackage: 'lib.core.reflection'
      }
    }
  }
};

const Module: r.Prototype<m.Module> = {
  ref: { $ref: ModuleType.$id!, $refPackage: ModuleType.$package! },
  typeInfo: ModuleType
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

export const Types = {
  TypeInfo,
  TypeReference,
  ArrayType,
  ConstLiteral,
  EnumType,
  NullType,
  DateType,
  BooleanType,
  StringType,
  NumberType,
  ObjectType,
  OneOf,
  AllOf,
  Module
};
