// const express = require('express');
// const { ApolloServer } = require('@apollo/server');
// const { expressMiddleware } = require('@apollo/server/express4');
// const cors = require('cors');
// const dotenv = require("dotenv");
// require('dotenv').config();

// import express from 'express';
// import { ApolloServer } from '@apollo/server';
// import { expressMiddleware } from '@apollo/server/express4';
// import cors from 'cors';
// import dotenv from "dotenv";
// dotenv.config();


// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';

// const typeDefs = require("./schema/typeDefs");
// const resolvers = require("./Resolvers");

// import typeDefs from "./schema/typeDefs";
// const app = express();

// import resolvers from "./Resolvers";
// Basic Express middleware
// app.use(cors());
// app.use(express.json());

// Apollo Server setup
// const server = new ApolloServer({
//     typeDefs: typeDefs, 
//     resolvers: resolvers
// });

// Start the server
// async function startServer() {
//     await server.start();

    // Apply Apollo middleware to Express
    // app.use('/graphql', expressMiddleware(server));

//     const PORT = process.env.PORT || 4001;
//     app.listen(PORT, () => {
//         console.log(`Server running at http://localhost:${PORT}/graphql`);
//     });
// }

// startServer();
