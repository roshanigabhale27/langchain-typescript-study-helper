# langchain-typescript-study-helper
A TypeScript AI Study Helper built with LangChain demonstrating LLM integration, prompt templates, memory, chains, agents, tools, and LangSmith tracing for debugging and observability.
LangChain TypeScript AI Study Helper

Project Overview

This project demonstrates the fundamentals of building AI applications using LangChain and TypeScript. The application acts as an AI Study Helper that accepts user questions, processes them through prompts and memory, generates responses using an LLM, and uses agents to decide when tools should be executed.

The goal of this project is to understand how modern AI applications are structured and how LangChain simplifies the development process.

Introduction to LangChain

LangChain is an open-source framework that helps developers build applications powered by Large Language Models (LLMs). Instead of manually managing prompts, memory, tools, and workflows, developers can use LangChain's built-in components to create scalable and maintainable AI systems.

Why Use LangChain

LangChain provides several advantages:

Reusable prompt templates

Conversation memory management

Chain-based workflows

Agent-driven decision making

Tool integration

Multi-model support

Easy debugging and monitoring with LangSmith

Project Workflow

The application follows the flow below:

User submits a question

A prompt template formats the input

Memory loads previous conversation history

The model generates a response

An agent decides whether a tool should be used

The final response is returned to the user

Model Integration

The project uses an OpenAI chat model through LangChain.

```typescript
import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0.7,
});
```

Prompt Templates

Prompt templates help create consistent prompts and separate prompt logic from application logic.

```typescript
import { ChatPromptTemplate } from "@langchain/core/prompts";

const prompt = ChatPromptTemplate.fromTemplate(`
You are a helpful study assistant.

Question: {question}

Answer:
`);
```

Chains

Chains combine prompts and models into a single workflow.

```typescript
const chain = prompt.pipe(model);

const result = await chain.invoke({
  question: "Explain recursion"
});
```

Memory Management

Memory allows the application to remember previous interactions and maintain context across conversations.

```typescript
import { BufferMemory } from "langchain/memory";

const memory = new BufferMemory({
  returnMessages: true,
});
```

Context Management

Additional context can be provided to improve response quality and personalization.

Example:

Student Level: Beginner

Subject: Programming

This context helps the model generate more relevant answers.

Agents and Tools

Agents are capable of deciding whether external tools are required to complete a task.

Example Calculator Tool:

```typescript
import { tool } from "@langchain/core/tools";

const calculatorTool = tool(
  async ({ expression }) => {
    return eval(expression).toString();
  },
  {
    name: "calculator",
    description: "Performs calculations"
  }
);
```

Agent Example:

User asks:

What is 25 × 18?

The agent decides to use the calculator tool and returns:

450

LangSmith Integration

LangSmith helps developers monitor and debug LangChain applications by providing visibility into every step of execution.

LangSmith can be used to:

Inspect prompts

Track memory usage

Monitor agent decisions

View tool calls

Analyze token consumption

Debug failures and incorrect outputs

Trace Application Flow

User Question

Prompt Creation

Memory Loading

Agent Decision

Tool Execution

Model Response

Final Output

Learning Outcomes

After completing this project, learners will understand:

How LangChain works

How to connect an LLM using TypeScript

Prompt engineering fundamentals

Memory and context management

Chain creation

Agent and tool integration

LangSmith tracing and debugging

Conclusion

This project provides a practical introduction to building AI-powered applications with LangChain. By combining prompts, memory, chains, agents, and LangSmith tracing, developers can build intelligent, scalable, and observable AI systems while understanding the core concepts behind modern LLM applications.
