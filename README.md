# LangChain TypeScript AI Study Helper

A beginner-friendly TypeScript project that demonstrates the fundamentals of building AI applications using LangChain. This project showcases model integration, prompt templates, memory, context management, chains, agents, tools, and LangSmith tracing.

## Project Overview

This project implements an AI Study Helper that allows users to ask questions and receive intelligent responses powered by a Large Language Model (LLM). The application demonstrates how prompts, memory, chains, and agents work together to create a practical AI-powered system.

## What is LangChain?

LangChain is an open-source framework designed to simplify the development of applications powered by Large Language Models. It provides reusable components for managing prompts, memory, tools, agents, and workflows.

Instead of manually handling every interaction with an LLM, developers can use LangChain to build scalable and maintainable AI applications more efficiently.

## Why Use LangChain?

LangChain offers several advantages:

- Prompt Templates for reusable prompts
- Memory management for conversations
- Chains for structured workflows
- Agents for dynamic decision-making
- Tool integration for external actions
- Support for multiple AI models
- LangSmith integration for debugging and monitoring

## Application Workflow

The application follows the process below:

1. User enters a question.
2. A prompt template formats the request.
3. Memory loads previous conversation history.
4. The model receives context and generates a response.
5. An agent determines whether a tool is needed.
6. The final response is returned to the user.

## Model Integration

The project connects to an OpenAI chat model using LangChain.

```typescript
import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0.7,
});
```

## Prompt Templates

Prompt templates separate prompt logic from application logic.

```typescript
import { ChatPromptTemplate } from "@langchain/core/prompts";

const prompt = ChatPromptTemplate.fromTemplate(`
You are a helpful study assistant.

Question: {question}

Answer:
`);
```

## Creating a Chain

Chains connect prompts and models into a reusable workflow.

```typescript
const chain = prompt.pipe(model);

const result = await chain.invoke({
  question: "Explain recursion"
});
```

## Memory Management

Memory enables the application to remember previous interactions.

```typescript
import { BufferMemory } from "langchain/memory";

const memory = new BufferMemory({
  returnMessages: true,
});
```

Memory improves conversational continuity and user experience.

## Context Management

Context provides additional information that helps the model generate more accurate and personalized responses.

Example:

```text
Student Level: Beginner
Subject: Programming
```

Benefits include:

- Personalized responses
- Better accuracy
- Improved relevance
- Reduced hallucinations

## Agents and Tools

Agents can decide when external tools should be used.

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

### Agent Example

User Question:

```text
What is 25 × 18?
```

Agent Decision:

```text
Use Calculator Tool
```

Response:

```text
450
```

## LangSmith Integration

LangSmith provides visibility into every step of an AI application's execution.

It helps developers:

- Inspect prompts
- Track memory usage
- Monitor agent decisions
- View tool calls
- Analyze token consumption
- Debug unexpected outputs
- Improve application reliability

## LangSmith Trace Flow

```text
User Question
      ↓
Prompt Creation
      ↓
Memory Loading
      ↓
Agent Decision
      ↓
Tool Execution
      ↓
Model Response
      ↓
Final Output
```

## Learning Outcomes

After completing this project, you will understand:

- What LangChain solves
- How LLM applications are structured
- Model integration using TypeScript
- Prompt engineering fundamentals
- Memory management
- Context handling
- Chain creation
- Agent and tool integration
- LangSmith tracing and debugging

## Future Enhancements

- Document Question Answering
- Retrieval-Augmented Generation (RAG)
- Vector Database Integration
- Multi-Agent Systems
- Web Search Tools
- Persistent Conversation Storage
- Cloud Deployment

## Conclusion

This project demonstrates the core building blocks of modern AI application development using LangChain and TypeScript. By combining prompts, memory, chains, agents, tools, and LangSmith tracing, developers can build intelligent, scalable, and observable AI-powered applications.
