export function retInIter<T>(val: T, iter: T[]): boolean {
  if (typeof val !== "object") {
    return iter.some((item) => item === val);
  }
  const valToSting = JSON.stringify(val);
  return iter.some((item) => JSON.stringify(item) === valToSting);
}

export function unsafeSort<T>(iter: T[]): any[] {
  const [node] = iter;
  if (typeof node !== "object") {
    return iter.sort();
  }
  const ret: (string | (T & any[]))[] = [];
  iter.forEach((item) => {
    if (item instanceof Array) {
      ret.push(item.sort());
    } else {
      ret.push(JSON.stringify(item));
    }
  });
  return ret.sort();
}

export default null;
