import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();

import typeDefs from "./schema/typeDefs.ts";
import resolvers from "./Resolvers/index.ts";

const app = express();

// Basic Express middleware
app.use(cors());
app.use(express.json());

// Apollo Server setup
const server = new ApolloServer({
    typeDefs: typeDefs, 
    resolvers: resolvers
});

// Start the server
async function startServer() {
    await server.start();

    // Apply Apollo middleware to Express
    app.use('/graphql', expressMiddleware(server));

    const PORT = process.env.PORT || 4001;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/graphql`);
    });
}

startServer();
