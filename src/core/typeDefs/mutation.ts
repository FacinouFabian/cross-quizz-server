const mutation = `
type Mutation {
    addUser(firstname: String!, lastname: String!, password: String!, email: String!): User!
    updateUser(id: Int!, firstname: String, lastname: String, password: String, email: String): User!
    deleteUser(id: Int!): User!
    addScore(value: Int!, userId: Int!): Score!
    deleteScores(userId: Int!): String!
}
`

export default mutation
