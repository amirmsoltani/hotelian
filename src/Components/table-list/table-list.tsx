import React, {Component, createContext} from 'react';

import ListHeader from './header/header';
import ListActions from './actions/actions';
import {column_type} from './column.type';
import {filter_type} from './filter.type';
import {status_type} from './status.type';

type props_type<T> = {

  /** [required] : screen title */
  title: string;

  /**
   * [required]
   * loading    : disable filter and search input add progress bar behind <Header/> and hide other content
   * ok         : enable filter and search input and show table content
   * error      : disable filter and search input add <NoResults/> (can bind <ErrorResults/> for further controlling
   * no-result  : disable filter and search input add <NoResults/> (can bind <Button/> for further controlling
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

  /** List of filter for <Picker/> */
  filters?: filter_type<T>[];

};

type state_type<T> = {

  /** hold selected picker item */
  activated_filter?: filter_type<T> | null;

  /** hold array of presenting data */
  filtered_data: T[];

};

export type context_type<T> = props_type<T> & state_type<T>;

export const TableContext = createContext<context_type<any>>({

  //props
  status: 'ok',
  title: '',
  data: [],
  filters: [],
  columns: [],

  //states
  filtered_data: [],
  activated_filter: null,

});

class TableList<T> extends Component<props_type<T>, state_type<T>, context_type<T>> {

  //=======================================
  // Hooks
  //=======================================
  constructor(props: props_type<T>) {
    super(props);
    this.state = {
      filtered_data: this.props.data,
      activated_filter: null,
    };
  }

  render() {
    return (
      <TableContext.Provider value={{
        title: this.props.title,
        status: this.props.status,
        click: this.props.click,
        data: this.props.data,
        columns: this.props.columns,
        filters: this.props.filters,
        errorButton: this.props.errorButton,
        noResults: this.props.noResults,

        filtered_data: this.state.filtered_data,
        activated_filter: this.state.activated_filter,
      }}>

        {/*header*/}
        <ListHeader/>

        {/*actions*/}
        <ListActions<T>/>

        {/*loading*/}
        {/*<ListLoading context={TableContext}/>*/}

        {/*<Content>*/}
        {/*  <Conditional>*/}

        {/*    /!*ok*!/*/}
        {/*    <If condition={this.props.status === 'ok'}>*/}
        {/*      <ListItems data={this.props.data} click={this.props.click} columns={this.props.columns}/>*/}
        {/*    </If>*/}

        {/*    /!*error*!/*/}
        {/*    <ElIf condition={this.props.status === 'error'}>*/}
        {/*      <ErrorResults data={{*/}
        {/*        button: this.props.errorButton,*/}
        {/*        text: translate('error-results-text'),*/}
        {/*        title: translate('error-results-title')*/}
        {/*      }}/>*/}
        {/*    </ElIf>*/}

        {/*    /!*no results*!/*/}
        {/*    <ElIf condition={this.props.status === 'no-result'}>*/}
        {/*      <NoResults data={{*/}
        {/*        button: this.props.noResults,*/}
        {/*        text: translate('not-found-text'), title: translate('not-found-title')*/}
        {/*      }}/>*/}
        {/*    </ElIf>*/}

        {/*  </Conditional>*/}
        {/*</Content>*/}

      </TableContext.Provider>
    );
  }


  //=======================================
  // Handlers
  //=======================================

}

export default TableList;
