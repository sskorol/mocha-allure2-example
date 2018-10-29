import { CacheClass } from 'memory-cache';
import Page from '../pages/Page';

export function open<T extends Page>(PageClass: new () => T): T {
  return at(PageClass).open() as T;
}

export function at<T extends Page>(PageClass: new () => T): T {
  return cachePage(PageClass.name, typeof PageClass === 'function' ? new PageClass() : PageClass);
}

export function cleanUpCache() {
  const cache = getCache();
  if (cache) {
    cache.clear();
  }
}

export function setUpCache() {
  // @ts-ignore
  global.cache = require('memory-cache');
}

function getCache(): CacheClass<any, any> {
  // @ts-ignore
  return global.cache;
}

function cachePage<T>(key: string, value: T): T {
  return getCache().get(key) || getCache().put(key, value);
}
