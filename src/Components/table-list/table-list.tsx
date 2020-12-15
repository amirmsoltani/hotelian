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
  title: string;
  status: 'loading' | 'error' | 'ok' | 'no-result';
  errorButton?: { click: () => void, label: string },
  noResults?: { click: () => void, label: string },
  data: T[];
  columns: column_type<T>[];
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
            <ListItems
              data={data}
              click={click}
              columns={columns}
            />
          </If>

          {/*error*/}
          <ElIf condition={status === 'error'}>
            <ErrorResults data={{
              button: errorButton,
              text: translate('error-results-text'), title: translate('error-results-title')
            }}/>
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
