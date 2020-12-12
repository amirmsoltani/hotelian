import React, {FC} from 'react';

import {AppText} from "../../../Containers";
import {Style} from "../../../Styles";
import {translate} from "../../../Lib/Languages";
import {default as Gateway, GatewayType} from "./gateway/gateway";

type propsType = {
  gateways: GatewayType[];
  select: (key: string) => void;
  selected: string;
}

const Gateways: FC<propsType> = ({gateways, select, selected}) => {
  return (
    <>
      <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>
        {translate('how-do-you-want-to-pay')}</AppText>
      <AppText style={[Style.mb__5, Style.f__14, Style.text__light]}>
        {translate('gateway-explanation')}</AppText>
      {gateways.map(item => (
        <Gateway
          key={item.key}
          gateway={item}
          selected={item.key === selected}
          onSelect={() => select(item.key)}
        />))}
    </>
  );
};

export default Gateways;
