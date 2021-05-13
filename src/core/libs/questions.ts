import data from '../../../questions/data'

const prepareQuizz = (nb: number): Question[] => {
  const shuffled = data.sort(() => {
    return 0.5 - Math.random()
  })

  const selected = shuffled.slice(0, nb)

  return selected
}

export default prepareQuizz
