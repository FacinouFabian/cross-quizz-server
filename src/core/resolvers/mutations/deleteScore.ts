import { deleteScores } from '../../libs/scores'

export default async function (_: unknown, args: { userId: number }): Promise<String | Error> {
  const { userId } = args

  const result = await deleteScores(userId)

  return result
}
