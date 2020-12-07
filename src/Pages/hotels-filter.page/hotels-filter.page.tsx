import React, {PureComponent} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {FlatList, ScrollView, TextInput, View} from 'react-native';
import {Body, Button, Header, Left, Right} from 'native-base';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStateInterface} from 'Typescript';
import {ApplyHotelsFilters} from 'Store/Actions';
import {Conditional, HotelsFilters, If} from 'Components';
import {Style} from 'Styles';
import style from '../search.page/search-page.styles';
import {AppText, AppTitle, BackNavigation} from 'Containers';
import {translate, translate as t} from 'Lib/Languages';
import {
  BORDER_RADIUS_SM,
  COLOR_PRIMARY,
  GRAY_LIGHT_XXX,
  SHADOW_LG_XX,
} from '../../../native-base-theme/variables/config';
import {ObjectLen, ObjectMapToArray} from 'Lib/ObjectTool';

const mapStateToProps = ({
                           hotelsReducer: {filter, basicData},
                         }: RootStateInterface) => ({
  structure: filter!.structure,
  actives: filter!.actives,
  len: filter!.hotels.length,
  hotels: basicData!.hotels,
});
const mapDispatchToProps = {
  ApplyHotelsFilters,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & StackScreenProps<any>;

class HotelsFilterPage extends PureComponent<Props, { text: string }> {
  static readonly filters = ['other', 'stars', 'boardTypes', 'locations', 'rangePrice'];
  //=======================================
  // Hooks
  //=======================================
  constructor(props: Props) {
    super(props);
    if (props.structure === undefined) {
      props.navigation.replace('hotels');
    }
    this.reset = this.reset.bind(this);
    this.getHotels = this.getHotels.bind(this);
    this.state = {text: props.actives?.search?.name as string || ''};
  }

  reset() {
    this.props.ApplyHotelsFilters({});
    this.setState({text: ''});
  }

  render() {
    const {structure, len} = this.props;
    const al = ObjectLen(this.props.actives);
    const activesArray =
      al > 1
        ? ObjectMapToArray(this.props.actives!, (key, value) => {
          if (value.name === 'sort') {
            return 'jump';
          }
          return {key: key, value: value};
        })
        : [];
    return (
      <>
        <Header style={[Style.bg__primary]}>
          <Left>
            <BackNavigation/>
          </Left>
          <Body>
            <AppTitle>{t('set-your-filters')}</AppTitle>
          </Body>
          <Right>
            <Conditional>
              <If condition={al > 1}>
                <Button transparent onPress={this.reset}>
                  <AppText style={[Style.text__white]}>{t('RESET')}</AppText>
                </Button>
              </If>
            </Conditional>
          </Right>
        </Header>

        <ScrollView style={[Style.bg__white]}>
          <View style={[style.wrapper, Style.mb__0]}>

            <View>
              <AppText style={[Style.text__bold, Style.f__14, Style.mb__1]} firstLetter>
                {translate('search-by-hotel-name')}</AppText>
              <TextInput
                style={{width: '100%', borderBottomColor: GRAY_LIGHT_XXX, borderBottomWidth: 1}}
                onChangeText={this.getHotels}
                value={this.state.text}
                placeholder={translate('enter-hotel-name')}/>
            </View>

            {ObjectMapToArray(structure, (key) => {
              if (!HotelsFilterPage.filters.includes(key as string)) {
                return 'jump';
              }
              return <HotelsFilters name={key} key={key}/>;
            })}
          </View>
        </ScrollView>

        <Conditional>
          <If condition={al > 1}>
            <View
              style={[
                Style.p__1,
                Style.bg__white,
                Style.flex__column,
                SHADOW_LG_XX,
              ]}
            >
              <FlatList
                data={activesArray}
                horizontal={true}
                keyExtractor={(item) => item.key.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <Button
                      transparent
                      style={[Style.pr__1]}
                      activeOpacity={1}
                      onPress={() => {
                        if (item.key === 'search') {
                          this.props.ApplyHotelsFilters({search: {name: '', indexes: []}});
                          this.setState({text: ''});
                          return;
                        }
                        this.props.ApplyHotelsFilters({
                          [item.key]: item.value,
                        });
                      }
                      }
                    >
                      <View
                        style={[
                          {
                            borderWidth: 0.5,
                            borderColor: COLOR_PRIMARY,
                            borderRadius: BORDER_RADIUS_SM,
                          },
                          Style.mr__1,
                          Style.p__1,
                          Style.bg__white,
                        ]}
                      >
                        <View
                          style={[Style.flex__row, Style.align__items_center]}
                        >
                          <AppText
                            style={[
                              Style.text__primary,
                              Style.mr__1,
                              Style.f__10,
                            ]}
                          >
                            {item.key}{' '}
                            {item.value.name === 'stars'
                              ? +item.key > 1
                                ? 'stars'
                                : 'star'
                              : ''}
                          </AppText>
                        </View>
                      </View>
                    </Button>
                  );
                }}
              />
              <Button
                block
                style={[Style.bg__primary, Style.w__100]}
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              >
                <AppText style={[Style.text__white, Style.text__bold]}>
                  {translate('show-results') + ` (${len})`}
                </AppText>
              </Button>
            </View>
          </If>
        </Conditional>
      </>
    );
  }

  getHotels(name: string): void {
    const hotels: number[] = [];
    this.props.hotels.forEach((hotel, index) => {
      if (hotel.name.toLowerCase().includes(name)) {
        hotels.push(index);
      }
    });
    this.setState({text: name});
    this.props.ApplyHotelsFilters({search: {name, indexes: hotels}});
  }
}

export default connector(HotelsFilterPage);
