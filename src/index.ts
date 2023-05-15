import * as dotenv from "dotenv";
import { OpenAI } from "langchain";

import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

dotenv.config();


const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  temperature: 0.2,
  maxTokens: 50,
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const memory = new BufferMemory();
const chain = new ConversationChain({ llm: model, memory });
// const res1 = await chain.call({ input: "Hi! I'm Jim." });
// console.log(res1);
// const res2 = await chain.call({ input: "What's my name?" });
// console.log(res2);
