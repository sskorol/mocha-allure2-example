import { Severity } from 'allure2-js-commons';
import { suite } from 'mocha-typescript';
import { data, description, feature, issue, owner, severity, story, tag, testCaseId } from 'ts-test-decorators';
import { User } from '../model/User';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import { cleanUpCache, open, setUpCache } from '../utils/PageFactory';
import { verifyThat } from '../verifications/AbstractVerification';
import atProfilePage from '../verifications/ProfilePageVerifications';

@suite
class Authorization {
  @issue('1')
  @testCaseId('5')
  @severity(Severity.BLOCKER)
  @feature('Login')
  @story('Positive authorization')
  @owner('skorol')
  @tag('smoke')
  @description('Basic authorization test.')
  @data(testData())
  @data.withCustomTestName(user => `${user} should be able to sign`)
  public userShouldBeAbleToSignIn(user: User) {
    open(LoginPage)
      .loginWith(user)
      .select(ProfilePage);

    verifyThat(atProfilePage)
      .fullNameIs(user.fullName)
      .usernameIs(user.username);
  }

  public before() {
    setUpCache();
  }

  public after() {
    cleanUpCache();
  }
}

function testData(): User {
  return User.dummy();
}
