import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

// import typeDefs from "./schema/typeDefs.js";
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
import resolvers from "./Resolvers/index.js";
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const typeDefs = `
enum Role{
    admin
    guest
}

enum level{
    beginner
    intermediate
    advanced
    expert
}

type Competence {
    userId: ID!
    name: String!
    level: String!
}
type Education {
    userId: ID!
    institution: String!
    degree: String!
    startDate: String!
    endDate: String
    description: String!
}
type Experience {
    company: String!
    position: String!
    startDate: String!
    endDate: String
    responsibilities: [String!]!
}
type Project {
    id: ID!
    title: String!
    description: String!
    link: String
}
type User {
    id: ID!
    role: Role!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    phone: String
    bio: String
    reseauxSociaux: [{
        platform: String!
        link: String!
    }]
}

input CompetenceInput {
    userId: ID!
    name: String!
    level: String!
}
input EducationInput {
    userId: ID!
    institution: String!
    degree: String!
    startDate: Date!
    endDate: Date
    description: String
}
input ExperienceInput {
    competenceId: ID!
    company: String!
    position: String!
    startDate: String!
    endDate: String
    enCoure: Boolean
    description: String
}
input ProjectInput {
    CompetenceId: ID!
    title: String!
    description: String!
    demo: String!
    code: [{
    platform: String!
    link: String!
    }]
}
input UserInput {
    role: Role!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    phone: String
    bio: String
    reseauxSociaux: [{
        platform: String!
        link: String!
    }]
}

type Query {
    getUser(id: ID!): User
    # getAllUsers: [User!]!
}
type Mutation {
    # createUser(input: UserInput!): User!
    # addCompetenceToUser(input: CompetenceInput): Competence!
    # addEducationToUser(input: EducationInput): Education!
    # addExperienceToUser(userId: ID!, company: String!, position: String!, startDate: String!, endDate: String, responsibilities: [String!]!): Experience!
    # addProjectToUser(userId: ID!, title: String!, description: String!, link: String): Project!
}`;

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