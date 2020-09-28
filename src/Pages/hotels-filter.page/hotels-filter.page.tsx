import React, {PureComponent} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Body, Button, Footer, Header, Icon, Left, Right, Title} from 'native-base';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStateInterface} from 'Typescript';
import {ApplyHotelsFilters} from 'Store/Actions';
import {Conditional, HotelsFilters, If} from 'Components';
import {Style} from 'Styles';
import style from '../search.page/search-page.styles';
import {SHADOW_LG_XX} from '../../../native-base-theme/variables/config';
import {AppText} from 'Containers';

const mapStateToProps = ({hotelsReducer: {filter, change_filter}}: RootStateInterface) => ({
  structure: filter!.structure,
  numbers: filter!.numbers,
  actives: filter!.actives,
  change_filter: change_filter,
});

const mapDispatchToProps = {
  ApplyHotelsFilters,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & StackScreenProps<any>;

class HotelsFilterPage extends PureComponent<Props, {filters: {[key: string]: {indexes: number[], name: string}}}> {
  static readonly filters = ['stars', 'boardTypes', 'locations', 'rangePrice'];
  change_filter: number;

  constructor(props: Props) {
    super(props);
    if (props.structure === undefined)
      props.navigation.replace('hotels');
    this.state = {filters: props.actives || {}};
    this.reset = this.reset.bind(this);
    this.setstate = this.setstate.bind(this);
    this.change_filter = this.props.change_filter;
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: any) {
    this.change_filter = prevProps.change_filter;
    if (this.state !== prevState)
      this.props.ApplyHotelsFilters(this.state.filters, this.props.structure);
  }

  reset() {
    this.setState({filters: {}});
  }

  setstate(filters: {[key: string]: {indexes: number[], name: string}}) {
    this.setState({filters: {...this.state.filters, ...filters}});
  }

  render() {
    const {numbers, structure} = this.props;
    const canReset = Object.keys(this.state.filters).length > 0;
    return (
      <>
        <Header style={[Style.bg__primary]}>
          <Left>
            <Button transparent>
              <Icon type={'MaterialIcons'} name='keyboard-backspace'
                    style={[Style.f__30, Style.text__white]}/>
            </Button>
          </Left>
          <Body><Title>Set your filters</Title></Body>
          <Right>
            <Conditional>
              <If condition={canReset}>
                <Button transparent onPress={this.reset}>
                  <AppText style={[Style.text__white]}>RESET</AppText>
                </Button>
              </If>
            </Conditional>
          </Right>
        </Header>
        <ScrollView style={[Style.bg__white]}>
          <View style={[style.wrapper, Style.mb__0]}>

            {Object.keys(structure).filter(name => HotelsFilterPage.filters.includes(name)).map(name =>
              <HotelsFilters
                // @ts-ignore
                structure={structure[name]} actives={this.state.filters} length={numbers} name={name}
                key={name} ChangeFilters={this.setstate}/>)
            }
          </View>
        </ScrollView>
        <Footer style={[SHADOW_LG_XX]}>
          <Conditional>
            <If
              condition={this.props.change_filter !== this.change_filter}>
              <Footer style={{backgroundColor: 'white'}}>
                <TouchableOpacity
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(30,40,50,.6)',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => this.props.navigation.navigate('hotels')}>
                  <Text>Apply</Text>
                </TouchableOpacity>
              </Footer>
            </If>
          </Conditional>
          <AppText>Footer goes here !!!</AppText>
        </Footer>
      </>
    );
  }
}


export default connector(HotelsFilterPage);
