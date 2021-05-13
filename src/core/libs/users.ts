import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createUser = async (data: User): Promise<User | Error> => {
  return new Promise(async (resolve, reject) => {
    await prisma.user
      .create({ data })
      .then((user) => {
        resolve(user)
      })
      .catch((error) => {
        reject(error)
      })
    await prisma.$disconnect()
  })
}

export const getAllUsers = async () => {
  const users = await prisma.user.findMany()
  await prisma.$disconnect()

  return users
}

export const getManyUsers = async (id: number) => {
  const users = await prisma.user.findMany({
    where: { id },
  })
  await prisma.$disconnect()

  return users
}

export const getUser = async (data: Partial<User>): Promise<User | Error> => {
  return new Promise(async (resolve, reject) => {
    await prisma.user
      .findFirst({
        where: { ...data },
      })
      .then((user) => {
        if (user != null) {
          resolve(user)
        } else {
          reject(new Error("Cet utilsateur n'existe pas."))
        }
      })
      .catch((error) => {
        reject(error)
      })
    await prisma.$disconnect()
  })
}

export const updateUser = async (id: number, data: Partial<User>): Promise<User | Error> => {
  return new Promise(async (resolve, reject) => {
    await prisma.user
      .update({
        where: { id },
        data,
      })
      .then((user) => {
        resolve(user)
      })
      .catch((error) => {
        reject(error)
      })
    await prisma.$disconnect()
  })
}

export const deleteUser = async (id: number): Promise<User | Error> => {
  return new Promise(async (resolve, reject) => {
    await prisma.user
      .delete({
        where: { id },
      })
      .then((user) => {
        resolve(user)
      })
      .catch((error) => {
        reject(error)
      })
    await prisma.$disconnect()
  })
}
