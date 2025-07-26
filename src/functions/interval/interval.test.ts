import { describe, expect, it, vi } from 'vitest';
import { testTools } from '../../../fabrique/test/tools.js';
import { interval } from './interval.js';
import sleep = testTools.sleep;

describe('interval', () => {
  it('should create a disposable "interval" timer', async () => {
    const spy = vi.fn();

    const listener = interval(spy, 100);

    expect(spy).toHaveBeenCalledTimes(0);

    await sleep(150);
    expect(spy).toHaveBeenCalledTimes(1);

    await sleep(100);
    expect(spy).toHaveBeenCalledTimes(2);

    listener[Symbol.dispose]();

    await sleep(100);
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
