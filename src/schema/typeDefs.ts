import { gql } from 'apollo-server';

const typeDefs = gql`
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
    id: ID!
    userId: [ID!]!
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
    id: ID!
    competenceId: [ID!]!
    company: String!
    position: String!
    startDate: String!
    endDate: String
    responsibilities: [String!]
    enCoure: Boolean
    description: String
}
type Project {
    id: ID!
    CompetenceId: [ID!]!
    title: String!
    description: String!
    demo: String
    code: CodeLink
}
type CodeLink {
    platform: String
    link: String
}

type SocialNetwork {
    platform: String!
    link: String!
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
    reseauxSociaux: [SocialNetwork!]
}

input CompetenceInput {
    userId: [ID!]!
    name: String!
    level: String!
}
input EducationInput {
    userId: ID!
    institution: String!
    degree: String!
    startDate: String!
    endDate: String
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
input SocialNetworkInput {
    platform: String!
    link: String!
}

input CodeLinkInput {
    platform: String!
    link: String!
}

input ProjectInput {
    CompetenceId: [ID!]!
    title: String!
    description: String!
    demo: String
    code: CodeLinkInput
}

input ProjectUpdateInput {
    title: String
    description: String
    demo: String
    code: CodeLinkInput
}
input UserInput {
    role: Role!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
}

input UserUpdateInput {
    firstName: String
    lastName: String
    phone: String
    bio: String
    reseauxSociaux: [SocialNetworkInput!]
}

input UserLogin {
    email: String!
    password: String!
}
type access{
    accessToken: String!
}

type Portfolio {
    user: User!
    competences: [Competence]
    education: [Education]
    experiences: [Experience]
    projects: [Project]
}

type Query {
    getProfil(userId: ID!): User
    getPortfolio(userId: ID!): Portfolio
    getProjets(userId: ID!): [Project!]!
    getCompetences(userId: ID!): [Competence!]!
    getExperiences(userId: ID!): [Experience!]!
}
type Mutation {
    createUser(input: UserInput!): User!
    login(input: UserLogin!): access!
    register(input: UserInput!): access!
    updateProfil(userId: ID!, input: UserUpdateInput!): User!
    createProject(input: ProjectInput!): Project!
    updateProject(id: ID!, input: ProjectUpdateInput!): Project!
    deleteProject(id: ID!): Boolean!
}
`;

export default typeDefs;
// module.exports = typeDefs;