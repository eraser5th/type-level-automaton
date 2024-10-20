export type Over1<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
  }
    ? [A1, R1]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over2<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
  }
    ? [A1, R1] | [A2, R2]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over3<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
  }
    ? [A1, R1] | [A2, R2] | [A3, R3]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over4<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
  }
    ? [A1, R1] | [A2, R2] | [A3, R3] | [A4, R4]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over5<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
  }
    ? [A1, R1] | [A2, R2] | [A3, R3] | [A4, R4] | [A5, R5]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over6<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
  }
    ? [A1, R1] | [A2, R2] | [A3, R3] | [A4, R4] | [A5, R5] | [A6, R6]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over7<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
  }
    ? [A1, R1] | [A2, R2] | [A3, R3] | [A4, R4] | [A5, R5] | [A6, R6] | [A7, R7]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over8<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over9<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over10<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over11<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over12<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over13<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over14<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over15<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over16<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over17<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over18<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over19<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over20<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over21<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over22<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over23<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over24<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over25<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over26<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over27<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over28<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over29<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over30<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over31<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over32<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over33<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over34<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over35<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over36<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over37<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over38<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over39<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over40<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over41<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over42<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over43<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over44<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over45<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over46<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over47<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over48<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over49<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over50<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over51<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over52<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over53<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over54<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over55<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over56<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over57<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over58<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over59<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over60<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over61<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over62<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over63<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over64<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over65<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over66<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over67<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over68<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over69<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over70<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over71<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over72<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over73<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over74<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over75<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over76<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over77<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over78<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over79<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over80<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over81<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over82<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over83<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
    (...args: infer A83): infer R83;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
        | [A83, R83]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over84<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
    (...args: infer A83): infer R83;
    (...args: infer A84): infer R84;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
        | [A83, R83]
        | [A84, R84]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over85<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
    (...args: infer A83): infer R83;
    (...args: infer A84): infer R84;
    (...args: infer A85): infer R85;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
        | [A83, R83]
        | [A84, R84]
        | [A85, R85]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over86<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
    (...args: infer A83): infer R83;
    (...args: infer A84): infer R84;
    (...args: infer A85): infer R85;
    (...args: infer A86): infer R86;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
        | [A83, R83]
        | [A84, R84]
        | [A85, R85]
        | [A86, R86]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over87<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
    (...args: infer A83): infer R83;
    (...args: infer A84): infer R84;
    (...args: infer A85): infer R85;
    (...args: infer A86): infer R86;
    (...args: infer A87): infer R87;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
        | [A83, R83]
        | [A84, R84]
        | [A85, R85]
        | [A86, R86]
        | [A87, R87]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over88<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
    (...args: infer A83): infer R83;
    (...args: infer A84): infer R84;
    (...args: infer A85): infer R85;
    (...args: infer A86): infer R86;
    (...args: infer A87): infer R87;
    (...args: infer A88): infer R88;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
        | [A83, R83]
        | [A84, R84]
        | [A85, R85]
        | [A86, R86]
        | [A87, R87]
        | [A88, R88]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over89<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
    (...args: infer A83): infer R83;
    (...args: infer A84): infer R84;
    (...args: infer A85): infer R85;
    (...args: infer A86): infer R86;
    (...args: infer A87): infer R87;
    (...args: infer A88): infer R88;
    (...args: infer A89): infer R89;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
        | [A83, R83]
        | [A84, R84]
        | [A85, R85]
        | [A86, R86]
        | [A87, R87]
        | [A88, R88]
        | [A89, R89]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over90<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
    (...args: infer A83): infer R83;
    (...args: infer A84): infer R84;
    (...args: infer A85): infer R85;
    (...args: infer A86): infer R86;
    (...args: infer A87): infer R87;
    (...args: infer A88): infer R88;
    (...args: infer A89): infer R89;
    (...args: infer A90): infer R90;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
        | [A83, R83]
        | [A84, R84]
        | [A85, R85]
        | [A86, R86]
        | [A87, R87]
        | [A88, R88]
        | [A89, R89]
        | [A90, R90]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over91<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
    (...args: infer A83): infer R83;
    (...args: infer A84): infer R84;
    (...args: infer A85): infer R85;
    (...args: infer A86): infer R86;
    (...args: infer A87): infer R87;
    (...args: infer A88): infer R88;
    (...args: infer A89): infer R89;
    (...args: infer A90): infer R90;
    (...args: infer A91): infer R91;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
        | [A83, R83]
        | [A84, R84]
        | [A85, R85]
        | [A86, R86]
        | [A87, R87]
        | [A88, R88]
        | [A89, R89]
        | [A90, R90]
        | [A91, R91]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over92<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
    (...args: infer A83): infer R83;
    (...args: infer A84): infer R84;
    (...args: infer A85): infer R85;
    (...args: infer A86): infer R86;
    (...args: infer A87): infer R87;
    (...args: infer A88): infer R88;
    (...args: infer A89): infer R89;
    (...args: infer A90): infer R90;
    (...args: infer A91): infer R91;
    (...args: infer A92): infer R92;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
        | [A83, R83]
        | [A84, R84]
        | [A85, R85]
        | [A86, R86]
        | [A87, R87]
        | [A88, R88]
        | [A89, R89]
        | [A90, R90]
        | [A91, R91]
        | [A92, R92]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over93<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
    (...args: infer A83): infer R83;
    (...args: infer A84): infer R84;
    (...args: infer A85): infer R85;
    (...args: infer A86): infer R86;
    (...args: infer A87): infer R87;
    (...args: infer A88): infer R88;
    (...args: infer A89): infer R89;
    (...args: infer A90): infer R90;
    (...args: infer A91): infer R91;
    (...args: infer A92): infer R92;
    (...args: infer A93): infer R93;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
        | [A83, R83]
        | [A84, R84]
        | [A85, R85]
        | [A86, R86]
        | [A87, R87]
        | [A88, R88]
        | [A89, R89]
        | [A90, R90]
        | [A91, R91]
        | [A92, R92]
        | [A93, R93]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over94<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
    (...args: infer A83): infer R83;
    (...args: infer A84): infer R84;
    (...args: infer A85): infer R85;
    (...args: infer A86): infer R86;
    (...args: infer A87): infer R87;
    (...args: infer A88): infer R88;
    (...args: infer A89): infer R89;
    (...args: infer A90): infer R90;
    (...args: infer A91): infer R91;
    (...args: infer A92): infer R92;
    (...args: infer A93): infer R93;
    (...args: infer A94): infer R94;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
        | [A83, R83]
        | [A84, R84]
        | [A85, R85]
        | [A86, R86]
        | [A87, R87]
        | [A88, R88]
        | [A89, R89]
        | [A90, R90]
        | [A91, R91]
        | [A92, R92]
        | [A93, R93]
        | [A94, R94]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over95<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
    (...args: infer A83): infer R83;
    (...args: infer A84): infer R84;
    (...args: infer A85): infer R85;
    (...args: infer A86): infer R86;
    (...args: infer A87): infer R87;
    (...args: infer A88): infer R88;
    (...args: infer A89): infer R89;
    (...args: infer A90): infer R90;
    (...args: infer A91): infer R91;
    (...args: infer A92): infer R92;
    (...args: infer A93): infer R93;
    (...args: infer A94): infer R94;
    (...args: infer A95): infer R95;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
        | [A83, R83]
        | [A84, R84]
        | [A85, R85]
        | [A86, R86]
        | [A87, R87]
        | [A88, R88]
        | [A89, R89]
        | [A90, R90]
        | [A91, R91]
        | [A92, R92]
        | [A93, R93]
        | [A94, R94]
        | [A95, R95]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over96<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
    (...args: infer A83): infer R83;
    (...args: infer A84): infer R84;
    (...args: infer A85): infer R85;
    (...args: infer A86): infer R86;
    (...args: infer A87): infer R87;
    (...args: infer A88): infer R88;
    (...args: infer A89): infer R89;
    (...args: infer A90): infer R90;
    (...args: infer A91): infer R91;
    (...args: infer A92): infer R92;
    (...args: infer A93): infer R93;
    (...args: infer A94): infer R94;
    (...args: infer A95): infer R95;
    (...args: infer A96): infer R96;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
        | [A83, R83]
        | [A84, R84]
        | [A85, R85]
        | [A86, R86]
        | [A87, R87]
        | [A88, R88]
        | [A89, R89]
        | [A90, R90]
        | [A91, R91]
        | [A92, R92]
        | [A93, R93]
        | [A94, R94]
        | [A95, R95]
        | [A96, R96]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over97<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
    (...args: infer A83): infer R83;
    (...args: infer A84): infer R84;
    (...args: infer A85): infer R85;
    (...args: infer A86): infer R86;
    (...args: infer A87): infer R87;
    (...args: infer A88): infer R88;
    (...args: infer A89): infer R89;
    (...args: infer A90): infer R90;
    (...args: infer A91): infer R91;
    (...args: infer A92): infer R92;
    (...args: infer A93): infer R93;
    (...args: infer A94): infer R94;
    (...args: infer A95): infer R95;
    (...args: infer A96): infer R96;
    (...args: infer A97): infer R97;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
        | [A83, R83]
        | [A84, R84]
        | [A85, R85]
        | [A86, R86]
        | [A87, R87]
        | [A88, R88]
        | [A89, R89]
        | [A90, R90]
        | [A91, R91]
        | [A92, R92]
        | [A93, R93]
        | [A94, R94]
        | [A95, R95]
        | [A96, R96]
        | [A97, R97]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over98<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
    (...args: infer A83): infer R83;
    (...args: infer A84): infer R84;
    (...args: infer A85): infer R85;
    (...args: infer A86): infer R86;
    (...args: infer A87): infer R87;
    (...args: infer A88): infer R88;
    (...args: infer A89): infer R89;
    (...args: infer A90): infer R90;
    (...args: infer A91): infer R91;
    (...args: infer A92): infer R92;
    (...args: infer A93): infer R93;
    (...args: infer A94): infer R94;
    (...args: infer A95): infer R95;
    (...args: infer A96): infer R96;
    (...args: infer A97): infer R97;
    (...args: infer A98): infer R98;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
        | [A83, R83]
        | [A84, R84]
        | [A85, R85]
        | [A86, R86]
        | [A87, R87]
        | [A88, R88]
        | [A89, R89]
        | [A90, R90]
        | [A91, R91]
        | [A92, R92]
        | [A93, R93]
        | [A94, R94]
        | [A95, R95]
        | [A96, R96]
        | [A97, R97]
        | [A98, R98]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over99<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
    (...args: infer A83): infer R83;
    (...args: infer A84): infer R84;
    (...args: infer A85): infer R85;
    (...args: infer A86): infer R86;
    (...args: infer A87): infer R87;
    (...args: infer A88): infer R88;
    (...args: infer A89): infer R89;
    (...args: infer A90): infer R90;
    (...args: infer A91): infer R91;
    (...args: infer A92): infer R92;
    (...args: infer A93): infer R93;
    (...args: infer A94): infer R94;
    (...args: infer A95): infer R95;
    (...args: infer A96): infer R96;
    (...args: infer A97): infer R97;
    (...args: infer A98): infer R98;
    (...args: infer A99): infer R99;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
        | [A83, R83]
        | [A84, R84]
        | [A85, R85]
        | [A86, R86]
        | [A87, R87]
        | [A88, R88]
        | [A89, R89]
        | [A90, R90]
        | [A91, R91]
        | [A92, R92]
        | [A93, R93]
        | [A94, R94]
        | [A95, R95]
        | [A96, R96]
        | [A97, R97]
        | [A98, R98]
        | [A99, R99]
    : unknown,
  [ARGS_T, unknown]
