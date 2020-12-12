import {OptionFilterInterface} from '../Interfaces';

export type OptionsActiveFiltersType = {
  [key in (keyof Required<OptionFilterInterface[keyof OptionFilterInterface]>)]?: {name: keyof OptionFilterInterface, indexes: number[]}
}
