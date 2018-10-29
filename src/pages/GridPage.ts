import Menu from './Menu';
import Page from './Page';

export default class GridPage extends Menu {
  public select<T extends Page>(page: new () => T): T {
    return super.select(page);
  }
}
