import React, {Component} from 'react';
import {Card, Content} from 'native-base';
import {HotelCard} from '../../Components';

class SearchPage extends Component {
  render() {
    return (
      <Content>
        <Card>
          {
            <HotelCard/>
          }
        </Card>
      </Content>
    );
  }
}

export default SearchPage;
