import { gql } from 'apollo-server'

import user from './user'
import score from './score'
import query from './query'
import question from './question'
import mutation from './mutation'

const typeDefs = gql`
  ${user}

  ${score}

  ${question}

  ${query}

  ${mutation}
`

export default typeDefs
