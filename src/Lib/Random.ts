export function randInt(max: number, min: number = 0) {
  return Math.floor(Math.random() * (max - min)) + min;
}
