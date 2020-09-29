import React, {PureComponent} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {HotelInterface, RootStateInterface} from 'Typescript/Interfaces';
import {useParams} from 'react-router-native';
import {Body, Header, Spinner} from 'native-base';
import {AppText} from 'Containers';
import {VirtualizedList} from 'react-native';
import {Conditional, If, Else, HotelCard} from '../../Components';

const mapStateToProps = ({hotelReducer: {rooms: {status, result}}, searchReducer: {search_id, ...search}}: RootStateInterface) => ({
  status,
  result,
  search_status: search.status,
  search_id,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

class HotelRoomsPage extends PureComponent<Props> {
  id?: string;

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {

  }

  Header() {
    const {name, checkIn, checkOut, id} = useParams();
    this.id = id;
    return (
      <Header>
        <AppText>{name}</AppText>
        <AppText>{checkIn}</AppText>
        <AppText>{checkOut}</AppText>
      </Header>
    );
  }

  Ok() {
    return(
      <VirtualizedList<>
        data={indexes}
        initialNumToRender={10}
        getItem={(data, index) => hotels![indexes![index]]}
        getItemCount={() => indexes!.length}
        keyExtractor={item => item.hotel_id.toString()}
        ListFooterComponent={this.state.end ? <></> : <Spinner color={'blue'}/>}
        onEndReached={() => this.setState({end: true})}
        renderItem={({item}) => {
          let facility = facilities![item.hotel_id] ? facilities![item.hotel_id]['Hotel Facilities'] : [];
          return <HotelCard
            hotel={item}
            currency={currency}
            nights={nights!}
            hotelFacilities={facility}
            book={this.bookIt}/>;
        }}/>
    )
  }

  render() {
    const {result, status} = this.props;
    return (
      <>
        <this.Header/>
        <Body>
          <Conditional>
            <If condition={status === 'ok'}>

            </If>
            <Else>

            </Else>
          </Conditional>

        </Body>
      </>
    );
  }
}

export default connector(HotelRoomsPage);
