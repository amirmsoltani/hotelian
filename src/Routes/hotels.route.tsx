import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import {match} from 'react-router-native';
import {Container} from 'native-base';

import {HotelListPage, HotelsFilterPage, HotelsMapPage} from '../Pages';
import {StatusBar} from "react-native";

const HotelsRoute = (props: { match: match }) => {
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

export default HotelsRoute;
