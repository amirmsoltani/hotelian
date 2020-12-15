import {View} from 'react-native';
import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Body, Button, Content, Footer, Header, Icon, Left, Right} from 'native-base';

import {Style} from '../../Styles';
import {LateCheckin} from '../index';
import {translate as t} from '../../Lib/Languages';
import GuestForm from '../../Forms/guest-form/guest-form';
import {IconType, RoomType} from '../../Typescript/Types';
import {Conditional, ElIf, ExpireTimer, If, ScreenLoading} from '../../Components';
import {AppSubtitle, AppText, AppTitle, BackNavigation} from '../../Containers';
import {StackScreenProps} from '@react-navigation/stack';
import GuestFromController, {FormContext} from '../../Forms/guest-form/form-context';
import {HotelOptionInterface, RootStateInterface} from '../../Typescript/Interfaces';

//status of receiving data
const status: 'ok' | 'loading' | 'error' = 'ok';

//type of cancellation policies, alerts and restrictions
type cpt = {icon_name: string, icon_type: IconType, title: string, text?: string,}

const mapStateToProps = ({searchReducer: {form_data: {checkOut, checkIn}, expire}, hotelReducer: {hotel: {result}, rooms}}: RootStateInterface) => ({
  checkIn,
  expire,
  checkOut,
  hotel: result!.hotel,
  rooms: rooms.result?.req_rooms,
});
const connector = connect(mapStateToProps);
type propsType =
  ConnectedProps<typeof connector>
  & StackScreenProps<{'passengers': HotelOptionInterface, 'booking-overview': undefined}, 'passengers'>;

class PassengerPage extends Component<propsType, any> {

  cancellation: cpt = {
    icon_name: 'ios-warning-outline',
    icon_type: 'Ionicons',
    title: 'cancellation',
  };
  alerts: cpt = {
    icon_name: 'ios-warning-outline',
    icon_type: 'Ionicons',
    title: 'alerts',
  };
  restrictions: cpt = {
    icon_name: 'ios-warning-outline',
    icon_type: 'Ionicons',
    title: 'restrictions',
  };
  rooms: RoomType[];

  constructor(props: propsType) {
    super(props);
    const {policies, alerts, restrictions} = props.route.params.cancellation!;
    // TODO fix policy
    this.cancellation.text = policies.map((policy, index) => `${index + 1} - ${policy.from} ${policy.type} ${policy.value}`).join('\n');
    this.alerts.text = alerts.map((alert, index) => `${index + 1} - ${alert}`).join('\n');
    this.restrictions.text = restrictions.map((rest, index) => `${index + 1} - ${rest}`).join('\n');
    this.rooms = this.props.rooms!.map((room, index) => ({
      ...this.props.route.params.rooms[index],
      children: room.children,
    }));
  }

  render() {

    //dummy data
    const {cancellation, alerts, restrictions} = this;
    return (
      <>

        {/*header*/}
        <Header style={[Style.bg__primary]}>
          <Left><BackNavigation/></Left>
          <Body>
            <AppTitle hasSubtitle>{this.props.hotel.name}</AppTitle>
            <AppSubtitle>{`${this.props.checkIn!.formatted} - ${this.props.checkOut!.formatted}`}</AppSubtitle>
          </Body>
          <Right>
            {this.props.expire !== undefined ?
              <ExpireTimer styles={[Style.pr__2, Style.f__14]} start_time={this.props.expire!}/> : null}
          </Right>
        </Header>

        <GuestFromController rooms={this.rooms} option_id={this.props.route.params.option_id}>

          {/*content*/}
          <Content style={[Style.w__100]}>
            <Conditional>
              <If condition={status === 'loading'}><ScreenLoading/></If>
              <ElIf condition={status === 'ok'}>

                {/*hotel details*/}
                {this.cancellationPolicies(cancellation)}

                {/*alerts*/}
                {this.cancellationPolicies(restrictions)}

                {/*restrictions*/}
                {this.cancellationPolicies(alerts)}

                {/*guest form*/}
                <View><GuestForm/></View>

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
              <FormContext.Consumer>
                {
                  ({methods}) => (
                    <Button onPress={methods!.submit}
                            block style={[Style.bg__primary]}>
                      <AppText firstLetter style={[Style.text__white, Style.text__bold]}>
                        {t('next-step')}</AppText>
                    </Button>
                  )
                }
              </FormContext.Consumer>
            </View>
          </Footer>
        </GuestFromController>
      </>
    )
      ;
  }

  cancellationPolicies(cpt: cpt) {
    return cpt.text ? <View style={[Style.mb__1, Style.bg__white, Style.py__2, Style.px__3]}>
      <View style={[Style.flex__row, Style.align__items_center, Style.mb__2]}>
        <Icon style={[Style.f__16, Style.mr__1]}
              name={cpt.icon_name} type={cpt.icon_type}/>
        <AppText style={[Style.text__bold, Style.f__14, Style.text__capitalize]}>
          {t(cpt.title)}</AppText>
      </View>
      <AppText style={[Style.f__12]}>
        {cpt.text.replace(/&lt;br(\s|'')\/&gt;/g, '\n')}
      </AppText>
    </View> : null;
  }

}

export default connector(PassengerPage);






