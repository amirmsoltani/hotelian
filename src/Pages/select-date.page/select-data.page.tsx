import React from 'react';
import Datepicker from 'Components/DatePicker/Datepicker';
import {connect, ConnectedProps} from 'react-redux';
import {ChangeSearchData} from 'Store/Actions';
import {RootStateInterface} from 'Typescript';
import {LinkProps} from 'react-router-native';
import {Actions} from 'react-native-router-flux';
import {Body, Button, Container, Header, Icon, Left, Right} from "native-base";
import {Style} from "../../Styles";

const mapStateToProps = (state: RootStateInterface) => ({
  checkIn: state.searchReducer.form_data.checkIn?.value,
  checkOut: state.searchReducer.form_data.checkOut?.value,
  today: state.appReducer.today.unix,
});
const mapDispatchToProps = {ChangeSearchData};
const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & LinkProps;

const SelectDataPage = ({ChangeSearchData, checkIn, checkOut, today}: Props) => {
  const datepicker: { defaultValue?: { checkIn: string, checkOut: string } } = {};
  if (checkIn && checkOut)
    datepicker['defaultValue'] = {checkIn, checkOut};
  return (
    <Container>
      <Header style={[Style.bg__primary]}>
        <Left>
          <Button onPress={Actions.pop} transparent>
            <Icon
              type={'MaterialIcons'}
              name='keyboard-backspace'
              style={[
                {fontSize: 30},
                Style.text__white,
              ]}/>
          </Button>
        </Left>
        <Body/>
        <Right/>
      </Header>
      <Datepicker
        onSelect={({checkIn, checkOut}) => {
          ChangeSearchData({checkIn: checkIn, checkOut: checkOut});
          Actions.pop();
        }}
        today={today}
        format={'DD-MM-YYYY'}
        {...datepicker}
      />
    </Container>
  );

};

export default connector(SelectDataPage);
