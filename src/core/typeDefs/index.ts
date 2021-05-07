import { gql } from 'apollo-server'

import user from './user'
import score from './score'
import query from './query'
import mutation from './mutation'

const typeDefs = gql`
  ${user}

  ${score}

  ${query}

  ${mutation}
`

export default typeDefs
