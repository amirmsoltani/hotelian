import React from 'react';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {SearchPage, SelectDatePage, SelectDestinationPage, SelectNationalityPage, CreateRoomPage} from '../Pages';
import {match} from 'react-router-native';
import {StatusBar} from 'react-native';
import {Body, Button, Container, Header, Icon, Left, Right, Title} from 'native-base';


const SearchRoute = (props: {match: match}) => {
  return (
    <Container>
      <StatusBar hidden={true}/>
      <Header>
        <Left/>

        <Body>
          <Title> Select Nationality</Title>
        </Body>
        <Right>
          <Button transparent onPress={Actions.pop}>
            <Icon type={'AntDesign'} name='arrowright'/>
          </Button>
        </Right>
      </Header>
      <Router>
        <Stack key='root'>
          {
            props.match.path === '/' ? <Scene key='from' component={SearchPage} hideNavBar initial/> : ''
          }
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
