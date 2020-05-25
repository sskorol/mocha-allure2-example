import { step } from 'ts-test-decorators'

export default abstract class Page {
  @step(url => `Open http://${process.env.HOST}:${process.env.PORT}/${url || ''}`)
  public open(path: string = ''): Page {
    return this
  }
}
