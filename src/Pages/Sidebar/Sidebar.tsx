import React, {Component} from 'react';
import {View} from 'react-native';
import {Route} from 'react-router-native';
import SearchDestination from './SearchDestination/SearchDestination';
import SearchNationality from './SearchNationality/SearchNationality';
import SearchSelectDate from './SearchDate/SearchSelectDate';
import style from './sidebarStyles';

class Sidebar extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.header}></View>
        <Route path="/sidebar/selectDestination" component={SearchDestination}/>
        <Route path="/sidebar/searchNationality" component={SearchNationality}/>
        <Route path="/sidebar/searchSelectDate" component={SearchSelectDate}/>
      </View>
    );
  }
}

export default Sidebar;
