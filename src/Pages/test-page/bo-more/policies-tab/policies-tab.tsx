import React, {FunctionComponent} from 'react';
import {Conditional, If} from "../../../../Components";
import {View} from "react-native";
import {AppText} from "../../../../Containers";
import {Style} from "../../../../Styles";
import {translate} from "../../../../Lib/Languages";

type propsType = {
  alerts: string | null;
  restrictions: string | null;
  cancellation_policies: string[];
}
const PoliciesTab: FunctionComponent<{ data: propsType }> = (props) => {
  return (
    <>
      <Conditional>

        {/*alerts*/}
        <If condition={!!props.data.alerts}>
          <View style={[Style.p__3, Style.bg__white, Style.mb__1]}>
            <AppText firstLetter style={[Style.text__bold, Style.f__14, Style.mb__3]}>
              {translate('alerts')}
            </AppText>
            <View>
              <AppText firstLetter style={[Style.text__light]}>
                {props.data.alerts}
              </AppText>
            </View>
          </View>
        </If>

        {/*restrictions*/}
        <If condition={!!props.data.restrictions}>
          <View style={[Style.p__3, Style.bg__white, Style.mb__1]}>
            <AppText firstLetter style={[Style.text__bold, Style.f__14, Style.mb__3]}>
              {translate('restrictions')}
            </AppText>
            <View>
              <AppText firstLetter style={[Style.text__light]}>
                {props.data.restrictions}
              </AppText>
            </View>
          </View>
        </If>

        {/*policies*/}
        <If condition={!!props.data.cancellation_policies}>
          <View style={[Style.p__3, Style.bg__white, Style.mb__1]}>
            <AppText firstLetter style={[Style.text__bold, Style.f__14, Style.mb__3]}>
              {translate('cancellation_policies')}
            </AppText>
            <View>
              {
                props.data.cancellation_policies.map((policy, index) => (
                  <AppText key={index} firstLetter style={[Style.text__light, Style.mb__1]}>
                    {policy}
                  </AppText>
                ))
              }
            </View>
          </View>
        </If>
      </Conditional>
    </>
  );
};

export default PoliciesTab;
