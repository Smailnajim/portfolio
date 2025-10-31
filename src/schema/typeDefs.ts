// import { readFileSync } from 'fs';
// import { join } from 'path';
// const { readFileSync } = require('fs');
// const { join } = require('path');

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

export default typeDefs;
// module.exports = typeDefs;