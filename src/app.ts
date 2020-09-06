import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from './router.ts';

const env = config();

const app = new Application();

app.use(oakCors({ origin: '*' }));
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port 8000.`);
await app.listen({ port: 8000 });