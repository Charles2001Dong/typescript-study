// 题型链接 https://github.com/semlinker/awesome-typescript/issues

// 第九题
// 定义一个 JoinStrArray 工具类型，用于根据指定的 Separator 分隔符，对字符串数组类型进行拼接。具体的使用示例如下所示：

// type JoinStrArray<Arr extends string[], Separator extends string, Result extends string = ""> = // 你的实现代码

// // 测试用例
// type Names = ["Sem", "Lolo", "Kaquko"]
// type NamesComma = JoinStrArray<Names, ","> // "Sem,Lolo,Kaquko"
// type NamesSpace = JoinStrArray<Names, " "> // "Sem Lolo Kaquko"
// type NamesStars = JoinStrArray<Names, "⭐️"> // "Sem⭐️Lolo⭐️Kaquko"

// 你的实现代码
type Names = ['Sem', 'Lolo', 'Kaquko',]
type Arr<T extends string[]> = T

type JoinStrArray<
  Arr extends string[],
  Separator extends string,
  Result extends string = ''
> = Arr extends [infer A, ...infer B]
  ? B extends string[]
    ? A extends string
      ? Result extends ''
        ? JoinStrArray<B, Separator, A>
        : JoinStrArray<B, Separator, `${Result}${Separator}${A}`>
      : Result
    : Result
  : Result

  type NamesComma = JoinStrArray<Names, ","> // "Sem,Lolo,Kaquko"