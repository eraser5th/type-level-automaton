export type Equal<A, B> = A extends B ? (B extends A ? true : false) : false;

export type LengthEqual<A extends unknown[], B extends unknown[]> = Equal<
  A["length"],
  B["length"]
>;
