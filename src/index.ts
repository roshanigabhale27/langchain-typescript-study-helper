import "dotenv/config";
import readline from "readline";

import { chain } from "./chain";
import { runAgent } from "./agent";
import { saveMessage, getHistory } from "./memory";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("🎓 STUDY HELPER AI");
console.log("===================");

rl.question("You: ", async (question) => {
  try {
    saveMessage("User", question);

    const response: any = await chain.invoke({
      history: getHistory(),
      question,
    });

    const answer = String(response.content);

    saveMessage("Assistant", answer);

    console.log("\n🤖 StudyBot:");
    console.log(answer);

    const agentInfo = await runAgent(question);

    console.log("\n⚙ Agent Info");
    console.log("Tool Used:", agentInfo.tool);
    console.log("Result:", agentInfo.result);
  } catch (error) {
    console.error(error);
  } finally {
    rl.close();
  }
});