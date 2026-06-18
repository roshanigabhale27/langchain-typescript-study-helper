import { DynamicTool } from "@langchain/core/tools";

export const calculatorTool = new DynamicTool({
  name: "calculator",
  description: "Performs math calculations",

  func: async (input: string) => {
    try {
      return eval(input).toString();
    } catch {
      return "Invalid calculation";
    }
  },
});