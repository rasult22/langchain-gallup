// Memory: Add State to Chains and Agents

import { OpenAI } from "langchain";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

const model = new OpenAI({});
const memory = new BufferMemory();
const chain = new ConversationChain({ llm: model, memory });
const res1 = await chain.call({ input: "Hi! I'm Jim." });
console.log(res1);
const res2 = await chain.call({ input: "What's my name?" });
console.log(res2);