import React, {FC, useState} from 'react';

import {FormInput} from "../../../../Containers";

type props_type = {
  value: string | undefined;
  label?: string;
  change: (s: string | undefined) => void;
}
const Input: FC<props_type> = ({value, label, change}) => {
  const [state, setState] = useState(value);
  return (
    <FormInput
      autoFocus={true}
      value={state}
      onChangeText={e => {
        setState(e);
        change(e);
      }}
      data={{label: label ?? ''}}/>
  );
};

export default Input;
