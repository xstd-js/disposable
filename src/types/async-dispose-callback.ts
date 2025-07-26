export interface AsyncDisposeCallback {
  (): PromiseLike<void> | void;
}
