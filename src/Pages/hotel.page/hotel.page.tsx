import {View} from 'react-native';
import React, {PureComponent} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {Menu, MenuOption, MenuOptions, MenuTrigger} from 'react-native-popup-menu';
import {Body, Button, Content, Footer, Header, Icon, Left, Right, Toast} from 'native-base';

import {Style} from 'Styles';
import {GetHotel} from 'Store/Actions';
import {RootStateInterface} from 'Typescript';
import {translate as t} from 'Lib/Languages';
import {COLOR_MUTED, COLOR_WHITE} from '../../../native-base-theme/variables/config';
import {AppModal, AppSubtitle, AppText, AppTitle, BackNavigation} from 'Containers';
import {Conditional, ElIf, ExpireTimer, HotelFacilities, HotelImages, If, ScreenLoading, ShareModal} from 'Components';
import ReviewSection from './review-section/review-section';

const mapStateToProps = (
  {
    hotelsReducer: {basicData},
    searchReducer: {search_id, expire},
    hotelReducer: {hotel: {status, result}},

  }: RootStateInterface) => (
  {
    search_id,
    status,
    result,
    expire,
    hotels: basicData?.hotels,
  });
const mapDispatchToProps = {GetHotel};
const connector = connect(mapStateToProps, mapDispatchToProps);
const styles = {container: [Style.mb__1, Style.bg__white, Style.py__2]};


type Props =
  ConnectedProps<typeof connector> &
  StackScreenProps<{ hotel: { id: string, name: string, checkin?: string, checkout?: string }, 'select-room': any }, 'hotel'>;

class HotelListPage extends PureComponent<Props, { isLiked: boolean, shareModal: boolean }> {
  id?: string;
  hasSearchID: boolean;
  state = {
    isLiked: false,
    shareModal: false,
  };


  //=======================================
  // Hooks
  //=======================================
  constructor(props: Props) {
    super(props);
    this.hasSearchID = false;
    this.Header = this.Header.bind(this);
    this.HotelDetails = this.HotelDetails.bind(this);
    this.HotelDescription = this.HotelDescription.bind(this);
  }

  componentDidMount() {
    const {result} = this.props;
    if (this.props.status === undefined || (result && result.hotel.id !== +this.id!)) {
      this.props.GetHotel(+this.id!);
    }
  }

  render() {
    const status = this.props.status;
    const {checkin, checkout, id} = this.props.route.params;
    this.id = id;
    this.hasSearchID = !!checkin && !!checkout;
    return (
      <>
        {/*header*/}
        <this.Header/>

        {/*content*/}
        <Content style={[Style.w__100]}>
          <Conditional>
            <If condition={status === 'loading'}><ScreenLoading/></If>
            <ElIf condition={status === 'ok'}>

              {/*hotel images*/}
              <HotelImages image={this.props.result?.nsg_images.map(item => item.original)}/>

              {/*hotel details*/}
              <this.HotelDetails/>

              {/*hotel description*/}
              <this.HotelDescription/>

              {/*hotel facilities*/}
              {Object.values(this.props.result?.nsg_facilities ?? []).map((item, index) =>
                <HotelFacilities key={item.name + index} name={item.name} values={item.values}/>)}

              {/*reviews*/}
              <ReviewSection/>

            </ElIf>
            <ElIf condition={status === 'error'}>
              <AppText>Some thing went wrong</AppText>
            </ElIf>
          </Conditional>
        </Content>

        {/*share modal*/}
        <AppModal
          visibility={this.state.shareModal}
          position={'bottom'} animation={'slide'}
          onClose={this.onHideShare} backdrop>
          <ShareModal/>
        </AppModal>

        {/*footer*/}
        <Conditional>
          <If condition={this.hasSearchID}>
            <Footer style={[Style.bg__white, Style.flex__row]}>
              <View style={[Style.flex__grow__1, Style.p__1]}>
                <Button onPress={() => this.props.navigation.navigate('select-room')}
                        block style={[Style.bg__primary]}>
                  <AppText style={[Style.text__white, Style.text__bold]}>
                    {t('select-room')}</AppText>
                </Button>
              </View>
              {this.props.expire !== undefined ?
                <View style={[Style.flex__shrink__0, Style.flex__grow__0, Style.justify__content_center,
                  Style.align__items_center, {width: 90}]}>
                  <ExpireTimer
                    styles={[Style.pr__2, Style.f__18, Style.text__primary]}
                    start_time={this.props.expire!}/>
                </View> : null}
            </Footer>
          </If>
        </Conditional>

      </>
    );
  }


