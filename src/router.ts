import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getQuote } from './controller.ts';

const router = new Router()

router.get('/', getQuote);

export default router