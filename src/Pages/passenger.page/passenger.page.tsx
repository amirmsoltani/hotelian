import {View} from "react-native";
import React, {Component} from 'react';
import {connect, ConnectedProps} from "react-redux";
import {Body, Button, Content, Footer, Header, Icon, Left, Right} from "native-base";

import {Style} from "../../Styles";
import {LateCheckin} from "../index";
import {translate as t} from "../../Lib/Languages";
import GuestForm from "../../Forms/guest-form/guest-form";
import {IconType, RoomType} from "../../Typescript/Types";
import {Conditional, ElIf, If, ScreenLoading} from "../../Components";
import {AppSubtitle, AppText, AppTitle, BackNavigation} from "../../Containers";
import {StackScreenProps} from "@react-navigation/stack";

//status of receiving data
const status: 'ok' | 'loading' | 'error' = 'ok';

//type of cancellation policies, alerts and restrictions
type cpt = { icon_name: string, icon_type: IconType, title: string, text: string, }

const mapStateToProps = ({}: any) => ({});
const connector = connect(mapStateToProps);
type propsType = ConnectedProps<typeof connector> & StackScreenProps<any>;

class PassengerPage extends Component<propsType, any> {

  render() {

    //dummy data
    const cancellationPolicies: cpt = {
      icon_name: 'ios-warning-outline',
      icon_type: 'Ionicons',
      title: 'cancellation-policies',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    };
    const alerts: cpt = {
      icon_name: 'ios-warning-outline',
      icon_type: 'Ionicons',
      title: 'alerts',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    };
    const restrictions: cpt = {
      icon_name: 'ios-warning-outline',
      icon_type: 'Ionicons',
      title: 'restrictions',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    };
    const rooms: RoomType[] = [
      {
        room_name: 'king and queen breakfast',
        children: [2, 5],
        adults: 1,
        key: 1,
      },
      {
        room_name: 'breakfast and queen king',
        children: [],
        adults: 2,
        key: 2,
      },
      {
        room_name: 'queen cant make breakfast',
        children: [10],
        adults: 2,
        key: 3,
      }
    ];

    return (
      <>
        {/*header*/}
        <Header style={[Style.bg__primary]}>
          <Left><BackNavigation/></Left>
          <Body>
            <AppTitle hasSubtitle>Hotel names go here</AppTitle>
            <AppSubtitle>99 September - 99 December</AppSubtitle>
          </Body>
          <Right/>
        </Header>

        {/*content*/}
        <Content style={[Style.w__100]}>
          <Conditional>
            <If condition={status === 'loading'}><ScreenLoading/></If>
            <ElIf condition={status === 'ok'}>


              {/*hotel details*/}
              {this.cancellationPolicies(cancellationPolicies)}

              {/*alerts*/}
              {this.cancellationPolicies(restrictions)}

              {/*restrictions*/}
              {this.cancellationPolicies(alerts)}

              {/*guest form*/}
              <View><GuestForm data={rooms}/></View>

              {/*late checkin*/}
              <View><LateCheckin/></View>


            </ElIf>
            <ElIf condition={status === 'error'}>
              <AppText>Some thing went wrong</AppText>
            </ElIf>
          </Conditional>
        </Content>

        {/*footer*/}
        <Footer style={[Style.bg__white]}>
          <View style={[Style.w__100, Style.p__1]}>
            <Button onPress={this.onNextStep}
                    block style={[Style.bg__primary]}>
              <AppText firstLetter style={[Style.text__white, Style.text__bold]}>
                {t('next-step')}</AppText>
            </Button>
          </View>
        </Footer>

      </>
    );
  }

  cancellationPolicies(cpt: cpt) {
    return cpt.text ? <View style={[Style.mb__1, Style.bg__white, Style.py__2, Style.px__3]}>
      <View style={[Style.flex__row, Style.align__items_center, Style.mb__2]}>
        <Icon style={[Style.f__16, Style.mr__1,]}
              name={cpt.icon_name} type={cpt.icon_type}/>
        <AppText style={[Style.text__bold, Style.f__14, Style.text__capitalize,]}>
          {t(cpt.title)}</AppText>
      </View>
      <AppText style={[Style.f__12]}>
        {cpt.text.replace(/&lt;br(\s|'')\/&gt;/g, '\n')}
      </AppText>
    </View> : null;
  }

  onNextStep = () => {
    this.props.navigation.navigate('overview');
  }
}

export default connector(PassengerPage);






