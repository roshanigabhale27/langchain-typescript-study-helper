import { ChatPromptTemplate } from "@langchain/core/prompts";
import { model } from "./model";

const prompt = ChatPromptTemplate.fromTemplate(`
You are StudyBot, a friendly AI tutor.

Conversation History:
{history}

Question:
{question}

Instructions:
- Explain clearly
- Give examples
- Be beginner friendly
`);

export const chain = prompt.pipe(model);