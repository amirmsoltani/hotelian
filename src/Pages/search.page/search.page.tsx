import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {Props, State} from './search-route.types';

import SearchFrom from '../../Forms/SearchForm/SearchFrom';

class SearchRoute extends Component<Props, State> {
  render() {
    return (
      <SafeAreaView>
        <SearchFrom/>
      </SafeAreaView>
    );
  }
}

export default SearchRoute;
