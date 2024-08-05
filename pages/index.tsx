import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Markdown from "../components/Markdown";
import { MyChatGPTContext } from "../contexts/MyChatGPTContext";

export default function Home() {
  const router = useRouter();
  const { dispatch } = useContext(MyChatGPTContext);

  return (
    <Layout>
      <div className="flex h-[calc(100vh-150px)] flex-col items-center justify-center">
        <div className="overflow-auto">
          <Markdown
            disableCopy
            children={`### My ChatGPT - Build Your Own Chatbot Site

My ChatGPT is a personal chatbot site based on the OpenAI ChatGPT API. It provides a private chatbot site for your customers and visitors to interact with your bot. Simply provide an API Key, and you can easily set up the site.

The author of My ChatGPT, [Gabriel Wu](https://github.com/lucifer1004), has open-sourced the code under the MIT license on [GitHub](https://github.com/lucifer1004/my-chatgpt), which means you are free to modify and distribute the code to suit your needs.

If you are looking for an easy-to-use personal chatbot site, My ChatGPT is definitely your best choice. Get your API Key now and start building your chatbot site!

Now you can:

- [Use the Unsplash API to get random images](/demos/unsplash)

Or:
`}
          />
          <div className="flex items-center justify-center">
            <Button
              onClick={() => {
                const newId = uuidv4();
                dispatch({ type: "create", chatId: newId });
                router.push(`/chats/${newId}`);
              }}
              className="mt-5 flex w-[50%] items-center justify-center gap-2 bg-indigo-400 text-indigo-100 hover:bg-indigo-300 hover:text-indigo-600 dark:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-400 dark:hover:text-slate-100"
              title="Start a new conversation"
            >
              <ChatBubbleLeftRightIcon className="h-6" aria-hidden="true" />
              Start Conversation Now
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
