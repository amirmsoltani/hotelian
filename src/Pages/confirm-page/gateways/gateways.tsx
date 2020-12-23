import React, {FC} from "react";

import {AppText} from "../../../Containers";
import {Style} from "../../../Styles";
import {translate} from "../../../Lib/Languages";
import {default as Gateway} from "./gateway/gateway";
import {Conditional, If} from "../../../Components";
import {GatewayType} from "../../../Typescript/Types";

type propsType = {
  gateways: GatewayType[] | undefined;
  select: (g: GatewayType) => void;
  selected: GatewayType | null;
};

const Gateways: FC<propsType> = ({gateways, select, selected}) => {
  return (
    <Conditional>
      <If condition={Boolean(gateways)}>
        <AppText
          style={[
            Style.text__capitalize,
            Style.text__bold,
            Style.mb__2,
            Style.f__14,
          ]}
        >
          {translate("how-do-you-want-to-pay")}
        </AppText>
        <AppText style={[Style.mb__5, Style.f__14, Style.text__light]}>
          {translate("gateway-explanation")}
        </AppText>
        {gateways?.map((item) => (
          <Gateway
            key={item.name}
            gateway={item}
            selected={item === selected}
            onSelect={() => select(item)}
          />
        ))}
      </If>
    </Conditional>
  );
};

export default Gateways;
