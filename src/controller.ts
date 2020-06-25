import { Quote } from './types.ts';

const quotes: Array<string> = JSON.parse(Deno.readTextFileSync('./data/quotes.json'));
const images: Array<string> = JSON.parse(Deno.readTextFileSync('./data/images.json'));

const getRandomEntry = (array: Array<string>) =>
  array[Math.floor(Math.random() * array.length)];

const getQuote = ({ response }: { response: any }) => {
  const quote: Quote = { quote: getRandomEntry(quotes) };
  response.body = quote;
};

const getImage = ({ response }: { response: any }) => {
  response.body = { url: getRandomEntry(images) };
};

export { getQuote, getImage };
