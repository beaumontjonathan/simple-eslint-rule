export {};

declare global {
  interface ExpectToBeDefined {
    <T>(value: T): asserts value is NonNullable<T>;
  }

  export declare const expectToBeDefined: ExpectToBeDefined;
}
