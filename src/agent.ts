import { calculatorTool } from "./tools";

export async function runAgent(query: string) {

  const symbols = ["+", "-", "*", "/", "%"];

  const needsMath = symbols.some((s) =>
    query.includes(s)
  );

  if (needsMath) {
    const result = await calculatorTool.invoke(query);

    return {
      tool: "Calculator",
      result,
    };
  }

  return {
    tool: "None",
    result: "No tool required",
  };
}