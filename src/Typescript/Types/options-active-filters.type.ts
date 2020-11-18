import {OptionFilterInterface} from '../Interfaces';

export type OptionsActiveFiltersType = {
  [key in (keyof OptionFilterInterface[keyof OptionFilterInterface])]?: {key: keyof OptionFilterInterface, indexes: number[]}
}
