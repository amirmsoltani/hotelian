import React, {Component, PureComponent} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {Body, Button, Footer, H1, Header, Icon, Spinner} from 'native-base';
import {HotelInterface, RootStateInterface} from '../../Typescript';
import {replace, push, goBack} from 'connected-react-router';
import {GetHotel} from 'Store/Actions';
import {StackScreenProps} from '@react-navigation/stack';
import {Conditional, If, ElIf, Else} from 'Components';
import {Style} from 'Styles';
import {useParams} from 'react-router-native';
import {ImageType} from 'Typescript';
import {translate} from 'Lib/Languages';

const mapStateToProps = ({hotelsReducer: {basicData}, searchReducer: {search_id}, hotelReducer: {hotel: {status, result}}, router}: RootStateInterface) => ({
  search_id,
  status,
  result,
  hotels: basicData?.hotels,
  router,
});

const mapDispatchToProps = {
  GetHotel,
  replace,
  push,
  goBack,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props =
  ConnectedProps<typeof connector>
  & StackScreenProps<{hotel: {id: string, name: string, checkIn?: string, checkOut?: string}}, 'hotel'>;

class HotelListPage extends PureComponent<Props> {
  id?: string;

  constructor(props: Props) {
    super(props);
    this.Ok = this.Ok.bind(this);
    this.Header = this.Header.bind(this);
    this.Loading = this.Loading.bind(this);
  }

  componentDidMount() {
    const {result} = this.props;
    if (this.props.status === undefined || (result && result.hotel.id !== +this.id!))
      this.props.GetHotel(+this.id!);
  }

  Header() {
    const {name, checkOut, checkIn, id} = useParams();
    this.id = id;
    return (<Header>
      <Button onPress={this.props.goBack}>
        <Text>
          back
        </Text>
      </Button>
      <Text>{checkIn}</Text>
      <Text>{checkOut}</Text>
      <Text>{name}</Text>
    </Header>);
  }

  bookIt(id: number) {
    this.props.push(`/passengers/${id}`);
  }

  Ok() {
    const {hotel, nsg_images, nsg_descriptions, nsg_facilities} = this.props.result!;
    return (
      <ScrollView>
        <View style={[Style.bg__info, Style.w__100]}>
          <View>
            {
              [...(new Array(+hotel.star)).keys()].map((name) => <Icon key={name} type={'Entypo'} name='star'/>)
            }
          </View>
          <H1>{hotel.name}</H1>
          <Icon name='location' type={'Entypo'}/>
          <Text>{hotel.location}</Text>
          <Text>
            {nsg_descriptions.replace(/\&lt\;br(\s|'')\/\&gt\;/g, '\n')}
          </Text>
        </View>
        <Image source={{uri: hotel.image}} style={[Style.w__100, {height: 300}]}/>
        {/*  TODO add Carousel after create component*/}
        {
          Object.values(nsg_facilities).map(item => (
            <View key={item.name}>

              <H1 style={[Style.w__100]}>{item.name}</H1>
              {
                item.values.map(data => <Text key={data}>{data}</Text>)
              }
            </View>
          ))
        }
      </ScrollView>
    );
  }

  Loading() {
    return (
      <Spinner style={[Style.mb__auto, Style.mt__auto, Style.ml__auto, Style.mr__auto]}/>
    );
  }


  render() {
    const status = this.props.status;
    return (
      <>
        <this.Header/>
        <Body style={[Style.w__100]}>
          <Conditional>
            <If condition={status === 'ok'}>
              <this.Ok/>
            </If>
            <Else>
              <this.Loading/>
            </Else>
          </Conditional>
        </Body>
        <Footer>
          <TouchableOpacity>
            <Text>{translate('show-rooms')}</Text>
          </TouchableOpacity>
        </Footer>
      </>
    );
  }
}


export default connector(HotelListPage);
