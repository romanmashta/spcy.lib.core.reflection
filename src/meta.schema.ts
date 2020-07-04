import { TypeInfo, Module } from './index.model';

const TypeInfo: TypeInfo = {
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

const TypeReference: TypeInfo = {
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

const ArrayType: TypeInfo = {
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

const ConstLiteral: TypeInfo = {
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

const EnumType: TypeInfo = {
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

const NullType: TypeInfo = {
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

const DateType: TypeInfo = {
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

const BooleanType: TypeInfo = {
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

const StringType: TypeInfo = {
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

const NumberType: TypeInfo = {
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

const ObjectType: TypeInfo = {
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

const OneOf: TypeInfo = {
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

const AllOf: TypeInfo = {
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

const Module: TypeInfo = {
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

export const MetaSchema: Module = {
  $id: '@spcy/lib.core.reflection',
  $defs: {
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
  }
};
