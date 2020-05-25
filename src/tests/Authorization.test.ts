import { suite, test } from '@testdeck/mocha'
import { ContentType, Severity } from 'allure-js-commons'
import { allure, MochaAllure } from 'allure-mocha/runtime'
import * as dotenv from 'dotenv'
import {
  assignPmsUrl,
  assignTmsUrl,
  data,
  decorate,
  description,
  epic,
  feature,
  issue,
  owner,
  severity,
  story,
  tag,
  testCaseId
} from 'ts-test-decorators'
import { User } from '../model/User'
import LoginPage from '../pages/LoginPage'
import ProfilePage from '../pages/ProfilePage'
import { cleanUpCache, open, setUpCache } from '../utils/PageFactory'
import { verifyThat } from '../verifications/AbstractVerification'
import atProfilePage from '../verifications/ProfilePageVerifications'

dotenv.config()

@suite
class Authorization {
  public static testData = (): User => {
    return User.dummy()
  }

  @issue('11')
  @testCaseId('10')
  @severity(Severity.BLOCKER)
  @epic('User Authentication')
  @feature('Login')
  @story('Positive authorization')
  @owner('skorol')
  @tag('smoke')
  @description('Basic authorization test.')
  @data(Authorization.testData)
  @data.naming(user => `${user} should be able to sign`)
  @test
  public userShouldBeAbleToSignIn(user: User) {
    open(LoginPage)
      .loginWith(user)
      .select(ProfilePage)

    verifyThat(atProfilePage)
      .fullNameIs(user.fullName)
      .usernameIs(user.username)
  }

  public before() {
    assignTmsUrl(process.env.TMS_URL)
    assignPmsUrl(process.env.PMS_URL)
    decorate<MochaAllure>(allure)
    setUpCache()
  }

  public after() {
    allure.attachment('Test attachment', 'test attachment content', ContentType.TEXT)
    cleanUpCache()
  }
}
