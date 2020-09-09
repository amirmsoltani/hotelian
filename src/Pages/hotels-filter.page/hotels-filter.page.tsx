import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {Content} from 'native-base';
import {RootStateInterface} from '../../Typescript';
import {GetHotels} from '../../Store/Actions';
import {replace} from 'connected-react-router';


const mapStateToProps = ({hotelsReducer: {filter}}: RootStateInterface) => ({
  filters: filter?.active,
});

const mapDispatchToProps = {
  GetHotels,
  replace,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

class HotelListPage extends Component<Props, {end: boolean, scroll: boolean}> {


  render() {
    const {filters} = this.props;
    return (
      <>
        <StatusBar animated={true} hidden={true}/>
        <Content>

        </Content>
      </>
    );
  }
}


export default connector(HotelListPage);
