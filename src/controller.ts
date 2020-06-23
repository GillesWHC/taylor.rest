import { Quote } from './types.ts';

const quotes: Array<Quote> = [
  {
    quote: 'People haven\'t always been there for me but music always has.'
  },
  {
    quote: 'I suffer from girlnextdooritis where the guy is friends with you and that\'s it.'
  },
  {
    quote: 'This is a new year. A new beginning. And things will change.'
  },
  {
    quote: 'No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind.'
  },
  {
    quote: 'I never want to change so much that people can\'t recognize me.'
  }
];

const getQuote = ({ response }: { response: any }) => {
  response.body = quotes[Math.floor(Math.random() * quotes.length)];
};

export { getQuote };
