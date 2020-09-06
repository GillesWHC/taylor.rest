FROM hayd/alpine-deno:1.3.3

EXPOSE 8000

WORKDIR /app

USER deno

ADD . .

RUN deno cache src/app.ts

CMD ["run", "--allow-net","--allow-read", "src/app.ts"]