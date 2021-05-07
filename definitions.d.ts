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
  userId: number
}

type UserData = {
  email: string
  password: string
  firstname: string
  lastname: string
}
