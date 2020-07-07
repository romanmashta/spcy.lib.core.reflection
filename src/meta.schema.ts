import * as r from './reflection';
import * as m from './meta.model';

const PackageName = 'lib.core.reflection';

const TypeInfoType: r.TypeInfo = {
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
const TypeInfo: r.Prototype<m.TypeInfo> = {
  id: TypeInfoType.$id,
  package: PackageName,
  typeInfo: TypeInfoType
};
const TypeReferenceType: r.TypeInfo = {
  $id: 'TypeReference',
  type: 'object',
  required: ['$ref'],
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
    $arguments: {
      type: 'array',
      items: {
        $ref: 'TypeReference'
      }
    }
  }
};
const TypeReference: r.Prototype<m.TypeReference> = {
  id: TypeReferenceType.$id,
  package: PackageName,
  typeInfo: TypeReferenceType
};
const ArrayTypeType: r.TypeInfo = {
  $id: 'ArrayType',
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
const ArrayType: r.Prototype<m.ArrayType> = {
  id: ArrayTypeType.$id,
  package: PackageName,
  typeInfo: ArrayTypeType
};
const ConstLiteralType: r.TypeInfo = {
  $id: 'ConstLiteral',
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
  id: ConstLiteralType.$id,
  package: PackageName,
  typeInfo: ConstLiteralType
};
const EnumTypeType: r.TypeInfo = {
  $id: 'EnumType',
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
  id: EnumTypeType.$id,
  package: PackageName,
  typeInfo: EnumTypeType
};
const NullTypeType: r.TypeInfo = {
  $id: 'NullType',
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
  id: NullTypeType.$id,
  package: PackageName,
  typeInfo: NullTypeType
};
const DateTypeType: r.TypeInfo = {
  $id: 'DateType',
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
  id: DateTypeType.$id,
  package: PackageName,
  typeInfo: DateTypeType
};
const BooleanTypeType: r.TypeInfo = {
  $id: 'BooleanType',
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
  id: BooleanTypeType.$id,
  package: PackageName,
  typeInfo: BooleanTypeType
};
const StringTypeType: r.TypeInfo = {
  $id: 'StringType',
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
  id: StringTypeType.$id,
  package: PackageName,
  typeInfo: StringTypeType
};
const NumberTypeType: r.TypeInfo = {
  $id: 'NumberType',
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
  id: NumberTypeType.$id,
  package: PackageName,
  typeInfo: NumberTypeType
};
const ObjectTypeType: r.TypeInfo = {
  $id: 'ObjectType',
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
const ObjectType: r.Prototype<m.ObjectType> = {
  id: ObjectTypeType.$id,
  package: PackageName,
  typeInfo: ObjectTypeType
};
const OneOfType: r.TypeInfo = {
  $id: 'OneOf',
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
        $ref: 'TypeInfo'
      }
    }
  }
};
const OneOf: r.Prototype<m.OneOf> = {
  id: OneOfType.$id,
  package: PackageName,
  typeInfo: OneOfType
};
const AllOfType: r.TypeInfo = {
  $id: 'AllOf',
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
        $ref: 'TypeInfo'
      }
    }
  }
};
const AllOf: r.Prototype<m.AllOf> = {
  id: AllOfType.$id,
  package: PackageName,
  typeInfo: AllOfType
};
const ModuleType: r.TypeInfo = {
  $id: 'Module',
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
        $ref: 'TypeInfo'
      }
    }
  }
};
const Module: r.Prototype<m.Module> = {
  id: ModuleType.$id,
  package: PackageName,
  typeInfo: ModuleType
};

export const MetaModule: r.Module = {
  $id: PackageName,
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
