import userQueries from './queries/users'
import scoreQueries from './queries/scores'

import addUser from './mutations/addUser'
import deleteUser from './mutations/deleteUser'
import updateUser from './mutations/updateUser'
import addScore from './mutations/addScore'
import deleteScores from './mutations/deleteScore'
import prepareQuizz from './mutations/prepareQuizz'
import signin from './mutations/signin'
import signup from './mutations/signup'

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
    prepareQuizz,
    signin,
    signup,
  },
}

export default resolvers
