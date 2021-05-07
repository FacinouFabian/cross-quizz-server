import { PrismaClient, Scores } from '@prisma/client'

const prisma = new PrismaClient()

export const createScore = async (data: ScoreData): Promise<Scores | Error> => {
  const { value, userId } = data

  return new Promise(async (resolve, reject) => {
    await prisma.scores
      .create({
        data: {
          score: value,
          user: { connect: { id: userId } },
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      })
      .then((score) => resolve(score))
      .catch((error) => reject(error))
    await prisma.$disconnect()
  })
}

export const getAllScores = async () => {
  const scores = await prisma.scores.findMany()
  await prisma.$disconnect()

  return scores
}

export const getManyScores = async (userId: number) => {
  const scores = await prisma.scores.findMany({
    where: { userId },
  })
  await prisma.$disconnect()

  return scores
}

export const getScore = async (userId: number) => {
  const scores = await prisma.scores.findFirst({
    where: { userId },
  })
  await prisma.$disconnect()

  return scores
}

export const deleteScores = async (userId: number): Promise<String | Error> => {
  return new Promise(async (resolve, reject) => {
    await prisma.scores
      .deleteMany({
        where: { userId },
      })
      .then(() => {
        resolve('Done.')
      })
      .catch((error) => {
        reject(error)
      })
    await prisma.$disconnect()
  })
}
