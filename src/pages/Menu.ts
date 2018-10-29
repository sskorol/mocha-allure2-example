import { step } from 'ts-test-decorators';
import { at } from '../utils/PageFactory';
import Page from './Page';

export default class Menu extends Page {
  @step(page => `Open "${page.name}".`)
  public select<T extends Page>(page: new () => T): T {
    return at(page);
  }
}
