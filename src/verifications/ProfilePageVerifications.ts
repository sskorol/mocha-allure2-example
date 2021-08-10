import { step } from 'allure-decorators'
import { expect } from 'chai'
import ProfilePage from '../pages/ProfilePage'
import { at } from '../utils/PageFactory'
import { AbstractVerification } from './AbstractVerification'

export default class ProfilePageVerifications extends AbstractVerification<ProfilePage> {
  constructor() {
    super(at(ProfilePage))
  }

  @step(username => `Verify that username is ${username}.`)
  public usernameIs(expectedUsername: string): ProfilePageVerifications {
    expect(`${this.actual.username}`).to.be.equal(`@${expectedUsername}`)
    return this
  }

  @step(fullName => `Verify that full name is "${fullName}".`)
  public fullNameIs(expectedFullName: string): ProfilePageVerifications {
    expect(this.actual.fullName).to.be.equal(expectedFullName)
    return this
  }
}
