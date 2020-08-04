/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from './reflection';
import * as m from './reference.model';

const ReferenceType: r.TypeInfo = {
  $id: 'Reference',
  $package: 'lib.core.reflection',
  type: 'object',
  properties: {
    $type: {
      $ref: 'TypeInfo',
      $refPackage: 'lib.core.reflection'
    },
    $ref: {
      type: 'string'
    },
    object: {
      type: 'string'
    }
  }
};

const Reference: r.Prototype<m.Reference> = {
  ref: { $ref: ReferenceType.$id!, $refPackage: ReferenceType.$package! },
  typeInfo: ReferenceType
};

const ReferenceWithTypeType: r.TypeInfo = {
  $id: 'ReferenceWithType',
  $package: 'lib.core.reflection',
  $typeArguments: ['T'],
  allOf: [
    {
      $ref: 'Reference',
      $refPackage: 'lib.core.reflection'
    },
    {
      type: 'object',
      properties: {
        object: {
          $ref: 'T',
          $refPackage: 'lib.core.reflection'
        }
      }
    }
  ]
};

const ReferenceWithType: r.PrototypeInfo = {
  ref: { $ref: ReferenceWithTypeType.$id!, $refPackage: ReferenceWithTypeType.$package! },
  typeInfo: ReferenceWithTypeType
};

const ReferenceSetType: r.TypeInfo = {
  $id: 'ReferenceSet',
  $package: 'lib.core.reflection',
  type: 'object',
  properties: {
    $type: {
      $ref: 'TypeInfo',
      $refPackage: 'lib.core.reflection'
    },
    $ref: {
      type: 'string'
    },
    objects: {
      type: 'object',
      additionalProperties: {
        type: 'string'
      }
    }
  }
};

const ReferenceSet: r.Prototype<m.ReferenceSet> = {
  ref: { $ref: ReferenceSetType.$id!, $refPackage: ReferenceSetType.$package! },
  typeInfo: ReferenceSetType
};

const ReferenceSetWithTypeType: r.TypeInfo = {
  $id: 'ReferenceSetWithType',
  $package: 'lib.core.reflection',
  $typeArguments: ['T'],
  allOf: [
    {
      $ref: 'ReferenceSet',
      $refPackage: 'lib.core.reflection'
    },
    {
      type: 'object',
      properties: {
        objects: {
          type: 'object',
          additionalProperties: {
            $ref: 'T',
            $refPackage: 'lib.core.reflection'
          }
        }
      }
    }
  ]
};

const ReferenceSetWithType: r.PrototypeInfo = {
  ref: { $ref: ReferenceSetWithTypeType.$id!, $refPackage: ReferenceSetWithTypeType.$package! },
  typeInfo: ReferenceSetWithTypeType
};

export const ReferenceModule: r.Module = {
  $id: 'lib.core.reflection',
  $defs: {
    Reference: ReferenceType,
    ReferenceWithType: ReferenceWithTypeType,
    ReferenceSet: ReferenceSetType,
    ReferenceSetWithType: ReferenceSetWithTypeType
  }
};

export const Types = {
  Reference,
  ReferenceWithType,
  ReferenceSet,
  ReferenceSetWithType
};
