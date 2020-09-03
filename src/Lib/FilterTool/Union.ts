/**
 * With this function you can output unique values between all arrays ;
 * @param union:any[] unique values ;
 * @param args: Array of Array of any Array length must be greater than 1 ;
 */
export default function U<T = any>({union = [], args}: {union?: T[], args: Array<T[]>}): T[] {
  const Union: T[] = union;
  args.pop()!.forEach(item => {
    if (!Union.includes(item))
      Union.push(item);
  });
  return args.length > 0 ? U({union: Union, args}) : Union;
}
