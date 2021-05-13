import prepareQuizz from '../../libs/questions'

export default async function (_: unknown, args: { nb: number }): Promise<Question[]> {
  const { nb } = args
  return new Promise(async (resolve, _) => {
    const questions = prepareQuizz(nb)

    resolve(questions)
  })
}
