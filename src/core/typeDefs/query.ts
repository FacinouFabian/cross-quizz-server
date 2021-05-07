const query = `
type Query {
    users: [User]
    user(id: Int, email: String, firstname: String, lastname: String): User
    score(userID: Int): [Score]
    scores: [Score]
}
`

export default query
