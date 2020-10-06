import React from 'react';
import Datepicker from 'Components/DatePicker/Datepicker';
import {connect, ConnectedProps} from 'react-redux';
import {ChangeSearchData} from 'Store/Actions';
import {RootStateInterface} from 'Typescript';
import {Body, Container, Header, Left, Right} from 'native-base';
import {StackScreenProps} from '@react-navigation/stack';
import {Style} from '../../Styles';
import {BackNavigation} from "../../Containers";

const mapStateToProps = (state: RootStateInterface) => ({
  checkIn: state.searchReducer.form_data.checkIn?.value,
  checkOut: state.searchReducer.form_data.checkOut?.value,
  today: state.appReducer.today.unix,
});
const mapDispatchToProps = {ChangeSearchData};
const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & StackScreenProps<{}>;

const SelectDataPage = ({ChangeSearchData, checkIn, checkOut, today, navigation}: Props) => {
  const datepicker: { defaultValue?: { checkIn: string, checkOut: string } } = {};
  if (checkIn && checkOut)
    datepicker['defaultValue'] = {checkIn, checkOut};

  const onDone = ({checkIn, checkOut}: { checkIn: { value: string, formatted: string }, checkOut: { value: string, formatted: string } }) => {
    if (navigation.canGoBack()) {
      ChangeSearchData({checkIn: checkIn, checkOut: checkOut});
      navigation.goBack();
    }
  }

  return (
    <>
      <Header style={[Style.bg__primary]}>
        <Left><BackNavigation/></Left>
        <Body/>
        <Right/>
      </Header>
      <Datepicker
        onSelect={onDone}
        today={today}
        format={'DD-MM-YYYY'}
        {...datepicker}
      />
    </>
  );

};

export default connector(SelectDataPage);
