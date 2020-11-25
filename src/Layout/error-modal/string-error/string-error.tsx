import React from 'react';
import {AppText} from "../../../Containers";

const StringError = (props: { error: string }) => {
  return (
    <AppText>{props.error}</AppText>
  );
};

export default StringError;
