import { step } from 'ts-test-decorators';
import { User } from '../model/User';
import { at } from '../utils/PageFactory';
import GridPage from './GridPage';
import Page from './Page';

export default class LoginPage extends Page {
  @step('Log into primary user account.')
  public loginWith(user: User): GridPage {
    return this.fillInUsername(user.username)
      .fillInPassword(user.password)
      .clickSignInButton();
  }

  @step(username => `Fill in username: ${username}.`)
  public fillInUsername(username: string): LoginPage {
    return this;
  }

  @step(password => `Fill in password: ${password}.`)
  public fillInPassword(password: string): LoginPage {
    return this;
  }

  @step('Click "Sign In" button.')
  public clickSignInButton(): GridPage {
    return at(GridPage);
  }
}
