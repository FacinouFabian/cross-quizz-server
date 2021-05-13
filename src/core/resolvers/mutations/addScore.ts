import { Scores } from '@prisma/client'

import { createScore } from '../../libs/scores'

export default async function (_: unknown, args: ScoreData): Promise<Scores | Error> {
  const { value, userId, time } = args
  return new Promise(async (resolve, reject) => {
    await createScore({
      value,
      time,
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
