export function listen<GEvent extends Event>(
  target: EventTarget,
  type: string,
  listener: (event: GEvent) => void,
  options?: Required<Omit<AddEventListenerOptions, 'signal'>>,
): Disposable {
  target.addEventListener(type, listener as EventListenerOrEventListenerObject, options);

  return {
    [Symbol.dispose]: (): void => {
      target.removeEventListener(type, listener as EventListenerOrEventListenerObject, options);
    },
  };
}
