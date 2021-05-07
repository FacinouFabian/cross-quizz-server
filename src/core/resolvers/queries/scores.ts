import { getAllScores, getScore } from '../../libs/scores'

export default {
  scores: () => getAllScores(),
  score: (_: unknown, { userID }: { userID: number }) => getScore({ id: userID }),
}
