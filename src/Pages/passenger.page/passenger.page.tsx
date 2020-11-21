import React, {Component} from 'react';
import {AppSubtitle, AppTitle, BackNavigation} from "../../Containers";
import {connect, ConnectedProps} from "react-redux";
import {Body, Header, Left, Right} from "native-base";

const mapStateToProps = ({}: any) => ({});
const connector = connect(mapStateToProps);
type propsType = ConnectedProps<typeof connector>;

class PassengerPage extends Component<propsType, any> {


  render() {
    return (
      <>
        {/*header*/}
        <Header>
          <Left><BackNavigation/></Left>
          <Body>
            <AppTitle hasSubtitle>Hotel names go here</AppTitle>
            <AppSubtitle>99 September 9999 - 99 December 9999</AppSubtitle>
          </Body>
          <Right/>
        </Header>

        {/*content*/}
        {/*footer*/}
      </>
    );
  }
}

export default connector(PassengerPage);
