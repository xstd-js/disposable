export function interval(callback: () => void, duration: number): Disposable {
  const timer = setInterval(callback, duration);
  return {
    [Symbol.dispose]: (): void => {
      clearInterval(timer);
    },
  };
}
