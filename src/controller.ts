import { Image, Quote } from './types.ts';

const quotes: Array<string> = JSON.parse(Deno.readTextFileSync('./data/quotes.json'));
const images: Array<string> = JSON.parse(Deno.readTextFileSync('./data/images.json'));

const getRandomIndex = (array: Array<string>) =>
  Math.floor(Math.random() * array.length);

const getQuote = ({ response }: { response: any }) => {
  const index = getRandomIndex(quotes);

  const quote: Quote = {
    id: index,
    quote: quotes[index],
    author: 'Taylor Swift'
  };

  response.body = quote;
};

const getImage = ({ response }: { response: any }) => {
  const index = getRandomIndex(quotes);

  const image: Image = {
    id: index,
    url: images[index],
    source: 'Taylor Swift'
  };
  
  response.body = image;
};

export { getQuote, getImage };
