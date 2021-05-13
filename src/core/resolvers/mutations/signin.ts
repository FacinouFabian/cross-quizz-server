import bcrypt from 'bcryptjs'

import { getUser } from '../../libs/users'

export default async function (_: unknown, args: { email: string; password: string }): Promise<User | Error> {
  const { email, password } = args

  const result = await getUser({
    email,
  })

  const pwdCorrect = bcrypt.compareSync(password, (result as User).encryptedPassword)

  if (pwdCorrect) {
    return result
  } else {
    return new Error('Mauvais identifiant ou mot de passe.')
  }
}
