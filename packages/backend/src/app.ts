import 'reflect-metadata';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/UserResolver';

async function buildApp() {
  const schema = await buildSchema({
    resolvers: [
      UserResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'graphql/schema.gql'),
  });

  const app = new ApolloServer({
    schema,
    cors: {
      origin: '*',
    }
  });

  return app;
}

export default buildApp;
