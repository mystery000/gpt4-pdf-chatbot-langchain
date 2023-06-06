import { OpenAI } from 'langchain/llms/openai';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { ConversationalRetrievalQAChain } from 'langchain/chains';

const CONDENSE_PROMPT = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`;

const QA_PROMPT = `Act as a helpful PDF file. Given the following content as information source, answer any questions the user asks.
Return the result in a user-friendly format.

{context}

Question: {question}`;

export const makeChain = (vectorstore: PineconeStore) => {
    const model = new OpenAI({
        temperature: 0.1, // increase temepreature to get more creative answers
        modelName: 'gpt-3.5-turbo', //change this to gpt-4 if you have access
    });

    const chain = ConversationalRetrievalQAChain.fromLLM(
        model,
        vectorstore.asRetriever(),
        {
            questionGeneratorTemplate: CONDENSE_PROMPT,
            qaTemplate: QA_PROMPT,
            returnSourceDocuments: true, //The number of source documents returned is 4 by default
        },
    );
    return chain;
};
