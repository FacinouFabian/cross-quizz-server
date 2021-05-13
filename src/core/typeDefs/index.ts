import { gql } from 'apollo-server'

import user from './user'
import score from './score'
import query from './query'
import mutation from './mutation'

// !FIXME pas trop compréhensible comme ça avec les ${model} tu devrais plutôt écrire des user.graphql, score.graphql et ensuite merge les fichiers
// pour avoir un seul schema --> voir   https://www.graphql-tools.com
const typeDefs = gql`
  ${user}

  ${score}

  ${query}

  ${mutation}
`

export default typeDefs
