import React, {Component} from 'react';
import {Props, State} from './search-page.types';

import SearchFrom from '../../Forms/SearchForm/SearchFrom';

class SearchPage extends Component<Props, State> {
    render() {
        return (
            <SearchFrom/>
        );
    }
}

export default SearchPage;