>[1];
export type Over100<T extends (...args: never[]) => unknown, ARGS_T> = Extract<
  T extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
    (...args: infer A11): infer R11;
    (...args: infer A12): infer R12;
    (...args: infer A13): infer R13;
    (...args: infer A14): infer R14;
    (...args: infer A15): infer R15;
    (...args: infer A16): infer R16;
    (...args: infer A17): infer R17;
    (...args: infer A18): infer R18;
    (...args: infer A19): infer R19;
    (...args: infer A20): infer R20;
    (...args: infer A21): infer R21;
    (...args: infer A22): infer R22;
    (...args: infer A23): infer R23;
    (...args: infer A24): infer R24;
    (...args: infer A25): infer R25;
    (...args: infer A26): infer R26;
    (...args: infer A27): infer R27;
    (...args: infer A28): infer R28;
    (...args: infer A29): infer R29;
    (...args: infer A30): infer R30;
    (...args: infer A31): infer R31;
    (...args: infer A32): infer R32;
    (...args: infer A33): infer R33;
    (...args: infer A34): infer R34;
    (...args: infer A35): infer R35;
    (...args: infer A36): infer R36;
    (...args: infer A37): infer R37;
    (...args: infer A38): infer R38;
    (...args: infer A39): infer R39;
    (...args: infer A40): infer R40;
    (...args: infer A41): infer R41;
    (...args: infer A42): infer R42;
    (...args: infer A43): infer R43;
    (...args: infer A44): infer R44;
    (...args: infer A45): infer R45;
    (...args: infer A46): infer R46;
    (...args: infer A47): infer R47;
    (...args: infer A48): infer R48;
    (...args: infer A49): infer R49;
    (...args: infer A50): infer R50;
    (...args: infer A51): infer R51;
    (...args: infer A52): infer R52;
    (...args: infer A53): infer R53;
    (...args: infer A54): infer R54;
    (...args: infer A55): infer R55;
    (...args: infer A56): infer R56;
    (...args: infer A57): infer R57;
    (...args: infer A58): infer R58;
    (...args: infer A59): infer R59;
    (...args: infer A60): infer R60;
    (...args: infer A61): infer R61;
    (...args: infer A62): infer R62;
    (...args: infer A63): infer R63;
    (...args: infer A64): infer R64;
    (...args: infer A65): infer R65;
    (...args: infer A66): infer R66;
    (...args: infer A67): infer R67;
    (...args: infer A68): infer R68;
    (...args: infer A69): infer R69;
    (...args: infer A70): infer R70;
    (...args: infer A71): infer R71;
    (...args: infer A72): infer R72;
    (...args: infer A73): infer R73;
    (...args: infer A74): infer R74;
    (...args: infer A75): infer R75;
    (...args: infer A76): infer R76;
    (...args: infer A77): infer R77;
    (...args: infer A78): infer R78;
    (...args: infer A79): infer R79;
    (...args: infer A80): infer R80;
    (...args: infer A81): infer R81;
    (...args: infer A82): infer R82;
    (...args: infer A83): infer R83;
    (...args: infer A84): infer R84;
    (...args: infer A85): infer R85;
    (...args: infer A86): infer R86;
    (...args: infer A87): infer R87;
    (...args: infer A88): infer R88;
    (...args: infer A89): infer R89;
    (...args: infer A90): infer R90;
    (...args: infer A91): infer R91;
    (...args: infer A92): infer R92;
    (...args: infer A93): infer R93;
    (...args: infer A94): infer R94;
    (...args: infer A95): infer R95;
    (...args: infer A96): infer R96;
    (...args: infer A97): infer R97;
    (...args: infer A98): infer R98;
    (...args: infer A99): infer R99;
    (...args: infer A100): infer R100;
  }
    ?
        | [A1, R1]
        | [A2, R2]
        | [A3, R3]
        | [A4, R4]
        | [A5, R5]
        | [A6, R6]
        | [A7, R7]
        | [A8, R8]
        | [A9, R9]
        | [A10, R10]
        | [A11, R11]
        | [A12, R12]
        | [A13, R13]
        | [A14, R14]
        | [A15, R15]
        | [A16, R16]
        | [A17, R17]
        | [A18, R18]
        | [A19, R19]
        | [A20, R20]
        | [A21, R21]
        | [A22, R22]
        | [A23, R23]
        | [A24, R24]
        | [A25, R25]
        | [A26, R26]
        | [A27, R27]
        | [A28, R28]
        | [A29, R29]
        | [A30, R30]
        | [A31, R31]
        | [A32, R32]
        | [A33, R33]
        | [A34, R34]
        | [A35, R35]
        | [A36, R36]
        | [A37, R37]
        | [A38, R38]
        | [A39, R39]
        | [A40, R40]
        | [A41, R41]
        | [A42, R42]
        | [A43, R43]
        | [A44, R44]
        | [A45, R45]
        | [A46, R46]
        | [A47, R47]
        | [A48, R48]
        | [A49, R49]
        | [A50, R50]
        | [A51, R51]
        | [A52, R52]
        | [A53, R53]
        | [A54, R54]
        | [A55, R55]
        | [A56, R56]
        | [A57, R57]
        | [A58, R58]
        | [A59, R59]
        | [A60, R60]
        | [A61, R61]
        | [A62, R62]
        | [A63, R63]
        | [A64, R64]
        | [A65, R65]
        | [A66, R66]
        | [A67, R67]
        | [A68, R68]
        | [A69, R69]
        | [A70, R70]
        | [A71, R71]
        | [A72, R72]
        | [A73, R73]
        | [A74, R74]
        | [A75, R75]
        | [A76, R76]
        | [A77, R77]
        | [A78, R78]
        | [A79, R79]
        | [A80, R80]
        | [A81, R81]
        | [A82, R82]
        | [A83, R83]
        | [A84, R84]
        | [A85, R85]
        | [A86, R86]
        | [A87, R87]
        | [A88, R88]
        | [A89, R89]
        | [A90, R90]
        | [A91, R91]
        | [A92, R92]
        | [A93, R93]
        | [A94, R94]
        | [A95, R95]
        | [A96, R96]
        | [A97, R97]
        | [A98, R98]
        | [A99, R99]
        | [A100, R100]
    : unknown,
  [ARGS_T, unknown]
>[1];

