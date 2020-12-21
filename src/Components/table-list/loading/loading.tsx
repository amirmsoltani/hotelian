import React, {useContext} from 'react';
import {View} from "native-base";
import {ProgressBar} from "@react-native-community/progress-bar-android";

import {If} from "../../conditional.component";
import {Style} from "../../../Styles";
import {COLOR_INFO} from "../../../../native-base-theme/variables/config";
import {Conditional} from "../../index";
import TableList, {context_type} from "../table-list";
import {StyleSheet} from "react-native";


function Loading<T>() {
  const {status} = useContext(TableList.contextType) as context_type<T>;
  return (
    <Conditional>
      <If condition={status === 'loading'}>
        <View style={[Style.w__100, Style.py__0]}>
          <ProgressBar style={styles.progress}
                       color={COLOR_INFO} styleAttr="Horizontal"/>
        </View>
      </If>
    </Conditional>
  );
}

const styles = StyleSheet.create({progress: {marginTop: -7, height: 20}});

export default Loading;
