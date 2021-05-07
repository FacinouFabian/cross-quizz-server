import { deleteUser } from '../../libs/users'

export default async function (_: unknown, args: { id: number }): Promise<User | Error> {
  const { id } = args

  const result = await deleteUser(id)

  return result
}
