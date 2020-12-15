import React, {FC} from 'react';
import {View} from "native-base";
import {ProgressBar} from "@react-native-community/progress-bar-android";

import {If} from "../../conditional.component";
import {Style} from "../../../Styles";
import {COLOR_INFO} from "../../../../native-base-theme/variables/config";
import {Conditional} from "../../index";
import {status_type} from "../status";

type props_type = {
  status: status_type;
}
const Loading: FC<props_type> = ({status}) => {
  return (
    <Conditional>
      <If condition={status === 'loading'}>
        <View style={[Style.w__100, Style.py__0]}>
          <ProgressBar style={{marginTop: -7, height: 20}}
                       color={COLOR_INFO} styleAttr="Horizontal"/>
        </View>
      </If>
    </Conditional>
  );
};

export default Loading;
