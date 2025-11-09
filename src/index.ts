import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
console.log('import :typeDefs from "./schema/typeDefs.js";------------------------++');

import typeDefs from "./schema/typeDefs.js";
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
// console.log('import resolvers from "./Resolvers/index.js";------------------------++');

import resolvers from "./Resolvers/index.js";
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

console.log('------------------------++');
const server = new ApolloServer({
    typeDefs,
    resolvers,
});



// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
.then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});


// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);