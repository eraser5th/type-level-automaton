import { Equal } from "./util/Equal";
import { FuncCall } from "./util/FuncCall";
import { SplitString } from "./util/SplitString";
import { Automaton as Automaton_ } from "./Automaton";

export enum Result {
  Accepted = "Accepted",
  Refused = "Refused",
}

export type Accepter<
  Automaton extends Automaton_,
  Word extends string,
> = AccepterInner<Automaton, SplitString<Word>>;

type AccepterInner<
  Automaton extends Automaton_,
  Word extends string[],
  CurrentState extends string = Automaton["initState"],
  ReadPositionAcc extends never[] = [],
  // Aliases
  WordLen extends number = Word["length"],
  ReadPosition extends number = ReadPositionAcc["length"],
  MustFinish extends boolean = Equal<WordLen, ReadPosition>,
  Input extends string = Word[ReadPosition],
> = MustFinish extends true
  ? CurrentState extends Automaton["finishStates"]
    ? Result.Accepted
    : Result.Refused
  : AccepterInner<
      Automaton,
      Word,
      FuncCall<Automaton["transitions"], [Input, CurrentState]>,
      [...ReadPositionAcc, never]
    >;
