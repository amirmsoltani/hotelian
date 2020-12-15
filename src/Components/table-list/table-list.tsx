import React from 'react';
import {Content} from "native-base";

import ListHeader from './header/header';
import ListActions from './actions/actions';
import ListLoading from './loading/loading';
import ListItems from "./items/items";
import {Conditional, ElIf, ErrorResults, If, NoResults} from "../index";
import {translate} from "../../Lib/Languages";
import {column_type} from './column'

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
  status: 'loading' | 'error' | 'ok' | 'no-result';

  /** [optional] bind button when fetching data has error (e.g fetch again or back  */
  errorButton?: { click: () => void, label: string },

  /** [optional] bind button when there is no error */
  noResults?: { click: () => void, label: string },

  /** table data for presenting (iterate through array as one new record) */
  data: T[];

  /** [required] specify list of table's columns with corresponding value or ReactNode */
  columns: column_type<T>[];

  /** [optional] bind handler on clicking each table row
   * @return row details as object
   */
  click?: (item: T) => void;
};

function TableList<T>({title, status, errorButton, noResults, data, columns, click}: props_type<T>) {
  return (
    <>
      {/*header*/}
      <ListHeader title={title}/>

      {/*actions*/}
      <ListActions status={status}/>

      {/*loading*/}
      <ListLoading status={status}/>

      <Content>
        <Conditional>

          {/*ok*/}
          <If condition={status === 'ok'}>
            <ListItems data={data} click={click} columns={columns}/>
          </If>

          {/*error*/}
          <ElIf condition={status === 'error'}>
            <ErrorResults data={{button: errorButton, text: translate('error-results-text'), title: translate('error-results-title')}}/>
          </ElIf>

          {/*no results*/}
          <ElIf condition={status === 'no-result'}>
            <NoResults data={{
              button: noResults,
              text: translate('not-found-text'), title: translate('not-found-title')
            }}/>
          </ElIf>

        </Conditional>

      </Content>
    </>
  );
}

export default TableList;
