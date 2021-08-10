import { PASSWORD, USERNAME } from '../common/Config'

export class User {
  public static dummy(): User {
    return new User(USERNAME, PASSWORD, 'Sergey Korol')
  }

  public static dummy1(): User {
    return new User(`${USERNAME}_`, `${PASSWORD}_`, 'Sergey Pertov')
  }

  constructor(readonly username: string, readonly password: string, readonly fullName: string) {}

  public toString() {
    return this.fullName
  }
}
