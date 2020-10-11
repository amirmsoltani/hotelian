export function ObjectMap<T = {[key: string]: any}, O = {[key: string]: any}>
(ob: T, callbackFn: (key: keyof T, value: T[keyof T], index: number) => [string, any]): O {
  const result: {[key: string]: any} = {};
  Object.entries(ob).forEach((array, index) => {
    const response = callbackFn(array[0] as keyof T, array[1], index);
    result[response[0]] = response[1];
  });
  return <O>result;
}

export function ObjectMapToArray<T = {[key: string]: any}, R = any>
(ob: T, callbackFn: (key: keyof T, value: T[keyof T], index: number) => R): R[] {
  const result: R[] = [];
  Object.entries(ob).forEach((array, index) => {
    result.push(callbackFn(array[0] as keyof T, array[1], index));
  });
  return result;
}

export function ObjectForEtch<T = {[key: string]: any}>
(ob: T, callbackFn: (key: keyof T, value: T[keyof T], index: number) => void): void {
  Object.entries(ob).forEach((array, index) => {
    callbackFn(array[0] as keyof T, array[1], index);
  });
}

export function ObjectKeys<T = {[key: string]: any}>(ob: T): Array<keyof T> {
  return <Array<keyof T>>Object.keys(ob);
}

export function ObjectLen<T = {[key: string]: any}>(ob: T): number {
  if (!ob)
    return 0;
  return Object.entries(ob).length;
}
