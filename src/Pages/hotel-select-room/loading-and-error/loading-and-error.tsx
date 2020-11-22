import React from 'react';
import {AppText} from '../../../Containers';
import {Conditional, ElIf, If} from '../../../Components';
import {StatusType} from '../../../Typescript/Types';

type PropTypes = {
  status: StatusType,
  message?: string | null,
}
export const LoadingAndError = ({status, message}: PropTypes) => (
  <Conditional>
    <If condition={true}>
      <AppText>this is a loading</AppText>
    </If>
    <ElIf condition={status === 'expire'}>
      <AppText firstLetter>this is a expire text</AppText>
    </ElIf>
    <ElIf condition={status === 'error'}>
      <AppText firstLetter>{message!}</AppText>
    </ElIf>
  </Conditional>
);
