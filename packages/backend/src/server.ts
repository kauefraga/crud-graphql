import 'dotenv/config';
import app from './app';

async function bootServer(port: string | number) {
  const server = await app();

  return await server
    .listen({ port })
    .then((server) => {
      console.log(`[server] running on ${server.url}`);
    })
    .catch((err) => {
      console.error(err);
    });
}

bootServer(process.env.PORT || 3333);
