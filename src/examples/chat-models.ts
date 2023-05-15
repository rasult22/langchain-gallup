import { ChatOpenAI } from "langchain/chat_models";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

const chat = new ChatOpenAI({ temperature: 0 });

const response = await chat.call([
  new HumanChatMessage(
    "Translate this sentence from English to French. I love programming."
  ),
]);

console.log(response);

// Multiple Messages
const responseB = await chat.call([
  new SystemChatMessage(
    "You are a helpful assistant that translates English to French."
  ),
  new HumanChatMessage("Translate: I love programming."),
]);

console.log(responseB);


// Multuple completions
const responseC = await chat.generate([
  [
    new SystemChatMessage(
      "You are a helpful assistant that translates English to French."
    ),
    new HumanChatMessage(
      "Translate this sentence from English to French. I love programming."
    ),
  ],
  [
    new SystemChatMessage(
      "You are a helpful assistant that translates English to French."
    ),
    new HumanChatMessage(
      "Translate this sentence from English to French. I love artificial intelligence."
    ),
  ],
]);

console.log(responseC);
/* RESPONSE: {
  generations: [
    [
      {
        text: "J'aime programmer.",
        message: AIChatMessage { text: "J'aime programmer." },
      }
    ],
    [
      {
        text: "J'aime l'intelligence artificielle.",
        message: AIChatMessage { text: "J'aime l'intelligence artificielle." }
      }
    ]
  ]
} */

