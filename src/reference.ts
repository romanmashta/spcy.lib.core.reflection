export interface Reference<T> {
  $ref: string;
  resolve(): Promise<T>;
}
