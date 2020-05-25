export class User {
  public static dummy(): User {
    return new User(process.env.USERNAME, process.env.PASSWORD, 'Sergey Korol')
  }

  constructor(readonly username: string, readonly password: string, readonly fullName: string) {}

  public toString() {
    return this.fullName
  }
}
