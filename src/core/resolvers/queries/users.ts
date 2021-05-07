import { getAllUsers, getUser } from '../../libs/users'

export default {
  users: () => getAllUsers(),
  user: (_: unknown, args: Partial<User>) => getUser(args),
}
