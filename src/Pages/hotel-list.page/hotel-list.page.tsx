import React, {Component} from 'react';
import {SafeAreaView, StatusBar, Text, VirtualizedList} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {Body, Spinner} from 'native-base';
import {HotelCard} from '../../Components';
import {HotelInterface, RootStateInterface} from '../../Typescript';
import {GetHotels} from '../../Store/Actions';
import {replace, push} from 'connected-react-router';


const mapStateToProps = ({hotelsReducer: {basicData, status, filter}, searchReducer: {search_id}}: RootStateInterface) => ({
  hotels: basicData?.hotels,
  indexes: filter?.hotels,
  status: status,
  facilities: basicData?.facilities,
  search_id,
  hotels_search_id: basicData?.search_id,
});

const mapDispatchToProps = {
  GetHotels,
  replace,
  push,

};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

class HotelListPage extends Component<Props, {end: boolean, scroll: boolean}> {
  state = {end: false, scroll: false};
  timeOut: any | null = null;

  componentDidMount() {
    const {search_id, hotels_search_id, GetHotels, status, replace} = this.props;
    if (status === null && search_id === undefined && hotels_search_id === undefined)
      replace('/');
    else if (status === null && search_id)
      GetHotels(search_id);


  }

  bookIt(id: number) {
    this.props.push(`/hotel/${id}`);
  }


  render() {
    const {hotels, indexes, facilities, status} = this.props;
    return (
      <>
        <StatusBar animated={true} backgroundColor={'red'} hidden={false}/>
        <Body>
          <SafeAreaView>
            {status === 'ok' ?
              <VirtualizedList<HotelInterface>
                data={indexes}
                initialNumToRender={10}
                getItem={(data, index) => hotels![indexes![index]]}
                getItemCount={() => indexes!.length}
                keyExtractor={item => item.hotel_id.toString()}
                ListFooterComponent={this.state.end ? <></> : <Spinner color={'blue'}/>}
                onEndReached={() => {
                  this.setState({end: true});
                }}
                renderItem={({item}) => {
                  let facility = facilities![item.hotel_id] ? facilities![item.hotel_id]['Hotel Facilities'] : [];
                  return <HotelCard hotel={item}
                                    hotelFacilities={facility}
                                    book={this.bookIt}
                  />;
                }}

              />
              :
              <></>
            }

          </SafeAreaView>
        </Body>
      </>
    );
  }
}


export default connector(HotelListPage);
