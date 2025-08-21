import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPEN_AI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true, // This is required for browser usage
});

export default client;
