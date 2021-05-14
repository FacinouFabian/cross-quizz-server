import 'reflect-metadata'
import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server'

import { prelude, mlog } from './core/libs/utils'
import typeDefs from './core/typeDefs'
import resolvers from './core/resolvers'

const main = async (): Promise<void> => {
  try {
    // Every beautiful story have a begining...
    prelude()

    dotenv.config()

    const server = new ApolloServer({ typeDefs, resolvers })

    const port = process.env.PORT

    server.listen(port ? parseInt(port, 10) : 5000).then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`)
    })
  } catch (err) {
    mlog(err.message, 'error')
    process.exit(-1)
  }
}

// Let's Rock ! 😘😅
main()
