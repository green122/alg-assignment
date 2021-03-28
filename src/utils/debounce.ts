type DebouncedFunc<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => ReturnType<T> | undefined;

export const debounce = <T extends (...args: any) => any>(
  func: T,
  wait?: number,
  immediate?: boolean
): DebouncedFunc<T> => {
  let timeout: number | undefined;

  return function executedFunction(this: any, ...args: any) {
    const context = this;

    const later = function () {
      timeout = undefined;
      if (!immediate) return func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) return func.apply(context, args);
  };
};
