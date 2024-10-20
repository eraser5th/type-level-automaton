import { Accepter, Result } from "./Accepter";
import { Automaton } from "./Automaton";

function test_Automata() {
  {
    type MyAutomata = Automaton<
      ["a", "b"],
      ["p", "q"],
      "p",
      {
        (a: "a", s: "p"): "p";
        (a: "a", s: "q"): "p";
        (a: "b", s: "p"): "q";
        (a: "b", s: "q"): "q";
      },
      "q"
    >;

    {
      type result = Accepter<MyAutomata, "b">;
      const _: result = Result.Accepted;
    }

    {
      type result = Accepter<MyAutomata, "ba">;
      const _: result = Result.Refused;
    }

    {
      type result = Accepter<MyAutomata, "ab">;
      const _: result = Result.Accepted;
    }

    {
      type result = Accepter<MyAutomata, "hoge">;
      const n = 1;
      if (n !== 1) {
        const _: result = n;
      }
    }
  }

  {
    type MyAutomata = Automaton<
      ["a", "b", "c"],
      ["p", "q", "r", "s"],
      "p",
      {
        // a
        (a: "a", s: "p"): "q";
        (a: "b", s: "p"): "p";
        (a: "c", s: "p"): "p";
        // b
        (a: "a", s: "q"): "q";
        (a: "b", s: "q"): "r";
        (a: "c", s: "q"): "q";
        // c
        (a: "a", s: "r"): "r";
        (a: "b", s: "r"): "r";
        (a: "c", s: "r"): "s";
        // a
        (a: "a", s: "s"): "p";
        (a: "b", s: "s"): "p";
        (a: "c", s: "s"): "p";
      },
      "s"
    >;

    {
      type result = Accepter<MyAutomata, "abc">;
      const _: result = Result.Accepted;
    }
    {
      type result = Accepter<MyAutomata, "abab">;
      const _: result = Result.Refused;
    }
  }

  type shikanoko = Automaton<
    ["し", "か", "の", "こ", "た", "ん"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"],
    "a",
    {
      // し
      (a: "し", s: "a"): "b";
      (a: "か", s: "a"): "a";
      (a: "の", s: "a"): "a";
      (a: "こ", s: "a"): "a";
      (a: "た", s: "a"): "a";
      (a: "ん", s: "a"): "a";
      // か
      (a: "し", s: "b"): "b";
      (a: "か", s: "b"): "c";
      (a: "の", s: "b"): "b";
      (a: "こ", s: "b"): "b";
      (a: "た", s: "b"): "b";
      (a: "ん", s: "b"): "b";
      // の
      (a: "し", s: "c"): "c";
      (a: "か", s: "c"): "c";
      (a: "の", s: "c"): "d";
      (a: "こ", s: "c"): "c";
      (a: "た", s: "c"): "c";
      (a: "ん", s: "c"): "c";
      // こ
      (a: "し", s: "d"): "d";
      (a: "か", s: "d"): "d";
      (a: "の", s: "d"): "d";
      (a: "こ", s: "d"): "e";
      (a: "た", s: "d"): "d";
      (a: "ん", s: "d"): "d";
      // の
      (a: "し", s: "e"): "e";
      (a: "か", s: "e"): "e";
      (a: "の", s: "e"): "f";
      (a: "こ", s: "e"): "e";
      (a: "た", s: "e"): "e";
      (a: "ん", s: "e"): "e";
      // こ
      (a: "し", s: "f"): "f";
      (a: "か", s: "f"): "f";
      (a: "の", s: "f"): "f";
      (a: "こ", s: "f"): "g";
      (a: "た", s: "f"): "f";
      (a: "ん", s: "f"): "f";
      // の
      (a: "し", s: "g"): "g";
      (a: "か", s: "g"): "g";
      (a: "の", s: "g"): "h";
      (a: "こ", s: "g"): "g";
      (a: "た", s: "g"): "g";
      (a: "ん", s: "g"): "g";
      // こ
      (a: "し", s: "h"): "h";
      (a: "か", s: "h"): "h";
      (a: "の", s: "h"): "h";
      (a: "こ", s: "h"): "i";
      (a: "た", s: "h"): "h";
      (a: "ん", s: "h"): "h";
      // こ
      (a: "し", s: "i"): "i";
      (a: "か", s: "i"): "i";
      (a: "の", s: "i"): "i";
      (a: "こ", s: "i"): "j";
      (a: "た", s: "i"): "i";
      (a: "ん", s: "i"): "i";
      // し
      (a: "し", s: "j"): "k";
      (a: "か", s: "j"): "j";
      (a: "の", s: "j"): "j";
      (a: "こ", s: "j"): "j";
      (a: "た", s: "j"): "j";
      (a: "ん", s: "j"): "j";
      // た
      (a: "し", s: "k"): "k";
      (a: "か", s: "k"): "k";
      (a: "の", s: "k"): "k";
      (a: "こ", s: "k"): "k";
      (a: "た", s: "k"): "l";
      (a: "ん", s: "k"): "k";
      // ん
      (a: "し", s: "l"): "l";
      (a: "か", s: "l"): "l";
      (a: "の", s: "l"): "l";
      (a: "こ", s: "l"): "l";
      (a: "た", s: "l"): "l";
      (a: "ん", s: "l"): "m";
      // た
      (a: "し", s: "m"): "m";
      (a: "か", s: "m"): "m";
      (a: "の", s: "m"): "m";
      (a: "こ", s: "m"): "m";
      (a: "た", s: "m"): "n";
      (a: "ん", s: "m"): "m";
      // ん
      (a: "し", s: "n"): "n";
      (a: "か", s: "n"): "n";
      (a: "の", s: "n"): "n";
      (a: "こ", s: "n"): "n";
      (a: "た", s: "n"): "n";
      (a: "ん", s: "n"): "o";
      // return to a
      (a: "し", s: "o"): "b";
      (a: "か", s: "o"): "a";
      (a: "の", s: "o"): "a";
      (a: "こ", s: "o"): "a";
      (a: "た", s: "o"): "a";
      (a: "ん", s: "o"): "a";
    },
    "o"
  >;

  {
    type result = Accepter<shikanoko, "しかのこたん">;
    const _: result = Result.Refused;
  }
  {
    type result = Accepter<shikanoko, "しかのこのこのここしたんたん">;
    const _: result = Result.Accepted;
  }
  {
    type result = Accepter<
      shikanoko,
      "しかのこのこのここしたんたんしかのこのこのここしたんたん"
    >;
    const _: result = Result.Accepted;
  }
}

test_Automata();
