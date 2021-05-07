import bcrypt from 'bcryptjs'

import { updateUser } from '../../libs/users'

type Data = {
  id: number
  email?: string
  password?: string
  firstname?: string
  lastname?: string
}

export default async function (_: unknown, args: Data): Promise<User | Error> {
  const { id, firstname, lastname, email, password } = args

  const userData = !password
    ? args
    : {
        firstname,
        lastname,
        email,
        encryptedPassword: bcrypt.hashSync(password),
        createdAt: new Date(),
        updatedAt: new Date(),
      }

  const user = await updateUser(id, userData)

  return user
}
