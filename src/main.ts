import 'reflect-metadata' // no need si tu utilise pas typeorm
import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server'

import { prelude, mlog } from './core/libs/utils'
import typeDefs from './core/typeDefs'
import resolvers from './core/resolvers'

import { createScore } from './core/libs/scores'

const main = async (): Promise<void> => {
  try {
    // Every beautiful story have a begining...
    prelude()

    dotenv.config()

    const server = new ApolloServer({ typeDefs, resolvers })

    const port = process.env.PORT as string // check si ça existe sinon un port par défaut

    server.listen(parseInt(port, 10)).then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`)
    })
  } catch (err) {
    mlog(err.message, 'error')
    process.exit(-1)
  }
}

// Let's Rock ! 😘😅
main()
