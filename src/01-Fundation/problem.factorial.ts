export function factorial(n: number) {
  let f = 1;
  while (n > 0) {
    f *= n;
    n--;
  }
  return f;
}
