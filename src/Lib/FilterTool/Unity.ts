/**
 * With this function you can find common values between arrays
 * @param unity?:any[]
 * @param args:Array of Array of any; Array length must be greater than 2
 */
export default function U<T = any>({unity, args}: {unity?: T[], args: Array<T[]>}): T[] {
  if ((!unity && args.length < 2))
    throw 'Arguments submitted must be more than two';
  const Unity: T[] = [...(unity || args.pop()!)];
  const u = [...Unity];
  const check = args.pop();
  u.forEach(item => {
    if (!check!.includes(item))
      Unity.splice(Unity.indexOf(item), 1);
  });
  return args.length > 0 ? U({unity: Unity, args}) : Unity;
}
