export type SplitString<
  S extends string,
  Acc extends string[] = [],
> = S extends `${infer Head}${infer Tail}`
  ? Head extends ""
    ? []
    : SplitString<Tail, [...Acc, Head]>
  : Acc;

function test_SplitString() {
  {
    type a = SplitString<"">;
    const _: a = [];
  }
  {
    type a = SplitString<"a">;
    const _: a = ["a"];
  }
  {
    type a = SplitString<"ab">;
    const _: a = ["a", "b"];
  }
  {
    type a = SplitString<"abc">;
    const _: a = ["a", "b", "c"];
  }
  {
    type a = SplitString<"あいうえお">;
    const _: a = ["あ", "い", "う", "え", "お"];
  }
  {
    type a = SplitString<"漢字は？">;
    const _: a = ["漢", "字", "は", "？"];
  }
}

test_SplitString();
