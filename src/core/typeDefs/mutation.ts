const mutation = `
type Mutation {
    addUser(firstname: String!, lastname: String!, password: String!, email: String!): User!
    updateUser(id: Int!, firstname: String, lastname: String, password: String, email: String): User!
    deleteUser(id: Int!): User!
    addScore(value: Int!, time: String!, userId: Int!): Score!
    deleteScores(userId: Int!): String!
    prepareQuizz(nb: Int!): [Question]!
    signin(email: String!, password: String!): User!
    signup(firstname: String!, lastname: String!, email: String!, password: String!): User!
}
`

export default mutation