  //=======================================
  // Sections
  //=======================================
  Header() {

    return (
      <Header style={[Style.bg__primary]}>
        <Left><BackNavigation/></Left>
        <Body>
          <AppTitle hasSubtitle={this.hasSearchID}>{this.props.route.params.name}</AppTitle>
          <Conditional>
            <If condition={this.hasSearchID}>
              <AppSubtitle>{`${this.props.route.params.checkin} - ${this.props.route.params.checkout}`}</AppSubtitle>
            </If>
          </Conditional>
        </Body>
        <Right>
          <Button onPress={() => this.onLike()}
                  style={[Style.justify__content_end]} transparent>
            <Icon type="Ionicons" name={this.state.isLiked ? 'heart' : 'heart-outline'}
                  style={[Style.f__20, Style.text__right, Style.text__white]}/>
          </Button>
          <Button onPress={this.onShare}
                  style={[Style.justify__content_end]} transparent>
            <Icon type="Ionicons" name={'share-social-outline'}
                  style={[Style.f__20, Style.text__right, Style.text__white]}/>
          </Button>
          <Button style={[Style.justify__content_end, Style.pr__0]} transparent>
            <Menu style={[Style.justify__content_center]}>
              <MenuTrigger>
                <Icon type="Ionicons" name="ellipsis-vertical" style={[Style.f__20, Style.text__right]}/>
              </MenuTrigger>
              <MenuOptions>
                <MenuOption style={[Style.p__2]}>
                  <AppText style={Style.text__black}>{t('wish-list')}</AppText>
                </MenuOption>
                <MenuOption style={[Style.p__2]}>
                  <AppText style={Style.text__black}>{t('change-currency')}</AppText>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </Button>
        </Right>
      </Header>
    );
  }

  HotelDetails() {
    const {hotel} = this.props.result!;
    return <View style={styles.container}>

      {/*name*/}
      <View style={[Style.px__3]}>
        <AppText style={[Style.text__bold, Style.f__14]}>{hotel.name}</AppText>
      </View>

      {/*star*/}
      <View style={[Style.px__3, Style.flex__row, Style.mb__2]}>
        {[...(new Array(hotel.star).keys())].map(index =>
          <Icon type={'AntDesign'} name="star" key={'star-' + index} style={[Style.f__10, Style.text__warning]}/>)}
      </View>

      {/*location and address*/}
      <View style={[Style.px__3, Style.mb__1]}>
        <View style={[Style.flex__row, Style.align__items_center]}>
          <Icon type="SimpleLineIcons" name="location-pin"
                style={[Style.text__black, Style.ml__0, Style.mr__1, Style.f__12]}/>
          <AppText style={[Style.f__12]}>{hotel.location}</AppText>
        </View>
        <View style={[Style.mb__1]}>
          <AppText style={[Style.f__10, Style.text__wrap, Style.text__gray_d_X]}>{hotel.address}</AppText>
        </View>
      </View>

    </View>;
  }

  HotelDescription() {
    const descriptions = this.props.result?.nsg_descriptions;
    return descriptions ? <View style={[styles.container, Style.px__3]}>
      <View style={[Style.flex__row, Style.align__items_center, Style.mb__2]}>
        <Icon style={[Style.f__16, Style.mr__1]}
              name="md-information-circle-outline" type="Ionicons"/>
        <AppText style={[Style.text__bold, Style.f__14, Style.text__capitalize]}>
          {t('hotel-description')}</AppText>
      </View>
      <AppText style={[Style.f__12]}>
        {descriptions.replace(/&lt;br(\s|'')\/&gt;/g, '\n')}
      </AppText>
    </View> : null;
  }


  //=======================================
  // Handlers
  //=======================================

  onLike() {
    this.setState({isLiked: !this.state.isLiked}, () => {
      Toast.show({
        text: `${this.state.isLiked ? 'Saved' : 'Removed'} successfully.`,
        duration: 3000,
        textStyle: {color: COLOR_WHITE},
        position: 'bottom',
      });
    });
  }

  onShare = () => {
    this.setState({shareModal: true});
  }

  onHideShare = () => {
    this.setState({shareModal: false});
  }

}

export default connector(HotelListPage);
