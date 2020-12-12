import {Alert} from "react-native";
import React, {Component} from 'react';
import {Body, Content, Footer, Header, Left, Right, Toast, View} from "native-base";

import {Style} from "../../Styles";
import {AppTitle, BackNavigation} from "../../Containers";
import {translate} from "../../Lib/Languages";
import BoFooter from "../booking-overview/bo-footer/bo-footer";
import Gateways from "./gateways/gateways";
import Invoice from "./invoice/invoice";
import {COLOR_BLACK, COLOR_WHITE} from "../../../native-base-theme/variables/config";
import ReadAndConfirm from "./read-and-confirm/read-and-confirm";


type state_types = {
  credit: number;
  pay_amount: number;
  selected_gateway: string;
  booking_itinerary: boolean;
  terms_and_policies: boolean;
}
const gateways = [
  {key: 'gw_1', name: 'Telr', source: require('Assets/Images/telr-gateway.png')},
  {key: 'gw_2', name: 'Pay pal', source: require('Assets/Images/paypal-gateway.png')},
  {key: 'gw_3', name: 'Saman', source: require('Assets/Images/saman-gateway.png')},
  {key: 'gw_4', name: 'Pasargad', source: require('Assets/Images/pasargad-gateway.png')},
];


class ConfirmPage extends Component<any, state_types> {

  //valid number or 0
  readonly subtotal = 1000;
  readonly discount = 120;
  readonly credit = 250;
  readonly pay_amount = this.subtotal - this.discount;

  //string
  readonly currency = 'AED';

  state = {
    credit: this.credit,
    selected_gateway: '',
    pay_amount: (this.subtotal - this.discount) > 0 ? (this.subtotal - this.discount) : 0,
    booking_itinerary: false,
    terms_and_policies: false,
  }


  //=======================================
  // Hooks
  //=======================================
  render() {

    return (
      <>
        {/*header*/}
        <Header style={[Style.bg__primary]}>
          <Left><BackNavigation/></Left>
          <Body>
            <AppTitle>{translate('final-step')}</AppTitle>
          </Body>
          <Right/>
        </Header>

        {/*content*/}
        <Content>

          {/*gateways*/}
          <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
            <Gateways
              gateways={gateways}
              select={this.onSelectGateway}
              selected={this.state.selected_gateway}/>
          </View>

          {/*invoice*/}
          <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
            <Invoice
              discount={this.discount}
              currency={this.currency}
              credit={this.state.credit}
              pay_amount={this.pay_amount}
              onCredit={this.onToggleCredit}/>
          </View>

          {/*coupon*/}

          {/*terms and policies*/}
          <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
            <ReadAndConfirm
              booking_itinerary={this.state.booking_itinerary}
              terms_policies={this.state.terms_and_policies}
              onCheckbox={this.onToggleCheckbox}
            />
          </View>

        </Content>

        {/*footer*/}
        <Footer style={[Style.bg__white]}>
          <BoFooter data={{
            click: this.onPay,
            button_label: translate('pay'),
            total_currency: this.currency, total_price: this.state.pay_amount,
          }}/>
        </Footer>

      </>
    );
  }

  //=======================================
  // Handlers
  //=======================================
  onSelectGateway = (id: string) => {
    this.setState({selected_gateway: id});
  }

  onToggleCredit = (v: boolean) => {

    //apply credit
    if (v) {
      if (this.pay_amount - this.credit > 0) {
        this.setState({
          pay_amount: this.pay_amount - this.credit,
          credit: 0,
        });
      } else {
        this.setState({
          pay_amount: 0,
          credit: this.credit - this.pay_amount,
        });
      }
    }
    //remove credit
    else {
      this.setState({
        credit: this.credit,
        pay_amount: this.pay_amount,
      });
    }
  }

  onToggleCheckbox = (k: string) => {
    if (k === 'booking_itinerary')
      this.setState({booking_itinerary: !this.state.booking_itinerary});
    else if (k === 'terms_policies')
      this.setState({terms_and_policies: !this.state.terms_and_policies});
  }

  onPay = () => {

    console.log(this.state)

    //gateway selection checking
    if (this.state.selected_gateway === '') {
      Toast.show({
        duration: 2000,
        position: 'bottom',
        style: {backgroundColor: COLOR_BLACK},
        text: translate('please-choose-your-gateway'),
        textStyle: {color: COLOR_WHITE, textTransform: "capitalize"},
      });
    }

    //check-box selection checking
    else if (!(this.state.terms_and_policies && this.state.booking_itinerary)) {
      Toast.show({
        duration: 2000,
        position: 'bottom',
        style: {backgroundColor: COLOR_BLACK},
        text: translate('please-read-and-confirm-to-continue'),
        textStyle: {color: COLOR_WHITE, textTransform: "capitalize"},
      });
    }

    //request for confirm modal
    else {
      Alert.alert('Wa-Lah', 'Your money has been stolen successfully.');
    }
  }

}

export default ConfirmPage;
