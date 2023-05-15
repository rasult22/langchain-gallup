import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
} from "langchain/prompts";
import { ChatOpenAI } from "langchain/chat_models";
import { LLMChain } from 'langchain';

const chat = new ChatOpenAI({ temperature: 0 });

const translationPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    "You are a helpful assistant that translates {input_language} to {output_language}."
  ),
  HumanMessagePromptTemplate.fromTemplate("{text}"),
]);

const responseA = await chat.generatePrompt([
  await translationPrompt.formatPromptValue({
    input_language: "English",
    output_language: "French",
    text: "I love programming.",
  }),
]);

console.log(responseA);

/* 
  {
    generations: [
      [
        {
          text: "J'aime programmer.",
          message: AIChatMessage { text: "J'aime programmer." }
        }
      ]
    ]
  }
*/

const chain = new LLMChain({
  prompt: translationPrompt,
  llm: chat,
});

const responseB = await chain.call({
  input_language: "English",
  output_language: "French",
  text: "I love programming.",
});

console.log(responseB); // { text: "J'aime programmer." }