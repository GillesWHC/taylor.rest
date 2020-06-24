import { Quote } from './types.ts';

const quotes: Array<string> = JSON.parse(Deno.readTextFileSync('./data/quotes.json'));

const getQuote = ({ response }: { response: any }) => {
  const quote: Quote = { quote: quotes[Math.floor(Math.random() * quotes.length)] };
  response.body = quote;
};

export { getQuote };
