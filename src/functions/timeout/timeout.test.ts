import { describe, expect, it, vi } from 'vitest';
import { testTools } from '../../../fabrique/test/tools.js';
import { timeout } from './timeout.js';
import sleep = testTools.sleep;

describe('timeout', () => {
  it('should create a disposable "timeout" timer', async () => {
    const spy = vi.fn();

    const listener = timeout(spy, 100);

    expect(spy).toHaveBeenCalledTimes(0);

    await sleep(150);
    expect(spy).toHaveBeenCalledTimes(1);

    await sleep(100);
    expect(spy).toHaveBeenCalledTimes(1);

    listener[Symbol.dispose]();

    await sleep(100);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should be disposable', async () => {
    const spy = vi.fn();

    const listener = timeout(spy, 100);

    expect(spy).toHaveBeenCalledTimes(0);

    listener[Symbol.dispose]();

    await sleep(150);
    expect(spy).toHaveBeenCalledTimes(0);
  });
});
