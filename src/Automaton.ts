import { AssignableAtoB } from "./util/AssignableAtoB";
import { LengthEqual } from "./util/Equal";

export type Automaton<
  Alphabet extends string[] = string[],
  States extends string[] = string[],
  InitState extends States[number] = string,
  Transitions extends CreateTransisionSuper<Alphabet, States> = (
    a: any,
    s: any,
  ) => any,
  FinishStates extends States[number] = string,
> = {
  alphabet: Alphabet;
  states: States;
  initState: InitState;
  transitions: Transitions;
  finishStates: FinishStates;
};

/**
 * Create the super type of transition function.
 * @param Alphabet - The alphabet of the automaton.
 * @param State - The states of the automaton.
 *
 * @returns The super type of transition function.
 * @example CreateTransisionSuper<["a", "b"], ["p", "q"]> = {
 *   (a: "a", s: "p"): "p" | "q";
 *   (a: "a", s: "q"): "p" | "q";
 *   (a: "a", s: "p"): "p" | "q";
 *   (a: "b", s: "q"): "p" | "q";
 * }
 */
type CreateTransisionSuper<
  Alphabet extends string[],
  State extends string[],
> = CreateTransisionSuperInner<Alphabet, State>;

type CreateTransisionSuperInner<
  Alphabet extends string[],
  State extends string[],
  ia extends never[] = [],
  is extends never[] = [],
  // Aliases
  A extends string = Alphabet[ia["length"]],
  S extends string = State[is["length"]],
  R extends string = State[number],
  F extends (a: A, s: S) => R = (a: A, s: S) => R,
> =
  LengthEqual<[...ia, 0], Alphabet> extends true
    ? LengthEqual<is, State> extends true
      ? unknown
      : F & CreateTransisionSuperInner<Alphabet, State, ia, [...is, never]>
    : F & CreateTransisionSuperInner<Alphabet, State, [...ia, never], []>;

function test_CreateTransisionSuper() {
  {
    type a = {
      (a: "a", s: "p"): "p";
    };
    type b = CreateTransisionSuper<["a"], ["p"]>;

    const _: AssignableAtoB<a, b> = true;
  }

  {
    type a = {
      (a: "a", s: "p"): "p";
      (a: "b", s: "p"): "p";
    };
    type b = CreateTransisionSuper<["a", "b"], ["p"]>;

    const _: AssignableAtoB<a, b> = true;
  }

  {
    type a = {
      (a: "a", s: "p"): "q";
      (a: "a", s: "q"): "q";
    };
    type b = CreateTransisionSuper<["a"], ["p", "q"]>;

    const _: AssignableAtoB<a, b> = true;
  }

  {
    type a = {
      (a: "a", s: "p"): "q";
      (a: "a", s: "q"): "p";
      (a: "b", s: "p"): "p";
      (a: "b", s: "q"): "q";
    };
    type b = CreateTransisionSuper<["a", "b"], ["p", "q"]>;

    const _: AssignableAtoB<a, b> = true;
  }

  {
    type a = {
      (a: "a", s: "p"): "q";
      (a: "a", s: "q"): "p";
    };
    type b = CreateTransisionSuper<["a", "b"], ["p", "q"]>;

    const _: AssignableAtoB<a, b> = false;
  }
}

test_CreateTransisionSuper();
