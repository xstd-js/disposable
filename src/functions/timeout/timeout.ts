export function timeout(callback: () => void, duration: number): Disposable {
  const timer = setTimeout(callback, duration);
  return {
    [Symbol.dispose]: (): void => {
      clearTimeout(timer);
    },
  };
}
