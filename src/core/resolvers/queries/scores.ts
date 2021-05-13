import { getAllScores, getManyScores } from '../../libs/scores'

export default {
  scores: () => getAllScores(),
  score: (_: unknown, { userID }: { userID: number }) => getManyScores(userID),
}
