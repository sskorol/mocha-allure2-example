import Page from '../pages/Page'

export class AbstractVerification<T> {
  constructor(protected readonly actual: T) {}
}

export function verifyThat<T extends Page, R extends AbstractVerification<T>>(Instance: new () => R): R {
  return new Instance()
}
