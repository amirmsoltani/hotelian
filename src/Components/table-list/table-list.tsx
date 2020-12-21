import React, {Component, createContext} from 'react';
import {Content} from "native-base";

import {Conditional, ElIf, Else, ErrorResults, If, NoResults} from "../index";
import {column_type, filter_type, search_type, status_type} from './types';
import {translate} from "../../Lib/Languages";

type props_type<T> = {

  /** [required] : screen title */
  title: string;

  /**
   * [required]
   * loading  : disable filter and search input add progress bar behind <Header/> and hide other content
   * ok : enable filter and search input and show table content
   * error  : disable filter and search input add <ErrorResults/> (can bind <ErrorResults/> for further controlling
   * no-result  : disable filter and search input add <NoResults/> (can bind <Button/> for further controlling
   * no-result-by-filter  : disable filter and search input add <NoResults/> (can bind <Button/> for further controlling
   */
  status: status_type;

  /** [optional] bind button when fetching data has error (e.g fetch again or back  */
  errorButton?: { click: () => void, label: string },

  /** [optional] bind button when there is no error */
  noResults?: { click: () => void, label: string },

  /** table data for calculations (iterate through array as one new record) */
  data: T[];

  /** [required] specify list of table's columns with corresponding value or ReactNode */
  columns: column_type<T>[];

  /** [optional] bind handler on clicking each table row
   * @return row details as object
   */
  click?: (item: T) => void;

  /** [optional] List of filter for <Picker/> */
  filters?: filter_type<T>[];

  /** [optional] Filter data base on entered term (only apply for one column) */
  input_search?: search_type<T>;

};

type state_type<T> = {

  /** hold selected picker item */
  activated_filter: filter_type<T> | null;

  /** hold input value */
  searched_value: string | undefined;

  /** hold array of presenting data */
  filtered_data: T[];

  /** flag for resetting search input */
  no_results_by_filter: boolean;

};

export type context_type<T> = props_type<T> & state_type<T> & {

  /** fire when 'non-All' picker selected */
  onSelectFilter?: (f: filter_type<T>) => void,

  /** fire when 'All' picker selected */
  onRemoveFilter: () => void,

  /** fire when pressing SEARCH button in search-modal */
  onSearchTerm: (s: string) => void,

  /** fire when pressing RESET button in search-modal */
  onClearTerm: () => void,

  /** remove all filters */
  onResetAllFilters: () => void;

};

class TableList<T> extends Component<props_type<T>, state_type<T>, context_type<T>> {

  static contextType = createContext<context_type<any>>({

    //props
    status: 'ok',
    title: '',
    data: [],
    filters: [],
    columns: [],

    //states
    filtered_data: [],
    activated_filter: null,
    searched_value: undefined,
    no_results_by_filter: false,

    //functions
    onSelectFilter: () => {
    },
    onRemoveFilter: () => {
    },
    onSearchTerm: () => {
    },
    onClearTerm: () => {
    },
    onResetAllFilters: () => {
    }
  });
  static ListHeader = require('./header/header').default;
  static ListActions = require('./actions/actions').default;
  static ListLoading = require('./loading/loading').default;
  static ListItems = require('./items/items').default;

  //=======================================
  // Hooks
  //=======================================
  constructor(props: props_type<T>) {
    super(props);
    this.state = {
      filtered_data: this.props.data,
      activated_filter: null,
      searched_value: undefined,
      no_results_by_filter: false,
    };
  }

  render() {
    return (
      <TableList.contextType.Provider value={{

        //props
        ...this.props,

        //states
        ...this.state,

        //handlers
        onSelectFilter: this.onSelectFilter,
        onRemoveFilter: this.onRemoveFilter,
        onSearchTerm: this.onSearchTerm,
        onClearTerm: this.onClearSearchTerm,
        onResetAllFilters: this.onResetAllFilters,

      }}>

        {/*header*/}
        <TableList.ListHeader/>

        {/*actions*/}
        <TableList.ListActions<T>/>

        {/*loading*/}
        <TableList.ListLoading<T>/>

        {/*content*/}
        <Conditional>

          {/*ok*/}
          <If condition={this.props.status === 'ok'}>
            <Conditional>

              {/*no-results by filter*/}
              <If condition={this.state.no_results_by_filter}>
                <NoResults data={{
                  button: {
                    label: translate('remove-all-filters'),
                    click: this.onResetAllFilters,
                  },
                  text: translate('not-found-text'),
                  title: translate('not-found-title')
                }}/>
              </If>
              <Else>
                <TableList.ListItems<T>
                  data={this.props.data}
                  click={this.props.click}
                  columns={this.props.columns}/>
              </Else>
            </Conditional>
          </If>

          {/*error*/}
          <ElIf condition={this.props.status === 'error'}>
            <Content>
              <ErrorResults data={{
                button: this.props.errorButton,
                text: translate('error-results-text'),
                title: translate('error-results-title')
              }}/>
            </Content>
          </ElIf>

          {/*no results*/}
          <ElIf condition={this.props.status === 'no-result'}>
            <Content>

              <NoResults data={{
                button: this.props.noResults,
                text: translate('not-found-text'),
                title: translate('not-found-title')
              }}/>
            </Content>
          </ElIf>

        </Conditional>

      </TableList.contextType.Provider>
    );
  }


  //=======================================
  // Handlers
  //=======================================
  onSelectFilter = (filter: filter_type<T>) => {
    const data = this.state.searched_value ?
      this.selectFilter(filter, this.searchTerm(this.state.searched_value, this.props.data)) :
      this.selectFilter(filter, this.props.data);

    this.setState({
      filtered_data: data,
      activated_filter: filter,
      no_results_by_filter: data.length < 1,
    });
  }

  onRemoveFilter = () => {
    this.setState({
      filtered_data: this.state.searched_value ?
        this.searchTerm(this.state.searched_value, this.props.data) :
        this.props.data,
      activated_filter: null,
    });
  }

  onSearchTerm = (term: string | undefined) => {
    const data = this.state.activated_filter ?
      this.searchTerm(term, this.selectFilter(this.state.activated_filter, this.props.data)) :
      this.searchTerm(term, this.props.data);

    this.setState({
      searched_value: term,
      filtered_data: data,
      no_results_by_filter: data.length < 1,
    });
  }

  onClearSearchTerm = () => {
    this.setState({
      filtered_data: this.state.activated_filter ?
        this.searchTerm(this.state.searched_value, this.props.data) :
        this.props.data,
      searched_value: undefined,
    });
  }

  private searchTerm(term: string | undefined, data: T[]): T[] {
    if (term?.length && this.props.input_search && data.length &&
      typeof data[0][this.props.input_search.index] === "string") {
      return data.filter(item => {
        return (((item[this.props.input_search?.index!] as unknown) as string).indexOf(term.toLowerCase()) > -1);
      });
    }
    return data;
  }

  private selectFilter(filter: filter_type<T>, data: T[]): T[] {
    if (filter) {
      return data.filter(item => filter.handler(item));
    }
    return data;
  }

  onResetAllFilters = () => {
    this.setState({
      filtered_data: this.props.data,
      no_results_by_filter: false,
      searched_value: undefined,
      activated_filter: null,
    });
  }

}

export default TableList;
