import { describe, expect, it, vi } from 'vitest';
import { listen } from './listen.js';

describe('listen', () => {
  it('should create an abortable event listener', () => {
    const spy = vi.fn();

    const listener = listen(window, 'click', spy);

    expect(spy).toHaveBeenCalledTimes(0);

    window.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledTimes(1);

    window.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledTimes(2);

    listener[Symbol.dispose]();

    window.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
