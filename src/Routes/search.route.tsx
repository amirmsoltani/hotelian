import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import {match} from 'react-router-native';
import {StatusBar} from 'react-native';
import {Container} from 'native-base';

import {CreateRoomPage, SearchPage, SelectDatePage, SelectDestinationPage, SelectNationalityPage} from '../Pages';


const SearchRoute = (props: { match: match }) => {
  return (
    <Container>
      <StatusBar hidden={true}/>
      <Router>
        <Stack key='root'>
          {props.match.path === '/' ? <Scene key='from' component={SearchPage} hideNavBar initial/> : ''}
          <Scene key='destination' component={SelectDestinationPage} hideNavBar back/>
          <Scene key='datepicker' component={SelectDatePage} hideNavBar back/>
          <Scene key='nationality' component={SelectNationalityPage} hideNavBar back/>
          <Scene key='rooms' component={CreateRoomPage} hideNavBar back/>
        </Stack>
      </Router>
    </Container>
  );
};

export default SearchRoute;
