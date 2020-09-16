import React, {Component} from 'react';
import {Props, State} from './search-page.types';

import SearchFrom from '../../Forms/SearchForm/SearchFrom';
import {Content} from 'native-base';

class SearchPage extends Component<Props, State> {
  render() {
    return (
      <Content>
        <SearchFrom/>
      </Content>
    );
  }
}

export default SearchPage;
