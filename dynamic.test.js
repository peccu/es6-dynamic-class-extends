import {default as Dynamic, FS, BrowserFS, DefaultClass} from './dynamic';

describe('Dynamically switching parent class', () => {
  test('non specified class', () => {
    let target = new Dynamic({wd: 'test'});
    // This is not class but function
    // expect(target).toBeInstanceOf(Dynamic);
    expect(target).toBeInstanceOf(DefaultClass);
    expect(target.cwd()).toBe('test');
  });
  test('extends FS', () => {
    let target = new Dynamic({wd: 'test', backend: 'fs'});
    // This is not class but function
    // expect(target).toBeInstanceOf(Dynamic);
    expect(target).toBeInstanceOf(FS);
    expect(target.cwd()).toMatch(/\/[^\/]+\/test$/);
  });
  test('extends BrowserFS', () => {
    let target = new Dynamic({wd: 'test', backend: 'browserfs'});
    // This is not class but function
    // expect(target).toBeInstanceOf(Dynamic);
    expect(target).toBeInstanceOf(BrowserFS);
    expect(target.cwd()).toMatch(/^\/test$/);
  });
});
