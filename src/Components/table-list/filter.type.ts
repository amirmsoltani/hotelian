export type filter_type<T> = {
  label: string;
  handler: (arg: T) => boolean;
}
