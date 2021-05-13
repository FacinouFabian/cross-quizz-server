interface UserPayload {
  id: number
  firstname: string
}

declare namespace Express {
  export interface Request {
    user?: UserPayload
  }
}

type User = {
  email: string
  encryptedPassword: string
  firstname: string
  lastname: string
  createdAt: Date
  updatedAt: Date
}

type ScoreData = {
  value: number
  time: string
  userId: number
}

type UserData = {
  email: string
  password: string
  firstname: string
  lastname: string
}

type Question = {
  sentence: string
  answers: string[]
  expected: number[]
}
