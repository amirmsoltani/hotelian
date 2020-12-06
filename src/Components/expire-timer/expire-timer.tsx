import React, {Component} from 'react';
import {RnTextStyleProp} from 'native-base';
import {NativeEventEmitter} from 'react-native';

import {AppText} from '../../Containers';
import {Style} from '../../Styles';
import {Else, If} from '../conditional.component';
import {Conditional} from '../index';


type propsType = {
  start_time: number;
  styles?: RnTextStyleProp;
};

type statesType = {

  //-1 as invalid
  currentDuration: number;
};

class ExpireTimer extends Component<propsType, statesType> {

  //for clearing interval
  listener: any = null;
  emitter = new NativeEventEmitter();

  //=======================================
  // Hooks
  //=======================================
  constructor(props: propsType) {
    super(props);
    this.state = {
      currentDuration: this.props.start_time && Number.isInteger(this.props.start_time) ?
        Math.floor(this.props.start_time - (new Date().getTime() / 1000)) : -1,
    };
  }

  componentDidMount() {
    this.listener = this.emitter.addListener('sec', () => {
      const duration = this.state.currentDuration - 1;
      if (duration > 0) {
        this.setState({currentDuration: duration});
      } else if (duration === 0) {
        this.listener.remove();
        this.setState({currentDuration: 0});
      } else {
        this.listener.remove();
        this.setState({currentDuration: -1});
      }
    });
  }

  componentWillUnmount() {
    this.listener.remove();
  }


  render() {
    const seconds = Math.floor(this.state.currentDuration % 60);
    const minutes = Math.floor((this.state.currentDuration / 60) % 60);
    return (
      <Conditional>
        <If condition={seconds >= 0 && minutes >= 0}>
          <AppText style={[Style.f__14, Style.text__white, {letterSpacing: 2}, this.props.styles]}>
            {minutes >= 10 ? minutes : `0${minutes}`}:{seconds >= 10 ? seconds : `0${seconds}`}
          </AppText>
        </If>
        <Else>
          <AppText style={[Style.f__14, Style.text__white, {letterSpacing: 2}, this.props.styles]}
          >--:--</AppText>
        </Else>
      </Conditional>
    );
  }

}

export default ExpireTimer;
