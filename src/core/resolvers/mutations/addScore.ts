import { Scores } from '@prisma/client'

import { createScore } from '../../libs/scores'

// !FIXME plutôt Promise<Scores> | never pour l'exception
export default async function (_: unknown, args: ScoreData): Promise<Scores | Error> {
  const { value, userId } = args
  return new Promise(async (resolve, reject) => {
    await createScore({
      value,
      userId,
    })
      .then((score) => {
        resolve(score)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
