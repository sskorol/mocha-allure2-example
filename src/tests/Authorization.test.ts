import { suite, test } from '@testdeck/mocha'
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
} from 'allure-decorators'
import { ContentType, Severity } from 'allure-js-commons'
import { allure, MochaAllure } from 'allure-mocha/runtime'
import { PMS_URL, TMS_URL } from '../common/Config'
import { User } from '../model/User'
import LoginPage from '../pages/LoginPage'
import ProfilePage from '../pages/ProfilePage'
import { cleanUpCache, open, setUpCache } from '../utils/PageFactory'
import { verifyThat } from '../verifications/AbstractVerification'
import atProfilePage from '../verifications/ProfilePageVerifications'

@suite
class AuthorizationTests {
  public static testData = (): User[] => {
    return [User.dummy(), User.dummy1()]
  }

  @issue('11')
  @testCaseId('10')
  @severity(Severity.BLOCKER)
  @epic('User Authentication')
  @feature('Login')
  @story('Common authorization support')
  @owner('skorol')
  @tag('smoke')
  @description('Basic authorization test.')
  @data(AuthorizationTests.testData)
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
    decorate<MochaAllure>(allure)
    assignTmsUrl(TMS_URL)
    assignPmsUrl(PMS_URL)
    setUpCache()
  }

  public after() {
    allure.attachment('Test attachment', 'test attachment content', ContentType.TEXT)
    cleanUpCache()
  }
}
