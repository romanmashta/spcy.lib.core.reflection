import _ from 'lodash';

export type TypeInfo = ObjectType | SimpleType | ArrayType | TypeReference | EnumType | ConstLiteral | OneOf | AllOf;

export interface TypeReference {
  $ref: string;
}

export interface ArrayType {
  type: 'array';
  items: TypeInfo;
}

export interface ConstLiteral {
  const: string | number | boolean | null;
}

export interface EnumType {
  enum: string[];
}

export interface SimpleType {
  type: 'string' | 'number' | 'boolean' | 'date' | 'null';
}

export interface ObjectType {
  type: 'object';
  required?: string[];
  properties?: {
    [name: string]: TypeInfo;
  };
  additionalProperties?: TypeInfo | boolean;
}

export interface OneOf {
  oneOf: TypeInfo[];
}

export interface AllOf {
  allOf: TypeInfo[];
}

export interface Module {
  $defs: {
    [name: string]: TypeInfo;
  };
}

export interface MetaInfo {
  modules: Module[];
  hasErrors: boolean;
}

export const isObjectType = (typeInfo: TypeInfo): typeInfo is ObjectType => (typeInfo as ObjectType).type === 'object';
export const isSimpleType = (typeInfo: TypeInfo): typeInfo is SimpleType =>
  _.includes(['string', 'number', 'boolean', 'date', 'null'], (typeInfo as ObjectType).type);
export const isArrayType = (typeInfo: TypeInfo): typeInfo is ArrayType => (typeInfo as ArrayType).type === 'array';
export const isTypeReference = (typeInfo: TypeInfo): typeInfo is TypeReference =>
  (typeInfo as TypeReference).$ref !== undefined;
export const isEnumType = (typeInfo: TypeInfo): typeInfo is EnumType => (typeInfo as EnumType).enum !== undefined;
export const isConstLiteral = (typeInfo: TypeInfo): typeInfo is ConstLiteral =>
  (typeInfo as ConstLiteral).const !== undefined;
export const isOneOf = (typeInfo: TypeInfo): typeInfo is OneOf => (typeInfo as OneOf).oneOf !== undefined;
export const isAllOf = (typeInfo: TypeInfo): typeInfo is AllOf => (typeInfo as AllOf).allOf !== undefined;
