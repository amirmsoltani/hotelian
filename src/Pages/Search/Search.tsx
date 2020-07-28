import React, {Component} from 'react';
import { ScrollView} from 'react-native';
import {Props, State} from './Types';

import SearchFrom from '../../Forms/SearchForm/SearchFrom';

class Search extends Component<Props, State> {
  render() {
    return (
      <ScrollView>
        <SearchFrom/>
      </ScrollView>
    );
  }
}

export default Search;
