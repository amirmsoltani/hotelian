import {Alert} from "react-native";
import React, {Component} from "react";
import {connect, ConnectedProps} from "react-redux";
import {Body, Content, Footer, Header, Left, Right, Toast, View,} from "native-base";

import {Style} from "../../Styles";
import {AppTitle, BackNavigation} from "../../Containers";
import {translate} from "../../Lib/Languages";
import BoFooter from "../booking-overview/bo-footer/bo-footer";
import Gateways from "./gateways/gateways";
import Invoice from "./invoice/invoice";
import {COLOR_BLACK, COLOR_WHITE,} from "../../../native-base-theme/variables/config";
import ReadAndConfirm from "./read-and-confirm/read-and-confirm";
import {getConfirmData} from "../../Store/Actions/book.actions";
import {RootStateInterface} from "../../Typescript/Interfaces";
import {Conditional, ElIf, If, ScreenLoading} from "../../Components";
import {GatewayType} from "../../Typescript/Types";

const mapStateToProps = (state: RootStateInterface) => ({
  status: state.bookReducer.confirm.confirm_s,
  gateways: state.bookReducer.confirm.gateways?.map((g) => g),
  invoice: state.bookReducer.confirm.invoice,
  user: state.bookReducer.confirm.user,
  currency: state.appReducer.currency,
});

const connector = connect(mapStateToProps, {getData: getConfirmData});

type state_types = {
  //user credit [based on preferred currency]
  credit: number;

  //initial amount without discount,... [e.g : 100 USD]
  amount: number;

  //discount amount [e.g: 20 USD]
  off_amount: number;

  //applied discount to amount [e.g 100-20 = 80 USD]
  total_amount: number;

  selected_gateway: GatewayType | null;
  booking_itinerary: boolean;
  terms_and_policies: boolean;
};

type propType = ConnectedProps<typeof connector>;

class ConfirmPage extends Component<propType, state_types> {
  //for calculation on toggling ;
  private baqali = 0;

  constructor(props: propType) {
    super(props);
    this.state = {
      credit: 0,
      amount: 0,
      off_amount: 0,
      total_amount: 0,

      selected_gateway: null,

      booking_itinerary: false,
      terms_and_policies: false,
    };
  }

  componentDidUpdate(prevProps: Readonly<propType>) {
    if (prevProps.status !== "ok" && this.props.status === "ok") {
      this.setState({
        credit: this.props.user!.credit!,
        amount: this.props.invoice?.amount ?? 0,
        off_amount: this.props.invoice?.off_amount ?? 0,
        total_amount: this.props.invoice?.total_amount ?? 0,
        booking_itinerary: false,
        terms_and_policies: false,
        selected_gateway: null,
      });
      this.baqali = this.props.invoice?.amount ?? 0;
    }
  }

  componentDidMount() {
    this.props.getData();
  }

  //=======================================
  // Hooks
  //=======================================
  render() {
    const {gateways} = this.props;
    return (
      <>
        {/*header*/}
        <Header style={[Style.bg__primary]}>
          <Left>
            <BackNavigation/>
          </Left>
          <Body>
            <AppTitle>{translate("final-step")}</AppTitle>
          </Body>
          <Right/>
        </Header>

        {/*content*/}
        <Content>
          <Conditional>
            {/*loading*/}
            <If condition={this.props.status === "loading"}>
              <ScreenLoading/>
            </If>

            <ElIf condition={this.props.status === "ok"}>
              {/*gateways*/}
              <View style={[Style.p__3, Style.bg__white, Style.mb__1]}>
                <Gateways
                  gateways={gateways}
                  select={this.onSelectGateway}
                  selected={this.state.selected_gateway}
                />
              </View>

              {/*invoice*/}
              <View style={[Style.p__3, Style.bg__white, Style.mb__1]}>
                <Invoice
                  discount={this.state.off_amount}
                  currency={this.props.currency}
                  credit={this.state.credit}
                  pay_amount={this.baqali}
                  onCredit={this.onToggleCredit}
                />
              </View>

              {/*terms and policies*/}
              <View style={[Style.p__3, Style.bg__white, Style.mb__1]}>
                <ReadAndConfirm
                  booking_itinerary={this.state.booking_itinerary}
                  terms_policies={this.state.terms_and_policies}
                  onCheckbox={this.onToggleCheckbox}
                />
              </View>
            </ElIf>
          </Conditional>
        </Content>

        {/*footer*/}
        <Conditional>
          <If condition={this.props.status === "ok"}>
            <Footer style={[Style.bg__white]}>
              <BoFooter
                data={{
                  click: this.onPay,
                  button_label: translate("pay"),
                  total_currency: this.props.currency,
                  total_price: this.state.total_amount,
                }}
              />
            </Footer>
          </If>
        </Conditional>
      </>
    );
  }

  //=======================================
  // Handlers
  //=======================================
  onSelectGateway = (g: GatewayType) => {
    this.setState({selected_gateway: g});
  };

  onToggleCredit = (v: boolean) => {
    //apply credit
    if (v) {
      if (this.state.total_amount - this.state.credit > 0) {
        this.setState({
          total_amount: this.state.total_amount - this.state.credit,
          credit: 0,
        });
      } else {
        this.setState({
          total_amount: 0,
          credit: this.props.user!.credit! - this.state.total_amount,
        });
      }
    }

    //remove credit
    else {
      this.setState({
        credit: this.props.user!.credit!,
        total_amount: this.props.invoice!.total_amount,
      });
    }
  };

  onToggleCheckbox = (k: string) => {
    if (k === "booking_itinerary") {
      this.setState({booking_itinerary: !this.state.booking_itinerary});
    } else if (k === "terms_policies") {
      this.setState({terms_and_policies: !this.state.terms_and_policies});
    }
  };

  onPay = () => {
    //gateway selection checking
    if (this.state.selected_gateway === null) {
      Toast.show({
        duration: 2000,
        position: "bottom",
        style: {backgroundColor: COLOR_BLACK},
        text: translate("please-choose-your-gateway"),
        textStyle: {color: COLOR_WHITE, textTransform: "capitalize"},
      });
    }

    //check-box selection checking
    else if (!(this.state.terms_and_policies && this.state.booking_itinerary)) {
      Toast.show({
        duration: 2000,
        position: "bottom",
        style: {backgroundColor: COLOR_BLACK},
        text: translate("please-read-and-confirm-to-continue"),
        textStyle: {color: COLOR_WHITE, textTransform: "capitalize"},
      });
    }

    //request for confirm modal
    else {
      Alert.alert("Wa-Lah", "Your money has been stolen successfully.");
    }
  };
}

export default connector(ConfirmPage);
