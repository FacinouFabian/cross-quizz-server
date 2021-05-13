import bcrypt from 'bcryptjs'

import { createUser } from '../../libs/users'

export default async function (_: unknown, args: UserData): Promise<User | Error> {
  const { firstname, lastname, email, password } = args
  const result = await createUser({
    firstname,
    lastname,
    email,
    encryptedPassword: bcrypt.hashSync(password),
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  return result
}
