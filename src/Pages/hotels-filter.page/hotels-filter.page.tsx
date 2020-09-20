import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {Card, Content, Footer} from 'native-base';
import {RootStateInterface} from '../../Typescript';
import {ApplyHotelsFilters} from '../../Store/Actions';
import {Actions} from 'react-native-router-flux';
import {Conditional, HotelsFilters, If} from '../../Components';

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
type Props = ConnectedProps<typeof connector>;

class HotelsFilterPage extends Component<Props, {[key: string]: {indexes: number[], name: string}}> {
  static readonly filters = ['stars', 'boardTypes', 'locations', 'rangePrice'];
  change_filter: number;

  constructor(props: Props) {
    super(props);
    if (props.structure === undefined)
      Actions.replace('hotels');
    this.state = props.actives || {};
    this.setState = this.setState.bind(this);
    this.change_filter = this.props.change_filter;
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: any) {
    this.change_filter = prevProps.change_filter;
    if (this.state !== prevState)
      this.props.ApplyHotelsFilters(this.state, this.props.structure);
  }

  render() {
    const {numbers, structure} = this.props;
    return (
      <>

        {/*<StatusBar animated={true} hidden={true}/>*/}
        <Content>
          <Card>
            {Object.keys(structure).filter(name => HotelsFilterPage.filters.includes(name)).map(name =>
              // @ts-ignore
              <HotelsFilters structure={structure[name]} actives={this.state} length={numbers} name={name} key={name}
                             ChangeFilters={this.setState}/>)
            }
          </Card>
        </Content>
        <Conditional>
          <If
            condition={this.props.change_filter !== this.change_filter}>
            <Footer style={{backgroundColor: 'white'}}>
              <TouchableOpacity style={{
                width: '100%',
                backgroundColor: 'rgba(30,40,50,.6)',
                alignItems: 'center',
                justifyContent: 'center',
              }}
                                onPress={() => Actions.jump('hotels')}
              >
                <Text>
                  Apply
                </Text>
              </TouchableOpacity>
            </Footer>
          </If>
        </Conditional>
      </>
    );
  }
}


export default connector(HotelsFilterPage);
