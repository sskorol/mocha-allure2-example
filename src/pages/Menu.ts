import { step } from 'allure-decorators'
import { at } from '../utils/PageFactory'
import Page from './Page'

export default class Menu extends Page {
  @step((page: any) => `Open "${page.name}".`)
  public select<T extends Page>(page: new () => T): T {
    return at(page)
  }
}
