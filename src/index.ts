import express from 'express';
import mongoose from "mongoose";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Basic Express middleware
app.use(cors());
app.use(express.json());

// Apollo Server setup
const server = new ApolloServer({
    typeDefs: `
    type Query {
    hello: String
    }
`, 
resolvers: {
        Query: {
            hello: () => 'Hello World!'
        }
    }
});

// Start the server
async function startServer() {
    await server.start();

    // Apply Apollo middleware to Express
    app.use('/graphql', expressMiddleware(server));

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/graphql`);
    });
}

startServer();
