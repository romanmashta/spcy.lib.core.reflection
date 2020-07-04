export type TypeInfo =
  | ObjectType
  | StringType
  | BooleanType
  | NumberType
  | DateType
  | NullType
  | ArrayType
  | TypeReference
  | EnumType
  | ConstLiteral
  | OneOf
  | AllOf;

export interface TypeReference {
  $id?: string;
  $ref: string;
  $package?: string;
  $arguments?: TypeReference[];
}

export interface ArrayType {
  $id?: string;
  type: 'array';
  items: TypeInfo;
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;
}

export interface ConstLiteral {
  $id?: string;
  const: string | number | boolean | null;
}

export interface EnumType {
  $id?: string;
  enum: string[];
}

export interface NullType {
  $id?: string;
  type: 'null';
}

export interface DateType {
  $id?: string;
  type: 'date';
}

export interface BooleanType {
  $id?: string;
  type: 'boolean';
}

export interface StringType {
  $id?: string;
  type: 'string';
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

export interface NumberType {
  $id?: string;
  type: 'number';
  minimum?: number;
  maximum?: number;
}

export interface ObjectType {
  $id?: string;
  type: 'object';
  required?: string[];
  properties?: {
    [name: string]: TypeInfo;
  };
  additionalProperties?: TypeInfo | boolean;
}

export interface OneOf {
  $id?: string;
  oneOf: TypeInfo[];
}

export interface AllOf {
  $id?: string;
  allOf: TypeInfo[];
}

export interface Module {
  $id?: string;
  $defs: {
    [name: string]: TypeInfo;
  };
}

export const isObjectType = (typeInfo: TypeInfo): typeInfo is ObjectType => (typeInfo as ObjectType).type === 'object';
export const isNullType = (typeInfo: TypeInfo): typeInfo is NullType => (typeInfo as NullType).type === 'null';
export const isStringType = (typeInfo: TypeInfo): typeInfo is StringType => (typeInfo as StringType).type === 'string';
export const isDateType = (typeInfo: TypeInfo): typeInfo is DateType => (typeInfo as DateType).type === 'date';
export const isBooleanType = (typeInfo: TypeInfo): typeInfo is BooleanType =>
  (typeInfo as BooleanType).type === 'boolean';
export const isNumberType = (typeInfo: TypeInfo): typeInfo is NumberType => (typeInfo as NumberType).type === 'number';
export const isArrayType = (typeInfo: TypeInfo): typeInfo is ArrayType => (typeInfo as ArrayType).type === 'array';
export const isTypeReference = (typeInfo: TypeInfo): typeInfo is TypeReference =>
  (typeInfo as TypeReference).$ref !== undefined;
export const isEnumType = (typeInfo: TypeInfo): typeInfo is EnumType => (typeInfo as EnumType).enum !== undefined;
export const isConstLiteral = (typeInfo: TypeInfo): typeInfo is ConstLiteral =>
  (typeInfo as ConstLiteral).const !== undefined;
export const isOneOf = (typeInfo: TypeInfo): typeInfo is OneOf => (typeInfo as OneOf).oneOf !== undefined;
export const isAllOf = (typeInfo: TypeInfo): typeInfo is AllOf => (typeInfo as AllOf).allOf !== undefined;
