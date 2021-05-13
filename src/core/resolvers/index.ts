import userQueries from './queries/users'
import scoreQueries from './queries/scores'

import addUser from './mutations/addUser'
import deleteUser from './mutations/deleteUser'
import updateUser from './mutations/updateUser'
import addScore from './mutations/addScore'
import deleteScores from './mutations/deleteScore'

// !FIXME La c'est  cool de faire comme ça est de séparer par model
const resolvers = {
  Query: {
    ...userQueries,
    ...scoreQueries,
  },
  Mutation: {
    addUser,
    deleteUser,
    updateUser,
    addScore,
    deleteScores,
  },
}

export default resolvers
