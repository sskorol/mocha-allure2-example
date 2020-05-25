import Menu from './Menu'

export default class ProfilePage extends Menu {
  get fullName(): string {
    return 'Sergey Korol'
  }

  get username(): string {
    return '@skorol'
  }
}
