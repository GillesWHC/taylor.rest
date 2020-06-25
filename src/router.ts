import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getImage, getQuote } from './controller.ts';

const router = new Router()

router.get('/', getQuote);
router.get('/image', getImage);

export default router;