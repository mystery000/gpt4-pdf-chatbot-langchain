import { ChatOpenAI } from 'langchain/chat_models/openai';
import { OpenAI } from 'langchain/llms/openai';
import {
    HumanChatMessage,
    SystemChatMessage,
    AIChatMessage,
} from 'langchain/schema';

const text = `You are chatbot to 
provide useful information with given the following context. \\nIf the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.\\nAnswer in a concise or elaborate format as per the intent of the question.\\nIf context contains escape characters, they must be included in the response.\\n\\n====================\\nThe parties hereto may elect to extend this Agreement upon such terms \\nand conditions as may be agreed upon in writing and signed by the \\nparties at the time of any such extension.\\n \\nARTICLE IV - DETERMINATION OF RENT\\n \\nSection 1. Monthly Rent: The Tenant agrees to pay the Landlord and the \\nLandlord agrees to accept, during the term hereof, at such place as the \\nLandlord shall from time to time direct by notice to the Tenant, monthly \\nrent set forth in the following table:\\n \\nInitial Period of December 1, 2013 to May 31, 2014:\\n \\n$ 0\\n \\nJune 1, 2014 to May 31, 2015:\\n \\n$ 30,000\\n \\nJune 1, 2015 to May 31, 2016:\\n \\n$ 40,000\\n \\nJune 1, 2016 to May 31, 2017:\\n \\n$ 50,000\\n \\nJune 1, 2017 to May 31, 2018:\\n \\n$ 60,000\\n \\nJune 1, 2019 to May 31, 2020:\\n \\n$ 70,000\\n \\nSection 2.  Late Fee.  A late fee in the amount of 5% of the Monthly \\nRent shall be assessed if payment is not postmarked or received by \\nLandlord on or before the tenth day of each month.\\n \\nARTICLE V - SECURITY DEPOSIT\\n \\nThe Tenant has deposited with the Landlord the sum of Twenty\\n\\nLandlord on or before the tenth day of each month.\\n \\nARTICLE V - SECURITY DEPOSIT\\n \\nThe 
Tenant has deposited with the Landlord the sum of Twenty \\nThousand Dollars ($20,000.00) as security for the full and faithful \\nperformance by the Tenant of all the terms of this lease required to be \\nperformed by the Tenant. Such sum shall be returned to the Tenant after \\nthe expiration of this lease, provided the Tenant has fully and faithfully \\ncarried out all of its terms. In the event of a bona fide sale of the\\n\\nor for any failure to collect any rent due upon such reletting. Upon such \\nreletting, all rentals received by Landlord from such reletting shall be \\napplied: first, to the payment of any indebtedness (other than any rent \\ndue hereunder) from Tenant to Landlord; second, to the payment of any \\ncosts and expenses of such reletting,\\n \\nincluding, without limitation, brokerage fees and attorney's fees and \\ncosts of alterations and repairs; third, to the payment of rent and other \\ncharges then due and unpaid hereunder; and the residue, if any shall be \\nheld by Landlord to the extent of and for application in payment of \\nfuture rent as the same may become due and payable hereunder. In \\nreletting the Premises as aforesaid, Landlord may grant rent concessions\\n\\nARTICLE II - LEASE TERM\\n \\nSection l.  Term of Lease.  The term of this Lease shall begin on the \\nCommencement Date, as defined in Section 2 of this Article II, and shall \\nterminate on May 31, 2020 (\\"the Termination Date\\"); provided, \\nhowever, that at the option of Tenant, Tenant may renew this Lease for \\nfive additional successive one- year terms at a Monthly Rent of \\n$100,000 per month, provided that notice of such renewal is given in \\nwriting no less than 120 days prior to the Termination Date or the \\nexpiration of any one-year renewal term. Tenant may at any time cancel \\nthis Lease and terminate all of its obligations hereunder by the payment \\nof $300,000, plus all other amounts then due under this Lease.\\n \\nSection 2.  Commencement Date. The \\"Commencement Date\\" shall \\nmean  December 1, 2013.\\n \\nARTICLE III - EXTENSIONS\\n====================\\nQuestion: How much rent will 
we collect in 2016?\\nAnswer:The rent for the period of June 1, 2016 to May 31, 2017 is $50,000.Question: Do you knwo Elon Mask? Answer:`;

const chat = new OpenAI({
    modelName: 'gpt-3.5-turbo',
    temperature: 0.1,
    openAIApiKey: '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',
});
// Pass in a list of messages to `call` to start a conversation. In this simple example, we only pass in one message.
const responseA = await chat.call(text);

console.log(responseA);
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

const text1 = `Hi.\n\nI'm Harrison.\n\nHow? Are? You?\nOkay then f f f f.
This is a weird text to write, but gotta test the splittingggg some how.\n\n
Bye!\n\n-H.`;
const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 50,
    chunkOverlap: 5,
});

const output = await splitter.createDocuments([text1]);
console.log(output);
