import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { createSchema } from './resolvers';
import express from 'express';

(async () => {
    const PORT = process.env.PORT || 3000;

    const server = new ApolloServer({
        schema: await createSchema(),
    });

    const app = express();

    await server.start();
    server.applyMiddleware({ app });

    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
})();
