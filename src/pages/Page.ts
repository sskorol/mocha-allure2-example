import { step } from 'allure-decorators'
import { URL } from '../common/Config'

export default abstract class Page {
  @step(url => `Open https://${URL}/${url || ''}`)
  public open(path: string = ''): Page {
    return this
  }
}
