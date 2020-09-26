import {DestinationType, NationalityType} from '../Types';
import {ReducerListInterface} from './reducer.list.interface';
import {SearchFormDataInterface} from './search.from.data.interface';


export interface SearchStateInterface {
  destination: ReducerListInterface<DestinationType[] | undefined>;
  nationality: ReducerListInterface<NationalityType[] | undefined>;
  form_data: SearchFormDataInterface;
  search_id?: string;
  status: undefined | 'loading' | 'error' | 'ok'
}
