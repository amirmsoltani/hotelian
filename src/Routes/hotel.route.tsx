import React from 'react';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {HotelsFilterPage, HotelListPage, HotelsMapPage} from '../Pages';
import {match} from 'react-router-native';
import {Image, TouchableOpacity} from 'react-native';
import {Container, Footer, Icon} from 'native-base';

const HotelRoute = (props: {match: match}) => {
  return (
    <Container>
      <Router>
        <Stack key='root'>
          <Scene key='hotels' component={HotelListPage} hideNavBar initial/>
          <Scene key='filter' component={HotelsFilterPage} hideNavBar/>
          <Scene key='map' component={HotelsMapPage} hideNavBar/>
        </Stack>
      </Router>
    </Container>
  );
};

export default HotelRoute;
