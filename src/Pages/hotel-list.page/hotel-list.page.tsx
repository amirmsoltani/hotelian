import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Card, Content} from 'native-base';
import {HotelCard} from '../../Components';
import {RootStateInterface} from '../../Typescript';
import {GetHotels} from '../../Store/Actions';
import {replace} from 'connected-react-router';

const mapStateToProps = ({hotelsReducer: {basicData, status, filter}, searchReducer: {search_id}}: RootStateInterface) => ({
  hotels: basicData?.hotels,
  indexes: filter?.hotels,
  status: status,
  facilities: basicData?.facilities,
  search_id,
  hotels_search_id: basicData?.search_id,
});

const mapDispatchToProps = {
  GetHotels, replace(pathname: string) {
    replace({pathname});
  },
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

class HotelListPage extends Component<Props> {
  componentDidMount() {
    const {search_id, hotels_search_id, GetHotels, status, replace} = this.props;
    if (status === null && search_id === undefined && hotels_search_id === undefined) {
      console.log(status, search_id, hotels_search_id);
    }
    // replace('/');
    else if (status === null && search_id)
      GetHotels(search_id);


  }

  render() {
    const {hotels, status} = this.props;
    return (
      <Content>
        <Card>
          {status === 'ok' ?
            <HotelCard hotel={hotels![0]}/>
            :
            <></>
          }
        </Card>
      </Content>
    );
  }
}


export default connector(HotelListPage);
